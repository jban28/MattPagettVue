import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
    const mouseX = ref(0)
    const mouseY = ref(0)

    function update(event) {
        mouseX.value = event.pageX
        mouseY.value = event.pageY
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    return { mouseX, mouseY }
}