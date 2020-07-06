<template lang='pug'>
  #landing
    Splash
    main
      About
</template>

<script>
import Splash from '@/components/landing-components/Splash';
import About from '@/components/landing-components/About';
export default {
  name: 'Landing',
  components: {
    Splash,
    About,
  },
};
</script>
