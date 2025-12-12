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
function RozdilMeziDatumynaDny(stDatum, ndDatum){

    //pocet dnu mezi mesici
    const mesic1 = parseInt(stDatum.substring(4,2)), mesic2 = parseInt(ndDatum.substring(4,2))
    let counter = 0, index = mesic1;
    while(index!=mesic2-1){
        index %= 12

        counter += dnyNaMesic[index]

        index++
    }
    console.log(counter)
    
    const den1 = parseInt(stDatum.substring(9,2))
    console.log(stDatum, den1)
    
}
RozdilMeziDatumynaDny('2021-02-06', '2013-07-12')