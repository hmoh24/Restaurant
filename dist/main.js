(()=>{"use strict";const e=function(){const e=document.querySelector("html");e.style.width="100vw",e.style.height="100vh";const t=document.querySelector("body");t.style.width="100vw",t.style.height="100vh";const o=document.querySelector("#content");o.style.width="100vw",o.style.height="100vh",o.style.display="flex",o.style.flexDirection="row",o.style.justifyContent="flex-start",o.style.backgroundColor="brown",o.style.backgroundImage="url('/dist/photo3.jpeg')",o.style.backgroundRepeat="no-repeat",o.style.backgroundSize="cover",o.style.backgroundAttachment="scroll";let n=document.createElement("div");n.setAttribute("id","sideBar"),n.style.width="300px",n.style.height="100vh",n.style.backgroundColor="black",n.style.opacity="0.7";let l=document.createElement("header");l.textContent="Island Delights",l.style.color="white",l.style.fontSize="100px",l.style.marginLeft="100px";let c=document.createElement("button");c.setAttribute("id","home"),c.textContent="Home";let r=document.createElement("button");r.setAttribute("id","menu"),r.textContent="Menu";let d=document.createElement("button");d.setAttribute("id","contact"),d.textContent="Contact",o.appendChild(n),o.appendChild(l),n.appendChild(c),n.appendChild(r),n.appendChild(d);let s=document.querySelectorAll("button"),i=Array.from(s);for(let e=0;e<i.length;e++)i[e].style.color="white",i[e].style.fontSize="50px"};e();let t=home;document.querySelector("#home").addEventListener("click",(e=>{t=home})),document.querySelector("#menu").addEventListener("click",(e=>{t=menu})),document.querySelector("#contact").addEventListener("click",(e=>{t=contact})),t===home&&1!==page?e():t===menu&&function(){const e=document.querySelector("html");e.style.width="100vw",e.style.height="100vh";const t=document.querySelector("body");t.style.width="100vw",t.style.height="100vh";const o=document.querySelector("#content");o.style.width="100vw",o.style.height="100vh",o.style.backgroundColor="yellow"}()})();