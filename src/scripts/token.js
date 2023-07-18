import { reactive } from 'vue'

export const auth = reactive({
  token: null,
  setToken(value) {
    this.token = value;
  }
})