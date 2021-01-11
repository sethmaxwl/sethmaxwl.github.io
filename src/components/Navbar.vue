<template lang='pug'>
  div
    v-app-bar#navbar(:flat='true', :color='"#1d1d1d"',
      fixed='', flat='', dark='')
      v-btn#navbar-icon(depressed='', color='#1d1d1d',
        aria-label='navbar menu toggle', @click.stop='toggleDrawer()')
        v-icon.white--text mdi-menu
    v-navigation-drawer#drawer(v-model='drawer',
      temporary='', app='', fixed='', dark='')
      v-list(nav='')
        v-list-item#navbar-profile.ma-auto(two-line='')
          v-list-item-content
            v-img(src='@/assets/profile.svg', lazy-src='@/assets/profile.svg')
        v-list-item-title.text-center Seth Maxwell
        v-divider
        template(v-for='item in links')
          v-list-item(@click='redirect(item.link); toggleDrawer()')
            v-list-item-icon
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.title }}
</template>

<script>
import {utility} from '@/mixins/utility';

export default {
  name: 'Navbar',
  mixins: [utility],
  data() {
    return {
      drawer: false,
      links: [
        {
          link: '/',
          icon: 'mdi-home',
          title: 'Home',
        },
        {
          link: '/experience',
          icon: 'mdi-briefcase',
          title: 'Experience',
        },
        {
          link: '/projects',
          icon: 'mdi-folder-multiple',
          title: 'Projects',
        },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="scss">
#navbar {
  height: 64px !important;
  .v-toolbar__content {
    height: 64px !important;
    padding: 0 !important
  }
}
#navbar-icon {
  height: 100%;
  margin-left: 0 !important;
  border-radius: 0 !important;
}
#navbar-profile {
  width: 125px;
}
</style>
