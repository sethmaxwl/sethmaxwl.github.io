<template lang='pug'>
  v-container
    v-card(flat='')
      v-container
        template(v-if='project.link')
          v-card-title
            .card-subheader {{ project.name }}
            a.link-icon.ml-1(v-if='project.link', :href='project.link',
              target='blank', ref='noopener noreferrer')
              v-icon mdi-open-in-new
        template(v-else='')
          v-card-title.card-header {{ project.name }}
        v-card-text.card-description {{ project.description }}
        v-carousel.ma-auto(show-arrows-on-hover='', height='auto',
          hide-delimiter-background='', interval='10000', cycle='')
          v-carousel-item(v-for='(photo, i) in project.photos', :key='i')
            progressive-img(:src='photo', :placeholder='photo')
        v-row
          v-col.project-col
            v-card-text.card-subheader Features
            v-list(dense='')
              v-list-item(v-for='(feature, i) in project.features', :key='i')
                .card-description
                  v-icon mdi-arrow-right
                | {{ feature }}
          v-col.project-col
            v-card-text.card-subheader Technologies Used
            v-list(dense='')
              v-list-item(v-for='(lang, i) in project.technologies', :key='i')
                .card-description
                  v-icon mdi-arrow-right
                | {{ lang }}
</template>

<script>
export default {
  name: 'ProjectEntry',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss'>
  .project-col {
    min-width: 300px;
  }
  .link-icon {
    text-decoration: none;
  }
  .link-icon:hover {
    i {
      color: rgb(105, 151, 244);
    }
  }
</style>
