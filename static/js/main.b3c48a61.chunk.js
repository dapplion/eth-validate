(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e){e.exports={mainnet:{name:"Mainnet",http:"http://my.ethchain.dnp.dappnode.eth:8545",ws:"ws://my.ethchain.dnp.dappnode.eth:8546"},ropsten:{name:"Ropsten",http:"http://my.ropsten.dnp.dappnode.eth:8545",ws:"ws://my.ropsten.dnp.dappnode.eth:8546"},rinkeby:{name:"Rinkeby",http:"http://my.rinkeby.dnp.dappnode.eth:8545",ws:"ws://my.rinkeby.dnp.dappnode.eth:8546"},kovan:{name:"Kovan",http:"http://my.kovan.dnp.dappnode.eth:8545",ws:"ws://my.kovan.dnp.dappnode.eth:8546"}}},123:function(e,t,n){e.exports=n(314)},128:function(e,t,n){},161:function(e,t){},163:function(e,t){},190:function(e,t){},235:function(e,t){},312:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),o=n(114),i=n.n(o),s=(n(128),n(122)),c=n(115),l=n(116),m=n(120),d=n(117),u=n(121),h=n(58),p=n(118),f=n.n(p),v=n(9),g=n.n(v),y=n(119),w=n(56),b=n(57);n(309),n(310),n(312);function k(e){var t=e.activeProviders;return r.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},r.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},"Eth Validate"),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement("span",{className:"p-2 text-dark"},"Active providers:"," ",t.length?t.join(", "):"none"),r.a.createElement("a",{className:"p-2 text-dark",href:"/"},"Docs")))}window.jQuery=window.$=w,window.Popper=b.default;var x={},E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={result:[],activeProviders:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;Promise.all(Object.values(y).map(function(e){var t=new f.a(e.http);return t.eth.net.isListening().then(function(n){if(n)return x[e.name]=t,e.name}).catch(console.error)})).then(function(t){var n=t.filter(function(e){return e});e.setState({activeProviders:n})})}},{key:"onChange",value:function(e){var t,n,a=this,r=e.target.value;r&&r.startsWith("0x")&&(42===r.length&&g.a.isAddress(r)?(this.setState({loading:!0}),(n=r,Promise.all(Object.keys(x).map(function(e){return Promise.all([x[e].eth.getBalance(n).then(g.a.fromWei),x[e].eth.getTransactionCount(n),x[e].eth.getCode(n).then(function(e){return e.length>2})]).then(function(t){var a=Object(h.a)(t,3),r=a[0],o=a[1],i=a[2];return 0!==parseFloat(r)||0!==parseFloat(o)||i?{type:"address",address:n,network:e,balance:r,txCount:o,isContract:i}:null})})).then(function(e){return e.filter(function(e){return e})})).then(function(e){a.setState({result:e,loading:!1})})):66===r.length&&(this.setState({loading:!0}),(t=r,Promise.all(Object.keys(x).map(function(e){return Promise.all([x[e].eth.getTransaction(t),x[e].eth.getBlockNumber()]).then(function(n){var a=Object(h.a)(n,2),r=a[0],o=a[1];return r?{type:"tx",txHash:t,network:e,blockHeight:r.blockNumber?o-r.blockNumber:"pending",from:r.from,to:r.to,value:r.value,gasPrice:r.gasPrice,gasUsed:r.gas}:null})})).then(function(e){return e.filter(function(e){return e})})).then(function(e){a.setState({result:e,loading:!1})})))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{activeProviders:this.state.activeProviders}),r.a.createElement("div",{className:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},r.a.createElement("p",{className:"lead"},"Enter an address, tx hash or token contract from any ethereum chain"),r.a.createElement("div",{className:"input-group mb-3 mx-auto",style:{maxWidth:"700px"}},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter address or Tx hash...",onChange:this.onChange.bind(this)})),this.state.loading?r.a.createElement("h6",null,"Loading..."):null,r.a.createElement("div",null,this.state.result.map(function(e,t){var n=e.network,a=e.type,o=Object(s.a)(e,["network","type"]);return r.a.createElement("div",{key:t,className:"card mx-auto",style:{maxWidth:"700px"}},r.a.createElement("div",{className:"card-body",style:{textAlign:"left"}},r.a.createElement("h5",{className:"card-title"},n," (",a,")"),Object.keys(o).map(function(e,t){return r.a.createElement("p",{key:t,className:"card-text no-bottom"},r.a.createElement("strong",{style:{textTransform:"capitalize"}},e,":")," ",String(o[e]))})))}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,2,1]]]);
//# sourceMappingURL=main.b3c48a61.chunk.js.map