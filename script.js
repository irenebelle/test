


document.addEventListener('DOMContentLoaded', function(){
    var button  = document.getElementById("button");
    var popup = document.querySelector(".popup");
    var message = document.querySelector("#message");
    var closeButton = document.getElementById("close-button");
    message.textContent = document.querySelector(".open h2").textContent;
    var titles = document.querySelectorAll('.title');


    document.querySelector('.accordeon').onclick = function(event) {
        var targetElement = event.target;
       if(event.target.tagName == 'H2') {
       
            message.textContent = targetElement.firstChild.textContent;
                    titles.forEach(function(element) {
                        element.classList.remove('open');
                        element.classList.add('close');
                    });
                    //тот на который нажали сменил класс на open а остальные на close
                    targetElement.parentNode.classList.remove('close');

                    targetElement.parentNode.classList.add('open');
       }

      



    }


    button.addEventListener('click', function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener('click', function() {
        popup.style.display = "none";
    });
});