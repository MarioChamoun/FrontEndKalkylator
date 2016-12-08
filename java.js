
function addtoscreen(x){
    var box = document.getElementById("display");
    box.value += x;
    if(x == 'c'){
        box.value = '';
    }
}
function calculate(){
    var box = document.getElementById("display");
    x = box.value;
    x = eval(x);
    box.value = x;
}