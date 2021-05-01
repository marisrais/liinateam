<template>
  <div>
  <Sub_header></Sub_header>
  <!--CONTACT FORM-->
  <section class="contact">
    <div class="main">
      <div class="contact-form">
        <form v-on:submit.prevent="sendEmail">
          <div class="form-group">
            <label>Nimi</label>
            <input type="text" placeholder="Etu -ja sukunimi" required v-model="name">
          </div>

          <div class="form-group">
            <label>Sähköposti</label>
            <input type="text" placeholder="Sähköposti" required v-model="email">
          </div>

          <div class="form-group">
            <label>Puhelin</label>
            <input type="number" placeholder="Puhelin" required v-model="phone">
          </div>
          <div class="form-group">
            <label>Aihe</label>
            <input type="text" placeholder="Aihe" required v-model="subject">
          </div>

          <div class="message"  >
            <label>Viesti</label>
            <textarea required v-model="message"></textarea>
          </div>
          <button class="submit_btn">LÄHETÄ</button>
        </form>
      </div>

      <div class="contact-details">
        <h1>YHTEYSTIEDOT</h1>
        <ul class="address">
          <li>
            <span><i class="fa fa-mobile" aria-hidden="true"></i></span>
            <p>Puh. 044 - 0401042</p>
          </li>
          <li>
            <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
            <p> liinansiivous@gmail.com</p>
          </li>
          <li>
            <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
            <p>LIINA TEAM, Riskiläkuja 1 A 6, 01450 Vantaa, Y-tunnus: 2294013-2</p>
          </li>
        </ul><br>
        <h4>Ole hyvä ja soita tai lähetä tekstiviesti, niin nähdään ja neuvotellaan teille sopiva ratkaisu!</h4>
      </div>
    </div>
  </section>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Sub_header from "@/components/Sub_header";


export default {
  name: "Contact",
  components: {
    Sub_header,
    Footer
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
        // .. add the rest
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

.main{
  display: flex;
  margin-top: 50px;
  margin-right: 5%;
  margin-left: 5%;
}
.main .contact-form{
  width: 65%;
  padding: 30px;
}
.main .contact-details{
  width: 35%;
  padding: 50px;
}
.main .contact-details h1{
  margin-bottom: 35px;
}
.main .contact-details ul li{
  list-style: none;
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid black;
}
.main .contact-details ul li span{
  width: 9%;
  font-size: 18px;
}
.main .contact-form form{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.main .contact-form form .form-group{
  width: 48%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.main .contact-form form .form-group input{
  width: 100%;
  border: 1px solid black;
  padding: 20px 10px;
}
.main .contact-form form label{
  font-weight: bold;
  margin-bottom: 10px;
}
.main .contact-form .message{
  width: 100%;
}
.main .contact-form .message textarea{
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
.main .contact-details .address li p{
  color: black;
  font-size: 16px;
  font-weight: 500;
}
.contact i{
  color: #3498db;
  font-size: 20px;
  margin-bottom: 10px;
}
@media screen and (max-width: 600px) {
    .main{
      flex-direction: column;
    }

    .main .contact-form{
      width: 100%;
    }
  .main .contact-details{
    width: 100%;
  }
  .main .contact-form from .form-group{
    width: 100%;
  }
  .contact-details .address p{
    padding: 10px;
  }
}
</style>