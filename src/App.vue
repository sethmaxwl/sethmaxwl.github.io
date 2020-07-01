<template lang='pug'>
  v-app#app
    Navbar
    router-view.view
    Footer
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  watch: {
    '$route'() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style>
#app {
  font-family: 'IBM Plex Sans Condensed', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1d1d1d;
}
.view {
  margin-top: 63px;
}
</style>
