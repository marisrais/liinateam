<template>
  <footer>
    <div class="footer-content">
      <h3>Liina Team</h3>
      <ul class="contact-list">
        <li><i class="fa fa-mobile" aria-hidden="true"></i>044 - 0401042</li>
        <li><i class="fa fa-envelope" aria-hidden="true"></i>liinansiivous@gmail.com</li>
        <li><i class="fa fa-briefcase" aria-hidden="true"></i>Siivouspalvelu Liina Team - Helsinki</li>
      </ul>
      <p>copyright &copy;2021 Liina Team</p>
      <!-- show logout when authenticated -->
      <a class="loginbtn" v-if="$auth.isAuthenticated" @click="logout">Kirjaudu ulos</a>
    </div>
  </footer>

</template>

<script>

export default {
  name: "Footer",
  components: {
},
methods: {
  // Log the user out
  logout() {
    this.$auth.logout({
      returnTo: window.location.origin
    });
  }
}
}
</script>

<style scoped>

footer{
  background: #101010;
  height: auto;
  width: 100%;
  padding-top: 30px;
  color: white;
}
.footer-content .contact-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-content .contact-list li{
  margin: 0 10px;
}
.footer-content p{
  font-size: 14px;
  color: white;
  text-align: center;
  text-transform: capitalize;
}
.footer-content i{
  margin-right: 20px;
}
.footer-content .loginbtn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
}

@media (max-width:700px) {
  .footer-content .contact-list {
    text-align: center;
    display: block;
    padding: 15px;
  }
}
</style>