<template>
  <div class="full-width flex-center flex-column main-page">
    <Landing />

    <More />

    <LanguageComponent
      v-for="(item, index) of appsPart1"
      :key="`section-1-${item.languageId}`"
      :left="index % 2 != 0"
      :languageId="item.languageId"
      :imageId="item.imageId"
      :content="item.content"
      :notReady="item.notReady"
      :githubLink="item.githubLink"
    />

    <Break />

    <LanguageComponent
      v-for="(item, index) of appsPart2"
      :key="`section-1-${item.languageId}`"
      :left="index % 2 != 0"
      :languageId="item.languageId"
      :imageId="item.imageId"
      :content="item.content"
      :notReady="item.notReady"
      :githubLink="item.githubLink"
    />

    <About />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Landing from '~/components/Landing.vue'
import More from '~/components/More.vue'
import LanguageComponent from '~/components/LanguageComponent.vue'
import Break from '~/components/Break.vue'
import About from '~/components/About.vue'

@Component({
  components: {
    Landing,
    More,
    LanguageComponent,
    Break,
    About,
  },
})
export default class IndexPage extends Vue {
  appsPart1 = [
    {
      languageId: 'python',
      imageId: 'python',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/python',
      content:
        'Offers the best user input fetching standard library. Prototyping functionality is pretty fast.  Modularization of code could be better. It does not compile apps to executables.',
    },
    {
      languageId: 'nodejs',
      imageId: 'nodejs',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/nodejs',
      content:
        "Modularization of code is the best compared to the all the rest. It's improving on OOP from ES6 version onwards. Fetching user input could be made easier for the developer given it's JS.",
    },
    {
      languageId: 'java',
      imageId: 'java',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/java',
      content:
        'Master of OOP. Downside is  writing a simple app with packages requires a heavy IDE like IntelliJ to set up and compile code.',
    },
    {
      languageId: 'go',
      imageId: 'go',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/go',
      content:
        "Powerful language masked in simple syntax. Great care has to be taken though. Using mod's is the fastest way to create executables. Error handling is completely out of this world.",
    },
  ]

  appsPart2 = [
    {
      languageId: 'rust',
      imageId: 'rust',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/rust',
      content:
        "Great language. Watch out for variable lifespan because they're consumed once so we have to borrow all the time.",
    },
    {
      languageId: 'c++',
      imageId: 'cpp',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/c++',
      content:
        'Beautiful language considering strict typing. Organization of code into headers makes it even better. Could be better in modularization though.',
    },
    {
      languageId: 'r',
      imageId: 'r',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/r',
      content:
        'S4 classes leave alot of room for improvement. It could also run modularized R code without an R specific IDE.',
    },
    {
      languageId: 'dart',
      imageId: 'dart',
      githubLink:
        'https://github.com/EliudArudo/CLI-Practice/tree/master/src/lib/dart',
      content:
        'Java like syntax with Javascript ease of writing code. Ease in modularization of code with the bonus of compiling to native executable in one command. Kudos!',
      notReady: true,
    },
  ]
}
</script>

<style scoped>
</style>
