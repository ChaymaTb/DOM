var arrArticle=[
    {name : 'T-shirt' , price : '8,50€' , image : 'bbt-shirt.png' },
    {name : 'volant dress' , price : '10,50€' , image : 'robe_bb.png' },
    {name : 'tropical dress' , price : '5,50€' , image : 'top+pntlon.webp' },
    {name : 'floral dress' , price : '9,20€' , image : 'floral-robe.webp' },
    {name : 'T-shirt' , price : '10,87€' , image : 'combinaison.webp' },
    {name : 'red dress' , price : '8,99€' , image : 'red dress.webp' },
    {name : 'green dress' , price : '7,31€' , image : 'green.webp' }
]

arrArticle.forEach(function (item) {
    var div1 = document.createElement("div");
    div1.className='article';

    var div2 = document.createElement("div");
    div2.className='flex-it';

    var div3 = document.createElement("div");
    div3.className='article-name';

    var div4 = document.createElement("div");
    div4.className='article-bttn';

    var div5 = document.createElement("div");
    div5.className='btn';

    var img1 = document.createElement("img");
    img1.className='clothes';
    img1.src ='bbt-shirt.png';
    img1.alt ='t-shirt';

    var img2 = document.createElement("img");
    img2.className='likee';
    img2.src ="like.png";
    img2.alt ='likeimage';

    var btn1 = document.createElement("button");
    btn1.className='minusbtn';
    btn1.innerText ='-';

    var btn2 = document.createElement("button");
    btn2.className='addbtn';
    btn2.innerText ='ADD TO CART';

    var btn3 = document.createElement("button");
    btn3.className='plusbtn';
    btn3.innerText ='+';

    var articleName = document.createElement("h2");
    articleName.innerHTML = item.name;

    var articlePrice = document.createElement("h3");
    articleName.innerHTML = item.price;

    div1.appendChild(img1);
    div1.appendChild(img2);
    div1.appendChild(div2);

    div2.appendChild(div3);
    div2.appendChild(div4);

    div3.appendChild(articleName);
    div3.appendChild(articlePrice);

    div4.appendChild(div5);

    div5.appendChild(btn1);
    div5.appendChild(btn2);
    div5.appendChild(btn3);

    document.getElementById("articles").appendChild(div1);
})

var btn = document.querySelectorAll('.addbtn');
var mbtn = document.querySelectorAll('.minusbtn');
var pbtn = document.querySelectorAll('.plusbtn');
var lbtn = document.querySelectorAll('.likee');

for (let i=0; i<btn.length; i++){

    btn[i].addEventListener("click",() => {
        if(btn[i].innerText == 'ADD TO CART'){
            btn[i].innerText = 1;
            pbtn[i].style.display='inline-block';
            mbtn[i].style.display='inline-block';
        }
    });

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

    pbtn[i].addEventListener("click", () =>{
        if(btn[i].innerText >= 4 ){
            pbtn[i].style.display = 'none';
        }
        else{
            pbtn[i].style.display='inline-block';
        }
        btn[i].innerText = parseInt(btn[i].innerText) + 1;
    });

    lbtn[i].addEventListener("click", function(){
        if(lbtn[i].style.backgroundColor == ''){
            lbtn[i].style.backgroundColor = 'red';
        }
        else {
            lbtn[i].style.backgroundColor = '';
        }
    })
}
