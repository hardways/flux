"use strict";(globalThis["webpackChunkflux"]=globalThis["webpackChunkflux"]||[]).push([[5624],{34547:(e,t,a)=>{a.d(t,{Z:()=>l});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"toastification"},[t("div",{staticClass:"d-flex align-items-start"},[t("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:e.variant,size:"1.8rem"}},[t("feather-icon",{attrs:{icon:e.icon,size:"15"}})],1),t("div",{staticClass:"d-flex flex-grow-1"},[t("div",[e.title?t("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:`text-${e.variant}`,domProps:{textContent:e._s(e.title)}}):e._e(),e.text?t("small",{staticClass:"d-inline-block text-body",domProps:{textContent:e._s(e.text)}}):e._e()]),t("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto",on:{click:function(t){return e.$emit("close-toast")}}},[e.hideClose?e._e():t("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},n=[],r=a(47389);const o={components:{BAvatar:r.SH},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},i=o;var d=a(1001),u=(0,d.Z)(i,s,n,!1,null,"22d964ca",null);const l=u.exports},51748:(e,t,a)=>{a.d(t,{Z:()=>l});var s=function(){var e=this,t=e._self._c;return t("dl",{staticClass:"row",class:e.classes},[t("dt",{staticClass:"col-sm-3"},[e._v(" "+e._s(e.title)+" ")]),e.href.length>0?t("dd",{staticClass:"col-sm-9 mb-0",class:`text-${e.variant}`},[e.href.length>0?t("b-link",{attrs:{href:e.href,target:"_blank",rel:"noopener noreferrer"}},[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")]):e._e()],1):e.click?t("dd",{staticClass:"col-sm-9 mb-0",class:`text-${e.variant}`,on:{click:function(t){return e.$emit("click")}}},[t("b-link",[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")])],1):t("dd",{staticClass:"col-sm-9 mb-0",class:`text-${e.variant}`},[e._v(" "+e._s(e.data.length>0?e.data:e.number!==Number.MAX_VALUE?e.number:"")+" ")])])},n=[],r=a(67347);const o={components:{BLink:r.we},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},i=o;var d=a(1001),u=(0,d.Z)(i,s,n,!1,null,null,null);const l=u.exports},35624:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=function(){var e=this,t=e._self._c;return""!==e.getInfoResponse.data?t("b-card",[t("list-entry",{attrs:{title:"Flux owner ZelID",data:e.userconfig.zelid}}),t("list-entry",{attrs:{title:"Status",data:e.getNodeStatusResponse.nodeStatus,variant:e.getNodeStatusResponse.class}}),t("list-entry",{attrs:{title:"Flux Payment Address",data:e.getNodeStatusResponse.data.payment_address}}),e.getInfoResponse.data.balance?t("list-entry",{attrs:{title:"Tier",data:e.getNodeStatusResponse.data.tier}}):e._e(),t("list-entry",{attrs:{title:"Flux IP Address",data:e.getNodeStatusResponse.data.ip}}),t("list-entry",{attrs:{title:"Flux IP Network",data:e.getNodeStatusResponse.data.network}}),t("list-entry",{attrs:{title:"Flux Public Key",data:e.getNodeStatusResponse.data.pubkey}}),e.getNodeStatusResponse.data.collateral?t("div",[t("list-entry",{attrs:{title:"Added Height",number:e.getNodeStatusResponse.data.added_height,href:`https://explorer.runonflux.io/block-index/${e.getNodeStatusResponse.data.added_height}`}}),t("list-entry",{attrs:{title:"Confirmed Height",number:e.getNodeStatusResponse.data.confirmed_height,href:`https://explorer.runonflux.io/block-index/${e.getNodeStatusResponse.data.confirmed_height}`}}),t("list-entry",{attrs:{title:"Last Confirmed Height",number:e.getNodeStatusResponse.data.last_confirmed_height,href:`https://explorer.runonflux.io/block-index/${e.getNodeStatusResponse.data.last_confirmed_height}`}}),t("list-entry",{attrs:{title:"Last Paid Height",number:e.getNodeStatusResponse.data.last_paid_height,href:`https://explorer.runonflux.io/block-index/${e.getNodeStatusResponse.data.last_paid_height}`}}),t("list-entry",{attrs:{title:"Locked Transaction",data:"Click to view",href:`https://explorer.runonflux.io/tx/${e.getNodeStatusResponse.data.txhash}`}})],1):e._e(),t("list-entry",{attrs:{title:"Flux Daemon version",number:e.getInfoResponse.data.version}}),t("list-entry",{attrs:{title:"Protocol version",number:e.getInfoResponse.data.protocolversion}}),t("list-entry",{attrs:{title:"Current Blockchain Height",number:e.getInfoResponse.data.blocks}}),""!==e.getInfoResponse.data.errors?t("list-entry",{attrs:{title:"Error",data:e.getInfoResponse.data.errors,variant:"danger"}}):e._e()],1):e._e()},n=[],r=a(23215),o=a(20629),i=a(34547),d=a(51748),u=a(27616),l=a(39055);const c=a(63005),g={components:{ListEntry:d.Z,BCard:r._,ToastificationContent:i.Z},data(){return{timeoptions:c,callResponse:{status:"",data:""},getNodeStatusResponse:{status:"",data:""},getInfoResponse:{status:"",data:""},connectedPeers:[],incomingConnections:[],filterConnectedPeer:""}},computed:{...(0,o.rn)("flux",["config","userconfig","nodeSection"]),fluxLogTail(){return this.callResponse.data.message?this.callResponse.data.message.split("\n").reverse().filter((e=>""!==e)).join("\n"):this.callResponse.data},connectedPeersFilter(){return this.connectedPeers.filter((e=>!this.filterConnectedPeer||e.ip.toLowerCase().includes(this.filterConnectedPeer.toLowerCase())))},incomingConnectionsFilter(){return this.incomingConnections.filter((e=>!this.filterConnectedPeer||e.ip.toLowerCase().includes(this.filterConnectedPeer.toLowerCase())))}},mounted(){this.daemonGetInfo(),this.daemonGetNodeStatus(),this.getOwnerZelid()},methods:{async getOwnerZelid(){const e=await l.Z.getZelid(),t=e.data.data;"success"===e.data.status&&"string"===typeof t&&this.$store.commit("flux/setUserZelid",t)},async daemonGetInfo(){const e=await u.Z.getInfo();"error"===e.data.status?this.$toast({component:i.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(this.getInfoResponse.status=e.data.status,this.getInfoResponse.data=e.data.data)},async daemonGetNodeStatus(){const e=await u.Z.getFluxNodeStatus();"error"===e.data.status?this.$toast({component:i.Z,props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(this.getNodeStatusResponse.status=e.data.status,this.getNodeStatusResponse.data=e.data.data,"CONFIRMED"===this.getNodeStatusResponse.data.status||"CONFIRMED"===this.getNodeStatusResponse.data.location?(this.getNodeStatusResponse.nodeStatus="Flux is working correctly",this.getNodeStatusResponse.class="success"):"STARTED"===this.getNodeStatusResponse.data.status||"STARTED"===this.getNodeStatusResponse.data.location?(this.getNodeStatusResponse.nodeStatus="Flux has just been started. Flux is running with limited capabilities.",this.getNodeStatusResponse.class="warning"):(this.getNodeStatusResponse.nodeStatus="Flux is not confirmed. Flux is running with limited capabilities.",this.getNodeStatusResponse.class="danger"))}}},h=g;var p=a(1001),f=(0,p.Z)(h,s,n,!1,null,null,null);const m=f.exports},63005:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});const s={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},n={year:"numeric",month:"short",day:"numeric"},r={shortDate:s,date:n}},27616:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(80914);const n={help(){return(0,s.Z)().get("/daemon/help")},helpSpecific(e){return(0,s.Z)().get(`/daemon/help/${e}`)},getInfo(){return(0,s.Z)().get("/daemon/getinfo")},getFluxNodeStatus(){return(0,s.Z)().get("/daemon/getzelnodestatus")},getRawTransaction(e,t){return(0,s.Z)().get(`/daemon/getrawtransaction/${e}/${t}`)},listFluxNodes(){return(0,s.Z)().get("/daemon/listzelnodes")},viewDeterministicFluxNodeList(){return(0,s.Z)().get("/daemon/viewdeterministiczelnodelist")},getFluxNodeCount(){return(0,s.Z)().get("/daemon/getzelnodecount")},getStartList(){return(0,s.Z)().get("/daemon/getstartlist")},getDOSList(){return(0,s.Z)().get("/daemon/getdoslist")},fluxCurrentWinner(){return(0,s.Z)().get("/daemon/fluxcurrentwinner")},getBenchmarks(){return(0,s.Z)().get("/daemon/getbenchmarks")},getBenchStatus(){return(0,s.Z)().get("/daemon/getbenchstatus")},startBenchmark(e){return(0,s.Z)().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark(e){return(0,s.Z)().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockCount(){return(0,s.Z)().get("/daemon/getBlockCount")},getBlockchainInfo(){return(0,s.Z)().get("/daemon/getblockchaininfo")},getMiningInfo(){return(0,s.Z)().get("/daemon/getmininginfo")},getNetworkInfo(){return(0,s.Z)().get("/daemon/getnetworkinfo")},validateAddress(e,t){return(0,s.Z)().get(`/daemon/validateaddress/${t}`,{headers:{zelidauth:e}})},getWalletInfo(e){return(0,s.Z)().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listFluxNodeConf(e){return(0,s.Z)().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start(e){return(0,s.Z)().get("/daemon/start",{headers:{zelidauth:e}})},restart(e){return(0,s.Z)().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon(e){return(0,s.Z)().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon(e,t){return(0,s.Z)().get(`/daemon/rescanblockchain/${t}`,{headers:{zelidauth:e}})},getBlock(e,t){return(0,s.Z)().get(`/daemon/getblock/${e}/${t}`)},tailDaemonDebug(e){return(0,s.Z)().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI(){return(0,s.Z)()},cancelToken(){return s.S}}},39055:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(80914);const n={softUpdateFlux(e){return(0,s.Z)().get("/flux/softupdateflux",{headers:{zelidauth:e}})},softUpdateInstallFlux(e){return(0,s.Z)().get("/flux/softupdatefluxinstall",{headers:{zelidauth:e}})},updateFlux(e){return(0,s.Z)().get("/flux/updateflux",{headers:{zelidauth:e}})},hardUpdateFlux(e){return(0,s.Z)().get("/flux/hardupdateflux",{headers:{zelidauth:e}})},rebuildHome(e){return(0,s.Z)().get("/flux/rebuildhome",{headers:{zelidauth:e}})},updateDaemon(e){return(0,s.Z)().get("/flux/updatedaemon",{headers:{zelidauth:e}})},reindexDaemon(e){return(0,s.Z)().get("/flux/reindexdaemon",{headers:{zelidauth:e}})},updateBenchmark(e){return(0,s.Z)().get("/flux/updatebenchmark",{headers:{zelidauth:e}})},getFluxVersion(){return(0,s.Z)().get("/flux/version")},broadcastMessage(e,t){const a=t,n={headers:{zelidauth:e}};return(0,s.Z)().post("/flux/broadcastmessage",JSON.stringify(a),n)},connectedPeers(){return(0,s.Z)().get(`/flux/connectedpeers?timestamp=${(new Date).getTime()}`)},connectedPeersInfo(){return(0,s.Z)().get(`/flux/connectedpeersinfo?timestamp=${(new Date).getTime()}`)},incomingConnections(){return(0,s.Z)().get(`/flux/incomingconnections?timestamp=${(new Date).getTime()}`)},incomingConnectionsInfo(){return(0,s.Z)().get(`/flux/incomingconnectionsinfo?timestamp=${(new Date).getTime()}`)},addPeer(e,t){return(0,s.Z)().get(`/flux/addpeer/${t}`,{headers:{zelidauth:e}})},removePeer(e,t){return(0,s.Z)().get(`/flux/removepeer/${t}`,{headers:{zelidauth:e}})},removeIncomingPeer(e,t){return(0,s.Z)().get(`/flux/removeincomingpeer/${t}`,{headers:{zelidauth:e}})},adjustCruxID(e,t){return(0,s.Z)().get(`/flux/adjustcruxid/${t}`,{headers:{zelidauth:e}})},adjustKadena(e,t,a){return(0,s.Z)().get(`/flux/adjustkadena/${t}/${a}`,{headers:{zelidauth:e}})},adjustRouterIP(e,t){return(0,s.Z)().get(`/flux/adjustrouterip/${t}`,{headers:{zelidauth:e}})},adjustBlockedPorts(e,t){const a={blockedPorts:t},n={headers:{zelidauth:e}};return(0,s.Z)().post("/flux/adjustblockedports",JSON.stringify(a),n)},adjustAPIPort(e,t){return(0,s.Z)().get(`/flux/adjustapiport/${t}`,{headers:{zelidauth:e}})},adjustBlockedRepositories(e,t){const a={blockedRepositories:t},n={headers:{zelidauth:e}};return(0,s.Z)().post("/flux/adjustblockedrepositories",JSON.stringify(a),n)},getCruxID(){const e={headers:{"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/cruxid",e)},getKadenaAccount(){const e={headers:{"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/kadena",e)},getRouterIP(){const e={headers:{"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/routerip",e)},getBlockedPorts(){const e={headers:{"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/blockedports",e)},getAPIPort(){const e={headers:{"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/apiport",e)},getBlockedRepositories(){const e={headers:{"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/blockedrepositories",e)},getMarketPlaceURL(){return(0,s.Z)().get("/flux/marketplaceurl")},getZelid(){const e={headers:{"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/zelid",e)},getStaticIpInfo(){return(0,s.Z)().get("/flux/staticip")},restartFluxOS(e){const t={headers:{zelidauth:e,"x-apicache-bypass":!0}};return(0,s.Z)().get("/flux/restart",t)},tailFluxLog(e,t){return(0,s.Z)().get(`/flux/tail${e}log`,{headers:{zelidauth:t}})},justAPI(){return(0,s.Z)()},cancelToken(){return s.S}}}}]);