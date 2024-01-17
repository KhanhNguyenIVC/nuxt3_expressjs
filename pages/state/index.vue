<script setup>
const isSubmit = ref(false);

// Sign state
const numberState = useState("numberState", () => 0);
const numberRef = ref(0);

const locales = useLocales();
const locale = useLocale();
const date = useLocaleDate(new Date("2016-10-26"));

// Shared state
const counter = useCounter();
const employeeState = useEmployee();

const { data: dataFetch } = await useFetch(
  "https://jsonplaceholder.typicode.com/todos/1"
);

const submit = () => {
  isSubmit.value = !isSubmit.value;
};

const clearData = async () => {
  console.log("handle clear");
  try {
    await clearNuxtData();
  } finally {
    console.log("clear has done");
  }
};
</script>

<template>
  <div>
    <span style="color: brown">State</span> Counter: {{ numberState }}
    <v-btn @click="numberState++">+</v-btn>
    <v-btn @click="numberState--">-</v-btn><br />

    <span style="color: brown">Number Ref</span> Counter: {{ numberRef }}
    <v-btn @click="numberRef++">+</v-btn>
    <v-btn @click="numberRef--">-</v-btn>

    <div>
      <h1>Composables</h1>
      <p>{{ date }}</p>
      <label for="locale-chooser">Preview a different locale</label>
      <v-select
        id="locale-chooser"
        v-model="locale"
        :items="locales"
      ></v-select>
    </div>

    <div>
      <h1>Shared State</h1>
      <label> {{ counter }}</label>
      <v-btn @click="counter++">+</v-btn>
      <v-btn @click="counter--">-</v-btn>

      <h3>Reactive State</h3>
      <v-text-field
        label="first_name"
        v-model="employeeState.firstName"
      ></v-text-field>
      <v-text-field
        label="last_name"
        v-model="employeeState.lastName"
      ></v-text-field>
    </div>

    <div>
      <h3>Get data by useFetch</h3>
      <p>ID: {{ dataFetch ? dataFetch.id : null }}</p>
      <p>Title: {{ dataFetch ? dataFetch.title : null }}</p>
    </div>

    <NuxtLink to="/state/secondStatePage">To Second State Page</NuxtLink><br />

    <v-btn @click="submit">Submit</v-btn>
    <v-btn @click="clearData">Clear</v-btn>
    <div v-if="isSubmit">
      <ul>
        <li>
          <span style="color: brown">State</span> Counter: {{ numberState }}
        </li>
        <li>
          <span style="color: brown">Number Ref</span> Counter: {{ numberRef }}
        </li>
        <li><span style="color: brown">Shared</span> State: {{ counter }}</li>
        <li>
          <span style="color: brown">Employee</span> State:
          {{ employeeState.firstName }} {{ employeeState.lastName }}
        </li>
      </ul>
    </div>

    <div>
      <h1>Ultis</h1>
      <label> Utils format currentcy {{ formatCurrency(1200000) }}</label>
    </div>

    <Comments />
  </div>
</template>