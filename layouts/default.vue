<template>
  <div id="outer">
    <nuxt/>
  </div>
</template>

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
</style>
