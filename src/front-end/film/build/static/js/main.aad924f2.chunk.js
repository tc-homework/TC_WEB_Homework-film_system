(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){e.exports=a(170)},107:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),s=a(22),l=a(21),c=a(23),i=a(1),o=a.n(i),m=a(4),u=a.n(m);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=a(174),p=a(175),d=a(172),E=a(177),f=a(178),b=a(60),v=a(173),g=a(176),j=a(9),y=(a(107),a(108),new(a(93).EventEmitter)),O=h.a.Search,k=p.a.Header,w=p.a.Footer,N=p.a.Content,x=document.getElementById("root"),C=function(e){return o.a.createElement("img",{src:e.src,alt:e.title,style:{height:"170px"},onError:function(e){e.target.onerror=null,e.target.src="https://s2.ax1x.com/2019/04/28/EMuGLj.png"}})},S=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.less,t=this.props.objects.length>4&&e?this.props.objects.slice(0,4):this.props.objects,a=[],n=this.props.haslink;for(var r in t){var s=parseInt(r)===t.length-1?"":" / ";a.push(o.a.createElement("span",{key:r},n?o.a.createElement("a",{href:"https://movie.douban.com/celebrity/"+t[r].id},t[r].name):o.a.createElement("span",null,t[r]),s))}return this.props.objects.length>4&&e&&a.push(o.a.createElement("span",null,"/ ...")),o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("span",{className:"pl"},this.props.title),"  : "),n?o.a.createElement("span",{className:"attrs"},a):o.a.createElement("span",null,a))}}]),t}(o.a.Component);S.defaultProps={haslink:!0,less:!0};var z=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"info"},o.a.createElement(S,{title:"\u5bfc\u6f14",objects:this.props.values.directors}),o.a.createElement(S,{title:"\u7f16\u5267",objects:this.props.values.writers}),o.a.createElement(S,{title:"\u4e3b\u6f14",objects:this.props.values.casts}),o.a.createElement(S,{title:"\u7c7b\u578b",less:!1,haslink:!1,objects:this.props.values.genres}),o.a.createElement(S,{title:"\u8bed\u8a00",haslink:!1,objects:this.props.values.languages,display:"false"}))}}]),t}(o.a.Component);z.defaultProps={less:!0};var D=function(e){return o.a.createElement("div",null,o.a.createElement("span",{className:"starstop"}," 5\u661f "),o.a.createElement("div",{className:"power",style:{width:e.star+"px"}}),o.a.createElement("span",{className:"rating_per"},e.star,"%"),o.a.createElement("br",null))},_=function(e){var t,a,n,r,s=e.values.rating,l=""===s.rating_people?"0":s.rating_people,c=""===s.average?"NaN":s.average,i="0";s.stars!==[]&&(t=s.stars[0],a=s.stars[1],n=s.stars[2],r=s.stars[3],i=s.stars[4]);var m=(5*Math.round(c)).toString(),u="bigstar"+(""===s.rating_people?"00":m[0]+m[1]);return o.a.createElement("div",{className:"rating_wrap"},o.a.createElement("div",{className:"rating_self"},o.a.createElement("strong",{className:"rating_num"},c," "),o.a.createElement("div",{className:"rating_right"},o.a.createElement("div",{className:u}),o.a.createElement("div",{className:"rating_sum"},l,"\u4eba\u8bc4\u4ef7"))),o.a.createElement("div",{className:"ratings-on-weight"},o.a.createElement(D,{star:t}),o.a.createElement(D,{star:a}),o.a.createElement(D,{star:n}),o.a.createElement(D,{star:r}),o.a.createElement(D,{star:i})))},K=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).onclick=function(){y.emit("setDetail",a.props.values)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.values;return o.a.createElement("div",{className:"card",style:{width:"100%",boxShadow:"0 2px 8px #f0f1f2"}},o.a.createElement(d.a,null),o.a.createElement("div",{className:"cardbody"},o.a.createElement(E.a,null,o.a.createElement(f.a,{lg:4,md:4,sm:24,xs:24},o.a.createElement(C,{src:e.poster,title:e.title})),o.a.createElement(f.a,{lg:14,md:14,sm:14,xs:24},o.a.createElement("h2",{className:"h2title"},o.a.createElement("span",null,e.title," "),o.a.createElement("span",{className:"year"}," (",e.year,")")),o.a.createElement(z,{values:e})),o.a.createElement(f.a,{lg:6,md:6,sm:6,xs:24},o.a.createElement(_,{values:e})))),o.a.createElement("div",{className:"openmorebtn"}," ",o.a.createElement(b.a,{size:"small",onClick:this.onclick},"More >")))}}]),t}(o.a.Component),M=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).onChange=function(e,t){var n=t*e;fetch("http://film.acdzh.ltd/api/list?begin="+(t*(e-1)).toString()+"&end="+n.toString()).then(function(e){return e.json()}).then(function(e){a.setState({data:e}),y.emit("setDetail",e[0])})},a.state={data:[]},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://film.acdzh.ltd/api/list?begin=0&end=5").then(function(e){return e.json()}).then(function(t){e.setState({data:t}),y.emit("setDetail",t[0])})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.data.length;t++)e.push(o.a.createElement("span",null,o.a.createElement(K,{values:this.state.data[t],id:t})));return o.a.createElement("div",{style:{width:"100%"}},e,o.a.createElement("br",null),o.a.createElement("span",{style:{textAlign:"center"}},o.a.createElement(v.a,{showQuickJumper:!0,showSizeChanger:!0,defaultCurrent:1,total:1e4,defaultPageSize:5,pageSizeOptions:["5","10","15","20"],onChange:this.onChange,onShowSizeChange:this.onChange})),o.a.createElement("br",null),o.a.createElement("br",null))}}]),t}(o.a.Component),P=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={time:0},a.loads=["Loading"," Loading.","  Loading..","   Loading..."],a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},600)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=this.state.time+1;this.setState({time:e})}},{key:"render",value:function(){return o.a.createElement("div",{style:{width:"100%",textAlign:"center"}},o.a.createElement("h3",null,this.state.time<30?this.loads[this.state.time%4]:"No Result..."))}}]),t}(o.a.Component),I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).onChange=function(e,t){a.setState(function(){return{start:t*(e-1),end:t*e}})},a.state={start:0,end:5,searchResult:[],loading:!1},a.keyWord="",a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;y.emit("setDetail",{}),this.keyWord!==this.props.searchKey&&(this.setState({loading:!0}),fetch("http://film.acdzh.ltd/api/search?key="+this.props.searchKey).then(function(e){return e.json()}).then(function(t){e.setState({searchResult:t,loading:!1})})),this.keyWord=this.props.searchKey;for(var t=[],a=this.state.start;a<this.state.end&&a<this.state.searchResult.length;a++)t.push(o.a.createElement("span",null,o.a.createElement(K,{values:this.state.searchResult[a],id:a})));return 0===t.length||this.state.loading?o.a.createElement(P,null):(y.emit("setDetail",this.state.searchResult[0]),o.a.createElement("div",{style:{width:"100%"}},this.state.loading?o.a.createElement("div",null,"loading"):t,o.a.createElement("br",null),o.a.createElement("span",{style:{textAlign:"center"}},o.a.createElement(v.a,{showQuickJumper:!0,showSizeChanger:!0,defaultCurrent:1,total:this.state.searchResult.length,defaultPageSize:5,pageSizeOptions:["5","10","15","20"],onChange:this.onChange,onShowSizeChange:this.onChange})),o.a.createElement("br",null),o.a.createElement("br",null)))}}]),t}(o.a.Component),L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={data:{}},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.eventEmitter=y.addListener("setDetail",function(t){e.setState({data:t})})}},{key:"componentWillUnmount",value:function(){y.removeListener(this.eventEmitter)}},{key:"render",value:function(){var e=this.state.data;return void 0===e.aka?o.a.createElement("div",null," "):(e.summary=e.summary.split(",").join(", "),e.summary=e.summary.split(".").join(". "),o.a.createElement(g.a,{offsetTop:8},o.a.createElement("div",{className:"detailcard",style:{width:"100%",boxShadow:"0 2px 8px #f0f1f2"}},o.a.createElement(d.a,null),o.a.createElement("div",{className:"detailcardbody"},o.a.createElement("h2",{className:"h2title"},o.a.createElement("span",null,e.title," "),o.a.createElement("span",{className:"year"}," (",e.year,")")),o.a.createElement("div",{className:"info"},o.a.createElement(S,{title:"\u5bfc\u6f14",less:!1,objects:e.directors}),o.a.createElement(S,{title:"\u7f16\u5267",less:!1,objects:e.writers}),o.a.createElement(S,{title:"\u4e3b\u6f14",less:!1,objects:e.casts}),o.a.createElement(S,{title:"\u7c7b\u578b",less:!1,haslink:!1,objects:e.genres}),o.a.createElement(S,{title:"\u56fd\u5bb6",haslink:!1,objects:e.countries,display:"false"}),o.a.createElement(S,{title:"\u8bed\u8a00",haslink:!1,objects:e.languages,display:"false"}),o.a.createElement(S,{title:"\u4e0a\u6620\u65e5\u671f",haslink:!1,objects:e.pubdate,display:"false"}),o.a.createElement(S,{title:"\u522b\u540d",haslink:!1,objects:""===e.aka[0]?["\u65e0"]:e.aka,display:"false"}),o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("span",{className:"pl"},"\u5916\u90e8\u94fe\u63a5")," : "),o.a.createElement("span",null,o.a.createElement("a",{href:"https://movie.douban.com/subject/"+e._id},"\u8c46\u74e3 ")," /",o.a.createElement("a",{href:"https://www.imdb.com/title/"+e.imdb}," IMDB"))),o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement("span",{className:"pl"},"\u7b80\u4ecb")," : "),o.a.createElement("span",null,e.summary))))))}}]),t}(o.a.Component),W=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(E.a,null,o.a.createElement(f.a,{lg:13,md:24,sm:24,xs:24},this.props.searchedPage?o.a.createElement(I,{searchKey:this.props.searchKey}):o.a.createElement(M,null)),o.a.createElement(f.a,{lg:9,md:24,sm:24,xs:24,style:{paddingLeft:"80px"}},o.a.createElement(L,null)))}}]),t}(o.a.Component),R=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(E.a,null,o.a.createElement(f.a,{span:3}," ",o.a.createElement("a",{href:"#",onClick:this.props.home,className:"home"},o.a.createElement("h1",null," ",o.a.createElement(j.a,{type:"home"})," Movies"))),o.a.createElement(f.a,{span:10},o.a.createElement(O,{placeholder:"Input search text",onSearch:function(t){return e.props.search(t)},style:{width:300}}))))}}]),t}(o.a.Component),A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e))).search=function(e){a.searchedPage=!0,a.searchKey=e,a.forceUpdate()},a.backHome=function(){},a.searchedPage=!1,a.searchKey="",a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{style:{background:"#fff"}},o.a.createElement(k,{style:{background:"#fff",boxShadow:"0 2px 8px #f0f1f2"}},o.a.createElement(R,{home:this.backHome,search:this.search})),o.a.createElement("br",null),o.a.createElement(N,{style:{background:"#fff"}},o.a.createElement(W,{searchedPage:this.searchedPage,searchKey:this.searchKey})),o.a.createElement("br",null),o.a.createElement(w,{style:{textAlign:"center",background:"#fff",boxShadow:"0 2px 8px #f0f1f2"}},"Web of Movies \xa92019 Created by 1751130"))}}]),t}(o.a.Component);u.a.render(o.a.createElement(A,null),x),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[102,1,2]]]);
//# sourceMappingURL=main.aad924f2.chunk.js.map