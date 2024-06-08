const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));






        $('.onlyalpha').keypress(function(e) {
          var letters=/^[a-z]/gi; //i means ignorecase
          if(!(e.key).match(letters)) e.preventDefault();
        });
        
        $('.onlynumbers').on('input', function(e) {
    var inputValue = e.target.value;
    var numbersOnly = /^\d*$/; // Matches any sequence of digits
    if (!inputValue.match(numbersOnly)) {
        e.target.value = inputValue.replace(/\D/g, ''); // Remove non-digit characters
    }
});


  