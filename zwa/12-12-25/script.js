const datum = document.getElementById('datum')
const table = document.getElementById('table')

const dnyNaMesic = [31,28,31,30,31,30,31,31,30,31,30,31]

const myDate = {
    y: 2025,
    m: 12,
    d:12,
    den: 'patek',    
}

function generovat(){

    console.log(datum.value)

    const TYDEN = ['pondeli', 'utery', 'streda', 'ctvrtek', 'patek', 'sobota', 'nedele'] 

    for(let y = 0; y< 5; y++){
        let row = document.createElement('tr')
        for(let x = 0; x<7; x++){
            
            if(y==0){
                let cell = document.createElement('td')
                cell.innerText = TYDEN[x]
                row.appendChild(cell)
            }
        }
        table.appendChild(row)
    }

    const den1 = datum.value.slice(6,1)
    console.log(datum.value, den1)
}
function RozdilMeziDatumyNaDny(stDatum, ndDatum){

    //pocet dnu mezi mesici
    //const mesic1 = parseInt(stDatum.substring(4,2)), mesic2 = parseInt(ndDatum.substring(4,2))
    let mesic1 = stDatum[5] == '1' ? parseInt(stDatum[5]*10) + parseInt(stDatum[6]) : parseInt(stDatum[6])
    let mesic2 = ndDatum[5] == '1' ? parseInt(ndDatum[5]*10) + parseInt(ndDatum[6]) : parseInt(ndDatum[6])
    
    //console.log(stDatum, ndDatum, stDatum[6])

    let counter = 0, index = mesic1-1;
    
    console.log("mesice", mesic1, mesic2)

    while(index!=mesic2-1){
        index %= 12
        
        counter += dnyNaMesic[index]
        
        console.log(index)
        index++
    }
    console.log("counter", counter)
    
    let start = stDatum[8] != '0' ? parseInt(ndDatum[8])*10 + parseInt(stDatum[9]) : parseInt(stDatum[9]);
    console.log("start", start)

    let konec = ndDatum[8] != '0' ? parseInt(ndDatum[8])*10 + parseInt(ndDatum[9]) : parseInt(ndDatum[9]);
    console.log("konec", konec)

    if(mesic1 == mesic2) return counter + konec-start
    
    return counter - start + konec
}
document.getElementById('dateBtt').addEventListener('click', () => {
    console.log(RozdilMeziDatumyNaDny(document.getElementById('date1').value, document.getElementById('date2').value))
})
console.log(RozdilMeziDatumyNaDny('2021-02-11', '2021-03-11'))