<template>
  <main>
    <h2>Find us</h2>
    <p>Our meetups usually take place at the <b><a href="http://www.peelhotels.co.uk/hotels/cosmopolitan-hotel-leeds-yorkshire-england/" target="_blank">Cosmopolitan Hotel</a></b> in Leeds city centre. The hotel is on the corner of Lower Briggate and Swinegate, close to Leeds Bridge, and is very easy to spot.</p>
    <img id="cosmo" src="~assets/cosmo.jpg" alt="View of the Cosmopolitan Hotel" />
    <p>We are a short walk from the railway station (exit through the new south door on the main footbridge, Sovereign Street then Swinegate), from the bus station (walk towards Leeds Minster and then along The Calls) and there are a couple of car parks nearby &mdash; the nearest are <a href="https://www.q-park.co.uk/en-gb/cities/leeds/sovereign-square/" target="_blank">Q-Park Sovereign Square</a> (expensive) and <a href="https://trinityleeds.com/trinity-leeds-car-park" target="_blank">Trinity car park</a> (£4 after 5pm).</p>
    <p>We meet in the conference centre (normally the Pullman room), which is near the hotel reception. Keep an eye out for the sign on the door and for Thursday the owl, or ask for O.P.E.N at the hotel reception and they will guide you to the room.</p>
    <p>We have exclusive use of this room from 7pm until the discussion ends. The venue is accessible, but it does have quite a narrow corridor that might not be suitable for everyone.</p>
    <iframe id="map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2H9JogzFwrlnlDbS5D1hQhw-5REdtD1w&q=Cosmopolitan+Hotel,+Leeds+LS1+4AE&zoom=15" allowfullscreen />
    <p>Sometimes our meetups take place in different venues. <a href="https://www.meetup.com/y-open/" target="_blank">Keep an eye on Meetup</a> for more details.</p>
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
img#cosmo {
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1em;
  box-shadow: $shadow;
}
</style>
