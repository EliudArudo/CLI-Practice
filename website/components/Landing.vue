<template>
  <div class="full-width flex-center observable" id="landing">
    <div class="full-width flex-center section-container">
      <div class="flex-center flex-column words">
        <span class="main-text">Language Practice</span>
        <span class="paragraph-text"
          >The most effective way to learn is by putting knowledge to use. No
          language is superior to the other but each can be fully optimised at
          its point of strength.</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Landing extends Vue {}
</script>

<style scoped>
#landing {
  min-height: 300px;
}

.section-container {
  justify-content: flex-start;
}

.words {
  min-height: 200px;
  max-width: 640px;

  align-items: flex-start;
}

.main-text {
  font-family: 'Century Gothic Bold';
  font-size: 50px;
}

.paragraph-text {
  font-family: 'OpenSans Semibold';
  font-size: 18px;
}
</style>