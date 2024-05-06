<template>
  <main>
    <h2>Members' page</h2>
    <p>Below you can find out how to help with our running costs, read about our private Facebook group and see what books are in our library.</p>
    <section id="donate">
      <h3>Help with our running costs</h3>
      <p>Yorkshire O.P.E.N doesn't cost too much to run, but we do need to spend a little bit each month on Zoom and Meetup, and we like to buy books and resources for the library if we get chance.</p>
      <p>Anything you can spare, either as a monthly donation or as a one-off, will be greatly appreciated. All donations will be spent on Yorkshire O.P.E.N!</p>
      <DonorBox/>
      <p>If you would like to help with running events or with the admin or social media for the group, we'd love to hear more. <nuxt-link to="/contact">Get in touch!</nuxt-link></p> 
    </section>
    <section id="discord">
      <h3>Discord</h3>
      <p>As well as our monthly meetups, we keep the discussion going in between with our <em>private</em> Discord group.</p>
      <p>Our Discord is for <b>members only</b>: our definition of a member is anyone we've met at one of our meetups (even if it was long ago!) or someone who is considered a partner/connection/love by one of our existing members.</p>
      <p><a href="https://discord.com/">Discord</a> is a community-oriented chat software that can be installed on your computer or mobile, but is also available through any web browser.</p>
      <p>We will share an invite link to the Discord group in each of our support &amp; community events.</p>
      <p>If you've been to a meetup in the past and you would like an invite link at any time, please <nuxt-link to="/contact">get in touch</nuxt-link>.</p>
    </section> 
    <section id="facebook">
      <h3>Facebook: no more</h3>
      <p>We used to have a private group on Facebook. However, the number of members who do not have Facebook accounts made this gradually feel rather exclusionary. We now exclusively meet on Discord between events.</p>
    </section>
    <section id="library">
      <h3>O.P.E.N Library</h3>
      <p>We have a free lending library of books and resources to help with polyamory or relationships in general. You can borrow a book for up to a year as long as we know how to get hold of you to get it back!</p>
      <p>Many of the books have been donated - the presence of a book in our library does not mean we necessarily endorse its contents. Clicking on any book cover below will take you to reviews on Goodreads.</p>
      <p>See below for a list of the books that are currently in our library.</p>
      <p>We're also big fans of the work of <b>Meg-John Barker</b>, and many of <a href="https://www.rewriting-the-rules.com/zines/" target="_blank" rel="noopener">their zines are available free on their website</a>. Particularly relevant to this group are <i>Queer Relationships</i> and <i>Consent Checklist</i>.</p>
      <div id="books">
        <Book v-for="(book, code) in books" :key="code" v-bind="book" />
      </div>
    </section>
  </main>
</template>

<script>
import Book from '~/components/Book.vue'
import DonorBox from '~/components/DonorBox.vue'

import library from '~/assets/library.js'

export default {
  components: {
    Book,
    DonorBox
  },
  data () {
    return {books: library}
  },
  head () {
    return {
      title: 'Members\' page'
    }
  }
}
</script>

<style lang="scss">
div#books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
