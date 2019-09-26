
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
            accuData.push(menuData[0]);
            displayData.push(menuData[0]);
            renderMenuName();
            renderMenuPrice();
            renderMenuCount();
            renderTotalPrice();            
        }
    }
}
menuclick();



// 메뉴 클릭시  
// 아메리카노 수량:1 가격:1000원  총가격 :1000 이 화면에 출력된다
// 동시에 옵션창이 화면에 출력된다.
// 옵션창안에 체크박스버튼 / okay 버튼 있다.
// 옵셥창에서 먼저 체크박스 클릭하면 

// 1. optDataBev['bevOpt'] 값만 우선 새로운 배열에 저장
// 2. optDataBev['bevPrice']값은  새로운 배열안에 저장

//  오케이 버튼을 누르면 

// 1. 'hot' 값이 아메리카노 밑에 추가된다.
// 2. 가격에도 추가된다. 
// 3. 총가격에도 추가된다. 
















// -------------------렌더링함수-----------------------------

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
        orderPrice1[i].textContent = displayData[i]['price'] * displayData[i]['count'];
        targetPrice.appendChild(newMenu);
    }
}

var targetCount = document.querySelector('#orderList2');
var templateCount = document.querySelector('#temList2');
function renderMenuCount() {
    for (let i=0; i<displayData.length; i++){
        let newMenu = document.importNode(templateCount.content, true);
        let orderCount1 = newMenu.querySelectorAll('.orderCount');
        orderCount1[i].textContent = displayData[i]['count'];
        targetCount.appendChild(newMenu);
        countUp2();
        countDown2();
    }
}

var newSum = [];
function totalPrice() {
    for (let i=0; i<displayData.length; i++){
        let sum = displayData[i]['price'] * displayData[i]['count']
        newSum.push(sum);
    }
    var total1 = newSum.reduce(function(accu, curr){
        return accu + curr;
    })
    return total1;
}

var targetTotal = document.querySelector('#orderList4');
var templateTotal = document.querySelector('#temList4');

function renderTotalPrice() {
        targetTotal.innerHTML = '';
        let newMenu = document.importNode(templateTotal.content, true);
        let menuUl = newMenu.querySelector('.totalPrice');
        menuUl.textContent = `${totalPrice()} 원`;
        targetTotal.appendChild(newMenu);
}


// ------------------- up & down & clear ------------------
function countUp2() {
    let countUp = document.querySelectorAll('.up1');
    for (let a=0; a<countUp.length; a++){
    countUp[a].onclick = function() {
            targetPrice.innerHTML = '가격';
            targetName.innerHTML = '주문내역';
            targetCount.innerHTML = '수량';
            targetTotal.innerHTML = '총가격';
            newSum = [];
            displayData = [];
            accuData[a]['count'] = accuData[a]['count'] + 1;
            for (i=0; i<accuData.length; i++){
                displayData = [];
                displayData.push(accuData[i]);
                renderMenuName();
                renderMenuPrice();
                renderMenuCount();
                renderTotalPrice()                 
            }

        }
    }
    }

    function countDown2() {
        let countDown = document.querySelectorAll('.down1');
        for (let a=0; a<countDown.length; a++){
        countDown[a].onclick = function() {
                targetPrice.innerHTML = '가격';
                targetName.innerHTML = '주문내역';
                targetCount.innerHTML = '수량';
                targetTotal.innerHTML = '총가격';
                newSum = [];
                displayData = [];
                accuData[a]['count'] = accuData[a]['count'] - 1;
                for (i=0; i<accuData.length; i++){
                    displayData = [];
                    displayData.push(accuData[i]);
                    renderMenuName();
                    renderMenuPrice();
                    renderMenuCount();
                    renderTotalPrice()                 
                }
    
            }
        }
    }

    function clear() {
        let deleteButton = document.querySelector('.deleteBtn');
        deleteButton.onclick = function() {
            location.reload();
            menuclick();
        }
    }
    clear();




