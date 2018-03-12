<template>
  <div id="outer">
    <header>
      <Menu/>
    </header>
    <nuxt/>
    <footer>
      <Menu/>
    </footer>
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style>
@import "skeleton-css/css/normalize";
@import "skeleton-css/css/skeleton";
</style>

<style lang="scss">
@import "~assets/vars";

body {
  background: url("~assets/leeds.jpg");
  background-size: cover;
  background-attachment: fixed;
  color: $text;
  font-size: 20px;
}
#outer {
  max-width: 800px;
  margin: 0 auto 0 auto;
  padding: 0 1em;
}
a {
  text-decoration: none;
  color: $link;
  &:hover {
    text-decoration: underline;
    color: $link;
  }
}

main {
  > h2 {
    margin-top: 1em;
  }
  > section {
    margin: 2em 0 3em 0;
  }
}

figure {
  float: right;
  margin: 0;
  margin-left: 1em;
  img {
    margin: 0;
    box-shadow: $shadow;
    width: 300px;
    max-width: 40vw;
    border-radius: $radius;
  }
}

// Mobile overrides
@media (max-width: $mobile-width) {
  body {
    font-size: 16px;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.5em;
  }
  h3 {
    font-size: 1.4em;
  }
}
</style>
