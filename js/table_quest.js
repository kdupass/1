<!-- 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성 -->
function proc(result){
  $.each(result, function (index, item) {

    <!-- tbody에 출력 -->

    var str = '<tr><td>'+item.name+'</td>';
      str += '<td>' + item.itemid + '</td>';
      str += '<td>' + item.bind + '</td>';
      str += '<td>' + item.level + '</td>';
      str += '<td>' + item.job + '</td></tr>';
      $("#equipdb-table").append(str);
  });
};
<!-- json 파일 불러오기-->
$(document).ready(function() {
    $.ajax({
      url: './json/equipdb.json',
      success : function (result) {
        proc(result);
      }
    });
});
