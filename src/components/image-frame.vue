<script setup>
    import { ref, useTemplateRef, watch, onMounted, onUnmounted, computed } from 'vue';
    import { useRouter } from 'vue-router';
    import { useMouse } from '../composables/mouse.js'
    import { useFullScreen } from '../composables/fullScreen.js';
    import FadeTransition from '../transitions/fade-transition.vue';
    import ZoomSlider from '../components/zoom-slider.vue';
    import GalleryButton from '../components/gallery-button.vue';

    const props = defineProps(['src', 'caption', 'nextUrl', 'prevUrl'])
    const scale = ref(0)
    const minScale = ref(0);
    const loaded = ref(false)
    const frame = useTemplateRef('frame');
    const image = useTemplateRef('image');
    const router = useRouter();
    const toggleFullScreen = useFullScreen(frame);
    const [ frameW, frameH ] = [ ref(0), ref(0) ]
    const [ centerX, centerY ] = [ ref(0), ref(0) ]
    const [ mousedownX, mousedownY ] = [ ref(0), ref(0) ]
    const [ touchstartX, touchstartY ] = [ ref(0), ref(0) ]
    const { mouseX, mouseY } = useMouse();
    const touchSeparation = ref(0)
    const dragging = ref(false)
    
    const imageTransform = computed(() => {
        return {
            transformOrigin: `${centerX.value}px ${centerY.value}px`,
            transform: `translate(${0.5 * frameW.value - centerX.value}px, ${0.5 * frameH.value - centerY.value}px) scale(${scale.value})`,
        }
    })

    const setCenter = (newX, newY) => {
        const inLeft = 0.5 * frameW.value < scale.value * newX;
        const inRight = 0.5 * frameW.value < scale.value * (image.value.naturalWidth - newX);
        const inTop = 0.5 * frameH.value < scale.value * newY;
        const inBottom = 0.5 * frameH.value < scale.value * (image.value.naturalHeight - newY);
        if (inLeft && inRight) {
            centerX.value = newX
        }
        else if (image.value.naturalWidth * scale.value < frameW.value) {
            // move to center if doesn't fill width
            centerX.value = 0.5 * image.value.naturalWidth
        }
        else if (!inLeft) {
            centerX.value = 0.5 * frameW.value / scale.value
        }
        else if (!inRight) {
            centerX.value = image.value.naturalWidth - (0.5 * frameW.value / scale.value)
        }

        if (inTop && inBottom) {
            centerY.value = newY
        }
        else if (image.value.naturalHeight * scale.value < frameH.value) {
            // move to top if doesn't fill height
            centerY.value = 0.5 * frameH.value /scale.value
        }
        else if (!inTop) {
            centerY.value = 0.5 * frameH.value / scale.value
        }
        else if (!inBottom) {
            centerY.value = image.value.naturalHeight - (0.5 * frameH.value / scale.value)
        }
    }

    const setScale = (newScale) => {
        if (newScale >= minScale.value && newScale <= 1) {
            scale.value = newScale
        }

        if (newScale > 1) {
            scale.value = 1;
        }
        else if (newScale < minScale.value) {
            scale.value = minScale.value;
        }
        else {
            scale.value = newScale;
        }
    }

    const initialScale = () => {
        if (!image.value) {
            return;
        }
        const val = Math.min(
            frameW.value / image.value.naturalWidth, 
            frameH.value / image.value.naturalHeight
        )    
        scale.value = val
        minScale.value = val
    }

    const handleImageLoad = () => {
        initialScale()
        loaded.value = true;
    }

    const handleStartDrag = () => {
        dragging.value = true;
        mousedownX.value = mouseX.value
        mousedownY.value = mouseY.value
    }

    const handleDrag = () => {
        if (dragging.value) {
            setCenter(
                centerX.value - (mouseX.value - mousedownX.value) / scale.value, 
                centerY.value - (mouseY.value - mousedownY.value) / scale.value
            )
            mousedownX.value = mouseX.value
            mousedownY.value = mouseY.value
        }
    }

    const handleStopDrag = () => {
        dragging.value = false;
    }

    const handleKey = (e) => {
        const inc = 10 / scale.value;
        let newX = centerX.value;
        let newY = centerY.value;
        switch(e.key){
            case 'ArrowUp': newY -= inc; break;
            case 'ArrowDown': newY += inc; break;
            case 'ArrowLeft': newX -= inc; break;
            case 'ArrowRight': newX += inc; break;
            default: break;
        }
        setCenter(newX, newY);
    }

    const handleWheel = (e) => {
        setScale(scale.value - 0.0005 * e.deltaY);
    }

    const handleTouchstart = (e) => {
        if (e.touches.length == 1) {
            touchstartX.value = e.touches[0].pageX;
            touchstartY.value = e.touches[0].pageY;
        }
        else {
            touchstartX.value = (e.touches[0].pageX + e.touches[1].pageX) / 2;
            touchstartY.value = (e.touches[0].pageY + e.touches[1].pageY) / 2;
            touchSeparation.value = ((e.touches[0].pageX - e.touches[1].pageX) ** 2 + (e.touches[0].pageY - e.touches[1].pageY) ** 2) ** 0.5; 
        }
    }

    
    const handleTouchmove = (e) => {
        let newTouchX = 0;
        let newTouchY = 0;
        let newSeparation;
        if (e.touches.length == 1) {
            newTouchX = e.touches[0].pageX;
            newTouchY = e.touches[0].pageY;
        }
        else {
            newTouchX = (e.touches[0].pageX + e.touches[1].pageX) / 2;
            newTouchY = (e.touches[0].pageY + e.touches[1].pageY) / 2;
            newSeparation = ((e.touches[0].pageX - e.touches[1].pageX) ** 2 + (e.touches[0].pageY - e.touches[1].pageY) ** 2) ** 0.5; 
            setScale(scale.value * newSeparation / touchSeparation.value)
            touchSeparation.value = newSeparation;
        }

        setCenter(
            centerX.value + (touchstartX.value - newTouchX) / scale.value,
            centerY.value + (touchstartY.value - newTouchY) / scale.value
        )

        touchstartX.value = newTouchX;
        touchstartY.value = newTouchY;
    }

    const handleTouchend = (e) => {
        if (e.touches.length == 0) {
            return;
        }
        touchstartX.value = e.touches[0].pageX;
        touchstartY.value = e.touches[0].pageY;
    }

    const handleClickFullScreen = () => {
        toggleFullScreen();
        setFrameSize();
        setScale(scale.value);
    }

    const setFrameSize = () => {
        frameW.value = frame.value.getBoundingClientRect().width;
        frameH.value = frame.value.getBoundingClientRect().height;
        setCenter(centerX.value, centerY.value)
    }

    onMounted(() => {
        window.addEventListener('keydown', handleKey)
        window.addEventListener('resize', setFrameSize)
        setFrameSize();
    })

    onUnmounted(() => {
        window.removeEventListener('keydown', handleKey)
        window.removeEventListener('resize', setFrameSize)
    })

    watch(scale, () => {
        setCenter(centerX.value, centerY.value)
    })
