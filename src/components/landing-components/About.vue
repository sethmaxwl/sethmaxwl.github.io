<template lang='pug'>
#about
  v-card#landing-about(outlined='', color='#fbf7f5')
    v-container
      v-img.ma-auto.mt-5.section-profile(src='@/assets/profile.svg',
        lazy-src='@/assets/profile.svg')
      v-spacer
      p.header.text-center Hello There!
      p.body.text-center {{ bio }}
      v-divider.mt-9
      v-img.ma-auto.mt-8.section-profile(src='@/assets/workflow.svg',
        lazy-src='@/assets/profile.svg')
      p.header.text-center Workflow
      template(v-for='(entry, index) in workflowSections')
        SVGBlurb(:svg='entry.svg', :title='entry.title',
          :content='entry.content',
          v-bind:class="{ 'pb-15': index !== workflowSections.length - 1}")
      v-divider.mt-9
      p.header.text-center Learn More About Me
      v-row(align='center')
        v-btn.ml-auto.mr-3(color='primary',
          @click='redirect("/experience")') Experience
        v-btn.mr-auto.ml-3(color='primary',
          @click='redirect("/projects")') Projects
</template>

<script>
import router from '@/router';

import SVGBlurb from '@/components/landing-components/SVGBlurb';

export default {
  name: 'About',
  components: {
    SVGBlurb,
  },
  data() {
    return {
      workflowSections: [
        {
          svg: 'mobile-first',
          title: 'Mobile-First, Responsive Design',
          content: `I optimize my designs for mobile devices first. My goal is
          to focus on delivering a pleasant mobile experience that scales to
          fit desktop environments as well.`,
        },
        {
          svg: 'browsers',
          title: 'Cross Browser Testing',
          content: `Compatibility across modern browsers is one of my largest
          priorities. I test applications across multiple browsers to ensure
          users from all environments will have the same pleasant experience.`,
        },
      ],
      bio: `I'm a computer science student at Purdue University. I have a
      passion for designing and creating web-based applications for desktop
      and mobile devices.`,
    };
  },
  methods: {
    redirect(route) {
      if (this.$route.fullPath !== route) {
        router.push(route);
      }
    },
  },
};
</script>

<style lang='scss'>
#landing-about {
  border-radius: 0 !important;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
