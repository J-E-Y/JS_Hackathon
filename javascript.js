
function menuclick() {
    var menuPoint = document.querySelectorAll('.menuHover');
    var menuName = document.querySelectorAll('.menuName');
        for (let a=0; a<menuPoint.length; a++){
            menuPoint[a].onclick = function() {
                displayData = [];
                var menuData = foodData.filter(function(value){
                    return value['name'] === menuName[a].textContent;
                })
                var filtered = accuData.filter(function(value){
                    return value['name'] === menuName[a].textContent;
                })
                accuData.push(menuData[0]);
                displayData.push(menuData[0]);
                renderMenuName();
                renderMenuPrice();
                renderMenuCount();
                renderTotalPrice()            
            }
        }
    }
menuclick();


/*
var target = document.querySelector('#target');
var template = document.querySelector('#will-be-rendered');


function render() {
for (let i=0; i<DATA3.length; i++){
    let newContent = document.importNode(template.content, true);
    let ulchild = document.querySelector('.class');
    let li = newContent.querySelectorAll('li');
    
    li[0].textContent = DATA3[i]['user'];
    li[1].textContent = DATA3[i]['message'];
    li[2].textContent = DATA3[i]['created_at'];
    target.insertBefore(newContent, ulchild);
    click();
}
}
*/
/* render 함수 구현 (menuName)
<template id = 'menuNameTemp'> 
<ul class = 'ultemp'>
<li class = 'menuName'>
아메리카노
</li>
</ul>

<div id = 'target'><div>

template의 노드를 받아서 새로운 변수에 저장한다.
target의 입력값을 받는 새로운 변수를 만든다.

render(count)
함수 totalprice
*/
var targetName = document.querySelector('#orderList1');
var templateName = document.querySelector('#temList1');

function renderMenuName() {
    for (let i=0; i<displayData.length; i++){
        let newMenu = document.importNode(templateName.content, true);
        let menuUl = newMenu.querySelectorAll('.orderMain');
        menuUl[i].textContent = displayData[i]['name']
        targetName.appendChild(newMenu);
    }
}

var targetPrice = document.querySelector('#orderList3');
var templatePrice = document.querySelector('#temList3');
function renderMenuPrice() {
    for (let i=0; i<displayData.length; i++){
        let newMenu = document.importNode(templatePrice.content, true);
        let orderPrice1 = newMenu.querySelectorAll('.orderPrice');
        orderPrice1[i].textContent = displayData[i]['price'];
        targetPrice.appendChild(newMenu);
    }
}

var targetCount = document.querySelector('#orderList2');
var templateCount = document.querySelector('#temList2');
function renderMenuCount() {
    for (let i=0; i<count.length; i++){
        let newMenu = document.importNode(templateCount.content, true);
        let orderCount1 = newMenu.querySelectorAll('.orderCount');
        orderCount1[i].textContent = count[i]['count'];
        targetCount.appendChild(newMenu);
    }
}

var newSum = [];
function totalPrice() {
    for (let i=0; i<displayData.length; i++){
        let sum = displayData[i]['price'] * count[0]['count']
        newSum.push(sum);
    }
    var total1 = newSum.reduce(function(accu, curr){
        return accu + curr;
    })
    console.log(total1);
    return total1;
}

var targetTotal = document.querySelector('#orderList4');
var templateTotal = document.querySelector('#temList4');

function renderTotalPrice() {
        let newMenu = document.importNode(templateTotal.content, true);
        let menuUl = newMenu.querySelectorAll('.totalPrice');
        menuUl.textContent = totalPrice();
        targetTotal.appendChild(newMenu);
}
/*
<div id="idPrice" class = "box4">
        <!-- 총가격 -->
        <div class="orderList4">총가격
        <template id = "temList4">
        <div class="totalPrice">11000</div>
        </template>
        </div>
        </div>
*/