</script>

<template>
    <div style="padding: 12px 12px; border: 0px 12px transparent; margin: 0px auto; width: calc(100% - 24px); max-width:1000px; background-color: white;">
        <div>{{ caption }}</div>
        <div style="display: flex; align-items: center;">
            <GalleryButton 
                v-if="props.prevUrl"
                @click="() => {router.push(props.prevUrl)}" 
                icon="chevron_left" 
            />
            <GalleryButton 
                @click="() => {router.push('./')}" 
                icon="expand_less" 
            />
            <GalleryButton 
                v-if="props.nextUrl"
                @click="() => {router.push(props.nextUrl)}" 
                icon="chevron_right" 
                />
            <GalleryButton @click="handleClickFullScreen" icon="fullscreen" />
            <ZoomSlider v-model="scale" :minScale="minScale" style="margin-left: 6px"/>
        </div>
        <div 
            ref="frame"
            class="frame" 
            @mousedown="handleStartDrag"
            @mousemove="handleDrag" 
            @mouseup="handleStopDrag"
            @mouseleave="handleStopDrag"
            @wheel.prevent="handleWheel"
            @touchstart="handleTouchstart"
            @touchmove.prevent="handleTouchmove"
            @touchend.prevent="handleTouchend"
        >
            <FadeTransition>
                <div v-show="!loaded" class="loader"></div>
            </FadeTransition>
            <FadeTransition>
                <img 
                    v-show="loaded"
                    draggable="false"
                    :src="src" 
                    ref="image"
                    @load="handleImageLoad"
                    class="image"
                    :style="imageTransform"
                />
            </FadeTransition>

        </div>
        <div ref="test" ></div>
    </div>

</template>

<style scoped>
    .frame {
        width: 100%;
        height: 900px;
        overflow: hidden;
        cursor: v-bind("dragging ? 'grabbing' : 'grab'");
        margin-top: 12px;
    }
    .image {
        position: relative;
        user-select: none;
        transition-property: opacity; /*prevents image jumping into view*/
    }

    .loader {
        border: 8px solid var(--grey);
        border-top: 8px solid var(--darkGrey);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 5s linear infinite;
        position: absolute;
        left: calc(50% - 30px);
        top: calc(50% - 30px);
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>