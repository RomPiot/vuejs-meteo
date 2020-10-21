<template>
  <div id="forecastChart">
    <chart-maker :params="YOUR_CHART_PARAMS" v-if="YOUR_BOOLEAN_VARIABLE_NAME">
      
      <tr v-for="data in loop" :key="data.id"></tr>
    
    </chart-maker>
  </div>
</template>