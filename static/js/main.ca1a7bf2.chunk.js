(this["webpackJsonpcube-timer"]=this["webpackJsonpcube-timer"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(9),c=a.n(s),o=(a(15),a(1)),i=a(2),l=a(4),u=a(3),d=a(5),f=a(7),h=(a(16),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleTimer=function(){var e=0,t=0,r=0;a.timer=setInterval((function(){++e%100===0&&t++,t>=60&&(t=0,r++),document.querySelector(".time__clock").textContent="".concat(r<=9?"0".concat(r):r,":").concat(t<=9?"0".concat(t):t,".").concat(e%100<=9?"0".concat(e%100):e%100)}),10)},a.state={lastScramble:[],resultsUpdated:!1,results:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({lastScramble:this.props.scramble})}},{key:"componentDidUpdate",value:function(){this.props.timerActive?this.handleTimer():(clearInterval(this.timer),this.state.lastScramble!==this.props.scramble&&(this.state.lastScramble.length>0&&"00:00.00"!==document.querySelector(".time__clock").textContent&&this.state.resultDate!==this.props.resultDate&&this.setState({results:[].concat(Object(f.a)(this.state.results),[[document.querySelector(".time__clock").textContent,this.state.lastScramble,this.props.resultDate]]),resultsUpdated:!0,resultDate:this.props.resultDate}),this.setState({lastScramble:this.props.scramble}))),this.state.resultsUpdated&&(this.props.resultsArr(this.state.results),this.setState({resultsUpdated:!1}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"time",onClick:this.props.started.bind(this,(new Date).getTime())},n.a.createElement("div",{className:"time__scramble"},!this.props.timerActive&&this.state.results.length>0&&this.state.results[this.state.results.length-1][1].join(" "))," ",n.a.createElement("div",{className:"time__clock"},"00:00.00"))}}]),t}(r.Component)),b=(a(17),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleScramble=function(){for(var e=[],t=[],r={face:[["U","D"],["L","R"],["F","B"]],rotation:["","'","2"]},n=0;n<a.state.scrambleLength;n++){var s=!1,c=Math.floor(3*Math.random()),o=Math.floor(2*Math.random());if(0===n)t.push(r.face[c][o]);else if(1===n){for(;!s;)r.face[c][o]!==t[0]&&(t.push(r.face[c][o]),s=!0),c=Math.floor(3*Math.random()),o=Math.floor(2*Math.random());s=!1}for(;!s&&n>1;)c=Math.floor(3*Math.random()),o=Math.floor(2*Math.random()),r.face[c][o]===t[n-1]||r.face[c][o]===t[n-2]||r.face[0].includes(r.face[c][o])&&r.face[0].includes(t[n-2])&&r.face[1].includes(r.face[c][o])&&r.face[1].includes(t[n-2])&&r.face[2].includes(r.face[c][o])&&r.face[2].includes(t[n-2])||(t.push(r.face[c][o]),s=!0)}t.forEach((function(t){e.push(t+r.rotation[Math.floor(3*Math.random())])})),a.props.showScramble(e),a.props.passScramble(e),a.setState({scramble:e})},a.state={scramble:"",scrambleLength:25},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.handleScramble()}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"scramble",onClick:this.handleScramble},Object(f.a)(this.state.scramble).join(" "))}}]),t}(r.Component)),m=(a(18),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"results"})}}]),t}(r.Component)),p=a(6),v=(a(19),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleStart=function(e){console.log(Object(p.a)(a));var t=0;e?a.timer=setInterval((function(){t++,document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white ".concat(t,"%, transparent ").concat(t,"%, transparent 100%)"),t>=100&&(clearInterval(a.timer),a.timerReady=!0)}),10):e||(clearInterval(a.timer),a.timerReady&&(a.timerReady=!1,a.props.started()),document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)")},a.state={startFired:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"start"},n.a.createElement("button",{onMouseDown:this.handleStart.bind(this,!0),onMouseUp:this.handleStart.bind(this,!1),onTouchStart:this.handleStart.bind(this,!0),onTouchEnd:this.handleStart.bind(this,!1),className:"start__button"},"START"))}}]),t}(r.Component)),y=(a(20),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={},a.handleCubeGrid=function(){var e=a.props.cubeGrid,t=[],r=[],s=[],c=[],o=[],i=[];return e.f.forEach((function(e,a){t.push(n.a.createElement("div",{key:a,style:{backgroundColor:e}}))})),e.b.forEach((function(e,t){r.push(n.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.l.forEach((function(e,t){s.push(n.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.r.forEach((function(e,t){c.push(n.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.d.forEach((function(e,t){i.push(n.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),e.u.forEach((function(e,t){o.push(n.a.createElement("div",{key:t,style:{backgroundColor:e}}))})),[n.a.createElement("div",{key:"f",className:"cube__f cube__face"},t),n.a.createElement("div",{key:"b",className:"cube__b cube__face"},r),n.a.createElement("div",{key:"l",className:"cube__l cube__face"},s),n.a.createElement("div",{key:"r",className:"cube__r cube__face"},c),n.a.createElement("div",{key:"u",className:"cube__u cube__face"},o),n.a.createElement("div",{key:"d",className:"cube__d cube__face"},i)]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"cube__container"},n.a.createElement("div",{className:"cube"},this.handleCubeGrid()))}}]),t}(r.Component)),k=(a(21),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={started:!1,lastScramble:"",finished:!1,results:[],resultDate:"",cube:{f:[],b:[],l:[],r:[],u:[],d:[]},rotation:!0},a.handleTimer=function(e){a.state.started&&a.setState({resultDate:e}),a.setState({started:!a.state.started})},a.handleScramble=function(e){a.setState({lastScramble:e})},a.handleResults=function(e){a.setState({results:e})},a.handleKey=function(e){if(e&&!a.keydown){a.keydown=!0,a.state.started&&document.querySelector(".app").click();var t=0;document.querySelector(".start__button")&&(a.timer=setInterval((function(){t++,document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white ".concat(t,"%, transparent ").concat(t,"%, transparent 100%)"),t>=100&&(clearInterval(a.timer),a.timerReady=!0)}),10))}e||(a.keydown=!1,a.timerReady&&(a.timerReady=!1,a.handleTimer()),clearInterval(a.timer),document.querySelector(".start__button")&&(document.querySelector(".start__button").style.backgroundImage="linear-gradient(90deg, white 0%, white 0%, transparent 0%, transparent 100%)"))},a.handleCube=function(e){for(var t=["rgba(99, 255, 71, 1)","rgba(56, 169, 255, 1)","rgba(255, 71, 117, 1)","rgba(255, 150, 97, 1)","rgba(255, 249, 71, 1)","rgba(255, 255, 255, 1)"],r=t[0],n=t[1],s=t[2],c=t[3],o=t[4],i=t[5],l={f:[r,r,r,r,r,r,r,r,r],b:[n,n,n,n,n,n,n,n,n],l:[s,s,s,s,s,s,s,s,s],r:[c,c,c,c,c,c,c,c,c],u:[o,o,o,o,o,o,o,o,o],d:[i,i,i,i,i,i,i,i,i]},u={f:[r,r,r,r,r,r,r,r,r],b:[n,n,n,n,n,n,n,n,n],l:[s,s,s,s,s,s,s,s,s],r:[c,c,c,c,c,c,c,c,c],u:[o,o,o,o,o,o,o,o,o],d:[i,i,i,i,i,i,i,i,i]},d=0;d<e.length;d++){var f=e[d];if("L"===f)for(var h=0;h<7;h+=3)l.f[h]=u.u[h],l.d[h]=u.f[h],l.b[h]=u.d[h],l.u[h]=u.b[h];if("L'"===f)for(var b=0;b<7;b+=3)l.u[b]=u.f[b],l.f[b]=u.d[b],l.d[b]=u.b[b],l.b[b]=u.u[b];if("L2"===f)for(var m=0;m<7;m+=3)l.u[m]=u.d[m],l.f[m]=u.b[m],l.d[m]=u.u[m],l.b[m]=u.f[m];if("R"===f)for(var p=2;p<9;p+=3)l.u[p]=u.f[p],l.f[p]=u.d[p],l.d[p]=u.b[p],l.b[p]=u.u[p];if("R'"===f)for(var v=2;v<9;v+=3)l.f[v]=u.u[v],l.d[v]=u.f[v],l.b[v]=u.d[v],l.u[v]=u.b[v];if("R2"===f)for(var y=2;y<9;y+=3)l.u[y]=u.d[y],l.f[y]=u.b[y],l.d[y]=u.u[y],l.b[y]=u.f[y];if("U"===f)for(var k=0;k<3;k++)l.l[k]=u.f[k],l.b[8-k]=u.l[k],l.r[k]=u.b[8-k],l.f[k]=u.r[k];if("U'"===f)for(var _=0;_<3;_++)l.r[_]=u.f[_],l.b[8-_]=u.r[_],l.l[_]=u.b[8-_],l.f[_]=u.l[_];if("U2"===f)for(var S=0;S<3;S++)l.r[S]=u.l[S],l.b[8-S]=u.f[S],l.f[S]=u.b[8-S],l.l[S]=u.r[S];if("D"===f)for(var g=0;g<3;g++)l.l[8-g]=u.b[g],l.b[g]=u.r[8-g],l.r[8-g]=u.f[8-g],l.f[8-g]=u.l[8-g];if("D'"===f)for(var E=0;E<3;E++)l.l[8-E]=u.f[8-E],l.b[E]=u.l[8-E],l.r[8-E]=u.b[E],l.f[8-E]=u.r[8-E];if("D2"===f)for(var j=0;j<3;j++)l.r[8-j]=u.l[8-j],l.b[j]=u.f[8-j],l.f[8-j]=u.b[j],l.l[8-j]=u.r[8-j];if("F"===f)for(var w=0;w<9;w+=3)l.r[w]=u.u[6+w/3],l.d[w/3]=u.r[6-w],l.l[2+w]=u.d[w/3],l.u[6+w/3]=u.l[8-w];if("F'"===f)for(var O=0;O<9;O+=3)l.r[O]=u.d[2-O/3],l.u[6+O/3]=u.r[O],l.l[2+O]=u.u[8-O/3],l.d[O/3]=u.l[2+O];if("F2"===f)for(var D=0;D<7;D+=3)l.r[D]=u.l[8-D],l.u[8-D/3]=u.d[D/3],l.l[8-D]=u.r[D],l.d[D/3]=u.u[8-D/3];if("B"===f)for(var C=0;C<9;C+=3)l.l[C]=u.u[2-C/3],l.d[6+C/3]=u.l[C],l.r[2+C]=u.d[8-C/3],l.u[C/3]=u.r[2+C];if("B'"===f)for(var M=0;M<9;M+=3)l.l[M]=u.d[6+M/3],l.u[M/3]=u.l[6-M],l.r[2+M]=u.u[M/3],l.d[6+M/3]=u.r[8-M];if("B2"===f)for(var U=0;U<7;U+=3)l.r[8-U]=u.l[U],l.u[U/3]=u.d[8-U/3],l.l[U]=u.r[8-U],l.d[8-U/3]=u.u[U/3];if("L"===f||"R"===f||"F"===f||"B"===f||"U"===f||"D"===f)for(var N=0;N<9;N++)4!==N&&(l[f.toLowerCase()][N]=u[f.toLowerCase()][8-(2+3*N)%10]);if("L'"===f||"R'"===f||"F'"===f||"B'"===f||"U'"===f||"D'"===f)for(var R=0;R<9;R++)4!==R&&(l[f[0].toLowerCase()][R]=u[f[0].toLowerCase()][(2+3*R)%10]);if("L2"===f||"R2"===f||"F2"===f||"B2"===f||"U2"===f||"D2"===f)for(var T=0;T<9;T++)4!==T&&(l[f[0].toLowerCase()][T]=u[f[0].toLowerCase()][8-T]);for(var L=0;L<9;L++)u.f[L]=l.f[L],u.b[L]=l.b[L],u.l[L]=l.l[L],u.r[L]=l.r[L],u.u[L]=l.u[L],u.d[L]=l.d[L]}a.setState({cube:u})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.keydown=!1,window.onkeydown=this.handleKey.bind(this,!0),window.onkeyup=this.handleKey.bind(this,!1)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"app",onClick:this.state.started?this.handleTimer.bind(this,(new Date).getTime()):void 0,onTouchStart:this.state.started?this.handleTimer.bind(this,(new Date).getTime()):void 0},n.a.createElement(h,{started:this.handleTimer,timerActive:this.state.started,scramble:this.state.lastScramble,resultsArr:this.handleResults,resultDate:this.state.resultDate}),!this.state.started&&n.a.createElement(b,{showScramble:this.handleCube,passScramble:this.handleScramble}),!this.state.started&&n.a.createElement(y,{cubeGrid:this.state.cube}),!this.state.started&&n.a.createElement(m,{results:this.state.results}),!this.state.started&&n.a.createElement(v,{started:this.handleTimer}))}}]),t}(r.Component));c.a.render(n.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.ca1a7bf2.chunk.js.map