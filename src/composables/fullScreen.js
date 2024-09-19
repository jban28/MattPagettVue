import { ref, useTemplateRef } from 'vue'

export function useFullScreen(el) {

    const enter = () => {
        if (el.value.requestFullScreen) {
            el.value.requestFullScreen();
        }
        else if (el.value.webkitRequestFullScreen){
            el.value.webkitRequestFullScreen();
        }
    }

    const exit = () => {
        isFullScreen.value = false;
        if (document.exitFullscreen) {
            document.exitFullscreen()
        }
        else if (document.webkitExitFullScreen) {
            document.webkitExitFullScreen()
        }
    }

    const toggle = () => {
        if (document.fullscreenElement) {
            exit();
        }
        else {
            enter();
        }
    }
    return toggle;
}