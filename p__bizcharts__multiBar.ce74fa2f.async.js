(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{ERTb:function(o,e,n){"use strict";n.r(e);var t,a,r=n("q1tI"),m=n.n(r),c=n("MuoO"),i=n("LIIa"),d=n("yP6+"),s=n("cQSq"),l=n.n(s),h=[{month:"Jan",Tokyo:7,London:3.9},{month:"Feb",Tokyo:6.9,London:4.2},{month:"Mar",Tokyo:9.5,London:5.7},{month:"Apr",Tokyo:14.5,London:8.5},{month:"May",Tokyo:18.4,London:11.9},{month:"Jun",Tokyo:21.5,London:15.2},{month:"Jul",Tokyo:25.2,London:17},{month:"Aug",Tokyo:26.5,London:16.6},{month:"Sep",Tokyo:23.3,London:14.2},{month:"Oct",Tokyo:18.3,London:10.3},{month:"Nov",Tokyo:13.9,London:6.6},{month:"Dec",Tokyo:9.6,London:4.8}],y=(t=Object(c["connect"])(o=>{var e=o.bizcharts;return e}),t(a=class extends r["PureComponent"]{render(){var o=this.props.description,e=new l.a,n=e.createView().source(h);return n.transform({type:"fold",fields:["Tokyo","London"],key:"city",value:"temperature"}),console.log(n),m.a.createElement(i["a"],{title:"\u67f1\u72b6\u56fe",pathtitles:["Bizchart","\u67f1\u72b6\u56fe"],description:o},m.a.createElement(d["Chart"],{height:400,data:n,forceFit:!0},m.a.createElement(d["Legend"],null),m.a.createElement(d["Axis"],{name:"month"}),m.a.createElement(d["Axis"],{name:"temperature",label:{formatter:o=>`${o}\xb0C`}}),m.a.createElement(d["Tooltip"],{crosshairs:{type:"y"}}),m.a.createElement(d["Geom"],{type:"interval",position:"month*temperature",color:"city",adjust:[{type:"dodge",marginRatio:1/32}]})))}})||a);e["default"]=y}}]);