import{_ as c,h as n,a as r,c as p,b as t,w as l,i as o,f as s}from"./app.d3fafe5c.js";const g=JSON.parse('{"title":"$fmtNum","description":"","frontmatter":{},"headers":[],"relativePath":"Functions/custom/FmtNum.md","lastUpdated":1679756786000}'),F={name:"Functions/custom/FmtNum.md"},y=s("h1",{id:"fmtnum",tabindex:"-1"},[o("$fmtNum "),s("a",{class:"header-anchor",href:"#fmtnum","aria-hidden":"true"},"#")],-1),D=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#82AAFF"}},"$fmtNum"),s("span",{style:{color:"#A6ACCD"}},"("),s("span",{style:{color:"#F78C6C"}},"1000"),s("span",{style:{color:"#A6ACCD"}},")"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"//1,000")]),o(`
`),s("span",{class:"line"})])])],-1),i=s("div",{class:"language-js"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"js"),s("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#C792EA"}},"function"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#82AAFF"}},"$fmtNum"),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"num"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"str"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"num"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"toFixed"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"toString"),s("span",{style:{color:"#F07178"}},"()"),s("span",{style:{color:"#89DDFF"}},";"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#676E95","font-style":"italic"}},"// 先将数字保留两位小数并转为字符串")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"reg"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"=")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#A6ACCD"}},"str"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"indexOf"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"."),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},") "),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"?"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"/("),s("span",{style:{color:"#C3E88D"}},"\\d"),s("span",{style:{color:"#89DDFF"}},")(?=("),s("span",{style:{color:"#C3E88D"}},"\\d"),s("span",{style:{color:"#89DDFF"}},"{3})+"),s("span",{style:{color:"#A6ACCD"}},"\\."),s("span",{style:{color:"#89DDFF"}},")/"),s("span",{style:{color:"#F78C6C"}},"g"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"/("),s("span",{style:{color:"#C3E88D"}},"\\d"),s("span",{style:{color:"#89DDFF"}},")(?=(?:"),s("span",{style:{color:"#C3E88D"}},"\\d"),s("span",{style:{color:"#89DDFF"}},"{3})+"),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"$"),s("span",{style:{color:"#89DDFF"}},")/"),s("span",{style:{color:"#F78C6C"}},"g"),s("span",{style:{color:"#89DDFF"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"str"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"replace"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#A6ACCD"}},"reg"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"$1,"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#F07178"}},")"),s("span",{style:{color:"#89DDFF"}},";")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"})])])],-1);function C(A,d,m,u,f,_){const e=n("ContainerBox"),a=n("ShowCode");return r(),p("div",null,[y,t(e,{title:"介绍"},{desc:l(()=>[o(" 每隔三位数字加逗号，并保留两位小数 ")]),_:1}),t(e,{title:"基础用法"},{desc:l(()=>[D]),default:l(()=>[t(a,null,{codes:l(()=>[i]),_:1})]),_:1})])}const x=c(F,[["render",C]]);export{g as __pageData,x as default};