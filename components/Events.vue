<template>
  <div id="events">
    <ul>
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
      events: []
    }
  },
  methods: {
    time (event) {
      return moment(event.time, "x").format("ddd D MMM, h.mma")
    }
  },
  mounted () {
    this.$jsonp(JP_URL).then(json => this.events = json.results)
  }
}
</script>
