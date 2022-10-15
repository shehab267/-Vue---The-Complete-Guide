<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <h4 v-if="isLoading">Loading ...</h4>
      <h4 v-else-if="!isLoading && errorMsg">{{ errorMsg }}</h4>
      <h4 v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences, Please start adding some data
      </h4>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
// import { response } from 'express';
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      errorMsg: null,
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true;
      fetch(
        'https://vue-http-demo-aadd3-default-rtdb.firebaseio.com/serveys/.json'
      )
        .then((response) => {
          this.errorMsg = null;
          this.isLoading = false;
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          this.isLoading = false;
          this.errorMsg = error;
          console.log(Error(this.errorMsg));
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
