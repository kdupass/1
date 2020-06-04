// 4~10 [4장] 퀘스트 코드//
function proc410q4(result){

  $.each(result, function (index, item) {
// tbody에 출력
    var q4 = '<tr><td>' +item.Part + '</td>';
      q4 += '<td>'+item.area +'</td>';
      q4 += '<td>' + item.pquest + '</td>';
      q4 += '<td>' + item.pid + '</td>';
      q4 += '<td>' + item.cquest + '</td>';
      q4 += '<td>' + item.cid + '</td>'
      q4 += '<td>' + item.job + '</td></tr>';
      $("#t410").append(q4);
    };
  });
};
// json 파일 불러오기
$(document).ready(function() {
    $.ajax({
      url: './json/q4-q10.json',
      success : function (result) {
        proc410q4(result);
      }
    });
});
<!-- 검색 기능-->
<!-- 첫페이지 로딩을 최소화 하기 위하여 click으로 설정 -->
    $("#t410 > tbody").hide();  <!-- 첫페이지 DB 로딩 시간 절약을 위하여 숨김 처리 -->
    $("#ck410q1").click(function() {
      $("#t410 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
        var a = $(this).val();
        $("#t410 > tbody > tr").hide();
        var tempq410 = $("#t410 > tbody > tr > td:nth-child(7n+1):contains('" + a + "')");

        $(tempq410).parent().show();
    });
    $("#ck410q2").click(function() {
      $("#t410 > tbody").show(); <!-- 라디오버튼 선택 시 DB 노출 -->
        var a = $(this).val();
        $("#t410 > tbody > tr").hide();
        var tempq410 = $("#t410 > tbody > tr > td:nth-child(7n+1):contains('" + a + "')");

        $(tempq410).parent().show();
    });
});
