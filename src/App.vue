<template>
  <v-app>
    <v-main>
      <MainForm/>
    </v-main>
  </v-app>
</template>

<script>
import MainForm from './components/MainForm';

export default {
  name: 'App',

  components: {
    MainForm,
  },

  data: () => ({
    //
  }),
};
</script>
