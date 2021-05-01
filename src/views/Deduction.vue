<template>
  <div>
<Sub_header></Sub_header>


  <section class="deduction">
    <div class="row">
      <div class="deduction-col">
<h1>Kotitalousvähennys -45%</h1>
        <p> Kotitalousvähennys tarkoittaa helpotusta veroihin. Kotitalousvähennystä saat, kun ostat esimerkiksi näitä töitä kotiisi: siivous, lastenhoito, asunnon remontit ja tietokoneiden asennukset. Kotitalousvähennystä saat myös töistä vapaa-ajan asunnollasi. Olethan huomioinut, että kaikki siivouskulut ovat vähennyskelpoisia. Voit näin vähentää siivouslaskusi kotitalousvähennyksenä ja saat näin verotuksessa 40% edun. Kotitalousvähennys on 40% työn hinnasta. Vähennyksessä on vuodessa 100 euron omavastuu, joten vähennyksen toteutuva palautusprosentti riippuu töiden kokonaissummasta.</p>
        <a class="ded-btn" href="https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/">LUE LISÄÄ</a>
      </div>
      <div class="deduction-col">
        <img src="../assets/deduction_image.jpg" alt="pilt">
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
  name: "Deduction",
  components: {
    Sub_header,
    Footer
  }
}
</script>

<style scoped>

.deduction{
  width: 90%;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 50px;
  box-sizing: content-box;
}
.deduction-col h1{
  margin-bottom: 2%;
}
.row{
  flex-basis: 45%;
  display: flex;
  padding: 30px 2px;
}
.deduction-col{
  width: 100%;
}
.deduction-col img{
  margin-left: 15%;
  min-width: 300px;
  width: 60%;
}
.ded-btn{
  display: inline-block;
  text-decoration: none;
  color: #3498db;
  padding: 12px 34px;
  border:1px solid #3498db;
  font-size: 13px;
  background: transparent;
  position: relative;
  cursor: pointer;
}
.ded-btn:hover{
  border: 1px solid #3498db;
  background:#3498db;
  transition: 0.5s;
  color: white;
}
.ded-btn{
  margin-top: 3%;
}
@media screen and (max-width: 600px) {
  .row{
    flex-wrap: wrap;
  }
  .deduction-col img{
    margin-left: 0%;
  }
}
</style>