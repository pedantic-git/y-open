<template>
  <main>
    <Logo/>
    <section>
      <h2>Welcome to Yorkshire O.P.E.N!</h2>
      <p>Yorkshire O.P.E.N is a monthly discussion, support and social group for people in or curious about ethically non-monogamous relationships.</p>
      <p>Our discussion meetups are on the first Thursday of every month, in central Leeds, and social events happen from time to time as well.</p>
    </section>
    <section>
      <h2>Upcoming meetups</h2>
      <Events/>
      <p>Or <a href="https://www.meetup.com/y-open/" target="_blank">join us on Meetup</a> to be notified about all our events!</p>
    </section>
    <section>
      <h2>New to the group?</h2>
      <p>We're a friendly and welcoming group, but it makes sense if your first time joining us is somewhat daunting. Here's a quick guide to <router-link to="/what-to-expect">what to expect at an O.P.E.N meetup</router-link>.</p>
      <p>We usually meet at the Cosmopolitan Hotel: here's how to <router-link to="/find-us">find us</router-link>.</p>
    </section>
    <section>
      <h2>Been before?</h2>
      <p>Check out our <router-link to="/members">members' section</router-link> which contains details about our private <b>Facebook group</b>, the <b>library</b> and if you want to help contribute (time or money).</p>
    </section>
    <section id="get-in-touch">
      <h2>Get in touch</h2>
      <p>If you have any questions for the organisers, or you want to make a suggestion for The Box, please fill in the form below:</p>
      <Contact/>
    </section>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Events from '~/components/Events.vue'
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Logo,
    Events,
    Contact
  }
}
</script>

<style>
</style>
