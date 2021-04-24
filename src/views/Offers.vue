<template>
  <Sub_header></Sub_header>

  <!--OFFER FORM-->
  <section class="offer-form">
    <form>
      <h1>LÄHETÄ TARJOUS</h1>
      <div class="form-group">

        <!--full name input fields-->
        <p>NIMI</p>
        <div class="name-input">
          <input type="text" placeholder="Etunimi" />
          <input type="text" placeholder="Sukunimi" />
        </div>
      </div>
      <!--phone number input field-->
      <div class="form-group">
        <p>PUHELIN</p>
        <input type="text" placeholder="Numero"/>
      </div>
      <!--address input field-->
      <div class="form-group">
        <p>SIIVOUSKOHDEN OSOITE</p>
        <input type="text" placeholder="Osoite"/>
      </div>
      <!--square m input field-->
      <div class="form-group">
        <p>SIIVOTTAVA PINTA- ALA (noin m2)</p>
        <input type="text" placeholder="Pinta-ala"/>
      </div>

      <div>
        <p>TOIVOTTU SIIVOUSAJANKOHTA</p>
        <div class="form-choice">
          <label><input type="checkbox" name="name"> <span>Aamu</span></label>
          <label><input type="checkbox" name="name"> <span>Päivä</span></label>
          <label><input type="checkbox" name="name"> <span>Ilta</span></label>
          <label><input type="checkbox" name="name"> <span>Muu</span></label>
        </div>

        <div class="form-choice">
          <p>TOIVOTTU SIIVOUSTAAJUS</p>
          <label><input type="checkbox" name="name"> <span>4 x vko</span></label>
          <label><input type="checkbox" name="name"> <span>3 x vko</span></label>
          <label><input type="checkbox" name="name"> <span>2 x vko</span></label>
          <label><input type="checkbox" name="name"> <span>1 x vko</span></label>
          <label><input type="checkbox" name="name"> <span>Muu</span></label>
        </div>

        <div class="form-choice">
          <p>HALUAN YHTEYTTÄ MIELUITEN</p>
          <label><input type="checkbox" name="name"> <span>Puhelin</span></label>
          <label><input type="checkbox" name="name"> <span>Sähköposti</span></label>
          <label><input type="checkbox" name="name"> <span>Tapaaminen</span></label>
        </div>

      </div>
      <!--additional information input field-->
      <div class="form-group">
        <p>LISÄTIETOJA</p>
        <textarea rows="5"></textarea>
      </div>

    </form>
  </section>
  <Footer></Footer>

</template>

<script>
import Footer from "@/components/Footer";
import Sub_header from "@/components/Sub_header";

export default {
  name: "Offers",
  components: {
    Sub_header,
    Footer
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