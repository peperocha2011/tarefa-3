menuListArray = ["Pizza Vegetariana",
"Pizza de Frango",
"Pizza Portuguesa",
"Pizza Quatro Queijos",
"Pizza de Calabresa",
"Pizza Extravegante"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgatags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgatags+ menuListArray[i] + '<br>'

}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item)
addItem();
}