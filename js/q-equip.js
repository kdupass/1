<!-- 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성 -->
function proc(result){
  $.each(result, function (index, item) {

    <!-- tbody에 출력 -->

    var q-equip = '<tr><td>'+item.type+'</td>';
      q-equip += '<td>' + item.q-id + '</td>';
      q-equip += '<td>' + item.q-name + '</td>';
      q-equip += '<td>' + item.level + '</td>';
      q-equip += '<td>' + item.rating + '</td>';
      q-equip += '<td>' + item.bind + '</td>';
      q-equip += '<td>' + item.etc + '</td></tr>';
      $("#q-equip-table").append(q-equip);
  });
};
<!-- json 파일 불러오기-->
$(document).ready(function() {
    $.ajax({
      url: './json/q-equip.json',
      success : function (result) {
        proc(result);
      }
    });
});
