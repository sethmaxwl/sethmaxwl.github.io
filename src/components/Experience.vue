<template lang='pug'>
  #experience
    v-img(src='@/assets/experience.svg', contain='', eager='',
      lazy-src='@/assets/experience.svg')
    v-container
      v-img.ma-auto.section-profile.mt-5(src='@/assets/education.svg',
        lazy-src='@/assets/education.svg')
      p.header.text-center Education
      v-card.pt-2.pb-5(color='#fbf7f5', flat='', tile='')
        v-card-title.card-header Purdue University
        v-card-subtitle.card-subheader.pt-0.pb-0
          | Bachelor of Science (2018 - 2022)
        v-card-text.card-description.pt-0.pb-0 Computer Science
        v-card-text.card-description.pt-0 3.51 GPA
      v-divider
      v-img.ma-auto.section-profile.mt-5(src='@/assets/work-experience.svg',
        lazy-src='@/assets/work-experience.svg')
      p.header.text-center Work Experience
      template(v-for='(entry, index) in entries')
        WorkEntry(:work='entry')
      v-divider
      v-img.ma-auto.section-profile.mt-5(src='@/assets/skills.svg',
        lazy-src='@/assets/skills.svg')
      p.header.text-center Skills
      v-card#skills-card(flat='')
        v-card-title Skills
          v-spacer
          v-text-field(v-model='search', append-icon='mdi-magnify',
            label='Search', single-line='', hide-details='')
        v-data-table#skills-table(:headers='skillTableHeaders', :items='skills',
          :sort-by='["familiarity", "years"]', :search='search',
          hide-default-footer='', dense='',
          :options='{ itemsPerPage: skills.length }')


</template>

<script>
import WorkEntry from '@/components/experience-components/WorkEntry';

export default {
  name: 'Experience',
  components: {
    WorkEntry,
  },
  data() {
    return {
      search: '',
      entries: [
        {
          company: 'Google',
          title: 'Software Engineering Intern',
          dates: {
            startDate: 'May 2020',
            endDate: 'August 2020',
          },
          overview: `
            Instrumented Google Cloud Pub/Sub
            client libraries with OpenTelemetry.
          `,
          skills: [
            'Speaking with stakeholders to determine project requirements.',
            `Creating design document with clear objective,
            design decisions, and implementation details.`,
            'Writing easily readable and maintainable code.',
            'Writing full code coverage tests.',
            'Contributing to an open source library.',
          ],
        },
        {
          company: 'ITaP Research Computing at Purdue University',
          title: 'Student Systems Administrator',
          dates: {
            startDate: 'September 2018',
            endDate: 'Present',
          },
          overview: `Deployed systems software to provide additional
          tools to better maintain Purdue's supercomputer clusters.`,
          skills: [
            'Working with systems engineers to determine useful tools.',
            `Deploying inventory system to track system statistics
            for physical and virtual machines.`,
            'Writing maintainable code for software integrations.',
          ],
        },
        {
          company: 'Oak Ridge National Laboratory',
          title: 'Software Engineering Intern',
          dates: {
            startDate: 'May 2019',
            endDate: 'August 2019',
          },
          overview: `Integrated user account features from Ruby on Rails
          application into Vue.js application.`,
          skills: [
            `Design and implement APIs to transfer user information
            between applications.`,
            'Create front end interface to update user information.',
            'Write tests for use with Jenkins continuous integration.',
          ],
        },
        {
          company: 'Oak Ridge National Laboratory',
          title: 'Software Engineering Intern',
          dates: {
            startDate: 'May 2018',
            endDate: 'August 2018',
          },
          overview: `Designed video conferencing scheduling tool
          for Ember.js application.`,
          skills: [
            `Work with full time staff to design backend to allow
            for external user authentication.`,
            `Create Ember.js application with a scheduling interface
            to submit video conferencing time slots to database.`,
            'Write mocha unit tests.',
          ],
        },
      ],
      skills: [
        {
          subject: 'JavaScript',
          years: 4,
          familiarity: 5,
        },
        {
          subject: 'HTML',
          years: 4,
          familiarity: 5,
        },
        {
          subject: 'CSS',
          years: 4,
          familiarity: 5,
        },
        {
          subject: 'Git',
          years: 3,
          familiarity: 5,
        },
        {
          subject: 'Python',
          years: 3,
          familiarity: 4,
        },
        {
          subject: 'Unix',
          years: 4,
          familiarity: 4,
        },
        {
          subject: 'MySQL',
          years: 3,
          familiarity: 4,
        },
        {
          subject: 'C',
          years: 1,
          familiarity: 3,
        },
        {
          subject: 'Java',
          years: 2,
          familiarity: 2,
        },
        {
          subject: 'Ruby on Rails',
          years: 1,
          familiarity: 2,
        },
        {
          subject: 'C++',
          years: 1,
          familiarity: 2,
        },
      ],
      skillTableHeaders: [
        {
          text: 'Programming Language/Tool',
          align: 'start',
          sortable: false,
          value: 'subject',
        },
        {
          text: 'Familiarity',
          value: 'familiarity',
        },
        {
          text: 'Years of Experience',
          value: 'years',
        },
      ],
    };
  },
};
</script>

<style lang='scss'>
#experience, #skills-card, #skills-table {
  background-color: #fbf7f5;
  font-family: 'IBM Plex Sans Condensed', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
}

#skills-table {
  tbody {
    tr:hover {
      background-color: #e2dedc;
    }
  }
}
</style>
