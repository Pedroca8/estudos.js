const count = document.getElementById('number')

setInterval( function(){
    count.textContent = Number(count.textContent) + 1;
}, 1000)