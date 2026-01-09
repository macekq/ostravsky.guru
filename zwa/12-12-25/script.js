const datum = document.getElementById('datum')
const table = document.getElementById('table')

const TYDEN = ['nedele','pondeli', 'utery', 'streda', 'ctvrtek', 'patek', 'sobota'] 

function generovat(){

    let date = new Date(`${datum.value.substring(0,8)}01`);
    const den = date.getDay();

    let counter = 0
    for(let y = 0; y< 5; y++){

        let row = document.createElement('tr')

        for(let x = 0; x<7; x++){
            
            let cell = document.createElement('td')
                
            if(y==0){
                cell.innerText = TYDEN[x]
                cell.style.backgroundColor = 'black'
                
            }else if((x >= den && y == 1) || y>1){
                counter++
                cell.innerText = counter
                
                if(datum.value[8] + datum.value[9] == counter) cell.style.backgroundColor = 'rgb(80,0,0)'
            }
            row.appendChild(cell)
        }
        table.appendChild(row)
    }
    table.appendChild(document.createElement('br'))
}