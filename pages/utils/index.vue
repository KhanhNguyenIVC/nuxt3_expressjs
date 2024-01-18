<script setup>
const dataCallOnce = useState("dataCallOnce");
const mText = ref('myText')

await callOnce(async () => {
  // server-side rendering but not hydration
  console.log("This will only be logged once");
  dataCallOnce.value = await $fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  console.log("fetched", dataCallOnce.value);
});

const makeError = () => {
    mText.value.error = true
}

const handleClearError = () => {
  console.log("clicked clear error");
  clearError()
//   clearError({ redirect: '/state' })
};
</script>

<template>
  <div>
    <h1>Api utils</h1>

    <h3>callOnce</h3>
    <pre>
        {{ dataCallOnce }}
    </pre>

    <v-btn @click="makeError">makeError</v-btn>
    <v-btn @click="handleClearError">clearError</v-btn>
  </div>
</template>