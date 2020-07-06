<template lang='pug'>
  #projects
    v-img(src='@/assets/projects.svg', contain='', eager='',
      lazy-src='@/assets/projects.svg')
    main
      ProjectEntry(v-for='project in projects',
        v-bind:key='project.name', :project='project')
</template>

<script>
import ProjectEntry from '@/components/projects-components/ProjectEntry';

export default {
  name: 'Projects',
  components: {
    ProjectEntry,
  },
  data() {
    return {
      projects: [
        {
          name: 'streamshore',
          logo: require('@/assets/streamshore/streamshore.svg'),
          description: `A web platform for watching synchronized
          YouTube videos with other people`,
          features: [
            'Create public or private rooms for others to join',
            'Submit YouTube videos to a queue',
            'Watch YouTube videos in sync with others',
            'Participate in a live chat',
            'Add friends and discover their rooms',
            'Change room settings to fit the room needs',
          ],
          link: 'https://streamshore.tv',
          photos: [
            require('@/assets/streamshore/landing.png'),
            require('@/assets/streamshore/room.png'),
            require('@/assets/streamshore/queue.png'),
            require('@/assets/streamshore/chat.png'),
          ],
          technologies: [
            'Vue.js',
            'Elixir',
            'MySQL',
          ],
        },
      ],
    };
  },
};
</script>
