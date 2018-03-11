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

body {
  background: url("~assets/leeds.jpg");
  background-size: cover;
  background-attachment: fixed;
  color: white;
  font-size: 20px;
}
@media (max-width: 540px) {
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
#outer {
  max-width: 800px;
  margin: 0 auto 0 auto;
  padding: 0 1em;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
main > h2 {
  margin-top: 1em;
}
main > section {
  margin: 2em 0 3em 0;
}
figure {
  float: right;
  margin: 0;
  margin-left: 1em;
}
figure img {
  margin: 0;
  box-shadow: 0.4em 0.4em 0.5em rgba(0,0,0,0.3);
  width: 300px;
  max-width: 40vw;
  border-radius: 5px;
}
</style>
