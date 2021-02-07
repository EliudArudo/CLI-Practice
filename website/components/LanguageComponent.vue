<template>
  <div class="full-width flex-center observable" :id="languageId">
    <div
      class="full-width flex-center flex-row flex-wrap section-container component-container"
      :style="{ 'flex-direction': left ? 'row-reverse' : 'row' }"
    >
      <!-- Console -->
      <div class="console-style console-app">
        <!-- Fabs -->
        <div class="flex-center flex-column fabs">
          <v-btn fab @click="refresh()" :disabled="loading || !appIsClosed">
            <v-icon>refresh</v-icon>
          </v-btn>
          <v-btn fab @click="openThisLink()">
            <img src="~/assets/img/github.png" alt="Github" />
          </v-btn>
        </div>

        <!-- Console body -->
        <div class="full-size flex-center flex-column console-app-body">
          <!-- Not ready message -->
          <div class="full-size flex-center" v-if="notReady">
            <span>Will be ready soon</span>
          </div>

          <!-- Output -->
          <div class="full-size output-body" :id="`output-${languageId}`">
            <div
              class="full-size flex-center flex-column skeleton"
              v-if="loading && !notReady"
            >
              <div class="skeleton-item skeleton-full-width">&nbsp;</div>
              <div class="skeleton-item skeleton-half-width">&nbsp;</div>
              <div class="skeleton-item skeleton-quarter-width">&nbsp;</div>
              <div
                class="skeleton-margin skeleton-item skeleton-3-quarter-width"
              >
                &nbsp;
              </div>
              <div class="skeleton-item skeleton-half-width">&nbsp;</div>
              <div class="skeleton-item skeleton-half-width">&nbsp;</div>
              <div class="skeleton-item skeleton-full-width">&nbsp;</div>
              <div class="skeleton-item skeleton-quarter-width">&nbsp;</div>
            </div>

            <span v-if="!loading && !notReady" class="output-result">{{
              output
            }}</span>
          </div>

          <!-- Input container -->
          <div class="full-width flex-center flex-row input-container">
            <div class="flex-center flex-row input-items">
              <span class="console-cursor">></span>&nbsp;
              <span>Input: </span>
              <input v-model="input" type="text" />
            </div>

            <v-spacer></v-spacer>

            <v-btn
              flat
              small
              icon
              dark
              :disabled="loading || input.trim().length === 0"
              @click="sendCommand()"
            >
              <v-icon>send</v-icon>
            </v-btn>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div
        class="flex-center flex-column component-description"
        :style="{
          'align-items': left ? 'flex-start' : 'flex-end',
          'text-align': left ? 'left' : 'right',
        }"
      >
        <div class="flex-center flex-row title-logo">
          <span class="component-title">{{ languageId }}</span>
          <img
            :src="require(`~/assets/img/main-icons/${imageId}.png`)"
            :alt="imageId"
          />
        </div>

        <div class="component-content">
          <span>{{ content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({})
export default class LanguageComponent extends Vue {
  @Prop({ default: '' }) languageId!: string
  @Prop({ default: '' }) imageId!: string
  @Prop({ default: false }) left!: boolean
  @Prop({ default: '' }) content!: boolean
  @Prop({ default: false }) notReady!: boolean
  @Prop({ default: '' }) githubLink!: string

  input = ''
  loading = true
  appIsClosed = false

  output = ''
  // 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et' +
  // '\n' +
  // '\n' +
  // 'accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing' +
  // '\n' +
  // '\n' +
  // 'elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'

  mounted() {
    if (this.notReady) this.loading = false

    this.setupMessagesListener()
  }

  setupMessagesListener(): void {
    this.$root.$on(`console-message-${this.imageId}`, (output: string) => {
      this.output = output
      this.loading = false
      this.scrollToBottomOfOutput()
    })
  }

  scrollToBottomOfOutput(): void {
    setTimeout(() => {
      const output = document.getElementById(
        `output-${this.languageId}`
      ) as HTMLElement
      output.scrollTop = output.scrollHeight - output.clientHeight
    }, 200)
  }

  openThisLink(): void {
    window.open(this.githubLink, '_blank')
  }

  async sendCommand(): Promise<void> {
    try {
      this.loading = true

      const { message, isClosed } = await this.$dataProvider.sendInput(
        this.imageId,
        this.input
      )

      this.appIsClosed = isClosed

      this.output = message

      this.scrollToBottomOfOutput()
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
      this.input = ''
    }
  }

  async refresh(): Promise<void> {
    try {
      this.loading = true
      const message = await this.$dataProvider.refreshApp(this.imageId)
      this.appIsClosed = false

      this.output = message

      this.scrollToBottomOfOutput()
    } catch (e) {
      console.log(e)
    } finally {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.component-container {
  min-height: 300px;
  justify-content: space-between;
}

.component-description {
  max-width: 360px;
}

.component-title {
  font-size: 30px;
  margin-right: 20px;
  font-family: 'Century Gothic Bold';
  text-transform: capitalize;
}

.title-logo img {
  height: 60px;
}

.component-content {
  margin-top: 20px;
}

.console-app {
  height: 240px;
  width: 350px;

  border-radius: 3px;
  position: relative;

  padding: 9px;
}

.fabs {
  width: 42px;

  position: absolute;
  top: -25px;
  right: -20px;
}

.output-result {
  max-width: 100%;
  white-space: pre-wrap;
}

.console-app-body {
  border: solid 3px white;
  padding: 7px;
}

.console-app .v-btn--floating {
  height: 40px;
  width: 40px;
}

.input-container {
  height: 40px;

  border-top: solid 3px white;
}

.input-container .v-btn {
  height: 20px;
  width: 20px;
}

.input-container .v-btn .v-icon {
  font-size: 13px;
}

.input-items {
  font-size: 12px;
}

input {
  padding: 0 10px;
  outline: none;
}

.output-body {
  height: calc(100% - 40px);

  font-size: 10px;

  overflow-y: auto;
}

.output-body::-webkit-scrollbar-track {
  background-color: transparent;
}

.output-body::-webkit-scrollbar {
  width: 2px;
  background: transparent;
}

.output-body::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 2px;

  transition: all 1s ease-in;
}

.skeleton {
  justify-content: flex-start;
  align-items: flex-start;
}

.skeleton-full-width {
  width: 100%;
}

.skeleton-half-width {
  width: 50%;
}

.skeleton-quarter-width {
  width: 25%;
}

.skeleton-3-quarter-width {
  width: 75%;
}

.skeleton-item {
  height: 10px;
  border-radius: 10px;

  background: white;

  margin-bottom: 7px;

  animation-name: skeleton-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.skeleton-margin {
  margin-bottom: 15px;
}

@keyframes skeleton-animation {
  0% {
    background: white;
  }
  40% {
    background: rgba(255, 255, 255, 0.2);
  }
  50% {
    background: rgba(255, 255, 255, 0.5);
  }
  60% {
    background: rgba(255, 255, 255, 0.7);
  }
  100% {
    background: white;
  }
}
</style>