webpackJsonp([1],{"9QJG":function(t,e){},CV7b:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"navbar nav-text"},[e("a",{staticClass:"navbar-brand"},[e("img",{attrs:{src:"/static/cabbagelogo.png",width:"30",height:"30"}}),this._v("\n      Cabbage Lookup\n    ")])])}]};var r=a("VU/8")({name:"Navbar",data:function(){return{}}},s,!1,function(t){a("9QJG")},"data-v-e4dc5d62",null).exports,o={name:"App",components:{Navbar:r},data:function(){return{playerName:"",fullStats:[],lifeTimeStats:[],players:[],playerList:[],myChart:[]}},methods:{getPlayerStats:function(t){var e=this;this.isPlayerInList(t)||axios.get("http://localhost:8080/stat/"+t).then(function(t){console.log(t),e.fullStats=t.data,e.message=t.data.player.epicUserHandle,e.players.push(t.data)}),this.playerName=""},removePlayer:function(t){this.$delete(this.players,t)},isPlayerInList:function(t){for(var e=0;e<this.players.length;e++)if(this.players[e].player.epicUserHandle.toUpperCase()===t.toUpperCase())return!0;return!1}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),t._v(" "),a("div",{staticClass:"jumbotron jumbo jumbotron-fluid d-flex align-items-end"},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"input-group col-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.playerName,expression:"playerName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.playerName},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getPlayerStats(t.playerName)},input:function(e){e.target.composing||(t.playerName=e.target.value)}}}),t._v(" "),t._m(1)])])])]),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"row button-row"},[a("button",{staticClass:"btn btn-success btn-lg player-button compare-button",attrs:{type:"button"}},[t._v("Compare")]),t._v(" "),t._l(t.players,function(e,n){return a("div",[a("button",{staticClass:"btn player-button btn-dark btn-lg",attrs:{type:"button"},on:{click:function(e){t.removePlayer(n)}}},[t._v(t._s(e.player.epicUserHandle)+" ×")])])})],2)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center jumbotron-text"},[e("h1",[this._v("Enter Players' Names")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("PC")]),t._v(" "),a("div",{staticClass:"dropdown-menu"},[a("a",{staticClass:"dropdown-item"},[t._v("PC")]),t._v(" "),a("a",{staticClass:"dropdown-item"},[t._v("Xbox")]),t._v(" "),a("a",{staticClass:"dropdown-item"},[t._v("PS")]),t._v(" "),a("a",{staticClass:"dropdown-item"},[t._v("Switch")])])])}]};var l=a("VU/8")(o,i,!1,function(t){a("CV7b")},null,null).exports,c=a("/ocq"),u={render:function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v("Hello world")])},staticRenderFns:[]};var p=a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){a("OeV/")},"data-v-35530cae",null).exports;n.a.use(c.a);var d=new c.a({routes:[{path:"/",name:"HelloWorld",component:p}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:d,components:{App:l,Navbar:r},template:"<App/>"})},"OeV/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d714faccf0402f1f3ad3.js.map