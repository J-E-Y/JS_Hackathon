// 1. 계산기 함수식
var numberClicked = false;

// 계산기에 식 입력 받기
function add(char) {
    if ( numberClicked === false ) { // 이전에 연산자를 입력 했는데,
        if( isNaN(char) === true ) { // 입력받은 값이 또 연산자면 아무것도 하지 않는다
        } else {                     // 연산자가 아니면 식 뒤에 값 추가
            document.querySelector("#display").value += char; 
        }
    } else {                         // 만약에 이전에 숫자를 입력 했으면 식 뒤에 값추가
        document.querySelector("#display").value += char;
    }  
    
    // 다음 입력을 위해 이번에 숫자가 눌렸는지 연산자가 눌렸는지 설정
    if ( isNaN(char) === true ) {
        numberClicked = false;
    } else {
        numberClicked = true;
    }

}

// 계산한 값 출력
function calculate() {
    var display = document.getElementById('display');
    var result = eval(display.value); 
    // 식을 계산하고 result 변수에 저장
    document.getElementById('result').value = result;
}

// 식 값 초기화
function reset() {
    document.getElementById('display').value = "";
    document.getElementById('result').value = "";
}

// 2. input1 ( 계산기에서 넘어온 값 )
function inputFirst() {
    document.querySelector("#inputChange").innerText
    = "거스름돈 " + document.querySelector("#result").value + " 원";
}



// 3. input2 ( Price에서 넘어온 값)   // 0924 21:45 수정중
function inputPrice() {
    let sumPrice = document.querySelector(".totalPrice");
    let inputPrice = document.querySelector("#inputPrice");

    if (sumPrice !== null ) {
        inputPrice.innerText
        = `결제금액 ${sumPrice.innerText}`;
    } else {
    inputPrice.innerText = `메뉴를 입력해주세요!`;
    }
}
    
// 4. payment클릭시 꺼지기
function paymentBtnClicked() {
    alert("지불되었습니다.");
    document.querySelector(".cash").classList.add("off");
    self.setTimeout(function(){
        document.querySelector(".cash").classList.remove("off")
        document.querySelector(".cash").classList.remove("cashClicked")
    },1000)
    document.querySelector("#inputChange").innerText = '';
   
}


// 5. receipt클릭시 
function receiptBtnClicked() {
    alert("영수증이 출력되었습니다.");
}


// 실행할 함수 값 넣기

function inIt() {
    document.querySelector("#paymentBtn").addEventListener("click", paymentBtnClicked);
    document.querySelector("#receiptBtn").addEventListener("click", receiptBtnClicked);
    let clickBtn = document.querySelectorAll(".menuBtn");
    for (let i = 0; i < clickBtn.length; i++) {
        clickBtn[i].addEventListener("click", inputPrice);
    }
}

inIt();