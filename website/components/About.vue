<template>
  <div class="full-width flex-center" id="about">
    <div class="full-width flex-center section-container">
      <div class="flex-center flex-column mini-section">
        <span class="section-subtitle">About me...</span>

        <!-- Avatar -->
        <v-avatar :size="100" color="white">
          <img src="~/assets/img/my-avatar.png" alt="avatar" />
        </v-avatar>

        <span class="paragraph-margin-bottom"
          >A self taught developer with passion for creating efficient and
          scalable sytems and applications.</span
        >
        <span class="paragraph-margin-bottom"
          >I'm not a language loyalist but use the best language or framework
          for the specific task at hand.</span
        >
        <span><b>~ Eliud Arudo</b></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class About extends Vue {}
</script>

<style scoped>
.v-avatar {
  margin-bottom: 15px;
  box-shadow: 0 6px 10px rgb(0 0 0 / 20%);
}
</style>