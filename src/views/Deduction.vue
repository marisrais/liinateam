<template>
<Sub_header></Sub_header>

  <!--household deduction content--->
  <section class="about-us">

    <div class="roww">

      <div class="about-col">
<h1>Kotitalousvähennys -45%</h1>
        <p>Kotitalousvähennys tarkoittaa helpotusta veroihin. Kotitalousvähennystä saat, kun ostat esimerkiksi näitä töitä kotiisi: siivous, lastenhoito, asunnon remontit ja tietokoneiden asennukset. Kotitalousvähennystä saat myös töistä vapaa-ajan asunnollasi.<br><br>Olethan huomioinut, että kaikki siivouskulut ovat vähennyskelpoisia. Voit näin vähentää siivouslaskusi kotitalousvähennyksenä ja saat näin verotuksessa 50 % edun. Kotitalousvähennys on 50 % työn hinnasta. Vähennyksessä on vuodessa 100 euron omavastuu, joten vähennyksen toteutuva palautusprosentti riippuu töiden kokonaissummasta.</p>
        <a class="lue_lisaa_btn ded-btn" href="https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/">LUE LISÄÄ</a>
      </div>
      <div class="about-col">
        <img src="../assets/home_cleaning.jpg" alt="pilt">
      </div>
    </div>
  </section>


  <Footer></Footer>
</template>

<script>
import Footer from "@/components/Footer";
import Sub_header from "@/components/Sub_header";

export default {
  name: "Deduction",
  components: {
    Sub_header,
    Footer
  }
}
</script>

<style scoped>
.about-us{
  width: 90%;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 50px;
  box-sizing: content-box;
}
.roww{
  flex-basis: 45%;
  display: flex;
  padding: 30px 2px;
}
.about-col{
  width: 100%;
}
.about-col img{
  margin-left: 20%;
  min-width: 300px;
  width: 60%;
}
@media screen and (max-width: 600px) {
  .roww{
    flex-wrap: wrap;
  }
  .about-col img{
    margin-left: 0%;

  }
}
</style>