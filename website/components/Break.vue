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
    'The first hard drive could only hold 5MB of data.',
    'The new Texas Instrument calculators have ABC keyboards as the standardised tool for tests.',
    'A 15-year-old once hacked NASA.',
    'HP, Apple, and Microsoft all began developing their computers in a garage.',
    'The woman who rented out her garage to Larry Page and Sergey Brin in 1998 later became the CEO of YouTube.',
    'The average computer blinks 7 times a minute.',
    'In 1956, 5 megabytes (5MB) of data weighed a ton.',
    'The first digital computer was Colossus and it was built between 1934 and 1945 by British codebreakers.',
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