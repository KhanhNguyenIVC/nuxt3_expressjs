<script setup>
const { $api } = useNuxtApp();

const { data: countries } = await $api.countries.getAllCountries();
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
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>