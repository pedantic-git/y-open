<template>
  <div id="donorbox-outer">
    <script src="https://donorbox.org/widget.js" type="text/javascript"></script>
    <iframe src="https://donorbox.org/embed/y-open?hide_donation_meter=true" id="donorbox" seamless="seamless" name="donorbox" frameborder="0" scrolling="no" allowpaymentrequest ></iframe>
  </div>
</template>

<style lang="scss">
#donorbox-outer {
  display: flex;
  justify-content: center;
}

#donorbox {
  margin: 0 auto;
  width: 400px;
  max-width: 100%;
}
</style>
