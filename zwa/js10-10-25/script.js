const r = document.getElementById('r')
const v = document.getElementById('v')
const V = document.getElementById('V')
const S = document.getElementById('S')
const s = document.getElementById('s')

const submit = document.getElementById('sub')

function vypln(){    
    
    if(r.value != ''){
        if(s.value != '') S.innerText = `povrch - ${povrch(r.value, s.value)}`
        if(v.value != '') V.innerText = `objem - ${objem(r.value, v.value)}`
        
        if(S.value == '' && v.value == '') window.alert("nedostatek informaci")
    }else window.alert("nedostatek informaci")
}
function objem(r, v){return Math.PI*r*r*v/3}
function povrch(r, s){return Math.PI*r*(r+s)}

const width = document.getElementById('width')
const height = document.getElementById('height')
const border = document.getElementById('border')
const elem = document.getElementById('obdelnik')

function obdelnik(){

    console.log(width.value, height.value)
    elem.style.width = `${width.value}px`
    elem.style.height = `${height.value}px`
    elem.style.borderWidth = `${border.value}px`
}
document.getElementById('start').addEventListener('change', () => {
    document.getElementById('slabel').innerText = `od - ${document.getElementById('start').value}`
})

function intervalOd(){
    document.getElementById('slabel').innerText = `od - ${this.value}`
}
function intervalDo(){
    document.getElementById('klabel').innerText = `od - ${this.value}`
}