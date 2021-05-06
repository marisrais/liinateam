<template>
  <div>
  <Header></Header>

  <!--HOW TO CARDS - a three step guide of how the service process works-->
  <section class="steps">
    <div class="how-to-steps">

      <div class="how-to-card">
        <i class="fa fa-mobile" aria-hidden="true"></i>
        <h2>Ota meihin yhteyttä!</h2>
        <p>Soita meille tai lähetä sähköpostia saadaksesi tarjouksen.</p>
      </div>

      <div class="how-to-card">
        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
        <h2>Sovitaan aika!</h2>
        <p>Tarjoamme siivousta aamusta iltaan. Valitse itsellesi paras aika!</p>
      </div>

      <div class="how-to-card">
        <i class="fa fa-check" aria-hidden="true"></i>
        <h2>Aloitetaan työt!</h2>
        <p>Jokainen siivouskohde on meille yhtä tärkeä. Palvelemme tyytyväisyystakuulla.</p>
      </div>
    </div>
  </section>


  <!--TEXT BOX - a small promotional/descriptive text of the service-->
  <section class="text-box">
    <h1>PALVELEMME</h1>
    <p>Jos tarvitset kodinsiivousta, toimistosiivousta tai remontti- sekä rakennusssiivousta, olemme yksinkertaisesti paras- ja kätevin sekä joustavin siivouspalvelu siellä. Tiedämme, että haluat laatua, pysyvyyttä sekä varmuutta siivouspalveluun, samalla kun luotat siihen, että saat siivoojan, joka on perusteellinen ja ammattitaitoinen, kiinnittäen erityistä huomiota yksityiskohtiin. Mikään toimeksianto ei ole meille liian hankala, voimme keskustella erityistoiveista kohdekohtaisesti.</p>
  </section>




  <!--OFFERS - descriptive boxes of what this service has to offer-->
  <section class="offers">

    <div class="row">
      <div class="col">
        <h3>Mikään toimeksianto ei ole meille liian hankala</h3><i class="fa fa-home" aria-hidden="true"></i>
        <p>Siivousapu esim. lapsiperheissä on esimerkki palvelusta, jonka ostaminen lisää monin tavoin perheen yhteistä aikaa sekä parantaa työn- ja perheen yhteensovittamista. Siivouspalvelut on yhtälailla monen kiireisen ihmisen arjen pelastus. </p>
      </div>

      <div class="col">
        <h3>Siivousta aamusta iltaan</h3><i class="fa fa-home" aria-hidden="true"></i>
        <p>Myös yritysten tuotantotiloissa sekä toimistoissa on viihtyisämpää saada tuloksia aikaan, kun siellä on raikkaampi hengittää eivätkä pölykiehkurat tervehdi pöydällä vastaantulijoita.</p>
      </div>

      <div class="col">
        <h3>Siivous aloitetaan puhtaalta pöydältä</h3><i class="fa fa-home" aria-hidden="true"></i>
        <p>Aloitamme siivoustyön tutustumalla kohteeseen paikan päällä ja sovimme siivouskäytännöistä sekä aikatauluista.<br>Siivoustyö alkaa aina kohteen perusteellisella siivouksella.</p>
      </div>
    </div>
  </section>
 <Contact_Box></Contact_Box>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact_Box from "@/components/Contact_Box";

export default {
  name: "Home",
  components: {
    Contact_Box,
    Header,
    Footer
  }
}
</script>

<style>

/*-------HOW TO CARDS--------*/
.steps {
  text-align: center;
  background: #F9FEFF;
  display: flex;
  margin-bottom: 50px;
}
.steps .how-to-steps{
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}
.how-to-card{
  display: inline-block;
  width: calc(100% / 3);
  margin: 0 -2px;
  box-sizing: border-box;
  padding: 40px;

}
/*-------how to card heading--------*/
.how-to-card h2{
  font-size: 19px;
  font-weight: bold;
  padding: 10px;
}
/*-------how to card text--------*/
.how-to-card p{
  color: gray;
  font-size: 15px;
  font-weight: 500;
}
/*-------how to card icons--------*/
.how-to-card i{
  color: #3498db;
  font-size: 40px;
  margin-bottom: 20px;
}


/*-------TEXT-BOX--------*/

/*-------text-box aligment--------*/
.text-box{
  width: 80%;
  margin: auto;
  text-align: center;
  padding-top: 5%;
}
/*-------text-box heading--------*/
.text-box h1{
  font-size: 30px;
  margin-bottom: 20px;


}
/*-------text-box text--------*/
.text-box p{
  text-align: center;
  display: inline-block;
}


/*-------OFFERS--------*/

.offers{
  width: 85%;
  margin: auto;
  text-align: center;
  padding-top: 50px;
}
.offers .row{
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
}
.offers .col{
  flex-basis: 30%;
  background: #F9FEFF;
  border-radius: 15px;
  margin-bottom: 5%;
  padding: 18px 12px;
  box-sizing: border-box;
  transition: 0.5s;
}

.offers .row .col i{
  color: #3498db;
  font-size: 40px;
  margin-bottom: 20px;
  text-decoration: underline;
}

.col:hover{
  box-shadow: 0 0 25px 0px rgba(0,0,0,0.1);
}
@media screen and (max-width: 600px) {
  .how-to-card {
    width: 100%;
  }

  .offers .row {
    margin-top: 5%;
    display: inline-block;
  }

  .text-box p {
    font-size: 16px;
  }
}
</style>
