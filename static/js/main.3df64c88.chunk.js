(this.webpackJsonpbrush=this.webpackJsonpbrush||[]).push([[0],{83:function(t,e,i){},85:function(t,e,i){},86:function(t,e,i){},91:function(t,e,i){"use strict";i.r(e);var a=i(1),n=i(0),o=i.n(n),r=i(15),s=i.n(r),h=(i(83),i(23)),d=i(102),l=i(5),c=function(t){};c.isSelected=[],c.deselectAll=function(){c.isSelected.fill(!1)},c.getColumnNames=function(){return["isSelected","A","B","A + B","A * B"]},c.getDomain=function(t,e){return[-2,2]},c.values=[],c.getValues=function(t){if(c.values.length!==t){var e=l.a(0,.5);c.values=[];for(var i=0;i<t;i++){var a=e(),n=e();c.values[i]=[!1,a,n,a+n,a*n]}}return c.values};var u=c,f=function(t){};f.draw=function(t,e,i,a,n,o,r){var s=n.getContext("2d"),h=u.getColumnNames();s.fillStyle="#000000",s.fontSize="14px";var d=h[r];s.fillText(d,t+i/2-s.measureText(d).width/2,e+a-a/2+4),s.fontSize="10px",d=(""+u.getDomain(o,r)[0]).slice(0,4),s.fillText(d,t+4,e+a-4),d=(""+u.getDomain(o,r)[1]).slice(0,3),s.fillText(d,t+i-3-s.measureText(d).width,e+12)};var v=f,w=function(t){};w.padding=10,w.normalize=function(t){var e=t.x,i=t.y,a=t.width,n=t.height;return a<0&&(e+=a,a=-a),n<0&&(i+=n,n=-n),{x:e,y:i,width:a,height:n}},w.isWithin=function(t,e,i){var a=w.normalize(e);return void 0!==i&&(a.x-=i,a.y-=i,a.width+=2*i,a.height+=2*i),a.x<=t.x&&t.x<a.x+a.width&&a.y<=t.y&&t.y<a.y+a.height},w.draw=function(t,e,i,a,n,o,r,s,h,d,c){var f=n.getContext("2d"),v=w.padding,g=u.getValues(o),x=l.b().domain(u.getDomain(o,r)).range([t+v,t+i-v]),b=l.b().domain(u.getDomain(o,s)).range([e+a-v,e+v]),m=d;if(void 0===m){var y=(m=f.createImageData(i,a)).data;g.forEach((function(n){var o=x(n[r])-t,d=b(n[s])-e;if(0<=o&&o<i&&0<=d&&d<a){var l=Math.floor(d)*(4*i)+4*Math.floor(o);y[l]=Math.round(0+y[l]*(1-h)),y[l+1]=Math.round(0+y[l+1]*(1-h)),y[l+2]=Math.round(0+y[l+2]*(1-h)),y[l+3]=Math.round(255*h+y[l+3]*(1-h))}}))}var M=f.createImageData(i,a);M.data.set(m.data);var p=M.data;if(void 0!==c)c.forEach((function(n){var o=x(g[n][r])-t,d=b(g[n][s])-e;if(0<=o&&o<i&&0<=d&&d<a){var l=Math.floor(d)*(4*i)+4*Math.floor(o);p[l]=Math.round(255+p[l]*(1-h))}}));else{var j=0;g.forEach((function(n){if(u.isSelected[j]){var o=x(n[r])-t,d=b(n[s])-e;if(0<=o&&o<i&&0<=d&&d<a){var l=Math.floor(d)*(4*i)+4*Math.floor(o);p[l]=Math.round(255+p[l]*(1-h))}}j++}))}return f.putImageData(M,t,e,v,v,i-v,a-v),m},w.select=function(t,e,i,a,n,o,r,s){var h=w.padding,d=[],c=u.getValues(n),f=l.b().domain(u.getDomain(n,o)).range([t+h,t+i-h]),v=l.b().domain(u.getDomain(n,r)).range([e+a-h,e+h]),g=f.invert(Math.min(s.x,s.x+s.width)),x=f.invert(Math.max(s.x,s.x+s.width)),b=v.invert(Math.max(s.y,s.y+s.height)),m=v.invert(Math.min(s.y,s.y+s.height)),y=0;return c.forEach((function(t){u.isSelected[y]=g<=t[o]&&t[o]<x&&b<=t[r]&&t[r]<m,u.isSelected[y]&&d.push(y),y++})),d};var g=w,x=(i(85),function t(e){var i=200,o=200,r=Object(n.useRef)(),s=e.nData,h=e.opacity,d=u.getColumnNames().length,l=function(e){t.downLocation.x>=0&&t.downLocation.y>=0&&(t.onMouseUp(e,i,o,r,s),t.draw(i,o,r,s,h))};return Object(n.useEffect)((function(){t.draw(i,o,r,s,h)})),Object(a.jsx)("canvas",{width:(d-1)*i,height:(d-1)*o,ref:r,onMouseDown:function(e){t.onMouseDown(e)},onMouseMove:l,onMouseUp:l})});x.handleSize=2,x.isGrowing=!1,x.isXMin=!1,x.isYMin=!1,x.isMoving=!1,x.bitmaps=void 0,x.selectedRows=void 0,x.brush={x:430,y:230,width:30,height:30},x.downLocation={x:-1,y:-1},x.clear=function(){x.bitmaps=void 0,x.selectedRows=void 0,u.deselectAll(),x.brush={x:430,y:230,width:30,height:30},x.downLocation={x:-1,y:-1}},x.onMouseDown=function(t){var e=x.handleSize,i=e/2,a=2*e,n=t.nativeEvent.offsetX,o=t.nativeEvent.offsetY,r=x.brush;if(t.preventDefault(),x.downLocation.x=n,x.downLocation.y=o,g.isWithin({x:n,y:o},r,x.handleSize)){var s=!1,h=!1,d=!1,l=!1;r.width>=0?Math.abs(r.x+r.width-i-n)<=a?h=!0:Math.abs(r.x+i-n)<=a&&(s=!0):Math.abs(r.x+r.width+i-n)<=a?s=!0:Math.abs(r.x-i-n)<=a&&(h=!0),r.height>=0?Math.abs(r.y+r.height-i-o)<=a?d=!0:Math.abs(r.y+i-o)<=a&&(l=!0):Math.abs(r.y+r.height+i-o)<=a?l=!0:Math.abs(r.y-i-o)<=a&&(d=!0),x.isGrowing=!1,x.isMoving=!1,(s||h)&&(d||l)?(x.isGrowing=!0,x.isXMin=s,x.isYMin=d):x.isMoving=!0}else x.brush.x=n,x.brush.y=o,x.brush.width=0,x.brush.height=0,x.isGrowing=!0,x.isXMin=!1,x.isYMin=!0,x.isMoving=!1},x.onMouseUp=function(t,e,i,a,n){var o=x.downLocation.x,r=x.downLocation.y,s=t.nativeEvent.offsetX,h=t.nativeEvent.offsetY,d=Math.floor(o/e),l=Math.floor(r/i),c=d*e,f=l*i,v=x.brush;o<0||r<0||(d===l?"mouseup"===t.type&&u.deselectAll():(x.isGrowing?(s=Math.min(c+e-1,Math.max(c+1,s)),h=Math.min(f+i-1,Math.max(f+1,h)),x.isXMin?(v.width-=s-v.x,v.x=s):v.width=s-v.x,x.isYMin?v.height=h-v.y:(v.height-=h-v.y,v.y=h)):x.isMoving&&(v.x+=s-o,v.y+=h-r,x.downLocation.x=s,x.downLocation.y=h,v.x<c+1&&(v.x=c+1),v.x>c+e-1-v.width&&(v.x=c+e-1-v.width),v.y<f+1&&(v.y=f+1),v.y>f+i-1-v.height&&(v.y=f+i-1-v.height)),x.selectedRows=g.select(c,f,e,i,n,d+1,l+1,v)),"mouseup"===t.type&&(x.downLocation.x=-1,x.downLocation.y=-1,x.isGrowing=!1,x.isXMin=!1,x.isYMin=!1,x.isMoving=!1,v.width<0&&(v.x+=v.width,v.width=-v.width),v.height<0&&(v.y+=v.height,v.height=-v.height)))},x.draw=function(t,e,i,a,n){var o=i.current,r=o.getContext("2d"),s=u.getColumnNames().length;r.clearRect(0,0,(s-1)*t,(s-1)*e),r.strokeStyle="#a0a0a0";for(var h=1;h<s-1;h++)r.moveTo(h*t+.5,0),r.lineTo(h*t+.5,(s-1)*e),r.moveTo(0,h*e+.5),r.lineTo((s-1)*t,h*e+.5);r.stroke();var d=!x.bitmaps;d&&(x.bitmaps=[]);for(var l=1;l<s;l++)for(var c=1;c<s;c++){var f=(l-1)*t,w=(c-1)*e;l===c?v.draw(f,w,t,e,o,a,l):d?(void 0===x.bitmaps[l-1]&&(x.bitmaps[l-1]=[]),x.bitmaps[l-1][c-1]=g.draw(f,w,t,e,o,a,l,c,n)):g.draw(f,w,t,e,o,a,l,c,n,x.bitmaps[l-1][c-1],x.selectedRows)}var b=x.brush;if(b.x>=0&&b.y>=0){var m=x.handleSize,y=g.normalize(b);y.x=Math.floor(y.x)+.5,y.y=Math.floor(y.y)+.5,y.width=Math.round(y.width),y.height=Math.round(y.height),r.strokeStyle="#99bbdd",r.fillStyle="#99bbdd",r.strokeRect(y.x,y.y,y.width,y.height),r.fillRect(y.x+1,y.y+1,m,m),r.fillRect(y.x+y.width-m-1,y.y+1,m,m),r.fillRect(y.x+1,y.y+y.height-m-1,m,m),r.fillRect(y.x+y.width-m-1,y.y+y.height-m-1,m,m)}};var b=x,m=(i(86),function t(){var e=Object(n.useState)(t.getPower(12)),i=Object(h.a)(e,2),o=i[0],r=i[1],s=Object(n.useState)(.4),l=Object(h.a)(s,2),c=l[0],u=l[1];return Object(a.jsxs)("div",{className:"Column",children:[Object(a.jsx)("div",{className:"GridPlots",children:Object(a.jsx)(b,{nData:o,opacity:c})}),Object(a.jsxs)("div",{className:"GridControls",children:[Object(a.jsx)("label",{children:"Points:"}),Object(a.jsx)(d.a,{defaultValue:12,step:1,min:6,max:18,valueLabelDisplay:"auto",marks:!0,valueLabelFormat:function(e){return t.getPower(e).toExponential()},onChangeCommitted:function(e,i){b.clear(),r(t.getPower(i))}}),Object(a.jsx)("label",{children:"Opacity:"}),Object(a.jsx)(d.a,{defaultValue:.5,step:.01,min:0,max:1,valueLabelDisplay:"auto",onChangeCommitted:function(t,e){b.clear(),u(e)}})]}),Object(a.jsxs)("div",{className:"Description",children:[Object(a.jsxs)("p",{children:["Brushing is a basic technique of exploratory data analysis, developed in the 1970s (",Object(a.jsx)("a",{href:"https://www.researchgate.net/publication/245345268_An_interactive_multidimensional_data_display_and_analysis_system",children:"Fishkeller, Friedman, and Tukey"}),") and 1980s (",Object(a.jsx)("a",{href:"https://www.jstor.org/stable/1269768?seq=1",children:"Becker and Cleveland"}),"; ",Object(a.jsx)("a",{href:"https://www.jstor.org/stable/2289448?seq=1",children:"Stuetzle"}),")."]}),Object(a.jsx)("p",{children:"Back then, analysts were happy to brush a few hundred points.  On modern hardware, with a fast browser, we can brush up to 1,000,000 points."})]}),Object(a.jsx)("a",{href:"https://github.com/hemanrobinson/brush/",children:"Code Shared on GitHub"})]})});m.getPower=function(t){return(t%3===0?1:t%3===1?2:5)*Math.pow(10,Math.floor(t/3))};var y=m;s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.3df64c88.chunk.js.map