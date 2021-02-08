<template>
  <div class="full-width flex-center console-style" id="break">
    <div class="full-width flex-center flex-column section-container">
      <div class="full-width flex-center flex-column console-wrapper">
        <span class="main-break-text">
          <span class="console-cursor">></span>&nbsp; Just a little break
        </span>
        <span class="words-text">
          <span>></span>&nbsp; <span id="quote">{{ currentQuote }}</span></span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Break extends Vue {
  backupQuotes: Array<string> = [
    '1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    '2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    '3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    '4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
  ]

  quotes: Array<string> = []

  currentQuote = ''

  mounted() {
    this.startCycle()
  }

  startCycle(): void {
    this.iteration()

    setInterval(() => {
      this.iteration()
    }, 1000 * 30)
  }

  iteration(): void {
    if (this.quotes.length === 0) this.quotes = [...this.backupQuotes]

    const max = this.quotes.length - 1
    const index = this.generateRandomIndex(0, max)

    const quote = this.quotes[index]
    this.quotes = this.quotes.filter((item: string) => item !== quote)

    this.currentQuote = quote
  }

  generateRandomIndex(min: number, max: number): number {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
  }
}
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