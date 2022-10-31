let price=document.getElementById("id1")
let title=document.getElementById("id")
let taxes=document.getElementById("id2")
let ads=document.getElementById("id3")
let discount=document.getElementById("id4")
let total=document.getElementById("total")
let firstFun=document.getElementsByClassName("price")[0]
let creat=document.getElementById("creat")
let count=document.getElementById("count")
let category=document.getElementById("category")
let tbody=document.getElementById("tbody")
let deletAll=document.getElementById("deletall")

let input=document.querySelector(".input")

let moon=document.getElementById("moon")
let sun=document.getElementById("sun")
let sear1=document.getElementById("searchone")
let sear2=document.getElementById("searchtwo")
let table=document.getElementById("table")
let buttons=document.querySelectorAll("button")
let searchButton="title"

let mood= "create";
let temp;


 let inputs=document.querySelectorAll(".hh")
 console.log(inputs)

//  for(let i=0;i<inputs.length;i++){

// inputs[i].addEventListener("keydown",function(e){

//  if(e.key==="ArrowRight"){

// e.preventDefault()

// if(this.nextElementSibling.querySelector("input")){
// this.nextElementSibling.querySelector("input").focus()


//  }

//  }


//  })

 
//  }









//first function to get price
function getPrice(){

if(price.value!==""){

let result=(+price.value+ +taxes.value+ +ads.value)- +discount.value
total.innerHTML=result
total.style.backgroundColor="green"

}else{
    total.style.backgroundColor="#9c27b094"
}}

// second function for local storage and creat in it
let dataArr;

if(localStorage.product!=null){
dataArr=JSON.parse(localStorage.product)
}else{
dataArr=[]
}

creat.onclick=function(){
let  obj={
title:title.value,
price:price.value,
taxes:taxes.value,
ads:ads.value,
discount:discount.value,
total:total.innerHTML,
count:count.value,
category:category.value,

}
//for update
if(title.value!=""&& price.value!=""&&category.value!=""&&count.value<=100){
if(mood==="create"){
//for creat any num of elements by count
if(count.value>1){
for(let i=0;i<count.value;i++){

dataArr.push(obj)
}}else{
    dataArr.push(obj)}
}else{

dataArr[temp]=obj
mood="create"
creat.innerHTML="Create";
count.style.display="block"



}

localStorage.setItem("product",JSON.stringify(dataArr))
clear()
show()
}}

//for clear data
function clear()
{
title.value=""
price.value=""
taxes.value=""
ads.value=""
discount.value=""
count.value=""
category.value=""
total.innerHTML=""
if(total.innerHTML==="")
{
    total.style.backgroundColor="#ca4771 "

}
}

// for creat in table
function show(){
    let table=""
    
for(let i=0;i<dataArr.length;i++){
    
 table+=`

<tr>
<td>${i+1}</td>
<td>${dataArr[i].title.toLowerCase()}</td>
<td>${dataArr[i].price}</td>
<td>${dataArr[i].taxes}</td>
<td>${dataArr[i].ads}</td>
<td>${dataArr[i].discount}</td>
<td>${dataArr[i].total}</td>
<td>${dataArr[i].category.toLowerCase()}</td>

<td><button onclick="updateData(${i})"class="up"id="onee" >update</button></td>
<td ><button onclick="deleteDta(${i})" class="de"id="twoo">delete</button></td>
</tr>

`

}


tbody.innerHTML=table
if(dataArr.length>1){

    deletAll.innerHTML=`
    <button onclick="deleteAll()" id="da">delete all ( ${dataArr.length} )</button>`
    
}
else{
    deletAll.innerHTML=""

}
}

show()

// for delete on element


function deleteDta(i){

    dataArr.splice(i,1)

      localStorage.product=JSON.stringify(dataArr)
show()
}
// for delete all elements

function deleteAll(){

dataArr.splice(0)
localStorage.product=JSON.stringify(dataArr)
show()

}


//for update
function updateData(i){
    title.value=dataArr[i].title
    price.value=dataArr[i].price
    taxes.value=dataArr[i].taxes
    ads.value=dataArr[i].ads
    discount.value=dataArr[i].discount
    category.value=dataArr[i].category
    getPrice()

    count.style.display="none"
    creat.innerHTML="Update"
    mood="update"
temp=i
scroll({
top:0,behavior:"smooth"

})
title.focus()
}

//for search
function searchMood(id){


if(id==="searchone"){
 searchButton="title"


}
if(id==="searchtwo"){
    searchButton="category"




}


let search=document.getElementById("search")
search.focus()

search.value=""

search.placeholder="search by "+ searchButton
show()

}


function searchData(value){
    let table=""

if(searchButton==="title")
{
    for(let i=0;i<dataArr.length;i++){

if(dataArr[i].title.includes(value.toLowerCase())){
    table+=`

    <tr>
    <td>${i+1}</td>
    <td>${dataArr[i].title}</td>
    <td>${dataArr[i].price}</td>
    <td>${dataArr[i].taxes}</td>
    <td>${dataArr[i].ads}</td>
    <td>${dataArr[i].discount}</td>
    <td>${dataArr[i].total}</td>
    <td>${dataArr[i].category}</td>
    
    <td><button onclick="updateData(${i})"class="up" id="onee">update</button></td>
    <td><button onclick="deleteDta(${i})" class="de"  id="twoo">delete</button></td>
    </tr>
    
    `;
}
 
}
}
if(searchButton==="category"){

    for(let i=0;i<dataArr.length;i++){

    if(dataArr[i].category.includes(value.toLowerCase())){
        table +=`
    
        <tr>
        <td>${i+1}</td>
        <td>${dataArr[i].title}</td>
        <td>${dataArr[i].price}</td>
        <td>${dataArr[i].taxes}</td>
        <td>${dataArr[i].ads}</td>
        <td>${dataArr[i].discount}</td>
        <td>${dataArr[i].total}</td>
        <td>${dataArr[i].category}</td>
        <td><button onclick="updateData(${i})"class="up" id="onee">update</button></td>
        <td ><button onclick="deleteDta(${i})" class="de"id="twoo">delete</button></td>
        </tr>
        
        `
    


    }

    }

}
    
tbody.innerHTML=table

}







let mo="light"
 if(localStorage.color!=null){
    document.body.style.backgroundColor =localStorage.color
    table.style.color =localStorage.tablee
 }
 function turn(id){
    
 
    if(id==="sun"){
        mo="light"
     document.body.style.backgroundColor="white"

table.style.color="black"


    }

    else{
        mo="dark"
        document.body.style.backgroundColor="#212020f2 ";

        table.style.color="white"

    }
    
    
    
localStorage.setItem("color",document.body.style.backgroundColor )
localStorage.setItem("tablee",  table.style.color)

    }
    
    
    
    
    
    









