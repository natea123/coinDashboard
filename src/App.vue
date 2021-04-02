<template>
  <div class="hello">
    <div v-if='showAll'>
    <div id="crypto-container" v-for="(value) in cryptos">
      <span class="left">{{ value.name }}</span>
      <span class="right">${{ value.id }}</span>
    </div>
    </div>
    <button v-on:click="showAll = !showAll"> Show All Coins </button>
  <footer>
    <p id="copyright">Copyright 2021 Nate Andrews</p>
    <p id="api">Powered by the CoinGecko API</p>
  </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data: () => ({
    showAll: false,
    cryptos: [],
    errors: []
  }),

  created () {
    axios.get('https://api.coingecko.com/api/v3/coins/list')
      .then(response => {
        this.cryptos = response.data
        console.log(response) // This will give you access to the full object
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    background: #f1f1f1;
  }
/* d. Must have at least 2 ID selectors. */
  div#crypto-container {
    background:white;
    width: 70%;
    margin: 0 auto 4px auto;
    padding: 1em;
    box-shadow: 1px 1px 0 lightgrey;
  }
/* c. Must have 2+ different class selectors. DONE */
  span.left {
    font-weight: bold;
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

  footer p {
    font-weight: bold;
  }
/* b. Must use at least 10 unique adjacent selectors. */
  footer + p {
    text-align: left;
  }

  p + p {
    text-align: right;
  }
</style>
