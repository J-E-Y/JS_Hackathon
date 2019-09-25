

// menuclick() 함수는
// 메뉴 버튼이 클릭되면 price 화면에 함수들(메뉴 수량 가격 총가격) 을 산출한다. 

function menuclick() {
    var menuPoint = document.querySelectorAll('.menuBtn');
    var menuName = document.querySelectorAll('.menuBtn');
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



// price 화면에 출력하기위한 함수들.

// 1. 주문내역 

// 화면에 보여지는 주문내역안에  template 사용해서 집어넣기위해 ID를 불러온다.

var targetName = document.querySelector('#orderList1');
var templateName = document.querySelector('#temList1');


// renderMenName() 함수는  
// 메뉴 클릭시 displayData 배열안에 담긴객체를 
// name의 값인 textContent(아메리카노 1000원) 내용만 뽑아 화면에 보여준다. 


function renderMenuName() {
    for (let i=0; i<displayData.length; i++){
        console.log(displayData);
        let newMenu = document.importNode(templateName.content, true);
        let menuUl = newMenu.querySelectorAll('.orderMain');
        menuUl[i].textContent = displayData[i]['name']
        targetName.appendChild(newMenu);
    }
}



// 2.가격

// 화면에 보여지는 가격안에 template 을 사용해서 집어넣기위해 ID값을 가져온다. 

var targetPrice = document.querySelector('#orderList3');
var templatePrice = document.querySelector('#temList3');

// renderMenPrice() 함수는
// 메뉴 클릭시 displayData 배열에안에 담긴 객체를 
// textContent (가격) 

function renderMenuPrice() {
    for (let i=0; i<displayData.length; i++){
        let newMenu = document.importNode(templatePrice.content, true);
        let orderPrice1 = newMenu.querySelectorAll('.orderPrice');
        orderPrice1[i].textContent = displayData[i]['price'];
        targetPrice.appendChild(newMenu);
    }
}



// 취합파일


// 3.수량


// 화면에 보여지는 수량안에 template 사용해서 집어넣기 위해 ID 값을 불러온다. 
var targetCount = document.querySelector('#orderList2');
var templateCount = document.querySelector('#temList2');

// rederMenuCount() 함수는
// data 에 있는 [{count:1]] 에서 1 값을 가져와 함수가 실행될때마다 1을 화면에 출력해준다. 

function renderMenuCount() {
    for (let i=0; i<count.length; i++){
        let newMenu = document.importNode(templateCount.content, true);
        let orderCount1 = newMenu.querySelectorAll('.orderCount');
        orderCount1[i].textContent = count[i]['count'];
        targetCount.appendChild(newMenu);
    }
}


// 사용자로부터 받은 값을 더하는 계산기

// totalPrice() 함수는
// 사용자로부터 받은 값들을 받아서 모두 더한값을 출력한다.  

var newSum = [];
function totalPrice() {
    for (let i=0; i<displayData.length; i++){
        let sum = displayData[i]['price'] * count[0]['count']
        newSum.push(sum);
        console.log(newSum);
    }

    var total1 = newSum.reduce(function(accu, curr){
        return accu + curr;
    })

    return total1;
}


// 화면에 보여지는 총가격안에 template 사용해서 집어넣기 위해 ID 값을 불러온다. 
var targetTotal = document.querySelector('#orderList4');
var templateTotal = document.querySelector('#temList4');


// 4. 총가격

// renderTotalPrice() 함수는 
// 화면에 총값을 출력해준다.

function renderTotalPrice() {
        targetTotal.innerHTML = ''; 
        targetTotal.innerHTML = "<div class = 'textTotal'>총가격</div>"; //  html 에서 총가격이 사라지고 다시 남아있게 하기위해 
        let newMenu = document.importNode(templateTotal.content, true);
        let menuUl = newMenu.querySelector('.totalPrice');   // 쿼리셀렉올이 아니라 쿼리셀렉 
        menuUl.textContent = totalPrice();
        targetTotal.appendChild(newMenu);
}




