<template>
  <div class="container">
    <div class="block mb-4 d-flex flex-column selectBlock">
      <p class="">Où ?</p>
      <select v-model="citySelected" class="w-100">
        <option v-for="cityItem in cityArray" :key="cityItem.city">
          {{ cityItem.town }}
        </option>
      </select>

      <div class="d-flex justify-content-center">
        <button class="btn btn-primary mr-2" @click="refreshCurrentWeather()">
          Météo actuelle
        </button>
        <button class="btn btn-info ml-2" @click="refreshCurrentWeather()">
          Prévision des températures maximales
        </button>
      </div>
    </div>

    <div id="meteo" class="block" v-if="error != true">
      <p>Météo actuelle à {{ citySelected }}</p>
      <p>Temperature : {{ temperature }}°C</p>
      <p>Date : {{ formatDate(date) }}</p>
    </div>

    <div id="meteo" class="block" v-else>
      <p class="text-danger">Impossible de récupérer les données météo</p>
    </div>

    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<script>
import json from "../../meteo.json";
import weatherApiKey from "../../weather-api-key.json";
import moment from "moment";
import axios from "axios";

export default {
  data() {
    return {
      date: json[0].date,
      temperature: json[0].temperature,
      town: json[0].town,
      cityArray: json,
      citySelected: "",
      api_link: "http://api.openweathermap.org/data/2.5/weather?q=",
      api_key: "",
      error: "",
    };
  },
  created: function () {
    if (this.$route.params.city != "") {
      this.citySelected = this.$route.params.city;
      this.api_key = weatherApiKey.api_key;
      this.refreshCurrentWeather();
    }
  },
  methods: {
    formatDate() {
      moment.lang("fr");
      return moment().format("Do MMMM YYYY");
    },
    refreshCurrentWeather() {
      // return Math.floor(Math.random() * Math.floor(40));
      axios
        .get(
          this.api_link +
            this.citySelected +
            "&appid=" +
            this.api_key +
            "&units=metric"
        )
        .then((response) => {
          this.temperature = response.data.main.temp;
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>

<style>
.btn {
  width: fit-content;
}

.block {
  width: 900px;
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
