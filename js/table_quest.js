<!-- 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성 -->
function proc(result){
  $.each(result, function (index, item) {

    <!-- tbody에 출력 -->

    var str = '<tr><td>'+item.area+'</td>';
      str += '<td>' + item.pquest + '</td>';
      str += '<td>' + item.pid + '</td>';
      str += '<td>' + item.cquest + '</td>';
      str += '<td>' + item.cid + '</td>'
      str += '<td>' + item.job + '</td>''</tr>';
      $("#q0_table").append(str);
  });
};
<!-- json 파일 불러오기-->
$(document).ready(function() {
    $.ajax({
      url: './json/q0.json',
      success : function (result) {
        proc(result);
      }
    });
});
