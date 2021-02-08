<template>
  <v-app>
    <v-navigation-drawer class="flex-center" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile
          v-for="(item, index) in apps"
          :key="`tile-${item.id}`"
          :class="{ 'tile-border': index < apps.length - 1 }"
          @click="goToElement(item.id)"
        >
          <v-list-tile-action>
            <img
              :class="{ 'selected-nav-link': selectedSection === item.id }"
              :src="item.src"
              :alt="item.id"
            />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.id" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      fixed
      app
      :style="{ boxShadow: isBackToTop ? 'none' : toolbarShadow }"
    >
      <div class="full-size flex-center flex-row toolbar-container">
        <v-toolbar-side-icon
          flat
          class="hidden-md-and-up"
          color="primary"
          @click="drawer = !drawer"
        />
        <img
          src="~/assets/img/logo.png"
          @click="goToElement('landing')"
          alt="Language Practice Logo"
        />

        <v-spacer></v-spacer>

        <img
          class="hidden-sm-and-down nav-link"
          v-for="item of apps"
          :class="{ 'selected-nav-link': selectedSection === item.id }"
          :src="item.src"
          :alt="item.id"
          :key="`nav-${item.id}`"
          @click="goToElement(item.id)"
        />
      </div>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer>
      <FooterContainer />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { VuetifyGoToOptions } from 'vuetify'

import { WebsocketsProvider } from '~/services/websockets'

import FooterContainer from '~/components/FooterContainer.vue'

@Component({
  components: {
    FooterContainer,
  },
})
export default class DefaultLayout extends Vue {
  clipped = false
  drawer = false
  fixed = false
  isBackToTop = true

  selectedSection = 'landing'
  toolbarShadow: string =
    '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'

  items = [
    { icon: 'apps', title: 'Welcome', to: '/' },
    { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
  ]

  apps = [
    {
      src: require('~/assets/img/main-icons/python.png'),
      id: 'python',
    },
    {
      src: require('~/assets/img/main-icons/nodejs.png'),
      id: 'nodejs',
    },
    {
      src: require('~/assets/img/main-icons/java.png'),
      id: 'java',
    },
    {
      src: require('~/assets/img/main-icons/go.png'),
      id: 'go',
    },
    {
      src: require('~/assets/img/main-icons/rust.png'),
      id: 'rust',
    },
    {
      src: require('~/assets/img/main-icons/cpp.png'),
      id: 'c++',
    },
    {
      src: require('~/assets/img/main-icons/r.png'),
      id: 'r',
    },
    {
      src: require('~/assets/img/main-icons/dart.png'),
      id: 'dart',
    },
  ]

  mounted() {
    this.listenForVuetifyRouterEvent()
    this.setupIntersectionObserver()
    window.addEventListener('scroll', this.handleScroll)
    this.setupWSListeners()
  }

  setupWSListeners(): void {
    WebsocketsProvider.setupListener(this)

    this.$root.$on('WEBSOCKETS:ID', (id: any) => {
      this.$dataProvider.updateUserID(id)
    })

    this.$root.$on('WEBSOCKETS:CONSOLE-MESSAGES', (payload: any) => {
      this.$dataProvider.updateServiceToken(payload.token)
      this.sendMessagesToComponents(payload.messages)
    })
  }

  listenForVuetifyRouterEvent(): void {
    this.$root.$on('NAVIGATE:TO', (id: string) => {
      this.goToElement(id)
    })
  }

  setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) this.selectedSection = entry.target.id
      },
      {
        root: null,
        threshold: 0.7,
      }
    )

    const targets = document.querySelectorAll('.observable')

    targets.forEach((target) => {
      observer.observe(target)
    })
  }

  handleScroll(): void {
    const scroll = window.scrollY
    this.isBackToTop = scroll < 90
  }

  scrollTo(id: string): void {
    const options: VuetifyGoToOptions = {
      duration: 1000,
      offset: 0,
      easing: 'easeInOutCubic',
    }

    const target = document.getElementById(id) as HTMLElement

    this.$vuetify.goTo(target, options)

    if (this.drawer) this.drawer = false
  }

  goToElement(elementId: string): void {
    const element = document.getElementById(elementId)

    if (!element) return

    const options: VuetifyGoToOptions = {
      duration: 1000,
      offset: 0,
      easing: 'easeInOutCubic',
    }

    this.$vuetify.goTo(element, options)

    if (this.drawer) this.drawer = false
  }

  sendMessagesToComponents(messages: Array<any>): void {
    for (const type in messages) {
      this.$root.$emit(`console-message-${type}`, messages[type])
    }
  }
}
</script>


<style>
/* Helpers */
.full-size {
  height: 100% !important;
  width: 100% !important;
}

.full-height {
  height: 100%;
}

.full-width {
  width: 100%;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-column {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.flex-wrap {
  flex-wrap: wrap;
}

/* App helpers */
.paragraph-margin-bottom {
  margin-bottom: 10px;
}

.console-style {
  color: white;
  background: #1d1d1d;
  box-shadow: 0 0px 12px rgb(0 0 0 / 50%);
}

/* App styles */
@font-face {
  font-family: 'Century Gothic Bold';
  src: url('~assets/fonts/CenturyGothic/GOTHICB.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'OpenSans Regular';
  src: url('~assets/fonts/OpenSans/OPENSANS-REGULAR.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'OpenSans Semibold';
  src: url('~assets/fonts/OpenSans/OPENSANS-SEMIBOLD.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

#app {
  color: #1d1d1d;
  font-family: 'OpenSans Regular';

  user-select: none;
}

.v-navigation-drawer .v-list {
  width: 70%;
}

.v-toolbar {
  background: #fafafa !important;
  box-shadow: none;
}

.v-toolbar__content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.toolbar-container {
  max-width: 1000px;
  padding: 0 20px;
}

.v-list__tile {
  cursor: default;
}

.v-toolbar img,
.v-list__tile__action img {
  height: 40%;
  cursor: default;

  transition: all 0.3s ease;
}

.v-toolbar .nav-link {
  margin-left: 15px;
}

.v-toolbar img:hover,
.v-list__tile:hover img,
.v-list__tile:hover .v-list__tile__title,
.selected-nav-link {
  transform: scale(1.1);
}

.v-toolbar img:active,
.v-list__tile:active img,
.v-list__tile:active .v-list__tile__title {
  transform: scale(0.9);
}

.v-list__tile__title {
  text-transform: capitalize;
  font-weight: 600;

  padding-left: 10px;
}

.tile-border {
  border-bottom: solid 1px rgba(0, 0, 0, 0.07);
}

.section-container {
  max-width: 1000px;

  padding: 15px;
}

.mini-section {
  max-width: 360px;
  text-align: center;
}

.section-subtitle {
  font-weight: 600;
  font-size: 25px;
  margin-bottom: 10px;
}

.v-footer {
  height: unset !important;
  min-height: 200px;

  margin-top: 80px;

  background: transparent !important;
}

.typable-row-1 {
  white-space: nowrap;
  /* animation: typing 3.5s steps(20, end); */
  /* animation: typing 5s 5s; */

  overflow: hidden;
}

.typable-row-2 {
  white-space: nowrap;
  /* animation: typing 3s 3s 5s, blink-caret 0.75s step-end infinite; */

  border-right: solid 2px transparent;

  overflow: hidden;
}

/* Common animations */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

@media (max-width: 959px) {
  .toolbar-container {
    padding: 0;
  }
}
</style>