<script setup>
    import { ref, useTemplateRef, watch, onMounted, onUnmounted } from 'vue';
    import { useMouse } from '../composables/mouse.js'

    const props = defineProps(['src'])
    const scale = defineModel('scale');
    const minScale = defineModel('minScale');
    const frame = useTemplateRef('frame');
    const image = useTemplateRef('image');

    const [frameW, frameH] = [ ref(0), ref(0) ]
    const [ centerX, centerY ] = [ ref(0), ref(0) ]
    const { mouseX, mouseY } = useMouse()
    const [ mousedownX, mousedownY ] = [ ref(0), ref(0) ]
    const [ touchstartX, touchstartY ] = [ ref(0), ref(0) ]
    const touchSeparation = ref(0)
    const dragging = ref(false)
    
    const setCenter = (newX, newY) => {
        const inLeft = 0.5 * frameW.value < scale.value * newX;
        const inRight = 0.5 * frameW.value < scale.value * (image.value.naturalWidth - newX);
        const inTop = 0.5 * frameH.value < scale.value * newY;
        const inBottom = 0.5 * frameH.value < scale.value * (image.value.naturalHeight - newY);

        if (inLeft && inRight) {
            centerX.value = newX
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
    }

    const initialScale = () => {
        console.log(frameH.value)
        const val = Math.min(
            frameW.value / image.value.naturalWidth, 
            frameH.value / image.value.naturalHeight
        )    
        scale.value = val
        minScale.value = val
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
        setCenter(newX, newY)
    }

    const handleWheel = (e) => {
        setScale(scale.value - 0.0005 * e.deltaY)
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

    const setFrameSize = () => {
        frameW.value = frame.value.getBoundingClientRect().width;
        frameH.value = frame.value.getBoundingClientRect().height;
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
        <img 
            draggable="false"
            :src="src" 
            ref="image"
            @load="initialScale"
            class="image"
        />
    </div>
</template>

<style scoped>
    .frame {
        overflow: hidden;
        cursor: v-bind("dragging ? 'grabbing' : 'grab'")
    }
    .image {
        user-select: none;
        transform-origin: v-bind(centerX + 'px') v-bind(centerY + 'px');
        transform: translate(v-bind(0.5 * frameW - centerX + 'px'), v-bind(0.5 * frameH - centerY + 'px')) scale(v-bind(scale));
    }
</style>