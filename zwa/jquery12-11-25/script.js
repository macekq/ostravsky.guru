var colorArr = ['cervena','hneda']
var seznam = document.getElementById('seznam'), barvaIn = document.getElementById('barvaInput')

function contains(arr, x){
    for(let i of arr){
        if(i == x) return true
    }
    return false
}
document.getElementById('sub').addEventListener('click', () => {
    
    if(!contains(colorArr, barvaIn.value)){
        colorArr.push(barvaIn.value)

        seznam.innerHTML = ""
        for(let i of colorArr){
            let p = document.createElement('p')
            p.id = i
            p.innerText = i
            seznam.appendChild(p)
        }
    }
})