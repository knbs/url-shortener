<template>
  <div id="app">
    <MainSection @callBack="createUrl"/>
    <ListSection :items="urlList"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ListSection from './components/ListSection.vue'
import MainSection from './components/MainSection.vue'

@Component({
  components: {
    ListSection,
    MainSection
  }
})
export default class App extends Vue {
  private urlList: Array<object> = [];

  mounted () {
    fetch('/api/url')
      .then(async (response) => {
        this.urlList = await response.json()
      })
      .catch(function (err) {
        console.warn('Something went wrong.', err)
      })
  }

  createUrl (fullUrl: string) {
    console.log(fullUrl)
    const urlList = this.urlList

    fetch('/api/url', {
      method: 'POST',
      body: JSON.stringify({ fullUrl }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async function (response: Response) {
      urlList.push(await response.json())
    }).catch(function (err) {
      console.warn('Something went wrong.', err)
    })
  }
}
</script>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6rem;
}

form input {
  font-size: 3rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid black;
}
form button {
  font-size: 3rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid black;
}
.btn-primary {
  background: rgb(83, 83, 255);
}
</style>
