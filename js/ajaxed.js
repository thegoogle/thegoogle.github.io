var vhome = document.getElementById("ihome");
var vabout = document.getElementById("iabout");
var vchildhood = document.getElementById("ichildhood");
var vcollege = document.getElementById("icollege");
var vnss = document.getElementById("inss");
var vlove = document.getElementById("ilove");
var vstep = document.getElementById("istep");
var vdad = document.getElementById("idad");
var vcontact = document.getElementById("icontact");
var vfeedback = document.getElementById("ifeedback");
var vwish = document.getElementById("iwish");

var ta = document.getElementById('contentdiv');		
var x = new XMLHttpRequest;
function funct(){
	ta.innerHTML = x.responseText;	
}

function func(){
	x.open("GET", "pages/home.html");
	x.onreadystatechange =funct;
	x.send();
}

function fhome(){
	x.abort();
	x.open("GET", "pages/home.html");
	x.onreadystatechange =funct;
	x.send();
}

function fabout(){
	x.abort();
	x.open("GET", "pages/about.html");
	x.onreadystatechange =funct;
	x.send();
}

function fchildhood(){
	x.abort();
	x.open("GET", "pages/childhood.html");
	x.onreadystatechange =funct;
	x.send();
}

function fcollege(){
	x.abort();
	x.open("GET", "pages/college.html");
	x.onreadystatechange =funct;
	x.send();
}

function fnss(){
	x.abort();
	x.open("GET", "pages/nss.html");
	x.onreadystatechange =funct;
	x.send();
}

function flove(){
	x.abort();
	x.open("GET", "pages/love.html");
	x.onreadystatechange =funct;
	x.send();
}

function fstep(){
	x.abort();
	x.open("GET", "pages/step.html");
	x.onreadystatechange =funct;
	x.send();
}

function fdad(){
	x.abort();
	x.open("GET", "pages/dad.html");
	x.onreadystatechange =funct;
	x.send();
}

function fcontact(){
	x.abort();
	x.open("GET", "pages/contact.html");
	x.onreadystatechange =funct;
	x.send();
}

function ffeedback(){
	x.abort();
	x.open("GET", "pages/feedback.html");
	x.onreadystatechange =funct;
	x.send();
}

function fwish(){
	x.abort();
	x.open("GET", "pages/wish.html");
	x.onreadystatechange =funct;
	x.send();
}

window.onload=func;

if(vhome){
	if(vhome.addEventListener)
		vhome.addEventListener("click", fhome, false);
	else if(vhome.attachEvent)
		vhome.attachEvent('onclick', fhome);
}

if(vabout){
	if(vabout.addEventListener)
		vabout.addEventListener("click", fabout, false);
	else if(vabout.attachEvent)
		vabout.attachEvent('onclick', fabout);
}

if(vchildhood){
	if(vchildhood.addEventListener)
		vchildhood.addEventListener("click", fchildhood, false);
	else if(vchildhood.attachEvent)
		vchildhood.attachEvent('onclick', fchildhood);
}

if(vcollege){
	if(vcollege.addEventListener)
		vcollege.addEventListener("click", fcollege, false);
	else if(vcollege.attachEvent)
		vcollege.attachEvent('onclick', fcollege);
}

if(vnss){
	if(vnss.addEventListener)
		vnss.addEventListener("click", fnss, false);
	else if(vnss.attachEvent)
		vnss.attachEvent('onclick', fnss);
}

if(vlove){
	if(vlove.addEventListener)
		vlove.addEventListener("click", flove, false);
	else if(vlove.attachEvent)
		vlove.attachEvent('onclick', flove);
}

if(vstep){
	if(vstep.addEventListener)
		vstep.addEventListener("click", fstep, false);
	else if(vstep.attachEvent)
		vstep.attachEvent('onclick', fstep);
}

if(vdad){
	if(vdad.addEventListener)
		vdad.addEventListener("click", fdad, false);
	else if(vdad.attachEvent)
		vdad.attachEvent('onclick', fdad);
}

