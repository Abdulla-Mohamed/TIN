const cel2kel = (cel) => {
    return cel + 273,15;
}

const kel2cel = (kel) => {
    return kel - 273,15;
}

const kel2fah = (kel) => {
    return (kel - 273.15) * 9/5 + 32;
}

const fah2kel = (fah) => {
    (fah - 32) * 5/9 + 273.15;
}

const fah2cel = (fah) => {
    (fah - 32) * 5/9;
}

const cel2fah = (cel) => {
    (cel * 9/5) + 32;
}

export {
    cel2fah,
    cel2kel,
    fah2cel,
    fah2kel,
    kel2cel,
    kel2fah,

};