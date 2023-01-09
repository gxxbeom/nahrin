$(document).ready(function(){
  // 드롭다운
  $(".menu a").click(function(){
  var submenu = $(this).next("ul");
    if( submenu.is(":visible") ){
    submenu.slideUp();
    }else{
    submenu.slideDown();
    }
  });
  // 드롭다운 + 버튼 클릭시 - 로 변경
  $('.add').click( function() {
    if( $(this).text() == '+' ) {
      $(this).text('-');
    }
    else {
      $(this).text('+');
    }
  });
  // 찜 버튼
    $('#heart').click( function() {
      if( $(this).text() == 'favorite_border' ) {
        $(this).text('favorite');
      }
      else {
        $(this).text('favorite_border');
      }
    });
    // 라디오체크 버튼
    $('.check').click( function() {
      if( $(this).text() == 'radio_button_unchecked' ) {
        $(this).text('radio_button_checked');
      }
      else {
        $(this).text('radio_button_unchecked');
      }
    });
    // - , + 누르면 증감 되도록 하기
    $(()=>{
      // 시작값 1로 result변수에 저장
      let result = 1;

      // minus클래스 버튼 클릭시
      $('.minus').click(()=>{
          // result변수 1씩 감소
          result--;
          // result변수가 0보다 작으면 0을 대입 아니면 기존 result변수값 대입
          result = result < 0 ? 0 : result;
          // #result아이디에 result값 출력
          $("#result").text(result);
      });

      // plus클래스 버튼 클릭시
      $('.plus').click(()=>{
          // result변수 1씩 증가
          result++;
          // #result아이디에 result값 출력
          $("#result").text(result);
      });
  });
});