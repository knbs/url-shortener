<template>
  <div class="ListSection">
    <ul>
      <li class="url-item" v-for="item in items" :key="item.shortId">
        <b>Short URL: </b>
        <a :href="'https://pbid.io/'+ item.shortId">
          https://pbid.io/{{ item.shortId }}
        </a> <br/>
        <b>Full URL: </b>
        {{ item.fullUrl }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ListSection extends Vue {
  @Prop({ default: () => [] }) private items!: Array<object>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ListSection {
  margin: auto;
  width: 80%;
  text-align: left;
  font-size: 2rem;
}
.ListSection li {
  list-style-type: none;
  padding: 1rem 2rem;
  border-radius: 1.5rem;
}
.ListSection li:hover {
  background: lightgrey;
}
.ListSection li:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
