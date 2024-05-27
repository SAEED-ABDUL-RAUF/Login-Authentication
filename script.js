let submit = document.querySelector('.submit_btn');

submit.addEventListener('click', validation);

function validation(event){
    event.preventDefault();
    let name = document.querySelector('.name_field');
    let password = document.querySelector('.password');
    let number = document.querySelector('.number_field');
    let errorDisplay = document.querySelector('.output')
    let email = document.querySelector('.email_field')
    let namechecker = /[0-9,.!@#$%^&*()_+={}<>?/|\\'"]/;
    let passwordPattern = /[@!%$*?&]/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let numberPattern =  /^[+]?\d+$/;;

    try{
      if (name.value == '' && number.value == '' && email.value == '' && password == '') throw 'Fields cannot be empty' // to handle when all fields are left empty
      if (name.value == '' || name.value == null) throw 'Name can\'t be blank'

      if (name.value.length < 3) throw 'Name must be atleast three characters'

      if (namechecker.test(name.value)) throw 'Name can\'t contain a number or special character'

      if(number.value == '' || number.value == null) throw 'number can\'t be blank'

      if (!numberPattern.test(number.value)) throw 'Number can\'t contain letters or special characters'

      if (email.value == '' || email.value == null) throw 'Email can\'t be blank'

      if (!emailPattern.test(email.value)) throw 'Invalid email address'

      if (password.value == '' || password.value == null) throw 'Password can\'t be blank'

      if (password.value.length < 6) throw 'Password must be at least 6 characters long.'

      if (!passwordPattern.test(password.value)) throw 'Password must contain at least one special character'

    } catch(error){
      errorDisplay.innerHTML = error;
    }
}