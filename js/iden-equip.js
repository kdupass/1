//<!-- 코드의 양이 많아서 result값 받아서 실행하는 proc(result) 함수 생성 -->
function proc(result){
  $.each(result, function (index, item) {

//    <!-- tbody에 출력 -->

    var iden = '<tr><td>'+item.name+'</td>';
      iden += '<td>' + item.itemid + '</td>';
      iden += '<td>' + item.level + '</td>';
      iden += '<td>' + item.bind + '</td></tr>';
      $("#iden-equip-table").append(iden);
  });
};
// <!-- json 파일 불러오기-->
$(document).ready(function() {
    $.ajax({
      url: './json/iden-equip.json',
      success : function (result) {
        proc(result);
      }
    });
});
