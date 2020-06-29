<!-- 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성 -->
function proc(result){
  $.each(result, function (index, item) {

    <!-- tbody에 출력 -->

    var qequip = '<tr><td>'+item.type+'</td>';
      qequip += '<td>' + item.qid + '</td>';
      qequip += '<td>' + item.qname + '</td>';
      qequip += '<td>' + item.level + '</td>';
      qequip += '<td>' + item.rating + '</td>';
      qequip += '<td>' + item.bind + '</td>';
      qequip += '<td>' + item.etc + '</td></tr>';
      $("#q-equip-table").append(qequip);
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
