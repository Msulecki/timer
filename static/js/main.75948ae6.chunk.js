(this["webpackJsonpcube-timer"]=this["webpackJsonpcube-timer"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(22)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),s=a(8),o=a.n(s),c=(a(14),a(1)),i=a(2),l=a(4),u=a(3),h=a(5),d=a(6),f=(a(15),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleTimer=function(){var t=0,e=0,r=0;a.timer=setInterval((function(){t++,a.result_time=t,t%100===0&&e++,e>=60&&(e=0,r++),document.querySelector(".time__clock").textContent="".concat(r<=9?"0".concat(r):r,":").concat(e<=9?"0".concat(e):e,".").concat(t%100<=9?"0".concat(t%100):t%100)}),10)},a.state={lastScramble:[],resultsUpdated:!1,results:[]},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.setState({lastScramble:this.props.scramble})}},{key:"componentDidUpdate",value:function(){this.props.timerActive?this.handleTimer():(clearInterval(this.timer),this.state.lastScramble!==this.props.scramble&&(this.state.lastScramble.length>0&&"00:00.00"!==document.querySelector(".time__clock").textContent&&this.state.resultDate!==this.props.resultDate&&this.setState({results:[].concat(Object(d.a)(this.state.results),[[document.querySelector(".time__clock").textContent,this.result_time,this.state.lastScramble,this.props.resultDate]]),resultsUpdated:!0,resultDate:this.props.resultDate}),this.setState({lastScramble:this.props.scramble}))),this.state.resultsUpdated&&(this.props.resultsArr(this.state.results),this.setState({resultsUpdated:!1}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"time"},n.a.createElement("div",{className:"time__scramble"},!this.props.timerActive&&this.state.results.length>0&&this.state.results[this.state.results.length-1][2].join(" "))," ",n.a.createElement("div",{className:"time__clock"},"00:00.00"))}}]),e}(r.Component)),m=(a(16),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleScramble=function(){for(var t=[],e=[],r={face:[["U","D"],["L","R"],["F","B"]],rotation:["","'","2"]},n=0;n<a.state.scrambleLength;n++){var s=!1,o=Math.floor(3*Math.random()),c=Math.floor(2*Math.random());if(0===n)e.push(r.face[o][c]);else if(1===n){for(;!s;)r.face[o][c]!==e[0]&&(e.push(r.face[o][c]),s=!0),o=Math.floor(3*Math.random()),c=Math.floor(2*Math.random());s=!1}for(;!s&&n>1;)o=Math.floor(3*Math.random()),c=Math.floor(2*Math.random()),r.face[o][c]===e[n-1]||r.face[o][c]===e[n-2]||r.face[0].includes(r.face[o][c])&&r.face[0].includes(e[n-2])&&r.face[1].includes(r.face[o][c])&&r.face[1].includes(e[n-2])&&r.face[2].includes(r.face[o][c])&&r.face[2].includes(e[n-2])||(e.push(r.face[o][c]),s=!0)}e.forEach((function(e){t.push(e+r.rotation[Math.floor(3*Math.random())])})),a.props.showScramble(t),a.props.passScramble(t),a.setState({scramble:t})},a.state={scramble:"",scrambleLength:25},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.handleScramble()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"scramble",onClick:this.handleScramble},Object(d.a)(this.state.scramble).join(" "))}}]),e}(r.Component)),b=(a(17),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleTimes=function(){return{best:"".concat(Math.floor(a.state.best/6e3)>9?Math.floor(a.state.best/6e3):"0"+Math.floor(a.state.best/6e3),":").concat(Math.floor(a.state.best/100%60)>9?a.state.best/100%60:"0"+(a.state.best/100%60).toFixed(2)),avg:"".concat(Math.floor(a.state.avg/6e3)>9?Math.floor(a.state.avg/6e3):"0"+Math.floor(a.state.avg/6e3),":").concat(Math.floor(a.state.avg/100%60)>9?a.state.avg/100%60:"0"+(a.state.avg/100%60).toFixed(2)),ao5:"".concat(Math.floor(a.state.ao5/6e3)>9?Math.floor(a.state.ao5/6e3):"0"+Math.floor(a.state.ao5/6e3),":").concat(Math.floor(a.state.ao5/100%60)>9?a.state.ao5/100%60:"0"+(a.state.ao5/100%60).toFixed(2)),ao12:"".concat(Math.floor(a.state.ao12/6e3)>9?Math.floor(a.state.ao12/6e3):"0"+Math.floor(a.state.ao12/6e3),":").concat(Math.floor(a.state.ao12/100%60)>9?a.state.ao12/100%60:"0"+(a.state.ao12/100%60).toFixed(2))}},a.state={best:0,avg:0,ao5:0,ao12:0},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){if(this.props.results.length>0){for(var t=[],e=0;e<this.props.results.length;e++)t.unshift(this.props.results[e][1]);var a=[].concat(t);a=a.sort((function(t,e){return t-e}))[0];var r=Math.floor(t.reduce((function(t,e){return t+e}),0)/t.length);if(r!==this.state.avg&&this.setState({best:a,avg:r}),t.length>=5){for(var n=[],s=0;s<5;s++)n.push(t[s]);(n=n.sort((function(t,e){return t-e}))).pop(),n.shift();var o=Math.floor(n.reduce((function(t,e){return t+e}),0)/n.length);if(o!==this.state.ao5&&this.setState({ao5:o}),t.length>=12){for(var c=[],i=0;i<12;i++)c.push(t[i]);(c=c.sort((function(t,e){return t-e}))).pop(),c.shift();var l=Math.floor(c.reduce((function(t,e){return t+e}),0)/c.length);l!==this.state.ao12&&this.setState({ao12:l})}}}this.handleTimes()}},{key:"render",value:function(){return n.a.createElement("div",{className:"results"},n.a.createElement("div",null,"Best: ".concat(this.handleTimes().best)),n.a.createElement("div",null,"Avg: ".concat(this.handleTimes().avg)),n.a.createElement("div",null,"Ao5: ".concat(this.handleTimes().ao5)),n.a.createElement("div",null,"Ao12: ".concat(this.handleTimes().ao12)))}}]),e}(r.Component));a(18);var v=function(t){console.log(t.results);var e=t.results;return e=t.results.map((function(t,e){if(e<15)return n.a.createElement("li",{key:t[3]},t[0]," ",new Date(t[3]).toLocaleString())})),n.a.createElement("ol",null,e)},p=(a(19),function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleStart=function(t){var e=0;t?a.timer=setInterval((function(){e++,document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white ".concat(e,"%, transparent ").concat(e,"%, transparent 100%)"),e>=100&&(clearInterval(a.timer),a.timerReady=!0,document.querySelector(".start__button").style.background="rgb(103, 255, 92)")}),10):t||(clearInterval(a.timer),a.timerReady&&(a.timerReady=!1,a.props.started()),document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)")},a.state={startFired:!1},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"start"},n.a.createElement("button",{onMouseDown:this.handleStart.bind(this,!0),onMouseUp:this.handleStart.bind(this,!1),onTouchStart:this.handleStart.bind(this,!0),onTouchEnd:this.handleStart.bind(this,!1),className:"start__button"},"START"))}}]),e}(r.Component)),y=(a(20),function(t){function e(){var t,a;Object(c.a)(this,e);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(s)))).state={},a.handleCubeGrid=function(){var t=a.props.cubeGrid,e=[],r=[],s=[],o=[],c=[],i=[];return t.f.forEach((function(t,a){e.push(n.a.createElement("div",{key:a,style:{backgroundColor:t}}))})),t.b.forEach((function(t,e){r.push(n.a.createElement("div",{key:e,style:{backgroundColor:t}}))})),t.l.forEach((function(t,e){s.push(n.a.createElement("div",{key:e,style:{backgroundColor:t}}))})),t.r.forEach((function(t,e){o.push(n.a.createElement("div",{key:e,style:{backgroundColor:t}}))})),t.d.forEach((function(t,e){i.push(n.a.createElement("div",{key:e,style:{backgroundColor:t}}))})),t.u.forEach((function(t,e){c.push(n.a.createElement("div",{key:e,style:{backgroundColor:t}}))})),[n.a.createElement("div",{key:"f",className:"cube__f cube__face"},e),n.a.createElement("div",{key:"b",className:"cube__b cube__face"},r),n.a.createElement("div",{key:"l",className:"cube__l cube__face"},s),n.a.createElement("div",{key:"r",className:"cube__r cube__face"},o),n.a.createElement("div",{key:"u",className:"cube__u cube__face"},c),n.a.createElement("div",{key:"d",className:"cube__d cube__face"},i)]},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"cube__container"},n.a.createElement("div",{className:"cube"},this.handleCubeGrid()))}}]),e}(r.Component)),g=(a(21),function(t){function e(){var t,a;Object(c.a)(this,e);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(n)))).state={started:!1,lastScramble:"",finished:!1,results:[],resultDate:"",cube:{f:[],b:[],l:[],r:[],u:[],d:[]},rotation:!0,touchPosition:0,touchPositionSet:!1},a.handleTimer=function(t){a.state.started&&a.setState({resultDate:t}),a.setState({started:!a.state.started})},a.handleScramble=function(t){a.setState({lastScramble:t})},a.handleResults=function(t){a.setState({results:t.reverse()})},a.handleKey=function(t){if(t&&!a.keydown){a.keydown=!0,a.state.started&&document.querySelector(".app").click();var e=0;document.querySelector(".start__button")&&(a.timer=setInterval((function(){e++,document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white ".concat(e,"%, transparent ").concat(e,"%, transparent 100%)"),e>=100&&(clearInterval(a.timer),a.timerReady=!0,document.querySelector(".start__button").style.background="rgb(103, 255, 92)")}),10))}t||(a.keydown=!1,a.timerReady&&(a.timerReady=!1,a.handleTimer()),clearInterval(a.timer),document.querySelector(".start__button")&&(document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)"))},a.handleCube=function(t){for(var e=["rgba(99, 255, 71, 1)","rgba(56, 169, 255, 1)","rgba(255, 71, 117, 1)","rgba(255, 150, 97, 1)","rgba(255, 249, 71, 1)","rgba(255, 255, 255, 1)"],r=e[0],n=e[1],s=e[2],o=e[3],c=e[4],i=e[5],l={f:[r,r,r,r,r,r,r,r,r],b:[n,n,n,n,n,n,n,n,n],l:[s,s,s,s,s,s,s,s,s],r:[o,o,o,o,o,o,o,o,o],u:[c,c,c,c,c,c,c,c,c],d:[i,i,i,i,i,i,i,i,i]},u={f:[r,r,r,r,r,r,r,r,r],b:[n,n,n,n,n,n,n,n,n],l:[s,s,s,s,s,s,s,s,s],r:[o,o,o,o,o,o,o,o,o],u:[c,c,c,c,c,c,c,c,c],d:[i,i,i,i,i,i,i,i,i]},h=0;h<t.length;h++){var d=t[h];if("L"===d)for(var f=0;f<7;f+=3)l.f[f]=u.u[f],l.d[f]=u.f[f],l.b[f]=u.d[f],l.u[f]=u.b[f];if("L'"===d)for(var m=0;m<7;m+=3)l.u[m]=u.f[m],l.f[m]=u.d[m],l.d[m]=u.b[m],l.b[m]=u.u[m];if("L2"===d)for(var b=0;b<7;b+=3)l.u[b]=u.d[b],l.f[b]=u.b[b],l.d[b]=u.u[b],l.b[b]=u.f[b];if("R"===d)for(var v=2;v<9;v+=3)l.u[v]=u.f[v],l.f[v]=u.d[v],l.d[v]=u.b[v],l.b[v]=u.u[v];if("R'"===d)for(var p=2;p<9;p+=3)l.f[p]=u.u[p],l.d[p]=u.f[p],l.b[p]=u.d[p],l.u[p]=u.b[p];if("R2"===d)for(var y=2;y<9;y+=3)l.u[y]=u.d[y],l.f[y]=u.b[y],l.d[y]=u.u[y],l.b[y]=u.f[y];if("U"===d)for(var g=0;g<3;g++)l.l[g]=u.f[g],l.b[8-g]=u.l[g],l.r[g]=u.b[8-g],l.f[g]=u.r[g];if("U'"===d)for(var _=0;_<3;_++)l.r[_]=u.f[_],l.b[8-_]=u.r[_],l.l[_]=u.b[8-_],l.f[_]=u.l[_];if("U2"===d)for(var S=0;S<3;S++)l.r[S]=u.l[S],l.b[8-S]=u.f[S],l.f[S]=u.b[8-S],l.l[S]=u.r[S];if("D"===d)for(var k=0;k<3;k++)l.l[8-k]=u.b[k],l.b[k]=u.r[8-k],l.r[8-k]=u.f[8-k],l.f[8-k]=u.l[8-k];if("D'"===d)for(var E=0;E<3;E++)l.l[8-E]=u.f[8-E],l.b[E]=u.l[8-E],l.r[8-E]=u.b[E],l.f[8-E]=u.r[8-E];if("D2"===d)for(var M=0;M<3;M++)l.r[8-M]=u.l[8-M],l.b[M]=u.f[8-M],l.f[8-M]=u.b[M],l.l[8-M]=u.r[8-M];if("F"===d)for(var w=0;w<9;w+=3)l.r[w]=u.u[6+w/3],l.d[w/3]=u.r[6-w],l.l[2+w]=u.d[w/3],l.u[6+w/3]=u.l[8-w];if("F'"===d)for(var j=0;j<9;j+=3)l.r[j]=u.d[2-j/3],l.u[6+j/3]=u.r[j],l.l[2+j]=u.u[8-j/3],l.d[j/3]=u.l[2+j];if("F2"===d)for(var O=0;O<7;O+=3)l.r[O]=u.l[8-O],l.u[8-O/3]=u.d[O/3],l.l[8-O]=u.r[O],l.d[O/3]=u.u[8-O/3];if("B"===d)for(var D=0;D<9;D+=3)l.l[D]=u.u[2-D/3],l.d[6+D/3]=u.l[D],l.r[2+D]=u.d[8-D/3],l.u[D/3]=u.r[2+D];if("B'"===d)for(var C=0;C<9;C+=3)l.l[C]=u.d[6+C/3],l.u[C/3]=u.l[6-C],l.r[2+C]=u.u[C/3],l.d[6+C/3]=u.r[8-C];if("B2"===d)for(var T=0;T<7;T+=3)l.r[8-T]=u.l[T],l.u[T/3]=u.d[8-T/3],l.l[T]=u.r[8-T],l.d[8-T/3]=u.u[T/3];if("L"===d||"R"===d||"F"===d||"B"===d||"U"===d||"D"===d)for(var N=0;N<9;N++)4!==N&&(l[d.toLowerCase()][N]=u[d.toLowerCase()][8-(2+3*N)%10]);if("L'"===d||"R'"===d||"F'"===d||"B'"===d||"U'"===d||"D'"===d)for(var U=0;U<9;U++)4!==U&&(l[d[0].toLowerCase()][U]=u[d[0].toLowerCase()][(2+3*U)%10]);if("L2"===d||"R2"===d||"F2"===d||"B2"===d||"U2"===d||"D2"===d)for(var L=0;L<9;L++)4!==L&&(l[d[0].toLowerCase()][L]=u[d[0].toLowerCase()][8-L]);for(var R=0;R<9;R++)u.f[R]=l.f[R],u.b[R]=l.b[R],u.l[R]=l.l[R],u.r[R]=l.r[R],u.u[R]=l.u[R],u.d[R]=l.d[R]}a.setState({cube:u})},a.handleTouch=function(t,e){var r=document.querySelector(".app__page"),n=r.childNodes.length,s=window.getComputedStyle(r,null).getPropertyValue("transform").match(/\d+/g);if(t&&!a.state.touchPositionSet&&(a.setState({touchPosition:e.touches[0].pageX,slidePosition:s?parseInt(s[4]):0,touchPositionSet:!0}),r.style.transition=".0s"),!t){a.setState({touchPositionSet:!1}),r.style.transition=".5s";var o=Math.round(a.transform/r.offsetWidth)*r.offsetWidth;o<0&&(o=0),r.style.transform="matrix(1,0,0,1,".concat(-o,",0)")}"move"===t&&(a.transform=a.state.slidePosition+(a.state.touchPosition-e.touches[0].pageX),a.transform>r.offsetWidth*(n-1)&&(a.transform=r.offsetWidth*(n-1)),a.transform>0&&a.transform<r.offsetWidth*(n-1)&&(r.style.transform="matrix(1,0,0,1,".concat(-a.transform,",0)")))},a}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.keydown=!1,this.touched=!1,window.onkeydown=this.handleKey.bind(this,!0),window.onkeyup=this.handleKey.bind(this,!1)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"app",onClick:this.state.started?this.handleTimer.bind(this,(new Date).getTime()):void 0,onTouchStart:this.state.started?this.handleTimer.bind(this,(new Date).getTime()):void 0},n.a.createElement(f,{started:this.handleTimer,timerActive:this.state.started,scramble:this.state.lastScramble,resultsArr:this.handleResults,resultDate:this.state.resultDate}),!this.state.started&&n.a.createElement(m,{showScramble:this.handleCube,passScramble:this.handleScramble}),!this.state.started&&n.a.createElement("div",{className:"app__page",onTouchMove:this.handleTouch.bind(this,"move"),onTouchStart:this.handleTouch.bind(this,!0),onTouchEnd:this.handleTouch.bind(this,!1)},n.a.createElement("div",{className:"app__page-1"},n.a.createElement(y,{cubeGrid:this.state.cube}),n.a.createElement(b,{results:this.state.results})),n.a.createElement("div",{className:"app__page-2"},n.a.createElement(v,{results:this.state.results})),n.a.createElement("div",{className:"app__page-3"},"3"),n.a.createElement("div",{className:"app__page-4"},"4")),!this.state.started&&n.a.createElement(p,{started:this.handleTimer}))}}]),e}(r.Component));o.a.render(n.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.75948ae6.chunk.js.map