<template>
  <div>
    <Sub_header></Sub_header>
    <section class="contact">
      <div class="main">
        <h2>HTML Table</h2>

        <table>
          <tr>
            <th>Surname</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Size</th>
            <th>Message</th>
            <th>Cleaning Times</th>
            <th>Cleaning Frequency</th>
            <th>Cleaning Preferance</th>
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
