(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5349],{66640:function(U,D,e){"use strict";e.r(D),e.d(D,{Report:function(){return Q},default:function(){return gt}});var u=e(67294),b=e(60674),B=e(77613),w=e(23156),S=(0,u.createContext)({}),P=S.Provider,Ft=S.Consumer;function W(n){var i=["Radio","Checkbox","Cascader","Select","QuestionSet"];if(i.includes(n.type))return!0;if(n.type==="FillBlank"||n.type==="MultipleBlank"){var a;if((a=n.children)!==null&&a!==void 0&&a.find(function(r){var l;return((l=r.attribute)===null||l===void 0?void 0:l.dataType)==="number"}))return!0}return!1}var H={Radio:"\u5355\u9009\u9898",Checkbox:"\u591A\u9009\u9898",Cascader:"\u7EA7\u8054\u9898",Select:"\u4E0B\u62C9\u9898",FillBlank:"\u5355\u884C\u6587\u672C\u9898",Textarea:"\u591A\u884C\u6587\u672C\u9898",MultipleBlank:"\u591A\u9879\u586B\u7A7A\u9898"},G=e(69610),V=e(54941),K=function(){function n(){(0,G.Z)(this,n),this._init=this._init.bind(this),this._cleanUp=this._cleanUp.bind(this),this.convertFromInput=this.convertFromInput.bind(this)}return(0,V.Z)(n,[{key:"_init",value:function(){this.canvas=document.createElement("canvas"),this.imgPreview=document.createElement("img"),this.imgPreview.style="position: absolute; top: -9999px",document.body.appendChild(this.imgPreview),this.canvasCtx=this.canvas.getContext("2d")}},{key:"_cleanUp",value:function(){document.body.removeChild(this.imgPreview)}},{key:"convertFromInput",value:function(a,r){this._init();var l=this;this.imgPreview.onload=function(){var p=new Image;l.canvas.width=l.imgPreview.clientWidth,l.canvas.height=l.imgPreview.clientHeight,p.crossOrigin="anonymous",p.src=l.imgPreview.src,p.onload=function(){l.canvasCtx.drawImage(p,0,0);var o=l.canvas.toDataURL("image/png");typeof r=="function"&&r(o),l._cleanUp()}},this.imgPreview.src=a}}]),n}(),z=e(11628),t=e(85893),L=function(i){var a;return i?(a=i.children)===null||a===void 0?void 0:a.filter(function(r){return W(r)}).map(function(r){return r.type==="QuestionSet"?(0,t.jsx)($,{schema:r},r.id):(0,t.jsx)(ut,{schema:r},r.id)}):(0,t.jsx)(t.Fragment,{})},X=(0,B.P)(function(){var n=(0,z.IE)(),i=n.schema;return(0,t.jsx)("div",{children:L(i)})}),$=function(i){return(0,t.jsx)("div",{children:L(i.schema)})},It=e(13062),T=e(71230),Zt=e(66456),k=e(1670),Rt=e(89032),C=e(15746),Bt=e(57663),F=e(71577),J=e(94657),Y=e(3375),q=e(83279),_=e(68023),tt=e(43052),et=e(71257),rt=e(79110),nt=e(8690),at=e(17813),it=e(63294),ot=e(93450),lt=e(26379);_.D([nt.N,at.N,it.N,et.N,rt.N,lt.N,ot.N]);var I=[{color:"#5398ff"},{color:"#39d2d9"},{color:"#f16b79"},{color:"#b18160"},{color:"#94ed8c"},{color:"#ffb878"},{color:"#99a4ff"},{color:"#808bea"},{color:"#c36cff"}],st=(0,u.forwardRef)(function(n,i){var a=n.data,r=n.labels,l=n.loading,p=n.name,o=n.type,E=(0,u.useRef)(null),d=(0,u.useRef)();return(0,u.useEffect)(function(){if(E.current){var y=tt.S1(E.current);return d.current=y,function(){y.dispose()}}},[]),(0,u.useImperativeHandle)(i,function(){return{saveAsImage:function(){var s;return(s=d.current)===null||s===void 0?void 0:s.getDataURL({type:"png"})}}}),(0,u.useEffect)(function(){if(!l&&d.current){d.current.hideLoading(),d.current.clear();var y=300;o==="horizontalBar"?(d.current.setOption({title:{text:p},grid:{top:15,bottom:15,left:10*Math.max.apply(Math,(0,q.Z)(r.map(function(s){return s.length})))+25,right:50},tooltip:{show:!0,trigger:"item"},xAxis:{show:!1},yAxis:{type:"category",data:r,inverse:!0},series:[{type:"bar",barWidth:12,data:a==null?void 0:a.map(function(s,c){var f=s.value,j=s.percent;return{value:f,percent:j,itemStyle:I[c%I.length]}}),showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},label:{show:!0,position:"right",color:"black",formatter:function(c){var f=c.data;return f.percent||"0%"}}}]}),y=r.length*40-r.length):o==="pie"?d.current.setOption({title:{text:p},tooltip:{show:!0,trigger:"item"},series:[{name:p,type:"pie",radius:"60%",data:a==null?void 0:a.map(function(s,c){var f=s.value,j=s.percent;return{value:f,name:"".concat(r[c]," ").concat(j),itemStyle:I[c%I.length]}}),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{length:10,length2:25}}]}):o==="bar"&&d.current.setOption({title:{text:p},tooltip:{show:!0,trigger:"item"},xAxis:{type:"category",data:r,axisLabel:{interval:0,rotate:30}},yAxis:{show:!1},series:[{type:"bar",barWidth:15,data:a==null?void 0:a.map(function(s,c){var f=s.value,j=s.percent;return{value:f,percent:j,itemStyle:I[c%I.length]}}),showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},label:{show:!0,position:"top",color:"black",formatter:function(c){var f=c.data;return f.percent||"0%"}}}]}),d.current.resize({height:y})}else d.current&&d.current.showLoading()},[l,o,a]),(0,t.jsx)("div",{ref:E})}),A=e(76826),ut=(0,B.P)(function(n){var i,a,r=n.schema,l=(0,u.useContext)(S),p=l.loading,o=l.reportData,E=(0,u.useState)("horizontalBar"),d=(0,J.Z)(E,2),y=d[0],s=d[1],c=(o==null||(i=o.statistics[r.id])===null||i===void 0?void 0:i.total)||0,f=(0,u.useRef)(null),j=(0,u.useMemo)(function(){if(r.type==="FillBlank"||r.type==="MultipleBlank"){var Z=[{title:"\u5408\u8BA1",dataIndex:"sum",width:"20%"},{title:"\u5E73\u5747\u503C",dataIndex:"average",width:"20%"},{title:"\u6700\u9AD8\u503C",dataIndex:"max",width:"20%"},{title:"\u6700\u4F4E\u503C",dataIndex:"min",width:"20%"}];return r.type==="MultipleBlank"?[{title:"\u9009\u9879",dataIndex:"title",width:"20%"}].concat(Z):Z}return[{title:"\u9009\u9879",dataIndex:"title",width:"50%"},{title:"\u6570\u636E\u91CF",dataIndex:"total",width:"25%",sorter:function(m,h){return m.total-h.total},showSorterTooltip:!1},{title:"\u5360\u6BD4",dataIndex:"percent",width:"25%",sorter:function(m,h){return parseFloat(m.percent)-parseFloat(h.percent)},showSorterTooltip:!1}]},[r.type]),yt=function(){var v,m=(v=f.current)===null||v===void 0?void 0:v.saveAsImage();m&&new K().convertFromInput(m,function(h){var x=document.createElement("a");x.href=h,x.download="haha.png",x.click(),x.remove()})},jt=function(){var v;return(v=r.children)===null||v===void 0?void 0:v.map(function(m){var h=m.id,x=m.title,R=(0,A.WO)(x),g=o==null?void 0:o.statistics[h];if(g){var N=g.total||0,O=Math.round(1e4*N/(c||1))/100+"%";if(!(o!=null&&o.search)||R.includes(o.search))return{id:h,title:R,total:N,percent:O,min:g.min,max:g.max,average:g.average,sum:g.sum}}return{id:h,title:R,total:0,percent:"0%"}})},St=function(){var v;if(r.type==="FillBlank"||r.type==="MatrixFillBlank")return(0,t.jsx)(t.Fragment,{});var m=[],h=[];return(v=r.children)===null||v===void 0||v.forEach(function(x){var R=(0,A.WO)(x.title);if(m.push(R),!(o!=null&&o.search)||R.includes(o.search)){var g,N=(o==null||(g=o.statistics[x.id])===null||g===void 0?void 0:g.total)||0,O=Math.round(1e4*N/(c||1))/100+"%";h.push({percent:O,value:N})}else h.push({percent:"0%",value:0})}),(0,t.jsxs)(C.Z,{span:24,className:"question-chart",children:[(0,t.jsx)("div",{className:"question-chart-btns",children:(0,t.jsxs)(F.Z.Group,{size:"small",children:[(0,t.jsx)(F.Z,{type:"link",onClick:function(){return s("horizontalBar")},children:"\u6761\u5F62\u56FE"}),(0,t.jsx)(F.Z,{type:"link",onClick:function(){return s("bar")},children:"\u67F1\u5F62\u56FE"}),(0,t.jsx)(F.Z,{type:"link",onClick:function(){return s("pie")},children:"\u6247\u5F62\u56FE"}),(0,t.jsx)(F.Z,{type:"link",icon:(0,t.jsx)("div",{className:"divider"})}),(0,t.jsx)(F.Z,{type:"link",icon:(0,t.jsx)(Y.Z,{}),onClick:yt})]})}),(0,t.jsx)("div",{children:(0,t.jsx)(st,{type:y,loading:p,labels:m,data:h,ref:f})})]})},Ct=function(){return(0,t.jsx)(C.Z,{span:24,children:(0,t.jsx)(k.Z,{pagination:!1,size:"small",bordered:!0,columns:j,rowKey:"id",dataSource:jt()})})};return(0,t.jsx)("div",{className:"question-item",children:(0,t.jsxs)(T.Z,{gutter:[12,12],className:"question-content",children:[(0,t.jsx)(C.Z,{xs:24,sm:12,children:(0,t.jsxs)(T.Z,{children:[(0,t.jsx)(C.Z,{span:24,children:(0,t.jsx)("span",{className:"question-label",children:(0,A.WO)(r.title)})}),St()]})}),(0,t.jsx)(C.Z,{xs:24,sm:12,children:(0,t.jsxs)(T.Z,{children:[(0,t.jsx)(C.Z,{span:24,children:(0,t.jsx)("div",{className:"question-title",children:(0,t.jsxs)("div",{className:"question-data-desc",children:[(0,t.jsxs)("div",{children:["\u7C7B\u578B\uFF1A",H[r.type]]}),(0,t.jsxs)("div",{children:["\u5FC5\u586B\uFF1A",(a=r.attribute)!==null&&a!==void 0&&a.required?"\u662F":"\u5426"]}),(0,t.jsxs)("div",{children:[c,"\u6761\u6570\u636E"]})]})})}),Ct()]})})]})})}),Pt=e(59250),dt=e(13013),Et=e(30887),M=e(28682),Nt=e(47673),ct=e(4107),vt=e(19957),ht=e(83663),ft=ct.Z.Search,mt=(0,B.P)(function(){var n=(0,u.useContext)(S),i=n.reportData,a=(0,t.jsxs)(M.Z,{children:[(0,t.jsx)(M.Z.Item,{children:"\u6309\u6570\u636E\u5185\u5BB9\u7B5B\u9009"}),(0,t.jsx)(M.Z.Item,{children:"\u6309\u63D0\u4EA4\u65E5\u671F\u7B5B\u9009"})]});return(0,t.jsxs)("div",{className:"report-header",children:[(0,t.jsxs)("span",{children:["\u5171",(i==null?void 0:i.total)||0,"\u6761\u6570\u636E"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(ft,{size:"small",placeholder:"\u641C\u7D22",onSearch:function(l){n.loadReportData(l)},style:{width:200,marginRight:10}}),(0,t.jsx)(dt.Z,{overlay:a,placement:"bottomRight",children:(0,t.jsx)(vt.Z,{style:{cursor:"pointer"}})})]}),(0,t.jsx)(ht.Z,{})]})}),xt=function(){return(0,t.jsx)(mt,{})},pt=function(){return(0,t.jsx)("div",{className:"report-container",children:(0,t.jsx)(X,{})})},Q=(0,B.P)(function(){var n=(0,z.IE)(),i=(0,u.useMemo)(function(){return new w.Cu(n)},[n]);return(0,u.useEffect)(function(){i.loadReportData()},[]),(0,t.jsx)("div",{className:"survey-report",children:(0,t.jsxs)(P,{value:i,children:[(0,t.jsx)(xt,{}),(0,t.jsx)(pt,{})]})})}),gt=Q},11628:function(U,D,e){"use strict";e.d(D,{xI:function(){return b},Ge:function(){return S},IE:function(){return w}});var u=e(67294),b=(0,u.createContext)({}),B=b.Provider;function w(){var P=(0,u.useContext)(b);return P.store}function S(){var P=w();return P.flowStore}}}]);