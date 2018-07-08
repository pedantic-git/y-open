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
    <fieldset id="purpose">
      <legend class="visible">Are you a:</legend>
      <input type="radio" id="purpose-journalist" name="purpose" value="Journalist" v-model="purpose">
      <label for="purpose-journalist">Journalist/producer</label>
      <input type="radio" id="purpose-researcher" name="purpose" value="Researcher" v-model="purpose">
      <label for="purpose-researcher">Researcher</label>
      <input type="radio" id="purpose-other" name="purpose" value="Other" v-model="purpose">
      <label for="purpose-other">Other</label>
    </fieldset>
    <div id="contact-journalist" v-if="purpose == 'Journalist'">
      <label for="employer">
        <span :class="{visible: employer}">Which publication/programme do you work for?</span>
        <input type="text" name="employer" v-model="employer" id="employer" placeholder="Which publication/programme do you work for?">
      </label>
      <label for="knowledge">
        <span :class="{visible: knowledge}">What do you know about ethical non-monogamy already?</span>
        <textarea name="knowledge" v-model="knowledge" id="knowledge" placeholder="What do you know about ethical non-monogamy already?"></textarea>
      </label>
      <label for="number">
        <span :class="{visible: number}">How many people are you hoping to have involved?</span>
        <input type="text" name="number" v-model="number" id="number" placeholder="How many people are you hoping to have involved?">
      </label>
      <label for="timescale">
        <span :class="{visible: timescale}">What is your timescale?</span>
        <input type="text" name="timescale" v-model="timescale" id="timescale" placeholder="What is your timescale?">
      </label>
      <fieldset id="photographed">
        <legend class="visible">Will people need to be photographed/on camera?</legend>
        <input type="radio" id="photographed-yes" name="photographed" value="Yes" v-model="photographed">
        <label for="photographed-yes">Yes</label>
        <input type="radio" id="photographed-no" name="photographed" value="No" v-model="photographed">
        <label for="photographed-no">No</label>
      </fieldset>
      <fieldset id="compensated">
        <legend class="visible">Will people be compensated?</legend>
        <input type="radio" id="compensated-yes" name="compensated" value="Yes" v-model="compensated">
        <label for="compensated-yes">Yes</label>
        <input type="radio" id="compensated-no" name="compensated" value="No" v-model="compensated">
        <label for="compensated-no">No</label>
      </fieldset>
    </div>
    <div id="contact-researcher" v-if="purpose == 'Researcher'">
      <label for="employer">
        <span :class="{visible: employer}">Which institution do you work for?</span>
        <input type="text" name="employer" v-model="employer" id="employer" placeholder="Which institution do you work for?">
      </label>
      <label for="number">
        <span :class="{visible: number}">How many people are you hoping to have involved?</span>
        <input type="text" name="number" v-model="number" id="number" placeholder="How many people are you hoping to have involved?">
      </label>
      <label for="timescale">
        <span :class="{visible: timescale}">What is your timescale?</span>
        <input type="text" name="timescale" v-model="timescale" id="timescale" placeholder="What is your timescale?">
      </label>
      <fieldset id="photographed">
        <legend class="visible">Will people need to be photographed/on camera?</legend>
        <input type="radio" id="photographed-yes" name="photographed" value="Yes" v-model="photographed">
        <label for="photographed-yes">Yes</label>
        <input type="radio" id="photographed-no" name="photographed" value="No" v-model="photographed">
        <label for="photographed-no">No</label>
      </fieldset>
      <fieldset id="compensated">
        <legend class="visible">Will people be compensated?</legend>
        <input type="radio" id="compensated-yes" name="compensated" value="Yes" v-model="compensated">
        <label for="compensated-yes">Yes</label>
        <input type="radio" id="compensated-no" name="compensated" value="No" v-model="compensated">
        <label for="compensated-no">No</label>
      </fieldset>
    </div>
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
      purpose: 'Other',
      message: '',
      employer: '',
      knowledge: '',
      number: '',
      timescale: '',
      photographed: 'No',
      compensated: 'No',
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
  > label, > fieldset, > div > label, > div > fieldset {
    margin: 0 0.5em 0 0.5em;
    > span, > legend {
      margin-left: 0.5em;
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
    > input[type="radio"] {
      margin: 0 0.25em 0 0.5em;
    }
    > label {
      font-size: 0.9em;
      display: inline;
      font-weight: normal;
      margin-right: 1em;
    }
  }
  > fieldset, > div > fieldset {
    margin-bottom: 0.5em;
  }
  input[type="text"], input[type="email"], textarea {
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
