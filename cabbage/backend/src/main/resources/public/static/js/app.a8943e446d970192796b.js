webpackJsonp([0],{FNxA:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("nav",{staticClass:"navbar nav-text"},[a("a",{staticClass:"navbar-brand"},[a("img",{attrs:{src:"/static/cabbagelogo.png",width:"30",height:"30"}}),this._v("\n      Cabbage Lookup\n    ")]),this._v(" "),a("div",{attrs:{id:"navbarNav"}},[a("ul",{staticClass:"nav justify-content-start mr-auto"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Compare")])]),this._v(" "),a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[this._v("Stat Lookup")])])])])])}]};var n=e("VU/8")({name:"Navbar",data:function(){return{}}},s,!1,function(t){e("WFtw")},"data-v-391f3869",null).exports,i={name:"StatChart",props:{chartId:String,labelList:Array,dataList:Array},data:function(){return{chartId:"",chart:[],chartLabels:[],chartData:[]}},methods:{createChart:function(){var t=document.getElementById(this.chartId);this.chart=new Chart(t,{type:"bar",data:{labels:this.labelList,datasets:[{data:this.dataList,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{title:{display:!0,text:"Total Kills",fontSize:48,fontColor:"white"},scales:{yAxes:[{gridLines:{display:!1,color:"white"},ticks:{beginAtZero:!0,fontColor:"white",fontSize:18}}],xAxes:[{gridLines:{display:!1,color:"white"}}]},legend:{labels:{fontColor:"white",fontSize:18}}}})},updateChart:function(){this.chart.update()}},mounted:function(){this.createChart("chart")}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("canvas",{attrs:{id:"chart"}})},staticRenderFns:[]};var o=e("VU/8")(i,l,!1,function(t){e("FNxA")},"data-v-5647e599",null).exports,c={name:"App",components:{Navbar:n,StatChart:o},data:function(){return{playerName:"",fullStats:[],lifeTimeStats:[],players:[],playerList:[],playerKillList:[],dummyLabels:["this","is","a","test"],dummyData:[1,2,3,4]}},methods:{getPlayerStats:function(t){var a=this;this.isPlayerInList(t)||axios.get("http://localhost:8080/stat/"+t).then(function(t){console.log(t),a.fullStats=t.data,a.message=t.data.player.epicUserHandle,a.players.push(t.data),a.playerList.push(t.data.player.epicUserHandle),a.playerKillList.push(t.data.lifeTimeStatBlock.Kills),a.$refs.killChart.updateChart()}),this.playerName=""},removePlayer:function(t){this.$delete(this.players,t)},isPlayerInList:function(t){for(var a=0;a<this.players.length;a++)if(this.players[a].player.epicUserHandle.toUpperCase()===t.toUpperCase())return!0;return!1}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Navbar"),t._v(" "),e("div",{staticClass:"jumbotron jumbo jumbotron-fluid d-flex align-items-end"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"input-group col-6"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.playerName,expression:"playerName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.playerName},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key,"Enter"))return null;t.getPlayerStats(t.playerName)},input:function(a){a.target.composing||(t.playerName=a.target.value)}}}),t._v(" "),t._m(1)])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row button-row"},[t.players.length>0?e("button",{staticClass:"btn btn-success btn-lg compare-button",attrs:{type:"button"}},[t._v("Compare")]):t._e(),t._v(" "),t._l(t.players,function(a,r){return e("div",[e("button",{staticClass:"btn player-button btn-dark btn-lg",attrs:{type:"button"},on:{click:function(a){t.removePlayer(r)}}},[t._v(t._s(a.player.epicUserHandle)+" ×")])])}),t._v(" "),t._l(t.players,function(a){return e("div",[e("p",[t._v(t._s(a))])])})],2),t._v(" "),e("div",{staticClass:"row"},[e("StatChart",{ref:"killChart",attrs:{chartId:"chart",labelList:t.playerList,dataList:t.playerKillList}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row justify-content-center jumbotron-text"},[a("h1",[this._v("Enter Players' Names")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("PC")]),t._v(" "),e("div",{staticClass:"dropdown-menu"},[e("a",{staticClass:"dropdown-item"},[t._v("PC")]),t._v(" "),e("a",{staticClass:"dropdown-item"},[t._v("Xbox")]),t._v(" "),e("a",{staticClass:"dropdown-item"},[t._v("PS")]),t._v(" "),e("a",{staticClass:"dropdown-item"},[t._v("Switch")])])])}]};var p=e("VU/8")(c,u,!1,function(t){e("tYzT")},null,null).exports,d=e("/ocq"),v={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("Hello world")])},staticRenderFns:[]};var h=e("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(t){e("OeV/")},"data-v-35530cae",null).exports;r.a.use(d.a);var m=new d.a({routes:[{path:"/",name:"HelloWorld",component:h}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:m,components:{App:p,Navbar:n,StatChart:o},template:"<App/>"})},"OeV/":function(t,a){},WFtw:function(t,a){},tYzT:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.a8943e446d970192796b.js.map