<template>
  <div>
  <Sub_header></Sub_header>
  <!--OFFER FORM-->
  <section class="offer-form">
    <form v-on:submit.prevent="sendOffers">
      <h1>LÄHETÄ TARJOUS</h1>
      <div class="form-group">

        <!--full name input fields-->
        <p>NIMI</p>
        <div class="name-input">
          <input type="text" placeholder="Etunimi" required v-model="firstname"/>
          <input type="text" placeholder="Sukunimi" required v-model="surname"/>
        </div>
      </div>
      <!--phone number input field-->
      <div class="form-group">
        <p>PUHELIN</p>
        <input type="text" placeholder="Numero" required v-model="phone"/>
      </div>
      <!--address input field-->
      <div class="form-group">
        <p>SIIVOUSKOHDEN OSOITE</p>
        <input type="text" placeholder="Osoite" required v-model="address"/>
      </div>
      <!--square m input field-->
      <div class="form-group">
        <p>SIIVOTTAVA PINTA- ALA (noin m2)</p>
        <input type="text" placeholder="Pinta-ala" required v-model="size"/>
      </div>

      <div>
        <p>TOIVOTTU SIIVOUSAJANKOHTA</p>
        <div class="form-choice">
          <label><input type="checkbox" id="Aamu" value="Aamu" v-model="cleaningTimes"> <span>Aamu</span></label>
          <label><input type="checkbox" id="Päivä" value="Päivä" v-model="cleaningTimes"> <span>Päivä</span></label>
          <label><input type="checkbox" id="Ilta" value="Ilta" v-model="cleaningTimes"> <span>Ilta</span></label>
          <label><input type="checkbox" id="Muu" value="Muu" v-model="cleaningTimes"> <span>Muu</span></label>
        </div>

        <div class="form-choice">
          <p>TOIVOTTU SIIVOUSTAAJUS</p>
          <label><input type="checkbox" id="4x" value="4x" v-model="cleaningFrequency"> <span>4 x vko</span></label>
          <label><input type="checkbox" id="3x" value="3x" v-model="cleaningFrequency"> <span>3 x vko</span></label>
          <label><input type="checkbox" id="2x" value="2x" v-model="cleaningFrequency"> <span>2 x vko</span></label>
          <label><input type="checkbox" id="1x" value="1x" v-model="cleaningFrequency"> <span>1 x vko</span></label>
          <label><input type="checkbox" id="Muux" value="Muux" v-model="cleaningFrequency"><span>Muu</span></label>
        </div>

        <div class="form-choice">
          <p>HALUAN YHTEYTTÄ MIELUITEN</p>
          <label><input type="checkbox" id="Puhelin" value="Puhelin" v-model="contactPreference"><span>Puhelin</span></label>
          <label><input type="checkbox" id="Sähköposti" value="Sähköposti" v-model="contactPreference"> <span>Sähköposti</span></label>
          <label><input type="checkbox" id="Tapaaminen" value="Tapaaminen" v-model="contactPreference"> <span>Tapaaminen</span></label>
        </div>

      </div>
      <!--additional information input field-->
      <div class="form-group">
        <p>LISÄTIETOJA</p>
        <textarea required v-model="message" rows="5"></textarea>
      </div>
      <button class="submit_btn">LÄHETÄ LOMAKE</button>
    </form>
  </section>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Sub_header from "@/components/Sub_header";


export default {
  name: "Offers",
  components: {
    Sub_header,
    Footer
  },
  data: function(){
    return {
      firstname: "",
      surname: "",
      phone: "",
      address: "",
      size: "",
      message: "",
      cleaningTimes: [],
      cleaningFrequency: [],
      contactPreference: [],
    }
  },
  methods: {
    sendOffers: async function () {
      let contactData = {
        "firstname": this.firstname,
        "surname": this.surname,
        "phone": this.phone,
        "address": this.address,
        "size": this.size,
        "message": this.message,
        "cleaningTimes": this.cleaningTimes,
        "cleaningFrequency": this.cleaningFrequency,
        "contactPreference": this.contactPreference,
      };
    try {
      const sendEmailRequest = await fetch('https://lteambackend.herokuapp.com/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
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

.offer-form form h1{
  text-align: center;
  margin-bottom: 2%;
}
.offer-form {
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 2%;
}
  form, input, select, textarea{
  font-size: 14px;
  line-height: 22px;
}
form {
  padding: 40px;
}
input, select, textarea {
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 2px;
}
input {
  width: calc(100% - 10px);
  padding: 5px;
}
select {
  width: 100%;
  padding: 7px 0;
}
textarea {
  width: calc(100% - 2px);
  padding: 5px;
}
.form-choice input, .form-choice span {
  width: auto;
  vertical-align: middle;
}
.form-choice input {
  margin: 0;
}
.form-choice span {
  margin: 0 20px 0 5px;
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
@media (min-width: 600px) {
  .name-input {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .name-input input {
    width: calc(50% - 20px);
  }
}
</style>