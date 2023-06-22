
let coin = document.getElementById('coin');
let flipBtn = document.getElementById('flip-button');
let resetBtn = document.getElementById('reset-button');

let cara = 0;
let cruz = 0;

flipBtn.addEventListener('click', () => {
    console.log('En el addEventListener');
    let i = Math.floor(Math.random() * 2);
        console.log('i = ', i);
        coin.style.animation = 'none';
    if(i){
        console.log('Dentro del if');
        setTimeout(function(){
            coin.style.animation = 'spin-cara 3s forwards';
        }, 100);
        cara++;
    }

    else{
        console.log('Dentro del else');
        setTimeout(function(){
            coin.style.animation = 'spin-cruz 3s forwards';
        }, 100);
        cruz++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
});


function updateStats(){
    document.getElementById('cara-count').textContent = `cara: ${cara}`;
    document.getElementById('cruz-count').textContent = `cruz: ${cruz}`;
}

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}

resetBtn.addEventListener('click',() => {
    coin.style.animation = 'none';
   cara = 0;
    cruz = 0;
    updateStats();
});