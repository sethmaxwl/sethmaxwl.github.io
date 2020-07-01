import router from '@/router'

export const utility = {
  methods: {
    redirect(route) {
      if (this.$route.fullPath !== route) {
        router.push(route)
      }
    }
  }
}