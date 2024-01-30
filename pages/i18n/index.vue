<script setup>
const { t, locale, locales } = useI18n();
const title_la = t("header_title");
const las = ref(["en", "fr"]);

const onChangeCb = ($event) => {
  console.log("change title to", t('header_title'));
  useHead(() => ({ title: t("header_title") }));
};
</script>

<template>
  <div>
    <Head>
      <Title>{{ title_la }}</Title>
    </Head>

    <form>
      <select
        class="video-combobox"
        @change="onChangeCb($event)"
        v-model="locale"
      >
        <option v-for="la in las" :key="la" :value="la">
          {{ la }}
        </option>
      </select>
      <p>{{ $t("welcome") }}</p>
      <p>{{ $t("hello") }}</p>
    </form>
  </div>
</template>
