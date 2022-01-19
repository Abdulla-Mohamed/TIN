import {
    cel2kel,
    kel2cel,
    kel2fah,
    fah2kel,
    fah2cel,
    cel2fah
} from "./tempConv"

const cel = document.getElementById("cel");
const fah = document.getElementById("fah");
const kel = document.getElementById("kel");

cel.addEventListener("input", (x) => {
    fah.value = cel2fah (x.target.value);
    kel.value = cel2kel (x.target.value);
});

kel.addEventListener("input", (x) => {
    cel.value = kel2cel (x.target.value);
    fah.value = kel2fah (x.target.value);
});

fah.addEventListener("input", (x) => {
    cel.value = fah2cel (x.target.value);
    kel.value = fah2kel (x.target.value);
});


import {
    mile2km,
    km2mile
} from "./distConv"

const mile = document.getElementById("mile");
const km = document.getElementById("km");

mile.addEventListener("input", (x) => {
    km.value = mile2km (x.target.value);
})

km.addEventListener("input", (x) => {
    mile.value = km2mile (x.target.value);
})
