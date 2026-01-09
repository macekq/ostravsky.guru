const datum = document.getElementById('datum')
const table = document.getElementById('table')

const dnyNaMesic = [31,28,31,30,30,31,31,30,31,30,31]
const TYDEN = ['nedele','pondeli', 'utery', 'streda', 'ctvrtek', 'patek', 'sobota'] 

function generovat(){

    let date = new Date(`${datum.value.substring(0,8)}01`)
    const den = date.getDay()

    let pocetDni = dnyNaMesic[date.getMonth()]
    if(date.getFullYear()%4 == 0 && date.getMonth()+1 == 2) pocetDni++
    console.log(date.getFullYear(), date.getMonth())

    let counter = 0
    for(let y = 0; y< 6; y++){

        let row = document.createElement('tr')

        for(let x = 0; x<7; x++){
            
            let cell
            if(y==0){
                cell = document.createElement('td')
                cell.innerText = TYDEN[x]
                cell.style.backgroundColor = 'black'
                row.appendChild(cell)

            }else if(((x >= den && y == 1) || y>1) && counter < pocetDni){
                cell = document.createElement('td')

                counter++
                cell.innerText = counter
                
                if(datum.value[8] + datum.value[9] == counter) cell.style.backgroundColor = 'rgb(80,0,0)'
                row.appendChild(cell)
            }
        }
        table.appendChild(row)
    }
    table.appendChild(document.createElement('br'))
}