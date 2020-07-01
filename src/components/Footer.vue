<template lang='pug'>
  v-card
    v-footer(padless='', dark='')
      v-card.text-center(flat='', tile='', width='100%',
        color='#1d1d1d', absolute='')
        v-card-text
          v-btn.mx-4(icon='', :href='"mailto:sethmaxwl@gmail.com"',
            aria-label='email')
            v-icon(size='24px') mdi-email
          v-btn.mx-4(icon='', :href='"https://www.linkedin.com/in/sethmaxwl/"', :target='"blank"', aria-label='LinkedIn')
            v-icon(size='24px') mdi-linkedin
          v-btn.mx-4(icon='', :href='"https://github.com/sethmaxwl/"',
            :target='"blank"', aria-label='GitHub')
            v-icon(size='24px') mdi-github
        v-divider
        v-card-text © {{ new Date().getFullYear() }}
          a.pl-1#copyright-link(href='https://sethmaxwl.com') Seth Maxwell
          | . All rights reserved.
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang='scss'>
  #copyright-link {
    color: hsla(0,0%,100%,.7) !important;
  }
</style>
