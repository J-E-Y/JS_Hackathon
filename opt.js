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



//--------------------------------------------------------------------------------------------------!

// menuclick 함수는 

// 메뉴안에 있는 버튼에 onclick 을 만들고 
// accuData 배열안에 foodData 안에 있는 키값인 값들을 집어 넣는다  {[]} 이런식으로 담긴다. 
// displayData 배열 안에 foodData 안에있는 키값인 값들을 집어넣는다.  {[]} 이런식으로 담긴다. 
// 옵션창에 ok버튼을 눌렀을때 checkBoxTrue() 함수가 실행되도록 한다. 만든다. 



function menuclick() {
    var bevClick = document.querySelectorAll('.clickBev');
    for (let a=0; a<bevClick.length; a++){
        bevClick[a].onclick = function() {
            displayData = [];
            var menuData = foodData.filter(function(value){
                return value['name'] === bevClick[a].textContent;
            })
            console.log(menuData);
            // 체크박스에 해당된 것이 optDataBev에서 name과 같다면 해당 el 추가
            
            accuData.push(menuData[0]); 
            displayData.push(menuData[0]);      
            document.querySelector("#OK").addEventListener("click", checkBoxTrue)
        }
    }    
}





//-----------------------------------------------------------------------------------------------------
// 수도코드 from 재협
//------------------------------------------------
// 메뉴클릭 가격을 배열에 1차저장
// 옵션체크박스 클릭 OK 누르면 배열에 2차저장
// Ok누른것 동시에 배열에 있는 가격 모두 더해서 PRICE에 반환
//-----------------------------------------------


// clickedMenu1() 함수는
// 옵션창에 class = "optOn" 을 추가한다 


function clickedMenu1() {
    document.querySelector(".box3-1").classList.add("optOn");
}

// clickedMenu2() 함수는 
// 옵션창에 class = "optOn" 을 추가한다. 

function clickedMenu2() {
    document.querySelector(".box3-2").classList.add("optOn");
}


// inIt() 함수는 

// Bev 메뉴버튼을 클릭했을때 
// clickedMenu1 함수가 실행되도록 한다. 
// Food 메뉴를 클릭햇을때 
// clickedMenu1 함수가 실행되도록 한다. 
// 마지막으로 기존에 만들었던 menuclick()함수가 실행되도록 한다. 

// 결국 두개의 함수가 실행되므로 메뉴버튼이 클릭했을때 옵션메뉴가 뜨게 하는것이다. 

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
       
}


// inIt() 함수로 인해 시작된다.  
inIt();