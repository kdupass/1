<?php

include_once "./layout.inc"; // 레이아웃을 include 함



$base = new Layout; // Layout class 객체를 생성



$base->style='container {margin:0 auto;} header {width:100%; height:180px; border:1px solid black;} article{float:left; width:720px; height:300px; border:1px solid black;} aside {float:right; width:260px; height:300px; border:1px solid black;} footer {clear:both;width:100%; height:50px; border:1px solid black;}';// 임시 스타일 추가



$base->content="내용이 들어가는 부분입니다."; //본문을 만듦



$base->LayoutMain(); //위의 변수들이 입력된 객체를 출력

?>
