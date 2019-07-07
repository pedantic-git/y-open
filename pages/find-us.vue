<template>
  <main>
    <h2>Find us</h2>
    <p>Our meetups usually take place at the <b><a href="https://www.facebook.com/thevictoriahotelleeds/" target="_blank" rel="noopener">Victoria Hotel</a></b> in Leeds city centre. This is a large pub on Great George Street, directly behind Leeds Town Hall.</p>
    <img id="vic" src="~assets/vic.jpg" alt="View of the Victoria Hotel" />
    <p>We are a short walk from the railway station, from Infirmary Street bus station and there are a couple of car parks nearby &mdash; the nearest are <a href="https://www.leeds.gov.uk/parking-roads-and-travel/parking/city-centre-car-parks/international-pool-car-park/" target="_blank" rel="noopener">International Pool</a> (£3) and <a href="https://www.visitleeds.co.uk/thedms.aspx?dms=3&venue=2199626" target="_blank" rel="noopener">The Rose Bowl</a> (£5). There's also some on-street parking which you can now pay for with an app.</p>
    <p>We meet in Bridget's Room, on the left as you enter. Keep an eye out for the sign on the door and for Thursday the owl, or ask for O.P.E.N at the bar  and they will guide you to the room.</p>
    <p>We have exclusive use of this room from 7pm until 10pm. The venue has one step up at the main entrance. A street-level entrance is available; please let us know if you need this.</p>
    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.3627801709376!2d-1.5519707841443462!3d53.800828080076776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795c1d72c4966b%3A0xca64760616357cd3!2sThe+Victoria+Hotel!5e0!3m2!1sen!2suk!4v1551034266160" allowfullscreen />
    <p>Sometimes our meetups take place in different venues. <a href="https://www.meetup.com/y-open/" target="_blank" rel="noopener">Keep an eye on Meetup</a> for more details.</p>
  </main>
</template>

<script>
export default {
  head () {
    return {
      title: 'Find us'
    }
  }
}
</script>

<style lang="scss">
@import "~assets/vars";

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
