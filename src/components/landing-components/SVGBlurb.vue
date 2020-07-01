<template lang="pug">
  v-row
    v-col
      v-img.ma-auto(:src='require(`../../assets/${svg}.svg`)',
        :max-width='svgSize', :lazy-src='require(`../../assets/${svg}.svg`)')
    v-col
      p.subheader.text-center {{ title }}
      p.body.text-center {{ content }}
</template>

<script>
export default {
  name: 'SVGBlurb',
  props: {
    svg: {
      type: String,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  data() {
    return {
      svgSize: 225,
    };
  },
};
</script>