if(vcontact){
	if(vcontact.addEventListener)
		vcontact.addEventListener("click", fcontact, false);
	else if(vcontact.attachEvent)
		vcontact.attachEvent('onclick', fcontact);
}

if(vfeedback){
	if(vfeedback.addEventListener)
		vfeedback.addEventListener("click", ffeedback, false);
	else if(vfeedback.attachEvent)
		vfeedback.attachEvent('onclick', ffeedback);
}

if(vwish){
	if(vwish.addEventListener)
		vwish.addEventListener("click", fwish, false);
	else if(vfeedback.attachEvent)
		vwish.attachEvent('onclick', fwish);
}


/* Auto generated, hash = 90d22umjselkp5q5gm7q9i58o */
(function(c){c.LIRenderAll=function(){function t(a){return Array.prototype.slice.call(a.attributes).filter(function(a){return-1!==a.name.lastIndexOf("data-key-",0)}).map(function(a){return encodeURIComponent(a.name.replace("data-","").toLowerCase())+"\x3d"+encodeURIComponent(a.value)})}function u(a){var d=a.getAttribute("data-size"),b=a.getAttribute("data-locale"),e=a.getAttribute("data-type"),v=a.getAttribute("data-theme"),c=a.getAttribute("data-vanity"),g=a.getAttribute("data-version"),h=a.getAttribute("data-ei"),
k=a.getAttribute("data-entity"),l=a.getAttribute("data-iscreate"),f=Math.round(1E6*Math.random()),h=h?"https://badges.linkedin-ei.com/":"https://badges.linkedin.com/",b=["locale\x3d"+encodeURIComponent(b),"badgetype\x3d"+encodeURIComponent(e),"badgetheme\x3d"+encodeURIComponent(v),"uid\x3d"+encodeURIComponent(f),"version\x3d"+encodeURIComponent(g)];"v2"===g?(h+="view",b.push("badgesize\x3d"+encodeURIComponent(d)),b.push("entity\x3d"+encodeURIComponent(k)),b=b.concat(t(a))):(h+="profile",b.push("maxsize\x3d"+
encodeURIComponent(d)),b.push("trk\x3d"+encodeURIComponent("profile-badge")),b.push("vanityname\x3d"+encodeURIComponent(c)));l&&b.push("fromCreate\x3dtrue");d=h+"?"+b.join("\x26");a.setAttribute("data-uid",f);a=document.createElement("script");a.src=d;p.push(a);document.body.appendChild(a)}function q(a,d){if("SCRIPT"!==a.tagName||r[a.src]||d&&(!d||a.getAttribute("data-isartdeco")))for(var b=0,e=a.childNodes;b<e.length;)q(e[b++],d);else a.parentNode.replaceChild(w(a),a),r[a.src]=!0;return a}function w(a){for(var d=
document.createElement("script"),b=a.attributes.length-1;0<=b;b--)d.setAttribute(a.attributes[b].name,a.attributes[b].value);return d}function x(){if(m>=n&&0<n||m>=g.length)delete c.LIBadgeCallback,p.map(function(a){document.body.removeChild(a)})}var m=0,n=0,p=[],r={},g=Array.prototype.slice.call(document.querySelectorAll(".LI-profile-badge, .LI-entity-badge")),k,l,f,s;k=0;for(l=g.length;k<l;k++)f=g[k],s=f.getAttribute("data-rendered"),s||(n++,f.setAttribute("data-rendered",!0),u(f));c.LIBadgeCallback=
function(a,d){m++;var b,e,c,f;b=0;for(l=g.length;b<l;b++)e=g[b],f=e.getAttribute("data-iscreate"),c=parseInt(e.getAttribute("data-uid"),10),c===d&&(c=document.createElement("div"),c.innerHTML=a,e.appendChild(c),q(e,f));x()}};"complete"===document.readyState?c.LIRenderAll():c.addEventListener("load",c.LIRenderAll,!1)})(window);
