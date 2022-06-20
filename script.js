//Adjust the quantity of each item through  “+” and “-” buttons
var btn = document.querySelectorAll('.addbtn');
var mbtn = document.querySelectorAll('.minusbtn');
var pbtn = document.querySelectorAll('.plusbtn');
var lbtn = document.querySelectorAll('.likee');

var SelectedItems=[];

for (let i= 0 ; i < btn.length;i++) {
    btn[i].addEventListener("click",() =>{
        if(btn[i].innerText == 'ADD TO CART'){
            btn[i].innerText = 1;
            pbtn[i].style.display='inline-block';
            mbtn[i].style.display='inline-block'; 
        }
    }) ;

    mbtn[i].addEventListener("click",() =>{
        if(btn[i].innerText <= 1 ){
            btn[i].innerText ='ADD TO CART'
            pbtn[i].style.display='none';
            mbtn[i].style.display='none';
        }
        else {
            btn[i].innerText = parseInt(btn[i].innerText)- 1;
            pbtn[i].style.display='inline-block';
        }
    }) ;
    pbtn[i].addEventListener("click",() =>{
        if(btn[i].innerText  >=4 ){
            pbtn[i].style.display='none';
        }
        else {
            pbtn[i].style.display='inline-block';
        }
        btn[i].innerText = parseInt(btn[i].innerText)+ 1;
    }) ;

    lbtn[i].addEventListener("click", function (){
        if(lbtn[i].style.backgroundColor=='red') {
            lbtn[i].style.backgroundColor='';
        }
        else if ( lbtn[i].style.backgroundColor=='') {
            lbtn[i].style.backgroundColor='red';
        }
    })
}






