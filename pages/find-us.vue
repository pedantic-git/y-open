<template>
  <main>
    <h2>Zoom details</h2>
    <p>Before this pandemic, our meetups usually took place at the <b><a href="https://www.facebook.com/thevictoriahotelleeds/" target="_blank" rel="noopener">Victoria Hotel</a></b> in Leeds city centre, and we hope to be back there soon.</p>
    <p>Until then, we are meeting on <b><a href="https://zoom.us/" target="_blank" rel="noopener">Zoom</a></b>.</p>
    <p>
      <a class="logo" href="https://zoom.us/" target="_blank" rel="noopener">
        <img alt="Zoom logo" src="~/assets/zoom-logo.svg" />
      </a>
    </p>
    <p>Zoom is videoconferencing software you have probably heard of! You can <a href="https://zoom.us/download" target="_blank" rel="noopener">download and install</a> the software on PC, Mac, iPhone, iPad or Android.</p>
    <p>The link to the call will be posted in the event page on Meetup well in advance of the call. You will need to have listed yourself as attending the event to be able to see it (feel free to use any name you feel comfortable with!) Look for the section marked "Online event" - it's on the right hand side on a computer and near the top on a mobile - and click the link. You can find the Meetup event pages for our next few events below:</p>
    <Events />
    <p>If you have any trouble getting into our Zoom call, <nuxt-link to="/contact">drop the organisers a message</nuxt-link> and we'll try to help you.</p>
  </main>
</template>

<script>
import Events from '~/components/Events.vue'

export default {
  components: {
    Events
  },
  head () {
    return {
      title: 'Zoom details'
    }
  }
}
</script>

<style lang="scss">
@import "~assets/vars";

a.logo {
  img {
    height: 6rem;
  }
}

iframe#map {
  width: 100%;
  height: 450px;
  max-height: 50vh;
  border: none;
  border-radius: 5px;
  margin-bottom: 1em;
  box-shadow: $shadow;
}
img#vic {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1em;
  box-shadow: $shadow;
}
</style>
