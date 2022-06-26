function Validator(options){


    function vadidate(inputElement, rule){
        var errorMess = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.parentElement.querySelector(options.errorSelector);

                    if(errorMess){
                       errorElement.innerText = errorMess;
                        inputElement.parentElement.classList.add('invalid');
                    }else{
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                    }
    }


    // console.log(options);


    //Lấy element của form cần lỗi
    var formElement  = document.querySelector(options.form);
    
    console.log(options.rules)
    
    if(formElement){
        options.rules.forEach(function (rule) {
            // console.log(rule.selector);
            var inputElement = formElement.querySelector(rule.selector);
            // console.log(inputElement);
          
            
            if(inputElement){
                //xử lí trường hợp nhấn ra ngoài.
                inputElement.onblur = function (){
                    // console.log(rule);
                    vadidate(inputElement, rule);
                }

                //Xử lí trường hợp khi nhập vào
                inputElement.oninput = function (){
                    var errorElement = inputElement.parentElement.parentElement.querySelector('.form-mess');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}


//Định nghĩa rules
//Nguyên tắc của các rules:
//1. Khi có lỗi => Trả về mess lỗi
//2. Khi hợp lệ => Không trả ra cái gì cả

Validator.isRequired = function(selector){
    return {
        selector: selector, test: function(value){
            return value.trim() ? undefined : 'This field cannot be left blank!!!!'   
        } 
    };
}


Validator.isEmail = function(selector){
    return{
        selector: selector, test: function(value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Invalid email, please re-enter!!'
        }
    }
}

Validator.isPassword = function(selector, min){
    return{
        selector: selector, test: function(value){
          
            return value.length >= min ? undefined : `Password must be ${min} or more characters`;
        }
    }
}
