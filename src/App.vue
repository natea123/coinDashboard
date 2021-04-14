<template>
  <div class="root">

    <header> 

      Home

    </header>

      <div id="showall">
        <button v-on:click.prevent="displayCoins" id="showall"> Show All Coins </button>
      </div>
      <form>
        <input v-model="coin" placeholder="Please enter coin id">
        <button @click.prevent="searchCoin(coin); cryptos=null;">Get values</button>
      </form>

    <div v-if="cryptos">
      <div id="crypto-container" v-for="value in cryptos">
        <span class="left">{{ value.name }}</span>
        <span class="right">{{ value.id }}</span>
      </div>
    </div>

    <div v-if="coinInfo">
      <div id="crypto-container">
        <span class="left">Name: {{ coinInfo.name }}</span>
        <span class="right">ID: {{ coinInfo.id }}</span>
        <button v-if="!moreinfo" v-on:click="moreinfo = true">more</button>
        <button v-if="moreinfo" v-on:click="moreinfo = false">less</button>
        <div v-if="moreinfo">
          <span class="right">Price ($): {{ coinInfo.market_data.current_price.usd }}</span>
        </div>
      </div>
    </div>

    <footer>
      <p id="copyright" @mouseover="expandInfo()">Copyright 2021 Nate Andrews</p>
      <p id="copyright" v-show="links">
        <a href="https://www.linkedin.com/in/nandrews94/">LinkedIn</a>
        <a href="https://github.com/natea123" id="github">GitHub</a>
      </p>
      <p id="api" @mouseover="expandInfo()">Powered by the CoinGecko API</p>
      <p id="api" v-show="links">
        <a href="https://www.coingecko.com/en/api">API ref</a>
      </p>

      <form id="sub">
        <input v-model="fname" placeholder="First Name">
        <input v-model="lname" placeholder="Last Name">
        <input v-model="email" placeholder="Email">
         <button @click.prevent="alertUser(fname, lname, email)">Subscribe</button>
      </form>
    </footer>
    
  </div>
</template>

<script>
import axios from 'axios';
import UserInfo from "./main";
export default {
  name: 'root',
  data: () => ({
    showAll: false,
    cryptos: null,
    errors: [],
    coin: '',
    coinInfo: null,
    moreinfo: false,
    links: false,
    fname: '',
    lname: '',
    email: '',
  }),
  methods: {

    // makes call to coingecko and returns specified coin
    searchCoin: function (coin) {
      axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
      .then(response => {
        this.coinInfo = response.data
      })
    },

    // makes call to coingecko and returns all coins
    displayCoins: function() {
      axios.get('https://api.coingecko.com/api/v3/coins/list')
      .then(response => {
        this.cryptos = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    
    // Must have at least one functional and in-use ES6 class in your active codebase.
    alertUser: function(fname, lname, email) {
      const user = new UserInfo(fname, lname, email);
      user.confirmation();
      this.fname = ''
      this.lname = ''
      this.email = ''
    },

    // Toggles visibility of links in footer element
    expandInfo: function() {
      this.links = !this.links;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    background: #f1f1f1;
  }
/* d. Must have at least 2 ID selectors. DONE */
  div#crypto-container {
    background:white;
    width: 70%;
    margin: 0 auto 4px auto;
    padding: 20px;
    box-shadow: 1px 1px 0 lightgrey;
  }
  div#showall { 
    display: grid;    
  }
/* c. Must have 2+ different class selectors. DONE */
  span.left {
    float: left;
  }
  span.right {
    float:right;
  }
/* a. Must use at least 10 descendent selectors. */
  div span {
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
}
  div footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: silver;
    color: white;
  }
  div header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: silver;
    color: white;
  }
  footer p {
    font-weight: bold;
    float: left;
    margin: 10px;
  }
  div button {
    font-weight: bold;
    background-color: lightblue;  
    color: black;  
    font-size: 25px;  
    margin: auto;  
  }

  form input {
    margin: 5px;
  }

  footer form {
    float: right;
    padding: 5px;
  }

  p a {
    margin: 5px;
  }


/* b. Must use at least 10 unique adjacent selectors. */

  div + button {
    display: flex; 
    justify-content: center;
  }
  span + button {
    display: flex;
    justify-content: center;
    font-size: 15px;
  }

  

  
  /* Must have 5 or more pseudo element selector */

  /* Must have 5 or more pseudo class selector DONE */
  button:hover {
    opacity: 50%;
  }

  /* unvisited link */
  a:link {
    color: palegreen;
  }

  /* visited link */
  a:visited {
    color: purple;
  }

  /* mouse over link */
  a:hover {
    color: darkorange;
    font-size: 120%;
  }

  /* selected link */
  a:active {
    color: #0000FF;
  }
</style>
