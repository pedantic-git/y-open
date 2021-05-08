<template>
  <main>
    <h2>Members' page</h2>
    <p>Below you can find out how to help with our running costs, read about our private Facebook group and see what books are in our library.</p>
    <section id="donate">
      <h3>Help with our running costs</h3>
      <p>Yorkshire O.P.E.N doesn't cost too much to run, but we do need to spend a little bit each month on Zoom, and we like to buy books and resources for the library if we get chance.</p>
      <p>We'd also like to give a donation to the Victoria Hotel when the pandemic is over, since none of this is their fault.</p>
      <p>Anything you can spare, either as a monthly donation or as a one-off, will be greatly appreciated. All donations will be spent on Yorkshire O.P.E.N!</p>
      <DonorBox/>
      <p>If you would like to help with running events or with the admin or social media for the group, we'd love to hear more. <nuxt-link to="/contact">Get in touch!</nuxt-link></p> 
    </section>
    <section id="facebook">
      <h3>Private Facebook group</h3>
      <p>As well as our monthly meetups, we keep the discussion going in between with our <em>private</em> Facebook group. We try to keep the membership just to people who have been to meetups, and close friends living in Yorkshire who are likely to come to meetups in the future.</p>
      <p><em>Private</em> means that the only people who can see you're in the group are other people who are already in the group, which hopefully creates a safer environment for people who are not fully out about their relationship status to all their friends.</p>
      <p>You can apply for membership to the group using the link below. Please note that your membership will not be accepted unless you have been to a group or a friend of yours is already in the group. The main reason for this is to try to avoid accidentally letting someone in who might not respect people's privacy.</p>
      <p>
        <b>
          <a href="https://www.facebook.com/groups/yorkshireopen/" target="_blank" rel="noopener">&raquo; Apply to join the Facebook group</a>
        </b>
      </p>
    </section>
    <section id="library">
      <h3>O.P.E.N Library</h3>
      <p>We have a free lending library of books and resources to help with polyamory or relationships in general. You can borrow a book for up to a year as long as we know how to get hold of you to get it back!</p>
      <p>Many of the books have been donated - the presence of a book in our library does not mean we necessarily endorse its contents. Clicking on any book cover below will take you to reviews on Goodreads.</p>
      <p>See below for a list of the books that are currently in our library.</p>
      <p>Please also see <nuxt-link to="/notes/on-franklin-veaux">our note about the author Franklin Veaux</nuxt-link>.</p>
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
