<template>
  <div class="full-width flex-center flex-column button-item" @click="submit()">
    <div class="full-size flex-center flex-row button-content">
      <span>{{ title }}</span>
      <img :src="icon" alt="Python" />
    </div>
    <div class="full-width button-line-container">
      <div class="full-height button-line">&nbsp;</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class ButtonCombo extends Vue {
  @Prop({ default: '' }) title!: string
  @Prop({ default: '' }) sectionId!: string
  @Prop({ default: '' }) link!: string
  @Prop({ default: null }) icon!: any

  submit(): void {
    console.log('clicked', { link: this.link, sectionId: this.sectionId })
    if (this.link) window.open(this.link, '_blank')
    else if (this.sectionId) this.$root.$emit('NAVIGATE:TO', this.sectionId)
  }
}
</script>

<style scoped>
.button-item {
  height: 17px;

  cursor: pointer;
}

.button-content {
  font-size: 11px;

  justify-content: space-between;
}

.button-content img {
  height: 80%;
}

.button-line-container {
  height: 1px;
  border-radius: 1px;
}

.button-line {
  width: 0;
  background: white;

  transition: all 0.1s ease-in-out;
}

.button-item:hover .button-line {
  width: 100%;
}

.button-item:active .button-line {
  width: 0;
  background: red;
}
</style>