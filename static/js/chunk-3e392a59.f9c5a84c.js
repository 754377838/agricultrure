(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e392a59"],{"3b2d":function(t,a,e){"use strict";e("5dbe")},4821:function(t,a,e){},"5dbe":function(t,a,e){},"66c1":function(t,a,e){},"79e8":function(t,a,e){"use strict";e("a784")},"91c5":function(t,a,e){"use strict";e("b91f")},"9ac1":function(t,a,e){"use strict";e("66c1")},a405:function(t,a,e){"use strict";e("4821")},a784:function(t,a,e){},b91f:function(t,a,e){},cd4d:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mybox"},[e("div",{staticClass:"dflex scale_block left_block",staticStyle:{color:"#fff"}},[e("left2",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"drag",attrs:{data:t.leftData1},on:{click:t.handleDragClick}}),e("left",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"drag",staticStyle:{"margin-left":"0.5rem"},attrs:{data:t.leftData2},on:{click:t.handleDragClick}})],1),e("div",{staticClass:"dflex scale_block_r right_block",staticStyle:{color:"#fff"}},[e("right",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"drag",staticStyle:{"margin-right":"0.5rem"},attrs:{data:t.rightData},on:{click:t.handleDragClick}}),e("right2",{directives:[{name:"drag",rawName:"v-drag"}],staticClass:"drag",attrs:{data:t.right2Data},on:{click:t.handleDragClick}})],1),e("div",{staticClass:"dflex scale_block_center btm_block"},[e("Swiper",{attrs:{banners:t.btmData.banners}})],1)])},i=[],l=(e("d81d"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel_custom dflex flex_col"},[e("page-block",{staticClass:"page_block",staticStyle:{"margin-bottom":"10px","padding-bottom":"10px"},attrs:{title:"本年计划产量"}},[e("echartCom",{staticClass:"nmjh_chart",attrs:{chartOpt:t.storageBar2Opt}})],1),e("page-block",{staticClass:"page_block",staticStyle:{"margin-bottom":"10px"},attrs:{title:"生产计划列表"}},[e("div",{staticClass:"store_list"},[e("ul",t._l(t.data.storeList,(function(a,s){return e("li",{key:a.id,class:["store_item",t.ACTIVE===s?"store_item_active":""],on:{click:function(a){return t.handleListChange(s)}}},[t._v(t._s(a.name))])})),0)])])],1)}),n=[],X=e("0256"),o=e("44dd"),r=[500,620,230,380,810,430,195,600,420,700,830,170],c=["1","2","3","4","5","6","7","8","9","10","11","12"],d="#ffad4d",f=function(){var t,a,e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{color:(null===(t=s.storage)||void 0===t?void 0:t.color)||d,grid:{left:"3%",right:"4%",top:"8%",bottom:"4%",containLabel:!0},xAxis:[{type:"category",data:(null===(a=s.storage)||void 0===a?void 0:a.xData)||c,axisLabel:{fontSize:"12",color:"#fff"},axisLine:{show:!0,lineStyle:{color:"#fff"}}}],yAxis:[{show:!0,type:"value",name:"产量/月份",max:1e3,nameTextStyle:{color:"#fff"},color:"#fff",nameLocation:"start",splitLine:{type:"solid",color:"rgba(135,140,147,0.8)"},axisLabel:{fontSize:"12",color:"#fff"},axisLine:{show:!0,lineStyle:{color:"#fff"}}}],series:[{name:"种植比例",type:"bar",stack:"排名",data:(null===(e=s.storage)||void 0===e?void 0:e.storageData1)||r,barWidth:"40%"}]}},_={name:"left",components:{PageBlock:X["a"],echartCom:o["a"]},props:["data"],data:function(){return{ACTIVE:2,storageBar2Opt:{id:"storageBar2Opt",options:f()}}},methods:{handleListChange:function(t){this.ACTIVE=t}}},p=_,m=(e("79e8"),e("2877")),g=Object(m["a"])(p,l,n,!1,null,"6f5ee17a",null),v=g.exports,u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel_custom dflex flex_col"},[e("page-block",{staticClass:"page_block",staticStyle:{"margin-bottom":"10px","padding-bottom":"5px"},attrs:{title:"生产计划数"}},[e("div",{staticClass:"productionPlan_box dflex"},[e("ul",{staticClass:"num_list"},[e("li",{staticClass:"blue"},[t._v("全部")]),e("li",{staticClass:"blue fontFB bold"},[t._v(t._s(t.data.productionPlanNum1))]),e("li",{},[t._v("本年")]),e("li",{staticClass:"fontFB bold"},[t._v(t._s(t.data.productionPlanNum2))])]),e("echartCom",{staticClass:"storage_chart",staticStyle:{flex:"3"},attrs:{chartOpt:t.storagePie2Opt}})],1)]),e("page-block",{staticClass:"page_block dflex flex_col",staticStyle:{"margin-bottom":"10px",height:"16rem"},attrs:{title:"种养比例"}},[e("div",{staticClass:"zy_redio dflex juest_around"},t._l(t.data.zybl,(function(a,s){return e("div",{key:a.name,class:["redio",0===s?"bg1":"bg2",s===t.ACTIVE?0===s?"redio_act":"redio_act2":""],on:{click:function(a){return t.handlezyChange(s)}}},[e("div",{staticClass:"radio_text"},[t._v(t._s(a.name))]),e("div",{class:["radio_text",0===s?"green":"orange"]},[t._v(t._s(a.value)+"%")])])})),0),e("echartCom",{staticClass:"zy_chart",attrs:{chartOpt:t.storageBarOpt,istrigger:t.istrigger}})],1),e("page-block",{staticClass:"page_block",staticStyle:{"margin-bottom":"10px"},attrs:{title:"本年生产计划阶段"}},[e("echartCom",{staticClass:"nmjh_chart",attrs:{chartOpt:t.storePieOpt,istrigger:t.istrigger}})],1)],1)},b=[],x=[{value:36,name:"进行中"},{value:64,name:"已完成"}],h=function(){return{color:["#4899e4","#02b983"],toolbox:{show:!0},title:{text:"完成情况",left:"48%",right:"50%",top:"45%",textAlign:"center",textStyle:{color:"#fff",fontSize:"14",fontWeight:400}},series:[{name:"生产计划数",type:"pie",radius:["35%","57%"],label:{color:"#fff",formatter:"{b}\n{d}%",padding:[0,-15],lineHeight:18,fontSize:"2%"},grid:{left:0,right:0,bottom:"5%",top:"16%",containLabel:!0},labelLine:{length:"2%",length2:"10%",lineStyle:{color:"#fff",shadowColor:"rgba(255, 255, 255, 1)",shadowBlur:5}},data:x}]}},C=[70,45,60,50],y=["小麦","水稻","大豆","玉米"],w="#02b983",j=function(){var t,a,e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{color:(null===(t=s.storage)||void 0===t?void 0:t.color)||w,grid:{left:"3%",right:"4%",top:"8%",bottom:"4%",containLabel:!0},xAxis:[{type:"category",data:(null===(a=s.storage)||void 0===a?void 0:a.xData)||y,axisLabel:{fontSize:"12",color:"#fff"},axisLine:{show:!0,lineStyle:{color:"#fff"}}}],yAxis:[{show:!0,type:"value",name:"比例/品类",max:100,nameTextStyle:{color:"#fff"},color:"#fff",nameLocation:"start",splitLine:{type:"solid",color:"rgba(135,140,147,0.8)"},axisLabel:{fontSize:"12",color:"#fff",formatter:"{value}%"},axisLine:{show:!0,lineStyle:{color:"#fff"}}}],series:[{name:"种植比例",type:"bar",stack:"排名",data:(null===(e=s.storage)||void 0===e?void 0:e.storageData1)||C,barWidth:"20%"}]}},D=[{value:20,name:"产后"},{value:36,name:"产前"},{value:44,name:"产中"}],z=function(){return{color:["rgba(2, 185, 131, 1)","rgba(255, 173, 77, 1)","rgba(72, 153, 228, 1)"],series:[{name:"",type:"pie",zlevel:2,cursor:"default",emphasis:{scale:!1},legendHoverLink:!1,radius:[0,"40%"],center:["50%","55%"],label:{show:!1},labelLine:{show:!1},tooltip:{show:!1},data:D},{name:"title",type:"pie",zlevel:3,emphasis:{scale:!1},legendHoverLink:!1,radius:["50%","70%"],center:["50%","55%"],label:{show:!0,color:"#fff",formatter:"{b}\n{c}%",padding:[0,-30],lineHeight:20},labelLine:{show:!0,length:30,length2:40,lineStyle:{color:"#fff"}},data:D}]}},k={name:"left",components:{PageBlock:X["a"],echartCom:o["a"]},props:["data"],data:function(){return{ACTIVE:0,storagePie2Opt:{id:"storagePie2Opt",options:h()},storageBarOpt:{id:"storageBarOpt",options:j()},storePieOpt:{id:"storePieOpt",options:z()},istrigger:!1}},methods:{handlezyChange:function(t){this.ACTIVE=t,0===t?this.setStorageBarOpt({storage:this.data.storage2}):this.setStorageBarOpt({storage:this.data.storage}),this.istrigger=!this.istrigger},setStorageBarOpt:function(t){this.storageBarOpt.options=j(t)}}},S=k,O=(e("9ac1"),Object(m["a"])(S,u,b,!1,null,"02b11f9a",null)),L=O.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel_custom dflex flex_col"},[e("page-block",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"棚舍情况"}},[e("div",{staticClass:"store_msg"},[e("ul",{staticClass:"store_msg_txt"},[e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍名称：")]),e("span",[t._v(t._s(t.data.zcData.name))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍位置：")]),e("span",[t._v(t._s(t.data.zcData.region))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍大小：")]),e("span",[t._v(t._s(t.data.zcData.dx))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("养殖数量：")]),e("span",[t._v(t._s(t.data.zcData.num))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("室内空气环境：")]),e("span",[t._v(t._s(t.data.zcData.hj))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("温度：")]),e("span",[t._v(t._s(t.data.zcData.wd))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("湿度：")]),e("span",[t._v(t._s(t.data.zcData.sd))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("储粮性质")]),e("span",[t._v(t._s(t.data.zcData.xz))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("储藏方式")]),e("span",[t._v(t._s(t.data.zcData.name))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("储藏条件")]),e("span",[t._v(t._s(t.data.zcData.region))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("拟储藏年限")]),e("span",[t._v(t._s(t.data.zcData.dx))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("粮食收获时间")]),e("span",[t._v(t._s(t.data.zcData.num))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("粮食入库时间")]),e("span",[t._v(t._s(t.data.zcData.hj))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("陈化粮数量（t）")]),e("span",[t._v(t._s(t.data.zcData.wd))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("超期储粮（t）")]),e("span",[t._v(t._s(t.data.zcData.sd))])])])])]),e("page-block",{staticStyle:{"margin-bottom":"10px","padding-bottom":"5px"},attrs:{title:"农户信息"}},[e("div",{staticClass:"nh_box dflex flex_col"},t._l(t.data.adminData,(function(a,s){return e("div",{key:s,staticClass:"admin dflex flex_col"},[e("div",{staticClass:"msg dflex"},[e("div",{staticClass:"img_box"},[e("img",{attrs:{src:a.imgUrl,alt:""}})]),e("ul",{staticClass:"msg_list"},[e("li",[e("span",[t._v("姓名：")]),e("span",[t._v(t._s(a.name))])]),e("li",[e("span",[t._v("性别：")]),e("span",[t._v(t._s(a.sex))])]),e("li",[e("span",[t._v("年龄：")]),e("span",[t._v(t._s(a.age))])]),e("li",[e("span",[t._v("专业：")]),e("span",[t._v(t._s(a.professional))])]),e("li",[e("span",[t._v("种植时间：")]),e("span",[t._v(t._s(a.time))])])])])])})),0)]),e("page-block",{staticStyle:{"margin-bottom":"10px","padding-bottom":"5px"},attrs:{title:"棚舍产量信息"}},[e("div",{staticClass:"dflex flex_col"},[e("div",{staticClass:"store_top dflex"},[e("span",{staticStyle:{"font-size":"1.05rem"}},[t._v("当前产量：")]),e("div",{staticClass:"dflex"},t._l(t.data.storeNum,(function(a,s){return e("span",{key:s,staticClass:"numBlock dflex fontFB"},[t._v(t._s(a))])})),0),e("span",{staticClass:"unit"},[t._v("吨")])])]),e("div",{staticClass:"chart_content dflex flex_col"},[e("div",{staticStyle:{"font-size":"1.05rem"}},[t._v("往期产量：")]),e("div",[e("echartCom",{staticClass:"cl_chart",attrs:{chartOpt:t.storageBar3Opt}})],1)])])],1)},P=[],U=[7,5,6.2,4.5,5],A=["2017","2018","2019","2020","2021"],E="#02b983",N=function(){var t,a,e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{color:(null===(t=s.storage)||void 0===t?void 0:t.color)||E,grid:{left:"3%",right:"4%",top:"8%",bottom:"4%",containLabel:!0},xAxis:[{type:"category",data:(null===(a=s.storage)||void 0===a?void 0:a.xData)||A,axisLabel:{fontSize:"12",color:"#fff"},axisLine:{show:!0,lineStyle:{color:"#fff"}}}],yAxis:[{show:!0,type:"value",name:"吨/年份",max:10,nameTextStyle:{color:"#fff"},color:"#fff",nameLocation:"start",splitLine:{type:"solid",color:"rgba(135,140,147,0.8)"},axisLabel:{fontSize:"12",color:"#fff"},axisLine:{show:!0,lineStyle:{color:"#fff"}}}],series:[{name:"种植比例",type:"bar",stack:"排名",data:(null===(e=s.storage)||void 0===e?void 0:e.storageData1)||U,barWidth:"40%"}]}},T={name:"right",components:{PageBlock:X["a"],echartCom:o["a"]},props:["data"],data:function(){return{storageBar3Opt:{id:"storageBar3Opt",options:N()}}}},$=T,I=(e("a405"),Object(m["a"])($,B,P,!1,null,"ce66c328",null)),H=I.exports,q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"panel_custom dflex flex_col",staticStyle:{width:"395px"}},[e("page-block",{staticStyle:{"margin-bottom":"10px","padding-bottom":"10px"},attrs:{title:"养殖信息"}},[e("div",{staticClass:"store_msg"},[e("div",{staticClass:"yz_msg_box"}),e("div",{staticClass:"store_msg_txt_box"},[e("ul",{staticClass:"store_msg_txt"},[e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍名称：")]),e("span",[t._v(t._s(t.data.zcData.pz))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍位置：")]),e("span",[t._v(t._s(t.data.zcData.qk))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍大小：")]),e("span",[t._v(t._s(t.data.zcData.zq))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("养殖数量：")]),e("span",[t._v(t._s(t.data.zcData.jd))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("室内空气环境：")]),e("span",[t._v(t._s(t.data.zcData.xh))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("温度：")]),e("span",[t._v(t._s(t.data.zcData.stl))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("湿度：")]),e("span",[t._v(t._s(t.data.zcData.time))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚名称：")]),e("span",[t._v(t._s(t.data.zcData.pz))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍位置：")]),e("span",[t._v(t._s(t.data.zcData.qk))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("棚舍大小：")]),e("span",[t._v(t._s(t.data.zcData.zq))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("养殖数量：")]),e("span",[t._v(t._s(t.data.zcData.jd))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("室内空气环境：")]),e("span",[t._v(t._s(t.data.zcData.xh))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("温度：")]),e("span",[t._v(t._s(t.data.zcData.stl))])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("湿度：")]),e("span",[t._v(t._s(t.data.zcData.time))])])])])])]),e("page-block",{staticStyle:{"margin-bottom":"10px","padding-bottom":"5px"},attrs:{title:"健康情况"}},[e("echartCom",{staticClass:"jk_chart",attrs:{chartOpt:t.storagePie3Opt}})],1),e("page-block",{staticStyle:{"margin-bottom":"10px"},attrs:{title:"监测预警"}},[e("ul",{staticClass:"yj"},[e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("温度监测：")]),e("div",{staticClass:"yj_list"},[t._v(t._s(t.data.yjData.wd)+"℃")])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("湿度监测：")]),e("div",[t._v(t._s(t.data.yjData.sd)+"%")])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("氧气浓度：")]),e("div",[t._v(t._s(t.data.yjData.O2)+"%")])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("一氧化碳浓度：")]),e("div",[t._v(t._s(t.data.yjData.CO)+"%")])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("二氧化碳浓度：")]),e("div",{staticClass:"warn"},[t._v(t._s(t.data.yjData.CO2)+"%")])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("氨气浓度：")]),e("div",[t._v(t._s(t.data.yjData.N2)+"%")])]),e("li",{staticClass:"dflex juest_between"},[e("span",[t._v("硫化氢浓度：")]),e("div",[t._v(t._s(t.data.yjData.H2S)+"%")])])])])],1)},V=[],F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-tabs",{attrs:{size:t.size,type:t.type},on:{change:t.callback}},t._l(t.pane,(function(a,s){return e("a-tab-pane",{key:s+1,attrs:{tab:a.tab}},[t._t(a.slot)],2)})),1)],1)},W=[],J={data:function(){return{}},props:{type:{type:String,default:"card"},pane:{type:Array},size:{type:String,default:"small"}},methods:{callback:function(t){this.$emit("changeEve",t)}}},G=J,K=(e("91c5"),Object(m["a"])(G,F,W,!1,null,"2b1e72e4",null)),M=K.exports,R=(e("b0c0"),e("99af"),e("2ef0")),Q=[{value:14,name:"死逃"},{value:8,name:"残疾"},{value:52,name:"健康"},{value:26,name:"生病"},{value:0}],Y=function(){var t,a,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Q=(null===(t=e.jkData)||void 0===t?void 0:t.pieData)||Q;var s=0;return s=Object(R["sum"])(Q.map((function(t){return t.value}))),Q[Q.length-1].value=(null===(a=Q[Q.length-1])||void 0===a?void 0:a.value)||s,{color:["#8b66fb","#02b983","#4899e4","#ee7d77","rgba(0,0,0,0)"],toolbox:{show:!0},title:{text:"100%",left:"49%",right:"50%",top:"54%",textAlign:"center",textStyle:{color:"#fff",fontSize:"22",fontWeight:600,fontFamily:"AgencyFB"},subtext:"健康情况统计",subtextStyle:{color:"#fff",fontSize:"10"}},series:[{name:"生产计划数",type:"pie",startAngle:-180,radius:["60%","100%"],center:["50%","80%"],label:{color:"#fff",formatter:function(t){return t.name?"".concat(t.name,"\n").concat(t.value,"%"):""},padding:[0,-15],lineHeight:18,fontSize:"2%"},labelLine:{length:"1%",length2:"10%",lineStyle:{color:"#fff",shadowColor:"rgba(255, 255, 255, 1)",shadowBlur:5}},data:Q}]}},Z={name:"right",components:{PageBlock:X["a"],tabs:M,echartCom:o["a"]},props:["data"],data:function(){return{pane:[{tab:"全部",slot:"all"},{tab:"小麦",slot:"wheat"},{tab:"玉米",slot:"corn"},{tab:"稻米",slot:"rice"},{tab:"大豆",slot:"soy"},{tab:"花生",slot:"ara"},{tab:"高梁",slot:"sorghum"}],storagePie3Opt:{id:"storagePie3Opt",options:Y()},istrigger:!1}},methods:{handlechangeEve:function(t){this.istrigger=!this.istrigger}}},tt=Z,at=(e("3b2d"),Object(m["a"])(tt,q,V,!1,null,"bc5bab70",null)),et=at.exports,st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",[e("a-carousel",{attrs:{autoplay:""}},[e("div",[e("h3",[t._v("1")])]),e("div",[e("h3",[t._v("2")])]),e("div",[e("h3",[t._v("3")])]),e("div",[e("h3",[t._v("4")])])])],1)])},it=[],lt={components:{},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){}},nt=lt,Xt=Object(m["a"])(nt,st,it,!1,null,"411581c9",null),ot=Xt.exports,rt=e("91b0"),ct={productionPlanNum1:65987,productionPlanNum2:12458,zybl:[{name:"种植比例",value:75},{name:"养殖比例",value:25}],storage:{storageData1:[42,85,43,44],xData:["鸡","鸭","猪","牛"],color:"#ffad4d"},storage2:{storageData1:[70,45,60,50],xData:["小麦","水稻","大豆","玉米"],color:"#02b983"}},dt={storeList:[{id:1,name:"XXXXXXXXXXXXX计划1"},{id:2,name:"XXXXXXXXXXXXXXXXXXXX计划2"},{id:3,name:"XXXXXXXXXXXXX计划3"},{id:4,name:"XXXXXXXXXXXXXXXXXXXX计划4"},{id:5,name:"XXXXXXXXXXXXX计划5"},{id:6,name:"XXXXXXXXXXXXXXXXXXXX计划6"},{id:7,name:"XXXXXXXXXXXXX计划7"},{id:8,name:"XXXXXXXXXXXXXXXXXXXX计划8"},{id:9,name:"XXXXXXXXXXXXX计划9"},{id:10,name:"XXXXXXXXXXXXXXXXXXXX计划10"},{id:11,name:"XXXXXXXXXXXXX计划11"},{id:12,name:"XXXXXXXXXXXXXXXXXXXX计划12"},{id:13,name:"XXXXXXXXXXXXX计划13"},{id:14,name:"XXXXXXXXXXXXXXXXXXXX计划14"},{id:15,name:"XXXXXXXXXXXXX计划15"},{id:16,name:"XXXXXXXXXXXXXXXXXXXX计划16"},{id:17,name:"XXXXXXXXXXXXX计划17"},{id:18,name:"XXXXXXXXXXXXXXXXXXXX计划18"},{id:19,name:"XXXXXXXXXXXXX计划19"},{id:20,name:"XXXXXXXXXXXXXXXXXXXX计划4"},{id:21,name:"XXXXXXXXXXXXX计划5"},{id:22,name:"XXXXXXXXXXXXXXXXXXXX计划6"},{id:23,name:"XXXXXXXXXXXXX计划1"},{id:24,name:"XXXXXXXXXXXXXXXXXXXX计划2"},{id:25,name:"XXXXXXXXXXXXX计划3"},{id:26,name:"XXXXXXXXXXXXXXXXXXXX计划4"},{id:27,name:"XXXXXXXXXXXXX计划5"},{id:28,name:"XXXXXXXXXXXXXXXXXXXX计划6"},{id:29,name:"XXXXXXXXXXXXX计划5"},{id:30,name:"XXXXXXXXXXXXXXXXXXXX计划6"},{id:31,name:"XXXXXXXXXXXXX计划5"},{id:32,name:"XXXXXXXXXXXXXXXXXXXX计划6"}]},ft={zcData:{name:"XXXXXXXX棚舍1",region:"XX省XX市XX区XX号",dx:"XX ㎡",num:"XXXXXXX",hj:"良好",wd:"27°",sd:"无"},adminData:[{name:"张超翔",sex:"男",age:36,professional:"农学",time:"2020-10-28",imgUrl:e("6b77")},{name:"朱子麟",sex:"男",age:"36",time:"2020-10-28",professional:"农学",imgUrl:e("bffd")}],storeNum:"7"},_t={zcData:{pz:"XXX牛",qk:"6个月",zq:"24个月",jd:"仔猪",xh:"10KG/天",stl:"0.01%",time:"2019-12-21"},yjData:{wd:24,sd:20,O2:26,CO:.012,CO2:.31,N2:.001,H2S:2e-4}},pt={banners:[{id:"video_01",imgUrl:e("b7bf")},{id:"video_02",imgUrl:e("1aaf")},{id:"video_03",imgUrl:e("4c2a")},{id:"video_04",imgUrl:e("42f6")},{id:"video_05",imgUrl:e("4575")},{id:"video_06",imgUrl:e("68b1")},{id:"video_07",imgUrl:e("fc3e")},{id:"video_08",imgUrl:e("b7bf")},{id:"video_09",imgUrl:e("1aaf")},{id:"video_10",imgUrl:e("4c2a")},{id:"video_11",imgUrl:e("42f6")},{id:"video_12",imgUrl:e("4575")},{id:"video_13",imgUrl:e("68b1")},{id:"video_14",imgUrl:e("fc3e")}]},mt={name:"company",components:{left:v,left2:L,right:H,right2:et,bottom:ot,Swiper:rt["a"]},data:function(){return{leftData1:ct,leftData2:dt,rightData:ft,right2Data:_t,btmData:pt,bg:e("2847"),POIData:[{lnglat:[116.398823,39.908745],name:"beijin",id:1,style:0},{lnglat:[116.280378,39.923801],name:"beijin",id:1,style:0},{lnglat:[116.31471,39.905895],name:"beijin",id:1,style:0},{lnglat:[116.340974,39.918404],name:"beijin",id:1,style:0},{lnglat:[116.371015,39.894175],name:"beijin",id:1,style:0},{lnglat:[116.436246,39.894175],name:"beijin",id:1,style:0},{lnglat:[116.458219,39.912742],name:"beijin",id:1,style:0},{lnglat:[116.447404,39.920642],name:"beijin",id:1,style:0}]}},mounted:function(){var t=this;this.$nextTick((function(){window.map.initMap(t.bg,t.POIData,t.marks)}))},beforeRouteUpdate:function(t,a,e){e()},beforeDestroy:function(){},methods:{handleDragClick:function(t){}}},gt=mt,vt=(e("f7c6"),Object(m["a"])(gt,s,i,!1,null,"56f82508",null));a["default"]=vt.exports},e1b9:function(t,a,e){},f7c6:function(t,a,e){"use strict";e("e1b9")}}]);