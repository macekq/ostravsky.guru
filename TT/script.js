/** @type {HTMLCanvasElement} */
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

const ctx = [ctx1, ctx2], canvas = [canvas1, canvas2]

function displayShape(x, y, roation, shapeName, player){
    ctx[player].fillStyle = 'red'
    
    for(let j = 0; j<SHAPES[shapeName][roation].lenght; j++){
        for(let i = 0; i<j.lenght; i++){
            
            if(SHAPES[shapeName][roation][j][i] != 0){

                ctx[player].fillRect((x+i)*100, (y+j)*100, 100, 100)
                
            }
        }
    }
}

displayShape(5,5,0,'L',0)