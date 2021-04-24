<template>
  <section class="sub-header">
    <nav>
      <router-link to="/"><img src="../assets/logo3.png" alt="logo"></router-link>
      <div class="nav-links">
        <ul>
          <li><router-link to="/">ETUSIVU</router-link></li>
          <li><router-link to="/services">PALVELUT</router-link></li>
          <li><router-link to="/offers">PYYDÄ TARJOUS</router-link></li>
          <li><router-link to="/deduction">KOTITALOUSVÄHENNYS -45%</router-link></li>
          <li><router-link to="/contact">YHTEYSTIEDOT</router-link></li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Sub_header"
}
</script>

<style scoped>

.sub-header{
  height: 40vh;
  width: 100%;
  background-image: linear-gradient(rgba(2,5,20,0.10),rgba(2,5,20,0.25)), url(../assets/image8.jpg);
  background-position: center;
  background-size: cover;
  text-align: center;
  color: white;

}
.sub-header h1{
  margin-top: 60px;
  margin-bottom: 100px;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links{
  flex: 1;
  padding: 4% 6%;
  text-align: right;
}
nav img {
  width: 190px;
  padding-left: 30px;
  margin-top: 30px;
}
.nav-links ul li {
  list-style: none;
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
}
.nav-links ul li::after{
  content: "";
  width: 0%;
  height: 2px;
  background: #ffffff;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.nav-links ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 19px;
}
.nav-links ul li:hover::after{
  width:100%;
}

@media screen and (max-width: 700px) {
  .sub-header .header-text h1{
    font-size: 30px;
  }
  .sub-header .header-text p{
    font-size: 15px;
  }
 .sub-header{
   height: 60vh;
 }
  nav{
    display: inline-block;
  }

}
</style>