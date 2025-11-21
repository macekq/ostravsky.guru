const numKeys = document.querySelectorAll('input')
const display = document.getElementById('displej')
var vysledek = 0

function kalkulacka(index){
    
    vysledek = parseFloat(display.innerText)

    for(let i = 0; i<display.innerText.length; i++){
        switch(display.innerText[i]){
            case '+':
                vysledek += parseFloat(display.innerText.substring(i+1))
                break
            case '-':
                vysledek -= parseFloat(display.innerText.substring(i+1))
                break
            case '*':
                vysledek *= parseFloat(display.innerText.substring(i+1))
                break
            case '/':
                vysledek /= parseFloat(display.innerText.substring(i+1))
                break
        }
    }
    return vysledek;
}

numKeys.forEach(elem => {
    elem.addEventListener('click', () => {

        display.innerText += elem.value
        console.log(display.innerText)

        switch(elem.value){
            case 'C':
                display.innerText = ''
                break
                
            case '=':
                console.log(kalkulacka(0))

                document.getElementById('vypis').innerHTML += `\-> ${display.innerText} ${vysledek}<br><br>`

                display.innerText = ''
                vysledek = 0
                break

            default: break
        }
    })
})