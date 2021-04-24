<template>
  <!--NAVIGATION-->
  <section class="header">
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

    <div class="header-text">
      <h1>Liina Team</h1>
      <p>Puhtaus luo arjesta nautinnollisemman!</p>
      <router-link class="lue_lisaa_btn" to="/offers">LUE LISÄÄ</router-link>
    </div>

  </section>
</template>

<!-------JavaScript for Toggle Menu ------>
<script>


export default {
  name: "Header",

}

</script>

<style scoped>

.header {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(2,5,20,0.10),rgba(2,5,20,0.25)), url(../assets/header_image.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 6%;
}
.nav-links{
  flex: 1;
  text-align: right;
}
nav img {
  width: 150px;
}
.nav-links{
  flex: 1;
  text-align: right;
}
.nav-links ul li {
  list-style: none;
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  position: relative;
}
.nav-links ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 19px;
}
.nav-links ul li::after{
  content: "";
  width: 0%;
  height: 2px;
  background: #3498db;
  display: block;
  margin: auto;
  transition: 0.7s;
}
.nav-links ul li:hover::after{
  width:100%;
}
.header-text{
  width: 90%;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.header .header-text h1{
  font-size: 60px;
}
.header .header-text p{
  margin: 10px 0 40px;
  font-size: 19px;
  color: white;
}
.lue_lisaa_btn{
  display: inline-block;
  text-decoration: none;
  color: #ffffff;
  padding: 12px 34px;
  border:1px solid #ffffff;
  font-size: 13px;
  background: transparent;
  position: relative;
  cursor: pointer;
}
.lue_lisaa_btn:hover{
  border: 1px solid #3498db;
  background:#3498db;
  transition: 1s;
}

@media screen and (max-width: 700px) {
  .header .header-text h1{
    font-size: 30px;
  }
  .header .header-text p{
    font-size: 15px;
  }
  .nav-links ul li{
    display: block;
  }

  nav{
    display: inline-block;
  }

}
</style>