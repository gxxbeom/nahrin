$(document).ready(function(){

  // 로그인버튼 활성화/비활성화
  const idInput = document.getElementsByClassName("input-box_login")[0];
  const passwordInput = document.getElementsByClassName("input-box_password")[0];
  const inputBtn = document.getElementsByClassName('btnon')[0];

  function onBtn () {
    const id = idInput.ariaValueMax;
    const password = passwordInput.ariaValueMax;

    if (id && password) {
      inputBtn.classList.remove('off-button');
    }else {
      inputBtn.classList.add('off-button');

    }
  };
  idInput.addEventListener("keyup" ,onBtn);
  passwordInput.addEventListener("keyup", onBtn);
});