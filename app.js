function clr(){
    document.getElementById('result').value = " ";
}

function display(valueParam){
    document.getElementById('result').value = document.getElementById('result').value + valueParam;
}

function equals(){
    x = document.getElementById('result').value;
    if(x == " "){
        alert('Enter something!');
    }
    else {
    y = eval(x);
    document.getElementById('result').value = y;
    }
}
