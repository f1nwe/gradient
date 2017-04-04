'use strict'
var ul  = document.body.querySelector("#list-of-options");
var chooseFive = document.getElementById("choose-five");
var agencyWon = document.getElementById("agency_guy");
var pmWon = document.getElementById('pm_guy');
var popUpContainer = document.getElementById("pop-up-container");
ul.addEventListener("click", chooseElements);

function chooseElements(event) {
    event.preventDefault();
    var target = event.target;
    target.parentNode.classList.toggle('selected');
    if(counterSelected() <= 5) 	return;
    target.parentNode.classList.remove('selected');
};

function counterSelected() {
    var selectedArr = document.getElementsByClassName("selected");
    return selectedArr.length;
}
// result
var btnResult = document.getElementsByClassName('result')[0];
btnResult.addEventListener("click", showPopUp);

function showPopUp() {
    var agencyWon = document.getElementById("agency_guy");
    var preResult = getResults();
    if (counterSelected() < 5) {
        chooseFive.style.visibility = "visible";
        return
    } else {
      chooseFive.style.visibility = "hidden";
    }
    if (preResult.agency > preResult.pm) {
        popUpContainer.style.display = "block";
        agencyWon.style.display = "block";
        window.scrollTo(0, 1520);
    } else if (preResult.agency < preResult.pm) {
        popUpContainer.style.display = 'block';
        pmWon.style.display = 'block';
        window.scrollTo( 0, 1520 );
    }
    toggleBLockScroll()
    }
function toggleBLockScroll(){
    document.documentElement.classList.toggle("blocked_scroll")
}
function getResults() {
    var result = {
        agency : 0,
        pm : 0
    };
    result.agency = document.querySelectorAll("ul li.selected.agency").length;
    result.pm = document.querySelectorAll("ul li.selected.pm").length;
    return result;
}


var closeBtn1 = document.getElementsByClassName("btn_close")[0];
var closeBtn2 = document.getElementsByClassName("btn_close")[1];

closeBtn1.addEventListener("click", closePopUps);
closeBtn2.addEventListener("click", closePopUps);

function closePopUps() {
    popUpContainer.style.display = 'none';
    agencyWon.style.display = 'none';
    pmWon.style.display = 'none';
    window.scrollTo( 0, 1300 )
    toggleBLockScroll()
}