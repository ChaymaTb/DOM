//Adjust the quantity of each item through  “+” and “-” buttons
var btn = document.querySelectorAll('.addbtn');
var mbtn = document.querySelectorAll('.minusbtn');
var pbtn = document.querySelectorAll('.plusbtn');
var lbtn = document.querySelectorAll('.likee');
var removeItembtn = document.querySelectorAll('.remove');
var div2= document.querySelectorAll('.article');

var price = document.querySelectorAll('h3');
var prixTot = document.querySelector('.shop');
var prix = 0;

for(var k=0;k<removeItembtn.length;k++){
    var button = removeItembtn[k];
    button.addEventListener("click",function(event){
        var btnclicked = event.target
        btnclicked.parentElement.remove()
    })
}
function clalcTotl(index) {
        prix = 0
        for (let j = 0; j < price.length; j++) {
            if (btn[j].innerText !== "ADD TO CART") {
                prix = parseFloat(prix) + (parseFloat(price[j].innerText) * parseFloat(btn[j].innerText))
            }
        }
    prixTot.innerHTML = prix.toFixed(2)
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        if (btn[i].innerText == 'ADD TO CART') {
            btn[i].innerText = 0;
            pbtn[i].style.display = 'inline-block';
            mbtn[i].style.display = 'inline-block';
            clalcTotl()
        }
    });

    mbtn[i].addEventListener("click", () => {
        if (btn[i].innerText < 1) {
            btn[i].innerText = 'ADD TO CART'
            pbtn[i].style.display = 'none';
            mbtn[i].style.display = 'none';
        }
        else {
            btn[i].innerText = parseInt(btn[i].innerText) - 1;
            pbtn[i].style.display = 'inline-block';

            clalcTotl(i)
        }
    });
    pbtn[i].addEventListener("click", () => {
        if (btn[i].innerText >= 4) {
            pbtn[i].style.display = 'none';
        }
        else {
            pbtn[i].style.display = 'inline-block';
        }
        btn[i].innerText = parseInt(btn[i].innerText) + 1;
        clalcTotl()
    });

    lbtn[i].addEventListener("click", function () {
        if (lbtn[i].style.backgroundColor == 'red') {
            lbtn[i].style.backgroundColor = '';
        }
        else if (lbtn[i].style.backgroundColor == '') {
            lbtn[i].style.backgroundColor = 'red';
        }
    })
}






