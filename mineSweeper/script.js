var GAME = {
    matrix:[],
    mines:[],
    fieldSize: 5
}


const generateCells = (width, height) => {

    const table = document.getElementById('tab')

    for(let i = 0; i<height; i++){

        let layer = [];
        let row = document.createElement('tr')
        for(let j = 0; j<width; j++){
        
            layer.push(0)
        
            let cell = document.createElement('td')
            cell.id = `cell${j}-${i}`

            cell.addEventListener('click', () => {
                cell.innerText = GAME.matrix[i][j]
            })

            row.appendChild(cell)
        }
        table.appendChild(row)
        GAME.matrix.push(layer)
    }
}
generateCells(GAME.fieldSize, GAME.fieldSize)


const generateMines = (amount) => {
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
generateMines(4)
console.log(GAME)