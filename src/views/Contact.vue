<template>
  <div class="contact">
    <section class="container" v-if="formSubmitted">
      <div>Thank you for contacting me, <span class="name">{{name}}</span>. I have received your message and will get back to you soon.</div>
    </section>

    <form class="container contact-form" :class="{ formSubmitted: formSubmitted }" id="contact-form" v-if="!isLoading">
      <div class="text-danger" v-if="formInvalid">Please fill out all the fields.</div>
      <input type="hidden" v-model="contact_number" v-if="!formSubmitted">
      <div class="column twelve">
        <h1>Contact</h1>
        <div class="row first_row">
          <div class="col-sm-12 single">
            <div><h4>How can I help you?*</h4></div>
            <div class="form-group">
              <div><textarea v-model="message" placeholder="Tell me about the problem you need to solve." class="form-control user-success"></textarea></div>
            </div>
          </div>
        </div>
        <div class="row ">
          <div class="col-sm-12 single">
            <div><h4>How can I contact you?*</h4></div>
          </div>
        </div>
        <div class="row ">
          <div class="col-sm-6 first_col">
            <div class="form-group">
              <div>
                <input v-model="name" placeholder="First &amp; Last Name" type="text" class="form-control" required="required" aria-invalid="true">
              </div>
            </div>
            <div class="form-group">
              <div><input v-model="email" placeholder="Email Address" type="email" class="form-control"></div>
            </div>
          </div>
          <div class="col-sm-6 last_col">
            <div class="form-group">
              <div>
                <input v-model="phone" type="tel" class="form-control" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="required" >
              </div>
            </div>
          </div>
        </div>
        <div class="row last_row">
          <div class="col-md-3 col-lg-2 col-sm-12 last_col">
            <div class="form-group">
              <input class="button dark-huge" v-on:click="submit" type="submit" value="SEND">
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="container" v-if="isLoading">
      <div class="loading-container">
        <div class="loader">
          <svg width="75%"  height="75%"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-coffee" style="background: none;"><defs><linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="10%" stop-color="black" stop-opacity="0"></stop><stop offset="100%" stop-color="white" stop-opacity="1"></stop></linearGradient><mask id="mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100"><rect x="22" y="8" width="56" height="54" fill="url(#gradient)"></rect></mask><path id="steam" d="M0-4c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0 c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9h0c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9" stroke-width="6" stroke-linecap="round" fill="#f00" stroke="#9C8AA5"></path></defs><g mask="url(#mask)"><use x="29" y="1.61378" href="#steam"><animate attributeName="y" calcMode="linear" values="4;-14" keyTimes="0;1" dur="0.5" begin="0s" repeatCount="indefinite"></animate></use><use x="47" y="-4.77245" href="#steam"><animate attributeName="y" calcMode="linear" values="0;-18" keyTimes="0;1" dur="0.25" begin="0s" repeatCount="indefinite"></animate></use><use x="64" y="-16.5793" href="#steam"><animate attributeName="y" calcMode="linear" values="-4;-22" keyTimes="0;1" dur="0.3333333333333333" begin="0s" repeatCount="indefinite"></animate></use></g><path d="M81.2,52.5l-5.2,0V49c0-1.6-1.3-3-3-3H20c-1.6,0-3,1.3-3,3v11.6C17,71.3,25.7,80,36.5,80h20.1 c7.1,0,13.3-3.8,16.7-9.5h8.3c5.2,0,9.3-4.4,9-9.6C90.2,56.1,86,52.5,81.2,52.5z M81.5,67.5h-6.8c0.8-2.2,1.3-4.5,1.3-7v-5h5.5 c3.3,0,6,2.7,6,6S84.8,67.5,81.5,67.5z" fill="#421c52"></path><path d="M78.8,88H19.2c-1.1,0-2-0.9-2-2s0.9-2,2-2h59.5c1.1,0,2,0.9,2,2S79.9,88,78.8,88z" fill="#9C8AA5"></path></svg>
        </div>
        <h4 class="loading-text">SENDING...</h4>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact',
      viewName: 'home',
      externalLinks: [{
        url: 'https://www.linkedin.com/in/dasha-utyuzh-50a63420',
        name: 'LinkedIn'
      }],
      tagline: 'Dasha Utyuzh',
      contact_number: null,
      email: null,
      name: null,
      phone: null,
      message: null,
      formSubmitted: false,
      isLoading: false,
      formInvalid: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      let emailJSscript = document.createElement('script')
      emailJSscript.setAttribute('src', 'https://cdn.emailjs.com/sdk/2.2.4/email.min.js')
      document.head.appendChild(emailJSscript)
    })
  },
  methods: {
    submit () {
      event.preventDefault()
      if (this.email !== null && this.name !== null && this.message !== null && this.phone !== null) {
        this.formInvalid = false
        this.isLoading = true
        this.formSubmitted = false
        emailjs.init('user_rDy0ktiWPEbQ2EIs72yDU')
        this.contact_number = Math.random() * 100000 | 0
        emailjs.send(
          'template_name',//get this from emailjs dashboard
          'template_someid',//get this from emailjs dashboard
          {email: this.email, name: this.name, message: this.message, phone: this.phone}
        ).then((response) => {
          this.formSubmitted = true
          this.isLoading = false
          console.log('SUCCESS You just sent an email...', response)
        }, (error) => {
          console.log('FAILED Throw an error to user...', error)
          this.isLoading = false
        })
      } else {
        this.formInvalid = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  padding-top: 20px;
  &.formSubmitted, &.invalid {
    padding-top: 10px;
  }
}

.loading-container {
  margin: 100px auto;
  text-align: center;
  position: relative;
  width: 200px;
}

.loader {
  display: inline-block;
  width: 100px;
  height: 100px;
}

.loading-text {
  position: relative;
  z-index: 1;
  font-size: 1.1rem;
  text-align: center;
}
.name {
  font-weight: 800;
  font-family: SourceSansPro-Bold;
  color: #421C52;
}

</style>
