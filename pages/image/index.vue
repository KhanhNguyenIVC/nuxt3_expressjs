<script setup>
const mText = ref("testing TelePort components");
const open = ref(false);
</script>

<template>
  <div>
    <h3>NuxtImage</h3>
    <!-- <NuxtImg
      preset="avatar"
      src="data:image/png;base64,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"
    /><br />
    <img src="/img/nuxtimgs.png" alt="Discover Nuxt 3" /><br />
    <hr /> -->
    imported image from nuxt image
    <figure>
      <NuxtImg presets="avatar" provider="cloudinary" src="/kitten_fighting.gif" alt="cat" />
    </figure>
    imported image from img tag
    <img src="/img/kitten_fighting.gif" alt="cat02" />
    <hr />
    BodyTeleport
    <v-btn @click="open = true">Open Modal</v-btn>
    <Teleport to="body">
      <div v-if="open" class="modal">
        <p>Hello from the modal! {{ mText }}</p>
        <v-btn @click="open = false">Close</v-btn>
      </div>
    </Teleport>

    <v-dialog width="500">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" text="Open Dialog"> </v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            {{ mText }}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>