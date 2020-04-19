<template>
  <main>
    <Logo/>
    <section>
      <h2>Welcome to Yorkshire O.P.E.N!</h2>
      <p>We are a support community for people in or curious about ethically non-monogamous relationships.</p>
      <p>We've been going since 2012 and welcome members and newcomers from across Yorkshire and the north of England.</p>
      <p>We normally meet on the <b>first Thursday of every month</b> in central Leeds, but we are <b>currently online</b> because of the ongoing coronavirus pandemic.</p>
    </section>
    <section>
      <h2>Upcoming meetups</h2>
      <p>Here are the next few O.P.E.N events:</p>
      <Events/>
      <p>Or <a href="https://www.meetup.com/y-open/" target="_blank" rel="noopener">join us on Meetup</a> to be notified about all our events!</p>
    </section>
    <section>
      <h2>New to the group?</h2>
      <p>We're a friendly and welcoming group, but it makes sense if your first time joining us is somewhat daunting. Here's a quick guide to <nuxt-link to="/what-to-expect">what to expect at an O.P.E.N meetup</nuxt-link>.</p>
      <p>Because of the ongoing pandemic, we currently meet online using Zoom: here's some information about how to <nuxt-link to="/find-us">find us on Zoom</nuxt-link>.</p>
    </section>
    <section>
      <h2>Been before?</h2>
      <p>Check out our <nuxt-link to="/members">members' section</nuxt-link> which contains details about our private <b>Facebook group</b>, the <b>library</b> and if you want to <b>help contribute</b> (time or money).</p>
    </section>
    <section>
      <h2>Get in touch</h2>
      <p>If you'd like to know more, please fill in the form on our <nuxt-link to="/contact">contact page</nuxt-link> and we'll get back to you.</p>
    </section>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Events from '~/components/Events.vue'

export default {
  components: {
    Logo,
    Events
  }
}
</script>

<style>
</style>
