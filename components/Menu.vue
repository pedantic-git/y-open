<template>
  <nav id="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/what-to-expect">What to expect</router-link>
    <router-link to="/find-us">Find us</router-link>
    <router-link to="/members">Members</router-link>
    <a href="https://www.meetup.com/y-open/" target="_blank">Meetup <img src="~assets/nw.svg" alt="new window" /></a>
  </nav>
</template>

<style lang="scss">
nav#menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0.5em 0;
  a {
    font-size: 0.9em;
    color: white;
    white-space: nowrap;
    margin: 0.25em 1em;
    &.nuxt-link-exact-active {
      font-weight: bold;
      text-decoration: underline;
    }
    img {
      height: 0.8em;
    }
  }
}
</style>
