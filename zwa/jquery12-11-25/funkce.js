$(document).ready(function() {

});

function newDiv(){
    let novy = {
        id: "mujDiv",
        css: {"color": "red"}
    }
    let $div = $("<div>", novy)
    $("body").append($div)
    $div.text("skap do rana")
}
function newDivJs(){
    let div = document.createElement("div")
    div.id = "lukihoDiv"
    div.style.backgroundColor = "red"

    document.getElementById("predmety").appendChild(div)
}
newDivJs()