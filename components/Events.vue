<template>
  <div id="events">
    <p v-if="error" class="error">
      Can't get list of meetups from Meetup: are you online?
    </p>
    <ul v-else>
      <li v-for="event in events" :key="event.id">
        <a :href="event.event_url">
          <b>{{time(event)}}:</b>
          {{event.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
const JP_URL = 'https://api.meetup.com/2/events?group_urlname=y-open&page=2'
import moment from 'moment'

export default {
  data () {
    return {
      events: [],
      error: false
    }
  },
  methods: {
    time (event) {
      return moment(event.time, "x").format("ddd D MMM, h.mma")
    }
  },
  mounted () {
    this.$jsonp(JP_URL).then(json => this.events = json.results).catch(error => this.error = true)
  }
}
</script>

<style lang="scss">
@import "~assets/vars";

#events {
  .error {
    color: $error;
    font-weight: bold;
  }
}
</style>
