<template>
  <div id="logo">
    <img src="~assets/logo.svg" alt="Rainbow heart with infinity symbol">
    <h1><b>Yorkshire</b><br><b>O</b>pen Relationships<br><b>P</b>olyamory &amp;<br><b>E</b>thical<br><b>N</b>on-monogamy</h1>
  </div>
</template>

<style lang="scss">
#logo {
  display: flex;
  justify-content: center;
  margin: 1em 0 2em 0;
  padding: 1em;
  background: rgba(32, 32, 32, 0.5);
  border-radius: 1em;
  white-space: nowrap;
  img {
    margin-right: 1em;
    width: 12em;
    @media (max-width: 540px) {
      width: 7em;
    }
  }
  h1 {
    display: block;
    margin: 0;
  }
}
</style>
