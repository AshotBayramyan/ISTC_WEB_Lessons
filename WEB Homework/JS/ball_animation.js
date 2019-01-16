var elem = document.getElementsByTagName('div');

elem[0].addEventListener('click', changePosition);
elem[1].addEventListener('click', changePosition);
var marker = true;

function changePosition() {
    elem[0].removeEventListener('click', changePosition);
    elem[1].removeEventListener('click', changePosition);

    elem[0].style.left = '75px';
    elem[1].style.left = '-75px';
    if (marker) {
        setTimeout(changeTopStraight, 500);
        setTimeout(verticalAlign, 1000);
        marker = false;
    } else {
        setTimeout(changeTopBack, 500);
        setTimeout(verticalAlign, 1000);
        marker = true;
    }
}

// animation steps
function changeTopStraight(){
    elem[0].style.top = '190px';
    elem[1].style.top = '-130px';
}
function verticalAlign(){
    elem[0].style.left = '0px';
    elem[1].style.left = '0px';
    setTimeout(setEvent, 500);
}
function changeTopBack(){
    elem[0].style.top = '20px';
    elem[1].style.top = '40px';
}

// add Events
function setEvent(){
    elem[0].addEventListener('click', changePosition);
    elem[1].addEventListener('click', changePosition);
}