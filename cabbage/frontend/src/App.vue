<template>
  <div id="app">
    <Navbar/>
    <div class="jumbotron jumbo jumbotron-fluid d-flex align-items-end">
      <div class="container">
        <div class="row justify-content-center jumbotron-text">
          <h1>Enter Players' Names</h1>
        </div>
        <div class="row justify-content-center">
          <div class="input-group col-6">
            <input type="text" class="form-control" @keyup.enter="getPlayerStats(playerName)" v-model="playerName">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">PC</button>
              <div class="dropdown-menu">
                <a class="dropdown-item">PC</a>
                <a class="dropdown-item">Xbox</a>
                <a class="dropdown-item">PS</a>
                <a class="dropdown-item">Switch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row button-row">
        <button v-if="players.length>0" type="button" class="btn btn-success btn-lg compare-button">Compare</button>
        <div v-for='(player, index) in players'>
          <button v-on:click="removePlayer(index)" type="button" class="btn player-button btn-dark btn-lg">{{ player.player.epicUserHandle }} &times;</button>
        </div>
      </div>
      <div class = "row">
        <StatChart ref ="killChart" chartId="chart" v-bind:labelList="playerList" v-bind:dataList="playerKillList"></StatChart>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import StatChart from './components/StatChart.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    StatChart
  },
  data() {
    return {
      playerName: '',
      fullStats: [],
      lifeTimeStats: [],
      players: [],
      playerList: [],
      playerKillList: [],
      dummyLabels: ["this", "is", "a", "test"],
      dummyData: [1,2,3,4],
    }
  },
  methods: {
    getPlayerStats(playerName) {
      if (!this.isPlayerInList(playerName)) {
        axios.get("http://localhost:8080/stat/" + playerName)
        .then(response => {
          console.log(response);
          this.fullStats = response.data;
          this.message = response.data.player.epicUserHandle;
          this.players.push(response.data);
          this.playerList.push(response.data.player.epicUserHandle);
          this.playerKillList.push(response.data.lifeTimeStatBlock.Kills);
          this.$refs.killChart.updateChart();
        })
      }
      this.playerName = ''
    },
    removePlayer: function(index) {
      this.$delete(this.players, index)
    },
    isPlayerInList: function(nameToGet) {
      for (var i=0; i< this.players.length; i++) {
        if (this.players[i].player.epicUserHandle.toUpperCase() === nameToGet.toUpperCase()) {
          return true
        }
      }
      return false
    },
  },
}
</script>

<style>
#app {
  background-color: #474B4F;
}

.jumbo {
  background-image: url("/static/fortnite-bg2.png");
  background-size: cover;
  height: 500px;
}

.jumbotron-text {
  color: white;
}

.button-row {
  padding-bottom: 20px;
}

.description-text {
  color: white;
}

.player-button {
  margin-right: 10px;
  margin-bottom: 10px;
  color: #86C232;
  background-color: #222629;
}

.button-container {
  flex-direction: column
}

.compare-button {
  background-color: #61892F;
  margin-right: 10px;
  margin-bottom: 10px;
  color: white;
}

.btn:focus, .btn:active {
  outline: none !important;
  box-shadow: none !important;
}

</style>
