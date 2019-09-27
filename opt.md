추가내용

Base :  opt.css opt.js 추가 / javascript.js 수정

HTML
1. 메뉴 클릭시 옵션창이 켜지기위해 menuBtn에 추가 class 추가 (clickBev, clickFood)
2.
3.

























/* 체크박스 CSS */

.optName input[class="optCheck"] {
	display: inline-block;
	width: 20px;
	height: 20px;
	border: 2px solid #bcbcbc;
	cursor: pointer;
}

.optName input[type="checkbox"] {  /* 실제 체크박스는 화면에서 숨김 */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0
  }

.optName input[type="checkbox"] + label {
display: inline-block;
position: relative;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
}


.optName input[type="checkbox"] + label:before {  /* 가짜 체크박스 */
    content: ' ';
    display: inline-block;
    width: 21px;  /* 체크박스의 너비를 지정 */
    height: 21px;  /* 체크박스의 높이를 지정 */
    line-height: 21px; /* 세로정렬을 위해 높이값과 일치 */
    margin: -2px 8px 0 0;
    text-align: center; 
    vertical-align: middle;
    background: #fafafa;
    border: 1px solid #cacece;
    border-radius : 3px;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
  }

