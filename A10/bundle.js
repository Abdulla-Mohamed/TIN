(()=>{
    "use strict";
    const
        x=d=>d+273.15 ,
        z=d=>d-273.15,
        y=d=>(d-32)*5/9,
        a=d=>1.8*d+32,
        b=d => d - 273.15 + 273.15 +273.15,
        ce=document.getElementById("cel"),
        fa=document.getElementById("fah"),
        ke=document.getElementById("kel"),
        km=document.getElementById("km"),
        mi=document.getElementById("mile");
    ce.addEventListener("input",(y=>{fa.value=a(y.target.value),ke.value=b(y.target.value)})),
        ke.addEventListener("input",(x=>{var y;ce.value=z(x.target.value),
            fa.value=(y=x.target.value,a(z(y)))})),
        fa.addEventListener("input",(a=>{var z;ce.value=y(a.target.value),
            ke.value=(z=a.target.value,x(y(z)))})),
        mi.addEventListener("input",(d=>{km.value=1.60934*d.target.value})),
        km.addEventListener("input",(d=>{mi.value=.621371*d.target.value}))})();
        
