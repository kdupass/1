
// 직업 1~3장 퀘스트 코드 시작
function proc2(result){

  $.each(result, function (index, item) {
// tbody에 출력
    var tb = '<tr><td>' + item.job + '</td>';
      tb += '<td>' + item.pquest + '</td>';
      tb += '<td>' + item.pid + '</td>';
      tb += '<td>' + item.cquest + '</td>';
      tb += '<td>' + item.cid + '</td>'
      tb += '<td>'+item.area+'</td></tr>';
      $("#job1").append(tb);
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q1.json',
      success : function (result) {
        proc2(result);
      }
    });
    <!-- 검색 기능-->
    <!-- 첫페이지 로딩을 최소화 하기 위하여 click으로 설정 -->
        $("#job1 > tbody").hide();  <!-- 첫페이지 DB 로딩 시간 절약을 위하여 숨김 처리 -->
        $("#ckjob1").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob2").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob3").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob4").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob5").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob6").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob7").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob8").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
        $("#ckjob9").click(function() {
          $("#job1 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
            var k = $(this).val();
            $("#job1 > tbody > tr").hide();
            var tempjob = $("#job1 > tbody > tr > td:nth-child(6n+1):contains('" + k + "')");

            $(tempjob).parent().show();
        });
    });
