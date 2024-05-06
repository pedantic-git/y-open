<template>
  <main>
    <h2>Zoom details</h2>
    <p>When the pandemic began, we switched our <b>support &amp; community</b> events from meeting in person to meeting online on <b><a href="https://zoom.us/" target="_blank" rel="noopener">Zoom</a></b>. We discovered that this led to greater accessibility and a sense of community continuity for members and so for the time being we are continuing to meet online. Even if we do add in-person events back into the mix, they will not be every time: online is here to stay!</p>
    <p>
      <a class="logo" href="https://zoom.us/" target="_blank" rel="noopener">
        <img alt="Zoom logo" src="~/assets/zoom-logo.svg" />
      </a>
    </p>
    <p>Zoom is videoconferencing software you have probably heard of! You can <a href="https://zoom.us/download" target="_blank" rel="noopener">download and install</a> the software on PC, Mac, iPhone, iPad or Android.</p>
    <p>The link to the call will be posted in the event page on Meetup well in advance of the call. You will need to have listed yourself as attending the event to be able to see it (feel free to use any name you feel comfortable with!) Look for the section marked "Online event" - it's on the right hand side on a computer and near the top on a mobile - and click the link. You can find the Meetup event pages for our next few events below (some of these may be in-person socials, so please read the descriptions):</p>
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
