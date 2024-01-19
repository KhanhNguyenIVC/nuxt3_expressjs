<script setup>
const { $api } = useNuxtApp();
const snackBarText = ref("Update success");
const snackbar = ref(false);
const countryDetail = ref([]);
const { data: countries } = await $api.countries.getAllCountries();

const clickItem = (id) => {
  getDetail(id);
};

const updateCountry = async () => {
  const { data: updateResult } = await $api.countries.edit(countryDetail.value);
  if (updateResult.value.status) {
    snackBarText.value = "Edit handling success";
    snackbar.value = true;
  } else {
    snackBarText.value = updateResult.value.error.errors[0].message;
    snackbar.value = true;
  }
};

async function getDetail(id) {
  const { data: detail } = await $api.countries.detail(id);
  countryDetail.value = detail.value;
}
</script>

<template>
  <div>
    <v-card class="mx-auto" max-width="300">
      <v-list density="compact">
        <v-list-subheader>COUNTRIES</v-list-subheader>

        <v-list-item
          v-for="(item, i) in countries"
          :key="i"
          :value="item.id"
          color="primary"
          @click="clickItem(item.id)"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>

    <br />
    <pre>
      detail: {{ countryDetail }}
    </pre>

    <v-text-field
      v-model="countryDetail.country_flag"
      :value="countryDetail.country_flag"
      label="Regex [[A-Z]{5}]"
    ></v-text-field>
    <v-btn @click="updateCountry">Update</v-btn>

    <v-snackbar v-model="snackbar">
      {{ snackBarText }}
      <template v-slot:actions>
        <v-btn color="pink" variant="text" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>