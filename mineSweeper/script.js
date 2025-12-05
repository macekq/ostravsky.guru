var GAME = {
    matrix:[],
    uncovered:[],
    mines:[],
    fieldSize: 5,
    click: true
}

function mine(){
    
}

const generateCells = (width, height) => {

    const table = document.getElementById('tab')
    table.innerHTML = ''

    for(let i = 0; i<height; i++){

        let layer2 = [];

        
        let row = document.createElement('tr')
        for(let j = 0; j<width; j++){
        
            layer2.push(true)
        
            let cell = document.createElement('td')
            cell.id = `cell${j}-${i}`

            cell.addEventListener('click', () => {
                
                if(GAME.click){
                    while(GAME.matrix[i][j] != 0) generateMines(5) 
                    
                    GAME.click = false
                }
                uncoverArea(j, i)
            })

            row.appendChild(cell)
        }
        GAME.uncovered.push(layer2)


        table.appendChild(row)
    }
}
generateCells(GAME.fieldSize, GAME.fieldSize)


const generateMines = (amount) => {

    GAME.matrix = []

    for(let y = 0; y<GAME.fieldSize; y++){
        let layer = []
        for(let x = 0; x<GAME.fieldSize; x++){
            layer.push(0)
        }
        GAME.matrix.push(layer)
    }    

    for(let i = 0; i<amount; i++){
        let x = Math.floor(Math.random()*GAME.fieldSize)
        let y = Math.floor(Math.random()*GAME.fieldSize)
        GAME.mines.push([x,y])
        GAME.matrix[y][x] = 67

        for(let b = -1; b<2; b++){
            for(let a = -1; a<2; a++){
                
                console.log(y+b, x+a)
                
                if(y+b<0 || x+a<0);
                else if(y+b >= GAME.fieldSize || x+a >= GAME.fieldSize);
                else{
                    GAME.matrix[y+b][x+a]++;
                }
            
            }
        }
    }
}
generateMines(5)
console.log(GAME)
function exists(x, y){
    if(x < 0 || y < 0) return false;
    else if(x >= GAME.fieldSize || y >= GAME.fieldSize) return false

    return true
}
function uncover(cellX, cellY){

    let elem = document.getElementById(`cell${cellX}-${cellY}`)

    if(GAME.matrix[cellY][cellX] != 0) elem.innerText = GAME.matrix[cellY][cellX]
    GAME.uncovered[cellY][cellX] = false

    elem.style.backgroundColor = 'rgb(120,120,120)'
    switch(GAME.matrix[cellY][cellX]){
        case 0:
            break
        case 1:
            elem.style.color = 'blue'
            break
        case 2:
            elem.style.color = 'green'
            break
        case 3:
            elem.style.color = 'red'
            break
        case 4:
            elem.style.color = 'purple'
            break
        default:
            elem.style.color = 'black'
    }
}
function uncoverArea(cellX, cellY){

    uncover(cellX, cellY)

    if(exists(cellX, cellY-1)){
        if(GAME.uncovered[cellY-1][cellX]){
            if(GAME.matrix[cellY-1][cellX] == 0) uncoverArea(cellX, cellY-1)
            else if(GAME.matrix[cellY-1][cellX] <  8) uncover(cellX, cellY-1)
        }
    }
    if(exists(cellX, cellY+1)){
        if(GAME.uncovered[cellY+1][cellX]){
            if(GAME.matrix[cellY+1][cellX] == 0) uncoverArea(cellX, cellY+1)
            else if(GAME.matrix[cellY+1][cellX] <  8) uncover(cellX, cellY+1)
        }
    }

    if(exists(cellX-1, cellY)){
        if(GAME.uncovered[cellY][cellX-1]){
            if(GAME.matrix[cellY][cellX-1] == 0) uncoverArea(cellX-1, cellY)
            else if(GAME.matrix[cellY][cellX-1] <  8) uncover(cellX-1, cellY)
        }
    }
    if(exists(cellX+1, cellY)){
        if(GAME.uncovered[cellY][cellX+1]){
            if(GAME.matrix[cellY][cellX+1] == 0) uncoverArea(cellX+1, cellY)
            else if(GAME.matrix[cellY][cellX+1] <  8) uncover(cellX+1, cellY)
        }
    }
    
}