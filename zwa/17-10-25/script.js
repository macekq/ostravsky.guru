function funkce1() {
    let element = document.getElementById('nadpis1');
    console.log(element);
    console.log(element.className);
    console.log(element.style);
    console.log(element.innerHTML);
}

function funkce2() {
    let element = document.getElementById('odstavec1');
    console.log(element);
    console.log(element.className);
    console.log(element.style);
    console.log(element.innerHTML);
}

function funkce3() {
    let element = document.getElementById('odstavec2');
    console.log(element.className);
    element.className = 'odstavec2';
    console.log(element.className);
}

function funkce4() {
    let element = document.getElementById('odstavec2');
    console.log(element.className);
    if (element.className == 'odstavec1') {
        element.className = 'odstavec2';
    }
    else {
        element.className = 'odstavec1';
    }
    console.log(element.className);
}

function funkce5() {
    let element = document.getElementById('odstavec2');
    let text = prompt('Zadej text: ');
    element.innerHTML = text;
}

function funkce6() {
    let element = document.getElementById('odstavec2');
    let text = prompt('Zadej text: ');
    element.innerHTML += ' ' + text;
}

function funkce7() {
    let element = document.querySelector('#odstavec1');
    console.log(element.style);
	element.style.backgroundColor = '#eeeeee';
    element.style.color = 'purple';
    element.style.margin = '20px';
    element.style.padding = '20px';
}

function funkce8() {
    let element = document.querySelectorAll('div.styl');
    console.log(element);
    element[0].style.color='#ff0000';
    element[0].style.fontSize='10px';
    element[1].style.color='#ff00ff';
    element[2].style.color='#00ff00';
    element[2].style.fontSize='50px';
}

function funkce9() {
    let element = document.querySelectorAll('.odstavec1');
    let ids = new Array();
    for (let i = 0; i < element.length; i++) {
        ids.push(element[i].id);
    }
    console.log(element);
    console.log(ids);
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).className = 'odstavec2';
        console.log(element);
    }
}

function funkce10() {
    let element = document.getElementById('telefon');
    let text = element.value;
    console.log(element);
    console.log(element.value);
    if (text.length == 0) {
        console.log('Nebyl zadán žádný text');
    }
    else {
        let chyba = false;
        for (let i = 0; i < text.length; i++) {
            if (text[i] != ' ' && (text[i] < '0' || text[i] > '9') ) {
                chyba = true;
                break;
            }
        }
        if (chyba) {
            alert('Musíte zadat pouze číslice nebo mezeru');
        }
        else {
            alert('Zadáno správně');
        }
    }
}

function funkce11() {
    let element = document.getElementById('prazdny');
    console.log(element.childNodes);
    if (element.childNodes.length > 1) {
        funkce12();
    }
    else {
      let novy = document.createElement('div');
      novy.innerText = "nový div";
      novy.id = "novyDiv";
      element.appendChild(novy);
      console.log(element.childNodes);
      let dalsiNovy = document.createElement('span');
      dalsiNovy.innerHTML = "nový span";
      dalsiNovy.id = "novySpan";
      element.appendChild(dalsiNovy);
      console.log(element.childNodes); 
    }
}

function funkce12() {
    let element = document.getElementById('prazdny');
    console.log(element.childNodes);
    let vybrany = prompt('Zadej id vybraného potomka (novyDiv nebo novySpan)');
    if (document.getElementById(vybrany) == null) {
        alert('Vybraný potomek neexistuje');
    }
    else {
        for (let i = 0; i < element.childNodes.length; i++) {
            if (element.childNodes[i].id == vybrany) {
                element.removeChild(element.childNodes[i]);
            }
        }
    }
}

/* vytvorte funkci, ktera nacte od uzivatele id prvku
    pokud prvek s timto id existuje, nacte barvu (je jedno, jak bude zadana) a nastavi v tomto prvku barvu pisma na zadanou barvu
    pokud takovy prvek neexistuje, vypise se chyba */
function funkce13() {
    let element = prompt("Zadej id:");
    if (document.getElementById(element) != null) {
        let barva = prompt("Zadej barvu:");
        console.log(barva);
        document.getElementById(element).style.color = barva;
    }
}    
    
/* vytvorte funkci, ktera nacte od uzivatele nazev css tridy
    pokud existuji prvky, ktere maji nastavenou tuto tridu, nacte se cislo, ktere musi byt kladne, pokud neni, opakuje se nacteni
    pote se velikost pisma ve vsech prvcich nastavi na zadanou hodnotu
    pokud takove prvky neexistuji, vypise se chyba */
    
/* vytvorte funkci, ktera nacte id prvku
     pokud takovy prvek existuje, nacte se cislo, ktere musi byt kladne, pokud neni, opakuje se nacteni
     pote se v prvky vytvori zadany pocet potomku - potomky budou elementy span
     obsahem kazdeho noveho elementu bude cislo od 1 do zadane hodnoty
     pokud takovy prvek neexistuje, vypise se chyba */
     
/* vytvorte funkci, pro jednoduchou kalkulacku
    jako parametry do funkce vstupuji id prvku - prvni a druhy budou textova pole, operace bude select, vysledek bude libovolny prvek (muze byt take textove pole)
    funkce zkontroluje, zda prvky se zadanými id existuji
    pokud ano, provede se kontrola zadanych dat - v textovych polich mohou byt pouze cislice
    pote se provede vybrana operace se zadanymi hodnotami a vypise se vysledek
    pokud nektery z prvku neexistuje, vypise se chyba a nic se nepocita 
*/

function zmenaZnamenka(){
    const operaceArr = ['+', '-', '*', ':']
    const operaceElem = document.getElementById('operaceIn')

    for(let i = 0; i<operaceArr.length; i++){
        if(operaceArr[i] == operaceElem.value){
            operaceElem.value = operaceArr[(i+1)%operaceArr.length]
            break;
        }
    }
}
function kalkulacka(){
    const x = parseInt(document.getElementById('num1').value), y = parseInt(document.getElementById('num2').value)
    const vysledek = document.getElementById('vysledek')

    switch(operaceElem.value){
        case '+':
            vysledek.innerText = x+y
            break
        case '-':
            vysledek.innerText = x-y
            break
        case '*':
            vysledek.innerText = x*y
            break
        default:
            vysledek.innerText = x/y
    }
}