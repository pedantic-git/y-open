<template>
  <nav id="menu">
    <nuxt-link to="/" exact>Home</nuxt-link>
    <nuxt-link to="/what-to-expect">What to expect</nuxt-link>
    <nuxt-link to="/find-us">Find us</nuxt-link>
    <nuxt-link to="/members">Members</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link>
    <a href="https://www.meetup.com/y-open/" target="_blank">Meetup <img src="~assets/nw.svg" alt="new window" /></a>
  </nav>
</template>

<style lang="scss">
@import "~assets/vars";

nav#menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.5em 0;
  a {
    font-size: 0.9em;
    color: $text;
    white-space: nowrap;
    margin: 0.25em 1em;
    &.nuxt-link-active {
      font-weight: bold;
      text-decoration: underline;
    }
    img {
      height: 0.8em;
    }
  }
}
</style>
