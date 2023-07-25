import{_ as d,a as i,c as D,k as y,b as o,w as t,f as l,u,t as C,h as F,i as s}from"./app.d3fafe5c.js";const h={name:"LibValidationCountdown",props:{time:{type:Number,default:60}},data(){return{disabled:!1,text:"获取验证码",timer:null}},mounted(){this.$el.children[0].addEventListener("click",()=>{this.start()})},methods:{start(){this.$emit("change",!1),this.disabled=!0,this.countDown=this.time,this.text=`${this.countDown}秒后重新获取`,this.timer=setInterval(()=>{this.countDown--,this.text=`${this.countDown}秒后重新获取`,this.countDown===0&&(clearInterval(this.timer),this.text="重新获取验证码",this.disabled=!1,this.$emit("change",!0))},1e3)},clearTimer(){clearInterval(this.timer),this.disabled=!1,this.text="获取验证码"}}};function _(c,r,a,n,e,p){return i(),D("div",null,[y(c.$slots,"default",{text:e.text,disabled:e.disabled})])}const A=d(h,[["render",_]]);const m={class:"demoFull flex"},b=["disabled"],f={__name:"index",setup(c){const r=a=>{alert(a)};return(a,n)=>(i(),D("div",m,[o(A,{onChange:r,time:3},{default:t(({text:e,disabled:p})=>[l("button",{class:"btn",disabled:p,style:u({cursor:p?"not-allowed":"pointer"})},C(e),13,b)]),_:1})]))}},x=d(f,[["__scopeId","data-v-94d2fed5"]]),v=l("h1",{id:"validationcountdown",tabindex:"-1"},[s("ValidationCountdown "),l("a",{class:"header-anchor",href:"#validationcountdown","aria-hidden":"true"},"#")],-1),w=l("p",null,[l("a",{href:"https://gitee.com/lengyibai/lib3-component-packages/raw/master/Lib/dynamic/LibValidationCountdown.zip",target:"_blank",rel:"noreferrer"},"下载组件包及当前组件的所有案例")],-1),g=l("p",null,[s("引入参考 "),l("a",{href:"/lib3.0/Components/base/start.html"},"引入组件")],-1),E=l("h2",{id:"代码演示",tabindex:"-1"},[s("代码演示 "),l("a",{class:"header-anchor",href:"#代码演示","aria-hidden":"true"},"#")],-1),V=l("p",null,[s("只通过插槽"),l("code",null,"props"),s("提供文字描述，按钮样式需自定义")],-1),k=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"TIP"),l("p",null,[s("插槽内只能存在一个可点击的元素，建议始终使用原生"),l("code",null,"button"),s("标签，它自带的"),l("code",null,"disabled"),s("能够屏蔽点击，并自动变灰")])],-1),$={class:"demoBox"},B=l("div",{class:"language-vue"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"vue"),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"demoFull flex"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"LibValidationCountdown"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@change"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"statusChange"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":time"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"v-slot"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"text"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"disabled"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"button"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"class"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"btn"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":disabled"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"disabled"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":style"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"{ cursor: disabled ? 'not-allowed' : 'pointer' }"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"          {{ text }}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"        "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"button"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"LibValidationCountdown"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"div"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"setup"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#A6ACCD"}}," statusChange "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"status"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"status"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"scoped"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"button"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"background-color"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," transparent"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"font-size"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"2vw"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#B2CCD6"}},"padding"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"1em"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"style"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"})])])],-1),I=l("h2",{id:"api",tabindex:"-1"},[s("API "),l("a",{class:"header-anchor",href:"#api","aria-hidden":"true"},"#")],-1),L=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值")])]),l("tbody",null,[l("tr",null,[l("td",null,"time"),l("td",null,"倒计时秒数"),l("td",null,"Number"),l("td",null,"60")])])],-1),S=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"回调参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"change"),l("td",null,[s("按钮状态，点击时触发，回调参数为"),l("code",null,"false"),s("，倒计时结束时触发，回调参数为"),l("code",null,"true")]),l("td",null,"-")])])],-1),N=l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"default"),l("td",null,"text：倒计时文本，disabled：按钮状态"),l("td",null,"-")])])],-1),T=JSON.parse('{"title":"ValidationCountdown","description":"","frontmatter":{},"headers":[{"level":2,"title":"代码演示","slug":"代码演示","link":"#代码演示","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[]}],"relativePath":"Components/dynamics/ValidationCountdown.md","lastUpdated":1666717310000}'),P={name:"Components/dynamics/ValidationCountdown.md"},O=Object.assign(P,{setup(c){return(r,a)=>{const n=F("ContainerBox"),e=F("ShowCode");return i(),D("div",null,[v,o(n,{title:"介绍"},{desc:t(()=>[s(" 一个获取短信验证码的倒计时按钮 ")]),_:1}),o(n,{title:"下载并引入"},{desc:t(()=>[w,g]),_:1}),E,o(n,{title:"基础用法"},{desc:t(()=>[V]),default:t(()=>[k,l("div",$,[o(x)]),o(e,null,{codes:t(()=>[B]),_:1})]),_:1}),I,o(n,{title:"Props"},{desc:t(()=>[L]),_:1}),o(n,{title:"Events"},{desc:t(()=>[S]),_:1}),o(n,{title:"Slots"},{desc:t(()=>[N]),_:1})])}}});export{T as __pageData,O as default};
