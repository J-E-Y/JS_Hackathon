
// function menuclick2() {
//     var bevClick = document.querySelectorAll('.clickBev');
//     for (let a=0; a<bevClick.length; a++){
//         bevClick[a].onclick = function() {
//             displayData2 = [];
//             var menuData2 = foodData.filter(function(value){
//                 return value['name'] === bevClick[a].textContent;
//             })
           
//             // 체크박스에 해당된 것이 optDataBev에서 name과 같다면 해당 el 추가
//             accuData2.push(menuData2[0]); 
//             //accData2 =  {name: 클릭한메뉴 , price:클릭한 가격, count:1 }
            
//             displayData2.push(menuData2[0]);      
//             // displayData2 = {name:클릭한메뉴 , price:클릭한 가격, count:1 }
            
//         }
//     }
    
// }

// menuclick2();


// 메뉴클릭 가격을 배열에 1차저장
// 옵션체크박스 클릭 OK 누르면 배열에 2차저장
// Ok누른것 동시에 배열에 있는 가격 모두 더해서 PRICE에 반환


function clickedMenu1() {
    document.querySelector(".box3-1").classList.add("optOn");
}

function clickedMenu2() {
    document.querySelector(".box3-2").classList.add("optOn");
}






function inIt2() {
    let clickBevArr1 = document.querySelectorAll(".clickBev")
    clickBevArr1.forEach(function(val){
        val.addEventListener("click", clickedMenu1);
    });

    let clickBevArr2 = document.querySelectorAll(".clickFood")
    clickBevArr2.forEach(function(val){
        val.addEventListener("click", clickedMenu2);
    });


}

inIt2();

