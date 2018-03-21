<template>
  <main>
    <h2>What to expect</h2>
    <section>
      <h3>If you're new</h3>
      <figure>
        <img src="~assets/thursday.jpg" alt="Thursday the owl" />
      </figure>
      <p>Turn up between 7 and 7.30 and one of our hosts will welcome you - we're a friendly bunch but we know it can be intimidating to come to a discussion group where some people have been coming for years.</p>
      <p>Look for the sign on the door or our mascot <b>Thursday the owl</b> (pictured) who always comes with us!</p>
      <p>If you'd rather meet one of us face-to-face first, just <nuxt-link to="/contact">get in touch</nuxt-link>.</p>
    </section>
    <section>
      <h3>Meetup format</h3>
      <p>The meetups are relaxed and informal and take place in a hotel environment. No one is ever expected to speak, and we try to give everyone the chance to speak if they would like to. Attendance is usually between 10 and 25 people and we have had new people attending every time.</p>
      <p>The discussion is about all aspects of non-monogamy, and tries to be as inclusive as possible. If you'd like to suggest a topic, you can do so on the Meetup page for the event or in the social network beforehand, or use The Box (see below).</p>
      <p>You don't have to be in a polyamorous or non-monogamous relationship to attend; just respectful towards people who are!</p>
      <p>We have the room booked exclusively from 7pm so we can hear each other!</p>
      <p>We typically have a group discussion between around 7.30 and 9.30, with social time before and after that, but it often depends on how much people want to talk about!</p>
    </section>
    <section>
      <h3>The Box</h3>
      <p><em>The Box</em> comes with us to every meetup. It's a place you can write thoughts or questions anonymously, or if you don't want to speak out loud. These could be contributions to the current discussion, or suggestions for the next month's discussion.</p>
      <p>You can also contribute items for The Box when you RSVP to an event on Meetup or by <nuxt-link to="/contact">sending us an email</nuxt-link>.</p>
      <p>One of the organisers will read out everything in The Box at each meetup, so it's a good way to be heard if you don't want to speak up during the discussion.</p>
    </section>
    <section id="rules">
      <h3>Rules</h3>
      <p>We're an informal discussion and we don't like to have many rules, but since this is a sensitive subject for discussion we have to have a few in order to keep the space safe.</p>
      <ol>
        <li>Please respect the privacy of other members and keep the discussion confidential within the group.</li>
        <li>Please remember that this is a public group and anyone could secretly be a reporter or a spy from your mum. Don't say anything that would cause you major problems if it became public knowledge.</li>
        <li>Don't try to force anyone to speak, and please remember that if you're talking for a long time, people might not get a chance to speak.</li>
        <li>Remember that your version of ethical non-monogamy is only one kind, and respect that other people's may be different to yours. Also please respect that monogamy is an equally valid lifestyle.</li>
        <li>Just because someone is talking a lot doesn't mean they know what they're talking about.</li>
        <li>Please take pronouns seriously.</li>
        <li>Not every month has discussion about sex but if we do discuss it we do it in the second half and you're welcome to leave during the break if you'd prefer not to.</li>
        <li>We take donations to cover the cost of the room, but please don't feel like you have to donate.</li>
      </ol>
    </section>
    <section>
      <h3>Do I need to pay?</h3>
      <p>Short answer: No.</p>
      <p>Hiring the room costs us a small amount each month. if you'd like to contribute to this, the <nuxt-link to="/members#library">O.P.E.N library</nuxt-link> or the Meetup/website running costs, small donations are welcome! You can put cash into The Box or it's possible to <nuxt-link to="/members#donate">donate online</nuxt-link>.</p>
    </section>
    <section>
      <h3>Social events</h3>
      <p>As well as the monthly discussion, we hold regular social events. Newcomers and old-timers are both welcome at these — just look for Thursday the owl to find us!</p>
      <p>Keep an eye on <a href="https://www.meetup.com/y-open/" target="_blank" rel="noopener">Meetup</a> for details.</p>
    </section>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'What to expect'
    }
  }
}
</script>

<style lang="scss">
#rules {
  ol {
    margin: 0 2em;
  }
}
</style>
