<template>
  <main>
    <h2>Get in touch</h2>
    <p>If you have any questions for the organisers, or you want to make a suggestion for The Box, please fill in the form below:</p>
    <ContactForm/>
    <p>Or you can find us on:</p>
    <ul>
      <li><a href="https://www.meetup.com/y-open/" target="_blank"><b>Meetup</b></a></li>
      <li><a href="https://twitter.com/YorkshireOPEN" target="_blank"><b>Twitter @YorkshireOPEN</b></a></li>
    </ul>
  </main>
</template>

<script>
import Contact from '~/components/Contact.vue'

export default {
  components: {
    ContactForm: Contact
  }
}
</script>

<style>
</style>
