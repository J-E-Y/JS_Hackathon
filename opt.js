function checkBoxTrue() {
    let checked = document.querySelectorAll(".optCheck")
    for ( let i = 0 ; i < checked.length ; i++ ) {
        if(checked[i].checked === true) {
            displayData2.push(optDataBev[i])
            accuData2.push(optDataBev[i])
        }
    }
    renderMenuName();  
    renderOptName();    
    renderMenuPrice();
    renderTotalPrice(); 
    renderMenuCount();

    // displayData2를 OK클릭시 비워야하는데 안비워짐 구현
    displayData2 = [];  

    // OK클릭시 기존에 클릭되었던 체크박스들 해제 (즉 체크박스들 초기화) 구현
    for( let i = 0 ; i < document.querySelectorAll(".optCheck").length ; i++ ) {
        document.querySelectorAll(".optCheck")[i].checked = false;
    };

    // 옵션창 사라지세요!
    document.querySelector(".box3-1").classList.add("optOff");

    // 클래스에 클래스 이름 초기화시키기 (건들지마세용!)
    self.setTimeout(function(){
        document.querySelector(".box3-1").classList.remove("optOff")
        document.querySelector(".box3-1").classList.remove("optOn")
    },1000)
}
function checkBoxTrue2() {
    let checked = document.querySelectorAll(".optCheck2");
    for ( let i = 0 ; i < checked.length ; i++ ) {
        if(checked[i].checked === true) {
            displayData2.push(optDataFood[i])
            accuData2.push(optDataFood[i])
        }
    }
    renderMenuName();  
    renderOptName();    
    renderMenuPrice();
    renderTotalPrice(); 
    renderMenuCount();

    // displayData2를 OK클릭시 비워야하는데 안비워짐 구현
    displayData2 = [];  

    // OK클릭시 기존에 클릭되었던 체크박스들 해제 (즉 체크박스들 초기화) 구현
    for( let i = 0 ; i < document.querySelectorAll(".optCheck2").length ; i++ ) {
        document.querySelectorAll(".optCheck2")[i].checked = false;
    };

    // 옵션창 사라지세요!
    document.querySelector(".box3-2").classList.add("optOff");

    // 클래스에 클래스 이름 초기화시키기 (건들지마세용!)
    self.setTimeout(function(){
        document.querySelector(".box3-2").classList.remove("optOff")
        document.querySelector(".box3-2").classList.remove("optOn")
    },1000)
}

function menuclick() {
    var bevClick = document.querySelectorAll('.clickBev');
    for (let a=0; a<bevClick.length; a++){
        bevClick[a].onclick = function() {
            displayData = [];
            var menuData = foodData.filter(function(value){
                return value['name'] === bevClick[a].textContent;
            })
            // 체크박스에 해당된 것이 optDataBev에서 name과 같다면 해당 el 추가
            accuData.push(menuData[0]);
            displayData.push(menuData[0]);      
            document.querySelector("#OK").addEventListener("click", checkBoxTrue);
        }
    }    
}

function menuclick2() {
    var foodClick = document.querySelectorAll('.clickFood');
    for (let a=0; a<foodClick.length; a++){
        foodClick[a].onclick = function() {
            displayData = [];
            var menuData = foodData.filter(function(value){
                return value['name'] === foodClick[a].textContent;
            })
            // 체크박스에 해당된 것이 optDataBev에서 name과 같다면 해당 el 추가
            accuData.push(menuData[0]);
            displayData.push(menuData[0]);      
            document.querySelector("#OK2").addEventListener("click", checkBoxTrue2);
        }
    }    
}

// 메뉴클릭 가격을 배열에 1차저장
// 옵션체크박스 클릭 OK 누르면 배열에 2차저장
// Ok누른것 동시에 배열에 있는 가격 모두 더해서 PRICE에 반환

function clickedMenu1() {
    document.querySelector(".box3-1").classList.add("optOn");
}

function clickedMenu2() {
    document.querySelector(".box3-2").classList.add("optOn");
}

function inIt() {
    let clickBevArr1 = document.querySelectorAll(".clickBev")
    clickBevArr1.forEach(function(val){
        val.addEventListener("click", clickedMenu1);
    });

    let clickBevArr2 = document.querySelectorAll(".clickFood")
    clickBevArr2.forEach(function(val){
        val.addEventListener("click", clickedMenu2);
    });

    menuclick();
    menuclick2();
    
    let clickOK = document.querySelector("#OK");
    
}

inIt();