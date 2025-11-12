var colorArr = ['cervena', 'hneda'];
var seznam = $('#seznam');
var barvaIn = $('#barvaInput');

function contains(arr, x) {
    for(let i of arr) {
        if(i == x) return true;
    }
    return false;
}

$('#sub').on('click', () => {
    if(!contains(colorArr, barvaIn.val().toLowerCase())) {
        colorArr.push(barvaIn.val());
        
        seznam.empty();
        for(let i of colorArr) {
            $('<p>')
                .attr('id', i)
                .text(i)
                .appendTo(seznam);
        }
        $('<p>')
            .text(colorArr.length)
            .appendTo(seznam)
    }
});