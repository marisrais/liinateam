<template>
  <!--CONTACT-->

  <section class="contact">
    <h1>OTA YHTEYTTÄ</h1>
    <div class="center-box">
      <div class="prv">
        <form v-on:submit.prevent="sendEmail">

          <div class="form-group">
            <label>NIMI</label>
            <input type="text" placeholder="Nimi" required v-model="name">
          </div>

          <div class="form-group">
            <label>SÄHKÖPOSTI</label>
            <input type="text" placeholder="Sähköposti" required v-model="email">
          </div>

          <div class="form-group">
            <label>PUHELIN</label>
            <input type="number" placeholder="Puhelin" required v-model="phone">
          </div>
          <div class="form-group">
            <label>AIHE</label>
            <input type="text" placeholder="Aihe" required v-model="subject">
          </div>

          <div class="message">
            <label>VIESTI</label>
            <textarea placeholder="Viesti" required v-model="message"></textarea>
          </div>
          <button class="submit_btn" type="submit">Lähetä</button>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "Contact",
  components: {
  },
  data: function() {
    return {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    }
  },
  methods: {
    sendEmail: async function () {
      let contactInfo = {
        "name": this.name,
        "phone": this.phone,
        "email": this.email,
        "subject": this.subject,
        "message": this.message,
      };
      try {
        const sendEmailRequest = await fetch('https://lteambackend.herokuapp.com/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactInfo),
        });
        let sendEmailResponse = await sendEmailRequest.json();
        console.log("result" + JSON.stringify(sendEmailResponse));
        return
      } catch (e){
        console.log(e)
      }
    }
  }
}

</script>

<style scoped>
.center-box{
  margin-top: 50px;
}
.center-box .prv{
  width: 50%;
  padding: 30px;
}
.center-box .prv form{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.contact .center-box .prv{
  margin: auto;
}
.center-box .prv form .form-group{
  width: 48%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.center-box .prv form .form-group input{
  width: 100%;
  border: 1px solid black;
  padding: 20px 10px;
}
.center-box .prv form label{
  font-weight: bold;
  margin-bottom: 10px;
}
.center-box .prv .message{
  width: 100%;
}
.center-box .prv .message textarea{
  width: 100%;
  height: 100px;
  padding: 15px;
  font-size: 16px;
  margin-top: 10px;
}

.submit_btn:hover {
  opacity: 10;}

.submit_btn {
  background-color: #3498db;
  color: white;
  padding: 12px 34px;
  border: none;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 1;
  transition: 0.3s;
}
.submit_btn:hover {
  opacity: 0.6}

.contact h1 {
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
}
@media screen and (max-width: 600px) {
  .center-box .prv form .form-group{
    width: 100%;
    display: flex;
  }
  .center-box .prv{
    width: 100%;
  }
  .contact h1 {
    padding-bottom: 15px;
  }
}
</style>