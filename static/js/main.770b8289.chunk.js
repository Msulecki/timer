(this["webpackJsonpcube-timer"]=this["webpackJsonpcube-timer"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(8),o=a.n(n),l=(a(15),a(1)),i=a(2),c=a(4),u=a(3),d=a(5),h=a(6),f=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={lastScramble:[],resultsUpdated:!1,results:[]},a.handleTimer=function(){var e=0,t=0,r=0;a.timer=setInterval((function(){e++,a.result_time=e,e%100===0&&t++,t>=60&&(t=0,r++),document.querySelector(".time__clock").textContent="".concat(r<=9?"0".concat(r):r,":").concat(t<=9?"0".concat(t):t,".").concat(e%100<=9?"0".concat(e%100):e%100)}),10)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({lastScramble:this.props.scramble})}},{key:"componentDidUpdate",value:function(){this.props.timerActive?this.handleTimer():(clearInterval(this.timer),this.state.lastScramble!==this.props.scramble&&(this.state.lastScramble.length>0&&"00:00.00"!==document.querySelector(".time__clock").textContent&&this.state.resultDate!==this.props.resultDate&&this.setState({results:[[this.props.resultDate,this.result_time,this.state.lastScramble,document.querySelector(".time__clock").textContent]].concat(Object(h.a)(this.props.results)),resultsUpdated:!0,resultDate:this.props.resultDate}),this.setState({lastScramble:this.props.scramble}))),this.state.resultsUpdated&&(this.props.resultsArr(this.state.results),this.setState({resultsUpdated:!1}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"time"},s.a.createElement("div",{className:"time__scramble"},!this.props.timerActive&&this.state.results.length>0&&this.state.results[0][2].join(" "))," ",s.a.createElement("div",{className:"time__clock"},"00:00.00"))}}]),t}(r.Component)),m=(a(17),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleScramble=function(){for(var e=[],t=[],r={face:[["U","D"],["L","R"],["F","B"]],rotation:["","'","2"]},s=0;s<a.state.scrambleLength;s++){var n=!1,o=Math.floor(3*Math.random()),l=Math.floor(2*Math.random());if(0===s)t.push(r.face[o][l]);else if(1===s){for(;!n;)r.face[o][l]!==t[0]&&(t.push(r.face[o][l]),n=!0),o=Math.floor(3*Math.random()),l=Math.floor(2*Math.random());n=!1}for(;!n&&s>1;)o=Math.floor(3*Math.random()),l=Math.floor(2*Math.random()),r.face[o][l]===t[s-1]||r.face[o][l]===t[s-2]||r.face[0].includes(r.face[o][l])&&r.face[0].includes(t[s-2])&&r.face[1].includes(r.face[o][l])&&r.face[1].includes(t[s-2])&&r.face[2].includes(r.face[o][l])&&r.face[2].includes(t[s-2])||(t.push(r.face[o][l]),n=!0)}t.forEach((function(t){e.push(t+r.rotation[Math.floor(3*Math.random())])})),a.props.showScramble(e),a.props.passScramble(e),a.setState({scramble:e})},a.state={scramble:"",scrambleLength:25},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleScramble()}},{key:"render",value:function(){return s.a.createElement("div",{className:"scramble",onClick:this.handleScramble},Object(h.a)(this.state.scramble).join(" "))}}]),t}(r.Component)),p=(a(18),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={startFired:!1},a.handleStart=function(e){var t=0;e?a.timer=setInterval((function(){t++,document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white ".concat(t/60*100,"%, transparent ").concat(t/60*100,"%, transparent 100%)"),t>=60&&(clearInterval(a.timer),a.timerReady=!0,document.querySelector(".start__button").style.background="rgb(103, 255, 92)")}),6):e||(clearInterval(a.timer),a.timerReady&&(a.timerReady=!1,a.props.started()),document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"start"},s.a.createElement("button",{onMouseDown:this.handleStart.bind(this,!0),onMouseUp:this.handleStart.bind(this,!1),onTouchStart:this.handleStart.bind(this,!0),onTouchEnd:this.handleStart.bind(this,!1),className:"start__button"},"START"))}}]),t}(r.Component)),b=function(e){for(var t=[],a=0;a<e.length;a++)t.push(s.a.createElement("div",{key:a,className:e.active===a?"active":null}));return s.a.createElement("div",{className:"swipeme__dots"},t)},v=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleResults=function(){if(a.props.results.length!==a.state.resultsLength&&a.props.results.length>0){a.setState({resultsLength:a.props.results.length,nulled:!1});for(var e=[],t=0;t<a.props.results.length;t++)e.push(a.props.results[t][1]);var r=[].concat(e).sort((function(e,t){return e-t}));r.length%2===1?r.length>1&&(r=r[Math.floor(r.length/2)]):r=(r[r.length/2-1]+r[r.length/2])/2;var s=[].concat(e);s=s.sort((function(e,t){return e-t}))[0];var n=Math.floor([].concat(e).reduce((function(e,t){return e+t}),0)/e.length),o=Math.sqrt([].concat(e).reduce((function(e,t){return e.concat(Math.pow(t-n,2))}),[]).reduce((function(e,t){return e+t}),0)/e.length);if(n!==a.state.avg&&(a.setState({best:s,avg:n}),a.props.scores([s,n,0,0,0,0,r,o])),e.length>=5){for(var l=[],i=0;i<5;i++)l.push(e[i]);l=l.sort((function(e,t){return e-t}));var c=Object(h.a)(l);c.pop(),c.shift();var u=Math.floor(l.reduce((function(e,t){return e+t}),0)/l.length);if(c=Math.floor(c.reduce((function(e,t){return e+t}),0)/c.length),u!==a.state.ao5&&(a.setState({ao5:u}),a.props.scores([s,n,u,0,c,0,r,o])),e.length>=12){for(var d=[],f=0;f<12;f++)d.push(e[f]);d=d.sort((function(e,t){return e-t}));var m=Object(h.a)(d);m.pop(),m.shift();var p=Math.floor(d.reduce((function(e,t){return e+t}),0)/d.length);m=Math.floor(m.reduce((function(e,t){return e+t}),0)/m.length),p!==a.state.ao12&&(a.setState({ao12:p}),a.props.scores([s,n,u,p,c,m,r,o]))}else a.setState({ao12:0}),a.props.scores([s,n,u,0,c,0,r,o])}else a.setState({ao5:0}),a.props.scores([s,n,0,0,0,0,r,o])}0!==a.props.results.length||a.state.nulled||(a.setState({best:0,avg:0,ao5:0,ao12:0,nulled:!0}),a.props.scores([0,0,0,0,0,0,0,0]))},a.handleTimes=function(){return{best:"".concat(Math.floor(a.state.best/6e3)>9?Math.floor(a.state.best/6e3):"0"+Math.floor(a.state.best/6e3),":").concat(Math.floor(a.state.best/100%60)>9?(a.state.best/100%60).toFixed(2):"0"+(a.state.best/100%60).toFixed(2)),avg:"".concat(Math.floor(a.state.avg/6e3)>9?Math.floor(a.state.avg/6e3):"0"+Math.floor(a.state.avg/6e3),":").concat(Math.floor(a.state.avg/100%60)>9?(a.state.avg/100%60).toFixed(2):"0"+(a.state.avg/100%60).toFixed(2)),ao5:"".concat(Math.floor(a.state.ao5/6e3)>9?Math.floor(a.state.ao5/6e3).toFixed(2):"0"+Math.floor(a.state.ao5/6e3),":").concat(Math.floor(a.state.ao5/100%60)>9?(a.state.ao5/100%60).toFixed(2):"0"+(a.state.ao5/100%60).toFixed(2)),ao12:"".concat(Math.floor(a.state.ao12/6e3)>9?Math.floor(a.state.ao12/6e3).toFixed(2):"0"+Math.floor(a.state.ao12/6e3),":").concat(Math.floor(a.state.ao12/100%60)>9?(a.state.ao12/100%60).toFixed(2):"0"+(a.state.ao12/100%60).toFixed(2))}},a.state={resultsLength:0,best:0,avg:0,ao5:0,ao12:0,nulled:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({resultsLength:this.props.results.length})}},{key:"componentDidUpdate",value:function(){this.handleResults()}},{key:"render",value:function(){return s.a.createElement("div",{className:"results"},s.a.createElement("div",null,"Best: ",s.a.createElement("span",{className:"results__best"},this.handleTimes().best)),s.a.createElement("div",null,"Avg: ".concat(this.handleTimes().avg)),s.a.createElement("div",null,"Ao5: ".concat(this.handleTimes().ao5)),s.a.createElement("div",null,"Ao12: ".concat(this.handleTimes().ao12)))}}]),t}(r.Component));a(20);var g=function(e){var t=this,a=e.results;return a=e.results.map((function(a,r){return s.a.createElement("li",{key:a[0]},a[3]," ",new Date(a[0]).toLocaleString(),s.a.createElement("button",{onClick:e.deleteResult.bind(t,r)},"x"))})),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"results__header"},"All results (",a.length,")"),s.a.createElement("ol",null,0===a.length?s.a.createElement("div",null,"\xaf\\_(\u30c4)_/\xaf\xaf"):a))},y=(a(21),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={},a.handleTimes=function(){var e=[a.props.scores[0],a.props.scores[1],a.props.scores[2],a.props.scores[3],a.props.scores[4],a.props.scores[5],a.props.scores[6],a.props.scores[7]],t=e[0],r=e[1],s=e[2],n=e[3],o=e[4],l=e[5],i=e[6],c=e[7];return{best:"".concat(Math.floor(t/6e3)>9?Math.floor(t/6e3):"0"+Math.floor(t/6e3),":").concat(Math.floor(t/100%60)>9?(t/100%60).toFixed(2):"0"+(t/100%60).toFixed(2)),avg:"".concat(Math.floor(r/6e3)>9?Math.floor(r/6e3):"0"+Math.floor(r/6e3),":").concat(Math.floor(r/100%60)>9?(r/100%60).toFixed(2):"0"+(r/100%60).toFixed(2)),ao5:"".concat(Math.floor(s/6e3)>9?Math.floor(s/6e3).toFixed(2):"0"+Math.floor(s/6e3),":").concat(Math.floor(s/100%60)>9?(s/100%60).toFixed(2):"0"+(s/100%60).toFixed(2)),ao12:"".concat(Math.floor(n/6e3)>9?Math.floor(n/6e3).toFixed(2):"0"+Math.floor(n/6e3),":").concat(Math.floor(n/100%60)>9?(n/100%60).toFixed(2):"0"+(n/100%60).toFixed(2)),mo3:"".concat(Math.floor(o/6e3)>9?Math.floor(o/6e3).toFixed(2):"0"+Math.floor(o/6e3),":").concat(Math.floor(o/100%60)>9?(o/100%60).toFixed(2):"0"+(o/100%60).toFixed(2)),mo10:"".concat(Math.floor(l/6e3)>9?Math.floor(l/6e3).toFixed(2):"0"+Math.floor(l/6e3),":").concat(Math.floor(l/100%60)>9?(l/100%60).toFixed(2):"0"+(l/100%60).toFixed(2)),median:"".concat(Math.floor(i/6e3)>9?Math.floor(i/6e3).toFixed(2):"0"+Math.floor(i/6e3),":").concat(Math.floor(i/100%60)>9?(i/100%60).toFixed(2):"0"+(i/100%60).toFixed(2)),sdev:"".concat(Math.floor(c/6e3)>9?Math.floor(c/6e3).toFixed(2):"0"+Math.floor(c/6e3),":").concat(Math.floor(c/100%60)>9?(c/100%60).toFixed(2):"0"+(c/100%60).toFixed(2))}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.times=this.props.results.map((function(e,t){return s.a.createElement("li",{key:t},e[3])})),this.last5=this.times.slice(0,5),this.last12=this.times.slice(0,12)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"results__header"},"Detailed results"),s.a.createElement("div",{className:"results__list"},s.a.createElement("div",null,s.a.createElement("div",null,"Best: ",this.handleTimes().best),s.a.createElement("div",null,"Ao5: ",this.handleTimes().ao5),s.a.createElement("div",null,"Mo3: ",this.handleTimes().mo3),s.a.createElement("div",null,"Median: ",this.handleTimes().median),s.a.createElement("div",null,"Std dev: ",this.handleTimes().sdev),s.a.createElement("ol",null,"Last 5: ",this.times&&this.times.length>4&&this.last5)),s.a.createElement("div",null,s.a.createElement("div",null,"Avg: ",this.handleTimes().avg),s.a.createElement("div",null,"Ao12: ",this.handleTimes().ao12),s.a.createElement("div",null,"Mo10: ",this.handleTimes().mo10),s.a.createElement("ol",null,"Last 12: ",this.times&&this.times.length>11&&this.last12))))}}]),t}(r.Component)),M=a(9),S=a.n(M),E=(a(24),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={},a.handleGraph=function(){var e=[],t=[];a.props.results.forEach((function(a){e.push(a[1]),t.push(a[3])})),e=e.reverse(),t=t.reverse();var r=document.getElementById("graph").getContext("2d");new S.a(r,{type:"line",data:{labels:t,datasets:[{data:e,borderWidth:1}]},options:{scales:{yAxes:[{display:!1}]},legend:{display:!1},tooltips:{enabled:!1},maintainAspectRatio:!1}})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.handleGraph()}},{key:"render",value:function(){return s.a.createElement("canvas",{id:"graph"})}}]),t}(r.Component)),_=(a(25),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={},a.handleCubeGrid=function(){var e=a.props.cubeGrid,t=[],r=[],n=[],o=[],l=[],i=[];return e.f.forEach((function(e,a){t.push(s.a.createElement("div",{key:a,style:{backgroundColor:e}}))})),e.b.forEach((function(e,t){r.push(s.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.l.forEach((function(e,t){n.push(s.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.r.forEach((function(e,t){o.push(s.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.d.forEach((function(e,t){i.push(s.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.u.forEach((function(e,t){l.push(s.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),[s.a.createElement("div",{key:"f",className:"cube__f cube__face"},t),s.a.createElement("div",{key:"b",className:"cube__b cube__face"},r),s.a.createElement("div",{key:"l",className:"cube__l cube__face"},n),s.a.createElement("div",{key:"r",className:"cube__r cube__face"},o),s.a.createElement("div",{key:"u",className:"cube__u cube__face"},l),s.a.createElement("div",{key:"d",className:"cube__d cube__face"},i)]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"cube__container"},s.a.createElement("div",{className:"cube"},this.handleCubeGrid()))}}]),t}(r.Component)),k=(a(26),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={slidesNumber:0,activeSlide:a.props.slide,scores:[]},a.initVariables=function(){a.down=!1,a.up=!1,a.drag=!1,a.dragStartPosition=0,a.slidePosition=a.props.slide,a.transitionTime=".5s",a.slideChanged=!1,a.slideNumber=0,a.slide=document.querySelector(".swipeme__slide"),a.margin=-a.slidePosition*a.slide.offsetWidth,a.slide.style.marginLeft="".concat(a.margin,"px");var e=document.querySelector(".swipeme__content");a.slideNumber=e.childNodes.length,a.setState({slidesNumber:a.slideNumber})},a.handleMouse=function(e,t){var r,s=a.margin+a.slidePosition*a.slide.offsetWidth;"undefined"!==typeof t&&("undefined"===typeof t.pageX&&"undefined"!==typeof t.touches[0]&&(r=t.touches[0].pageX),"undefined"!==typeof t.pageX&&(r=t.pageX)),"down"===e&&(a.down=!0,a.up=!1,a.dragStartPosition=r,a.slide.style.transition="0s"),"up"===e&&(a.down=!1,a.up=!0,a.drag=!1,Math.abs(s)>50&&a.dragStartPosition-r!==0&&(s<0&&a.slidePosition<a.slideNumber-1&&a.slidePosition++,s>0&&a.slidePosition>0&&a.slidePosition--,a.setState({activeSlide:a.slidePosition}),a.props.activeSlidePosition(a.slidePosition)),a.slide.style.marginLeft="".concat(-a.slidePosition*a.slide.offsetWidth,"px"),a.slide.style.transition=a.transitionTime),"move"===e&&!0===a.down&&(a.drag=!0,a.margin=r-a.dragStartPosition-a.slidePosition*a.slide.offsetWidth,a.slide.style.marginLeft="".concat(a.margin,"px"))},a.handleScores=function(e){a.setState({scores:e})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.initVariables()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"swipeme"},s.a.createElement("div",{className:"swipeme__content",onMouseDown:this.handleMouse.bind(this,"down"),onMouseUp:this.handleMouse.bind(this,"up"),onMouseMove:this.handleMouse.bind(this,"move"),onTouchStart:this.handleMouse.bind(this,"down"),onTouchEnd:this.handleMouse.bind(this,"up"),onTouchMove:this.handleMouse.bind(this,"move")},s.a.createElement("div",{className:"swipeme__slide"},s.a.createElement(_,{cubeGrid:this.props.cubeGrid}),s.a.createElement(v,{results:this.props.results,scores:this.handleScores})),s.a.createElement("div",{className:"swipeme__slide"},s.a.createElement(y,{results:this.props.results,deleteResult:this.props.deleteResult,scores:this.state.scores})),s.a.createElement("div",{className:"swipeme__slide"},s.a.createElement(g,{results:this.props.results,deleteResult:this.props.deleteResult})),s.a.createElement("div",{className:"swipeme__slide"},s.a.createElement(E,{results:this.props.results})))),s.a.createElement(b,{length:this.state.slidesNumber,active:this.state.activeSlide}))}}]),t}(r.Component)),w=function(e){for(var t=["rgba(99, 255, 71, 1)","rgba(56, 169, 255, 1)","rgba(255, 71, 117, 1)","rgba(255, 150, 97, 1)","rgba(255, 249, 71, 1)","rgba(255, 255, 255, 1)"],a=t[0],r=t[1],s=t[2],n=t[3],o=t[4],l=t[5],i={f:[a,a,a,a,a,a,a,a,a],b:[r,r,r,r,r,r,r,r,r],l:[s,s,s,s,s,s,s,s,s],r:[n,n,n,n,n,n,n,n,n],u:[o,o,o,o,o,o,o,o,o],d:[l,l,l,l,l,l,l,l,l]},c={f:[a,a,a,a,a,a,a,a,a],b:[r,r,r,r,r,r,r,r,r],l:[s,s,s,s,s,s,s,s,s],r:[n,n,n,n,n,n,n,n,n],u:[o,o,o,o,o,o,o,o,o],d:[l,l,l,l,l,l,l,l,l]},u=0;u<e.length;u++){var d=e[u];if("L"===d)for(var h=0;h<7;h+=3)i.f[h]=c.u[h],i.d[h]=c.f[h],i.b[h]=c.d[h],i.u[h]=c.b[h];if("L'"===d)for(var f=0;f<7;f+=3)i.u[f]=c.f[f],i.f[f]=c.d[f],i.d[f]=c.b[f],i.b[f]=c.u[f];if("L2"===d)for(var m=0;m<7;m+=3)i.u[m]=c.d[m],i.f[m]=c.b[m],i.d[m]=c.u[m],i.b[m]=c.f[m];if("R"===d)for(var p=2;p<9;p+=3)i.u[p]=c.f[p],i.f[p]=c.d[p],i.d[p]=c.b[p],i.b[p]=c.u[p];if("R'"===d)for(var b=2;b<9;b+=3)i.f[b]=c.u[b],i.d[b]=c.f[b],i.b[b]=c.d[b],i.u[b]=c.b[b];if("R2"===d)for(var v=2;v<9;v+=3)i.u[v]=c.d[v],i.f[v]=c.b[v],i.d[v]=c.u[v],i.b[v]=c.f[v];if("U"===d)for(var g=0;g<3;g++)i.l[g]=c.f[g],i.b[8-g]=c.l[g],i.r[g]=c.b[8-g],i.f[g]=c.r[g];if("U'"===d)for(var y=0;y<3;y++)i.r[y]=c.f[y],i.b[8-y]=c.r[y],i.l[y]=c.b[8-y],i.f[y]=c.l[y];if("U2"===d)for(var M=0;M<3;M++)i.r[M]=c.l[M],i.b[8-M]=c.f[M],i.f[M]=c.b[8-M],i.l[M]=c.r[M];if("D"===d)for(var S=0;S<3;S++)i.l[8-S]=c.b[S],i.b[S]=c.r[8-S],i.r[8-S]=c.f[8-S],i.f[8-S]=c.l[8-S];if("D'"===d)for(var E=0;E<3;E++)i.l[8-E]=c.f[8-E],i.b[E]=c.l[8-E],i.r[8-E]=c.b[E],i.f[8-E]=c.r[8-E];if("D2"===d)for(var _=0;_<3;_++)i.r[8-_]=c.l[8-_],i.b[_]=c.f[8-_],i.f[8-_]=c.b[_],i.l[8-_]=c.r[8-_];if("F"===d)for(var k=0;k<9;k+=3)i.r[k]=c.u[6+k/3],i.d[k/3]=c.r[6-k],i.l[2+k]=c.d[k/3],i.u[6+k/3]=c.l[8-k];if("F'"===d)for(var w=0;w<9;w+=3)i.r[w]=c.d[2-w/3],i.u[6+w/3]=c.r[w],i.l[2+w]=c.u[8-w/3],i.d[w/3]=c.l[2+w];if("F2"===d)for(var O=0;O<7;O+=3)i.r[O]=c.l[8-O],i.u[8-O/3]=c.d[O/3],i.l[8-O]=c.r[O],i.d[O/3]=c.u[8-O/3];if("B"===d)for(var j=0;j<9;j+=3)i.l[j]=c.u[2-j/3],i.d[6+j/3]=c.l[j],i.r[2+j]=c.d[8-j/3],i.u[j/3]=c.r[2+j];if("B'"===d)for(var F=0;F<9;F+=3)i.l[F]=c.d[6+F/3],i.u[F/3]=c.l[6-F],i.r[2+F]=c.u[F/3],i.d[6+F/3]=c.r[8-F];if("B2"===d)for(var x=0;x<7;x+=3)i.r[8-x]=c.l[x],i.u[x/3]=c.d[8-x/3],i.l[x]=c.r[8-x],i.d[8-x/3]=c.u[x/3];if("L"===d||"R"===d||"F"===d||"B"===d||"U"===d||"D"===d)for(var N=0;N<9;N++)4!==N&&(i[d.toLowerCase()][N]=c[d.toLowerCase()][8-(2+3*N)%10]);if("L'"===d||"R'"===d||"F'"===d||"B'"===d||"U'"===d||"D'"===d)for(var T=0;T<9;T++)4!==T&&(i[d[0].toLowerCase()][T]=c[d[0].toLowerCase()][(2+3*T)%10]);if("L2"===d||"R2"===d||"F2"===d||"B2"===d||"U2"===d||"D2"===d)for(var C=0;C<9;C++)4!==C&&(i[d[0].toLowerCase()][C]=c[d[0].toLowerCase()][8-C]);for(var D=0;D<9;D++)c.f[D]=i.f[D],c.b[D]=i.b[D],c.l[D]=i.l[D],c.r[D]=i.r[D],c.u[D]=i.u[D],c.d[D]=i.d[D]}return c},O=(a(27),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={started:!1,lastScramble:"",results:[],resultDate:"",cube:{f:[],b:[],l:[],r:[],u:[],d:[]},activeSlidePosition:0},a.handleTimer=function(e){a.state.started&&a.setState({resultDate:e}),a.setState({started:!a.state.started})},a.handleScramble=function(e){a.setState({lastScramble:e})},a.handleResults=function(e){a.setState({results:e}),localStorage.setItem("resultsArray",JSON.stringify(e))},a.handleResultDelete=function(e){var t=a.state.results;t.splice(e,1),a.handleLocalStorage("w",t),a.setState({results:t})},a.handleKey=function(e){if(e&&!a.keydown){a.keydown=!0,a.state.started&&document.querySelector(".app").click();var t=0;document.querySelector(".start__button")&&(a.timer=setInterval((function(){t++,document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white ".concat(t/60*100,"%, transparent ").concat(t/60*100,"%, transparent 100%)"),t>=60&&(clearInterval(a.timer),a.timerReady=!0,document.querySelector(".start__button").style.background="rgb(103, 255, 92)")}),6))}e||(a.keydown=!1,a.timerReady&&(a.timerReady=!1,a.handleTimer()),clearInterval(a.timer),document.querySelector(".start__button")&&(document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)"))},a.setCube=function(e){a.setState({cube:w(e)})},a.handleActiveSlide=function(e){a.setState({activeSlidePosition:e})},a.handleLocalStorage=function(e,t){if("r"===e&&null!==localStorage.getItem("resultsArray")){var r=JSON.parse(localStorage.getItem("resultsArray"));r!==a.state.results&&a.setState({results:r})}"w"===e&&localStorage.setItem("resultsArray",JSON.stringify(t))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.onkeydown=this.handleKey.bind(this,!0),window.onkeyup=this.handleKey.bind(this,!1),this.handleLocalStorage("r")}},{key:"render",value:function(){return s.a.createElement("div",{className:"app",onClick:this.state.started?this.handleTimer.bind(this,(new Date).getTime()):void 0,onTouchStart:this.state.started?this.handleTimer.bind(this,(new Date).getTime()):void 0},s.a.createElement(f,{started:this.handleTimer,timerActive:this.state.started,scramble:this.state.lastScramble,results:this.state.results,resultsArr:this.handleResults,resultDate:this.state.resultDate}),!this.state.started&&s.a.createElement(m,{showScramble:this.setCube,passScramble:this.handleScramble}),!this.state.started&&s.a.createElement(k,{cubeGrid:this.state.cube,results:this.state.results,activeSlidePosition:this.handleActiveSlide,slide:this.state.activeSlidePosition,deleteResult:this.handleResultDelete,resultsUpdated:this.state.resultsUpdated}),!this.state.started&&s.a.createElement(p,{started:this.handleTimer}))}}]),t}(r.Component));o.a.render(s.a.createElement(O,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.770b8289.chunk.js.map