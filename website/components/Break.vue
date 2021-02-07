<template>
  <div class="full-width flex-center console-style" id="break">
    <div class="full-width flex-center flex-column section-container">
      <div class="full-width flex-center flex-column console-wrapper">
        <span class="main-break-text">
          <span class="console-cursor">></span>&nbsp; Just a little break
        </span>
        <span class="words-text">
          <span>></span>&nbsp;Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna.</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Break extends Vue {}
</script>

<style scoped>
#break {
  padding: 10px 10px;
}

.section-container {
  align-items: flex-start;

  border: solid 2px white;
  border-radius: 5px;
}

.console-wrapper {
  max-width: 360px;
  align-items: flex-start;
}

.main-break-text {
  font-weight: bolder;
  font-size: 15px;

  margin-bottom: 15px;
}

.words-text {
  font-size: 11px;
}
</style>