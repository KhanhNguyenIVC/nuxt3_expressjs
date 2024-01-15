<script setup>
const counter = useCounter();
const employeeState = useEmployee();

const setState = () => {
  counter.value = 10;
  employeeState.value.firstName = "John";
  employeeState.value.lastName = "Wick";
};
</script>

<template>
  <div>
    <h1>Second State Page</h1>
    <div>
      <h3>Shared State</h3>
      <label> {{ counter }}</label>
      <v-btn @click="counter++">+</v-btn>
      <v-btn @click="counter--">-</v-btn>

      <h3>Reactive State</h3>
      <v-text-field label="last_name" v-model="employeeState.firstName"></v-text-field>
      <v-text-field label="last_name" v-model="employeeState.lastName"></v-text-field>
      <v-btn @click="setState">Set value state</v-btn>
    </div>
    <NuxtLink to="/state">Back To First State Page</NuxtLink>
  </div>
</template>