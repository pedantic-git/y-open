<template>
  <form :action="endpoint" method="POST" id="contact">
    <label for="name">
      <span :class="{visible: name}">Name</span>
      <input type="text" name="name" v-model="name" id="name" placeholder="Name">
    </label>
    <label for="email">
      <span :class="{visible: email}">Email</span>
      <input type="email" name="_replyto" v-model="email" id="email" placeholder="Email">
    </label>
    <label for="message">
      <span :class="{visible: message}">Your message</span>
      <textarea name="message" v-model="message" id="message" placeholder="Your message"></textarea>
    </label>
    <button>Send</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      email: '',
      message: '',
      endpoint: 'https://formspree.io/yopen@owl.me.uk'
    }
  }
}
</script>

<style lang="scss">
#contact {
  border: 1px solid transparentize(white, 0.6);
  border-radius: 5px;
  padding: 0.5em 0;
  display: flex;
  flex-direction: column;
  label {
    margin: 0 0.5em 0 0.5em;
    span {
      color: white;
      display: block;
      height: 0;
      font-size: 0.9em;
      line-height: 1.1em;
      font-weight: normal;
      transition: height 0.2s ease-in-out;
      overflow: hidden;
      &.visible {
        height: 1.1em;
      }
    }
  }
  input, textarea {
    display: block;
    width: 100%;
    background: transparentize(black, 0.7);
    border: none;
    border-bottom: 2px solid transparentize(white, 0.6);
    padding: 0.5em;
    margin-top: 0.5em;
    font-size: 1em;
    font-weight: normal;
    &:focus {
      outline: none;
      border-bottom-color: white;
    }
  }
  ::placeholder {
    color: #aaaaaa;
  }
  textarea {
    min-height: 4em;
  }
  button {
    background: white;
    color: black;
    border: none;
    font-size: 1em;
    margin: 0 0.5em;
    padding: 0;
    text-transform: none;
    img {
      height: 1em;
    }
    &:hover {
      background: linear-gradient(#cccccc, white);
      text-decoration: none;
    }
  }
}
</style>
