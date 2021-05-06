<template>
  <div>
    <Sub_header></Sub_header>
    <section class="contact">
      <div class="main">

        <table>
          <tr>
            <th>ETUNIMI</th>
            <th>SUKUNIMI</th>
            <th>PUHELIN</th>
            <th>SIIVOUSKOHDEN OSOITE</th>
            <th>SIIVOTTAVA PINTA- ALA</th>
            <th>VIESTI</th>
            <th>TOIVOTTU SIIVOUSAJANKOHTA</th>
            <th>TOIVOTTU SIIVOUSTAAJUS</th>
            <th>HALUAN YHTEYTTÄ MIELUITEN</th>
          </tr>

          <tr v-for="order in orders" :key="order._id">
            <td>{{order.firstname}}</td>
            <td>{{order.surname}}</td>
            <td>{{order.phone}}</td>
            <td>{{order.address}}</td>
            <td>{{order.size}}</td>
            <td>{{order.message}}</td>
            <td>{{order.cleaningTimes}}</td>
            <td>{{order.cleaningFrequency}}</td>
            <td>{{order.contactPreference}}</td>
          </tr>
        </table>

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

  async mounted() {
    const ordersResponse = await fetch('https://lteambackend.herokuapp.com/orders')
    let ordersResponsejson = await ordersResponse.json();
    console.log(ordersResponsejson);
    this.orders = ordersResponsejson;
  },
  data: function() {
    return {
      orders: [],
    }
  },
}

</script>
<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th{
  background-color: #ddd;
}
tr:hover {
  background-color: #ddd;}

</style>
