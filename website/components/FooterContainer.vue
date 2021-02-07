<template>
  <div class="full-size flex-center footer-container">
    <div class="full-size console-style console-body">
      <div class="full-size flex-center flex-row flex-wrap footer-body">
        <div class="flex-center flex-column section first">
          <div class="typable-row-1">
            <span id="footer-statement">Putting knowledge</span>
            &nbsp;
          </div>

          <div class="typable-row-2">
            <span id="footer-statement">to use...</span>
            &nbsp;
          </div>
        </div>
        <div class="flex-center flex-column second section">
          <span class="full-width section-title">Languages</span>

          <div class="full-width flex-center flex-column button-section">
            <ButtonCombo
              v-for="(item, index) of languagesSection1"
              :key="`section-1-button-${index}`"
              :title="item.title"
              :sectionId="item.sectionId"
              :icon="item.icon"
            />
          </div>

          <div class="full-width flex-center flex-column button-section">
            <ButtonCombo
              v-for="(item, index) of languagesSection2"
              :key="`section-2-button-${index}`"
              :title="item.title"
              :sectionId="item.sectionId"
              :icon="item.icon"
            />
          </div>
        </div>
        <div class="flex-center flex-column section third-container">
          <div class="full-width flex-center flex-column third">
            <span class="full-width section-title">Reach me</span>

            <div class="full-width flex-center flex-column button-section">
              <ButtonCombo
                v-for="(item, index) of reachMeLlinks"
                :class="{
                  'add-margin-top': index === reachMeLlinks.length - 1,
                }"
                :key="`section-1-button-${index}`"
                :title="item.title"
                :sectionId="item.sectionId"
                :icon="item.icon"
                :link="item.link"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import ButtonCombo from '~/components/ButtonCombo.vue'

@Component({
  components: {
    ButtonCombo,
  },
})
export default class FooterContainer extends Vue {
  languagesSection1 = [
    {
      title: 'Python',
      sectionId: 'python',
      icon: require('~/assets/img/small-light-icons/python.png'),
    },
    {
      title: 'NodeJS',
      sectionId: 'nodejs',
      icon: require('~/assets/img/small-light-icons/nodejs.png'),
    },
    {
      title: 'Java',
      sectionId: 'java',
      icon: require('~/assets/img/small-light-icons/java.png'),
    },
    {
      title: 'Go',
      sectionId: 'go',
      icon: require('~/assets/img/small-light-icons/go.png'),
    },
  ]

  languagesSection2 = [
    {
      title: 'Rust',
      sectionId: 'rust',
      icon: require('~/assets/img/small-light-icons/rust.png'),
    },
    {
      title: 'C++',
      sectionId: 'c++',
      icon: require('~/assets/img/small-light-icons/cpp.png'),
    },
    {
      title: 'R',
      sectionId: 'r',
      icon: require('~/assets/img/small-light-icons/r.png'),
    },
    {
      title: 'Dart',
      sectionId: 'dart',
      icon: require('~/assets/img/small-light-icons/dart.png'),
    },
  ]

  reachMeLlinks = [
    {
      title: 'Official',
      link: 'https://eliudarudo.netlify.app/',
      icon: require('~/assets/img/small-light-icons/official.png'),
    },
    {
      title: 'Apps',
      link: 'https://eapps.netlify.app/',
      icon: require('~/assets/img/small-light-icons/apps.png'),
    },
    {
      title: 'Email',
      link: 'mailto:eliudarudo@gmail.com',
      icon: require('~/assets/img/small-light-icons/email.png'),
    },
  ]
}
</script>

<style scoped>
.console-body {
  border-radius: 3px;
  max-width: 1000px;
  margin-bottom: 12px;
  padding: 10px;
}

.footer-body {
  border: solid 2px white;
  border-radius: 5px;

  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
}

.section {
  max-width: 210px;
  align-items: flex-start;
}

.first {
  align-items: flex-start;
  justify-content: flex-start;
  width: 210px;
}

.second {
  max-width: 100px;
}

.third {
  max-width: 70px;
}

.third-container {
  width: 170px;
}

#footer-statement {
  font-size: 21px;
  font-weight: 600;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;

  text-align: center;
}

.button-section {
  margin-bottom: 15px;
}

.button-item {
  height: 17px;
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

.add-margin-top {
  margin-top: 10px;
}
</style>