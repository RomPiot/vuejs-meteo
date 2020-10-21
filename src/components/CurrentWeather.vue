<template>
  <div class="container">
    <div class="block mb-4 d-flex flex-column selectBlock">
      <p class="">Où ?</p>
      <select v-model="citySelected" class="w-100">
        <option v-for="cityItem in cityArray" :key="cityItem.city">
          {{ cityItem.town }}
        </option>
      </select>
      <button class="btn btn-primary" @click="refreshCurrentWeather()">
      Rechercher
    </button>
    </div>
    
    <div id="meteo" class="block">
      <p>Météo actuelle à {{ citySelected }}</p>
      <p>Temperature : {{ refreshCurrentWeather() }}°C</p>
      <p>Date : {{ formatDate(date) }}</p>
    </div>

    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<script>
import json from "../../meteo.json";
import moment from "moment";

export default {
  data() {
    return {
      date: json[0].date,
      temperature: json[0].temperature,
      town: json[0].town,
      cityArray: json,
      citySelected: "",
    };
  },
  created: function () {
    this.citySelected = this.$route.params.city;
  },
  methods: {
    formatDate() {
      moment.lang("fr");
      return moment().format("Do MMMM YYYY");
    },
    refreshCurrentWeather() {
      return Math.floor(Math.random() * Math.floor(40));
    },
  },
};
</script>

<style>
.block {
  width: 500px;
  background-color: grey;
  margin: 0 auto;
}

.selectBlock {
  padding: 10px 50px;
}

.selectBlock select {
  margin-bottom: 10px;
}
</style>
