<template>
  <div>
<Sub_header></Sub_header>
  <!--Informative text about the initial review/visit from the company-->
  <section class="deduction">
    <div class="row">
      <div class="deduction-col">
        <h1>ENSIKATSAUS</h1>
        <p>Ensimmäisellä ilmaisella arviokäynnillä kartoitetaan asiakkaan tarpeet sekä toiveet. Kiinteistön yleiset tilat käydään huolellisesti läpi, sekä kirjataan esim. pintamateriaalit, neliöt, mattojen lukumäärät, sekä mahdolliset muut kohteen erityispiirteet mitkä vaikuttavat siivouksen toteuttamiseen.
          Olemme tunnettuja erittäin tarkasta ja järjestelmällisestä tavasta toimia. Tämä nousee esiin jo ensimmäisellä arviokäynnillä. Yksityiskohtien huomioiminen ja asioiden tarkka ja huolellinen käsittely heti alusta alkaen takaavat onnistuneen lopputuloksen.</p>
      </div>
      <div class="deduction-col">
        <img src="../assets/cleaning_image2.jpg" alt="pilt">
      </div>
    </div>
  </section>


  <!--Service cards with names, description and a button that navigates to the offer page-->
  <section class="services">
    <h1>TARJOAMME</h1>

    <div class="cen">

      <div class="service">
        <img class="card-image" src="../assets/home_cleaning.jpg" alt="">
        <h2>Kotisiivoukset</h2>
        <p>Kertaluonteisen kodinpuhdistuksen tavoitteena on puhdistaa kaikki pinnat ja yleiset tilat mahdollisimman hyvin. Yleisellä kotisiivouksella imuroidaan, pestään lattiat, kylpyhuone ja WC. Kotisiivoukseen kuuluu myös tasopintojen, esim. lasipintojen ja muiden kosketuspintojen pyyhintä.</p>
        <router-link class="offer_btn" to="/offers">PYYTÄ TARJOUS</router-link>
      </div>

      <div class="service">
        <img class="card-image" src="../assets/builder_cleaning.jpg" alt="">
        <h2>Rakennussiivoukset</h2>
        <p>Poista rakennusmateriaalit ja roskat turvallisesti. Rakennussiivouksen palveluihin kuuluvat rakennuksen jälkeinen loppusiivous, pintojen ja seinien puhdistus, jätteiden ja roskien poisto, lattian ja maton puhdistus, pesutilojen puhdistus, sekä sisä- ja ulkolasien ja kehysten puhdistus. </p>
        <router-link class="offer_btn" to="/offers">PYYTÄ TARJOUS</router-link>
      </div>

      <div class="service">
        <img class="card-image" src="../assets/office_cleaning.jpg" alt="">
        <h2>Toimistosiivoukset</h2>
        <p>Toimistosiivousasiantuntijamme käyttävät alan standardien mukaisia puhdistusmenetelmiä ja -tuotteita syvän puhdistuksen aikaansaamiseksi, joka todella loistaa. Puhdistamme kaiken auloista, toimistoista, avoimista toimistotiloista, keittiöistä, neuvotteluhuoneista ja muusta.</p>
        <router-link class="offer_btn" to="/offers">PYYTÄ TARJOUS</router-link>
      </div>

      <div class="service">
        <img class="card-image" src="../assets/moving_image.jpg" alt="moving image">
        <h2>Muuttosiivoukset</h2>
        <p>Monet asunto- ja talosopimukset edellyttävät "luuta puhdistamista", kun taas toiset vaativat yksityiskohtaista tarkistusluetteloa, joka kattaa kaiken takasta lattiajalustoihin. Muuttosiivoukseen kuuluu pintojen, lattioiden, kylpyhuonen ja kotikoneiden tarkka siivous.</p>
        <router-link class="offer_btn" to="/offers">PYYTÄ TARJOUS</router-link>
      </div>

      <div class="service">
        <img class="card-image" src="../assets/renovation_cleaning.jpg" alt="">
        <h2>Remonttisiivoukset</h2>
        <p>Puhdistamme asuntosi remontinjälkeisestä pölystä ammattitaidolla, jotta remontoidussa kodissa olisi turvallista. Remonttisiivous sisältää kotisiivous mukaisen perussiivouksen sekä kaikkien pintojen pyyhinnän, jotta pöly ei jää hengitysilmaan.</p>
        <router-link class="offer_btn" to="/offers">PYYTÄ TARJOUS</router-link>
      </div>

      <div class="service">
        <img class="card-image" src="../assets/window_cleaning.jpg" alt="">
        <h2>Ikkunapesut</h2>
        <p>Ikkunoiden puhdistuspaketti sisältää ikkunanpuitteiden, ikkunalautojen, kaltevuuksien ja tarvikkeiden pesemisen. Ikkunoiden pesu sisältää muun muuassa pesu huoneen sisällä ja ulkopuolella. Kaikki likaa ja pöly puhdistetaan koko ikkunan pinnalta.</p>
        <router-link class="offer_btn" to="/offers">PYYTÄ TARJOUS</router-link>
      </div>
    </div>
  </section>
  <br>
  <br>


  <Contact_Box></Contact_Box>
  <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import Sub_header from "@/components/Sub_header";
import Contact_Box from "@/components/Contact_Box";

export default {
  name: "Services",
  components: {
    Contact_Box,
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
  width: 80%;
}

/*-------SERVICES PAGE--------*/
.services{
  background: #DCDCDC;
  text-align: center;
}
.services h2, p{
  color: black;
}
.services h1{
  color: white;
  border-bottom: none;
}
.services p{
  padding-bottom: 15px;
}
.cen{
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
}
.services h1{
  display: inline-block;
  border-bottom: 4px solid #3498db;
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 10px;
  margin-top: 40px;
}
.service{
  display: inline-block;
  width: calc(100% / 3);
  margin: 0 -2px;
  padding: 20px;
  box-sizing: border-box;
  transition: 0.5s;
}
.card-image{
  width: 100%;
  height: 300px;
}
.offer_btn{
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  padding: 15px 34px;
  border:1px solid #ffffff;
  font-size: 14px;
  font-weight: bolder;
  background: transparent;
  position: relative;
  cursor: pointer;
}
.offer_btn:hover{
  border: 1px solid #3498db;
  background:#3498db;
  transition: 1s;
}

.info-col h1{
  margin-bottom: 2%;
}
.service-info .row{
  flex-basis: 45%;
  display: flex;
  padding: 30px 2px;
}
.info-col img{
  margin-left: 15%;
  min-width: 300px;
  width: 60%;
}




@media screen and (max-width: 600px) {
  .service {
    width: 100%;
  }
  .cen{
    padding-bottom: 50px;
  }
  .row{
    flex-wrap: wrap;
  }
  .deduction-col img{
    margin-left: 0%;
  }

}
</style>