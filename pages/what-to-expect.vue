<template>
  <main>
    <h2>What to expect</h2>
    <section>
      <h3>If you're new</h3>
      <figure>
        <img src="~assets/thursday.jpg" alt="Thursday the owl" />
      </figure>
      <p>Turn up between 7 and 7.30pm and one of our hosts will welcome you - we're a friendly bunch but we know it can be intimidating to be a new member of a community where some people have been coming for years.</p>
      <p>If it's an in-person meetup, look for the sign on the door or our mascot <b>Thursday the owl</b> (pictured) who always comes with us!</p>
      <p>If you'd rather meet one of us face-to-face first, please <nuxt-link to="/contact">get in touch</nuxt-link>. We can arrange for someone to meet you at the station or in a familiar place before the meetup begins.</p>
    </section>
    <section>
      <h3>A typical meetup</h3>
      <p>Our meetups are relaxed and take place on Zoom (it would normally be a pub setting). Because we are there to support each other, there is some structure and facilitation but it's very casual and no one is ever expected to speak.</p>
      <p>Normally attendance is between 8 and 15 people. Sometimes it's as high as 25 or 30 but we always manage with any size group!</p>
      <h4><b>7pm</b>: social time</h4>
      <div class="explanation">
        <p>While everyone is arriving and getting our drinks we'll have a chance to chat and do crafts. Feel free to bring your current craft to the Zoom!</p>
      </div>
      <h4><b>7.30pm</b>: introductions and a thinking round</h4>
      <div class="explanation">
        <p>A quick name + pronoun circle to ensure we all know how to address each other, followed by a thinking round:</p>
        <p>The question is "what is on your mind about relationships?" Each person gets the chance to speak once, for as long as you like (which could be not at all). You can speak without interruptions or questions and you can pause as often as you like and for as long as you like. Every other person gives you their attention during this time, safe in the knowledge that when it comes to their turn, they'll have as long as they like to think about their own answer.</p>
        <p>We've tried this before and it's been really well received. And if it sounds a bit scary, remember you can always pass!</p>
      </div>
      <h4><b>8pm</b>: optional break</h4>
      <div class="explanation">
        <p>Sometimes we take a short break if it feels like we need one after the thinking round. Otherwise we go straight into the roundtable chat.</p>
        <p>If there are many people present, sometimes the thinking round continues for a little after the break, and we may even go into another break if we need to.</p>
      </div>
      <h4><b>8.10pm</b>: roundtable chat about a pre-agreed topic</h4>
      <div class="explanation">
        <p>The topic will be agreed in advance on the <nuxt-link to="/members#discord">Discord group</nuxt-link> and will usually be something quite wide-ranging like "Rules".</p>
        <p>This discussion is allowed to wander as much as it likes. It is hopefully as much fun and use for people who have lots to say about the subject as it is for the people who have mostly questions about it.</p>
      </div>
      <h4><b>8.45pm</b>: break / social time</h4>
      <h4><b>9pm</b>: support session</h4>
      <div class="explanation">
        <p>This is a chance for anyone with specific questions, problems or concerns about relationships to raise those and get support from other people present. It's not just for people new to ethical non-monogamy: we all need support from time to time, and those with more experience can share their experience.</p>
      </div>
      <h4><b>9.45pm</b>: social time if you'd like to stay on the call!</h4>
      <h4><b>10pm</b>: close</h4>
    </section>
    <section>
      <h3>The Box</h3>
      <p><em>The Box</em> comes with us to every meetup. It's a place you can write thoughts or questions anonymously, or if you don't want to speak out loud. These could be contributions to the current support session, or suggestions for the next month's roundtable chat.</p>
      <p>You can also contribute items for The Box when you RSVP to an event on Meetup or by <nuxt-link to="/contact">sending us an email</nuxt-link>.</p>
      <p>One of the organisers will read out anything that's in The Box at the start of the support session; so you can put your questions or thoughts in there at any time during the first half.</p>
      <p>You can also submit thoughts and comments directly to an organiser (Quinn or Emily) during the Zoom call using the private chat feature. Be sure to say you'd like your words to be read out as an anonymous comment.</p>
    </section>
    <section id="rules">
      <h3>Rules</h3>
      <p>We're an informal group and we don't like to have many rules, but we have to have a few in order to make sure that this is a safe space for people to talk about their relationships.</p>
      <ol>
        <li>Please respect the privacy of other members and keep the discussion confidential within the group.</li>
        <li>Please remember that this is a public group and anyone could secretly be a reporter or a spy from your mum. Don't say anything that would cause you major problems if it became public knowledge.</li>
        <li>Don't try to force anyone to speak, and please remember that if you're talking for a long time, people might not get a chance to speak. Please help the organisers if they've not spotted that someone is trying to speak.</li>
        <li>[At online meetups:] Don't send private messages to people if you don't know them. This is a group discussion and unexpected private messages can be uncomfortable.</li>
        <li>Remember that your version of ethical non-monogamy is only one kind, and respect that other people's may be different to yours. Also please respect that monogamy is an equally valid lifestyle.</li>
        <li>Just because someone is talking a lot doesn't mean they know what they're talking about.</li>
        <li>Please take pronouns seriously.</li>
        <li>We take donations to cover the cost of the room, but please don't feel like you have to donate.</li>
      </ol>
    </section>
    <section>
      <h3>Do I need to pay?</h3>
      <p>Short answer: No.</p>
      <p>Zoom costs us a small amount each month, and when we start meeting again occasionally in person, we'd like to be able to pay for a room. If you'd like to contribute to this, the <nuxt-link to="/members#library">O.P.E.N library</nuxt-link> or the Meetup/website running costs, small donations are welcome! You can put cash into The Box or it's possible to <nuxt-link to="/members#donate">donate online</nuxt-link>.</p>
    </section>
    <section>
      <h3>Social events</h3>
      <p>As well as the monthly support &amp; community meetup, we hold occasional social events. Newcomers and old-timers are both welcome at these — just look for Thursday the owl to find us!</p>
      <p>Keep an eye on <a href="https://www.meetup.com/y-open/" target="_blank" rel="noopener">Meetup</a> for details.</p>
      <p>Our sibling group Yorkshire Poly Connections holds a regular pub social on the second Friday of every month, also in Leeds. <a href="https://www.facebook.com/groups/2073115902970629/" target="_blank" rel="noopener">Join them over on Facebook!</a></p>
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
.explanation {
  margin-left: 2em;
}
</style>
