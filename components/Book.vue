<template>
  <a class="book" :href="url" target="_blank">
    <img :src="image" :alt="`cover of ${name}`" />
    <span class="name">{{name}}</span>
    <span class="copies" v-if="copies > 1">({{copies}} copies)</span>
  </a>
</template>

<script>
export default {
  props: ['name', 'goodreads', 'copies', 'image'],
  computed: {
    url () { return `https://www.goodreads.com/book/show/${this.goodreads}` }
  }
}
</script>

<style lang="scss">
@import "~assets/vars";

a.book {
  display: block;
  margin: 0 0.25em 2em 0.25em;
  width: 10em;
  text-align: center;
  line-height: 1.2;
  img {
    height: 10em;
    display: block;
    margin: 0 auto 0.5em auto;
  }
  color: $text;
  span.name {
    font-size: 0.9em;
  }
  span.copies {
    font-size: 0.75em;
    margin-left: 0.25em;
    white-space: nowrap;
  }
}
</style>
