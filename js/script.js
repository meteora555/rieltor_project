


window.addEventListener('DOMContentLoaded', function() {


    //Взаимодействие с активом формы
    let form = document.querySelector('.form'),
        input = document.querySelector('.form-input');


    input.addEventListener("mouseenter", () => form.classList.add('formLight'));
    input.addEventListener("mouseout", () => form.classList.remove('formLight'));
  
    //modal window
//     const buttons = document.querySelectorAll(".toggle-button");
//     const modal = document.querySelector("#modal");

        // [].forEach.call(buttons, function (button) {
        //       button.addEventListener("click", function () {
        //       modal.classList.toggle("off");
        //      });
        // });




});