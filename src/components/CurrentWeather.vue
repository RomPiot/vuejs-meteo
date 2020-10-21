<template>
  <div class="container">
    
    <div>
      <select v-model="citySelected" class="w-100">
        <option v-for="city in cityArray" :key="city.id">
          {{ city.town }} 
        </option>
      </select>
    </div>
    <button class="btn btn-primary" @click="refreshCurrentWeather()">Search</button>

    <div id="meteo">
      <p>Météo actuelle à {{ citySelected }}</p>
      <p>Temperature : {{ refreshCurrentWeather() }}°C</p>
      <p>Date : {{ formatDate(date) }}</p>
    </div>
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
      citySelected: ""
    };
  },
  methods: {
    formatDate() {
      moment.lang("fr");
      return moment().format("Do MMMM YYYY");
    },
    refreshCurrentWeather() {
      return Math.floor(Math.random() * Math.floor(40));
    }
  },
};
</script>

<style>
#meteo {
  width: 500px;
  background-color: grey;
  margin: 0 auto;
}
</style>
