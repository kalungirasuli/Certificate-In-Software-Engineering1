const validate = (event) => {
    //this is the event that prevent the default action

    const fname = document.getElementById('firstname');
    const dob = document.getElementById('dateOfbirth');
    const lname = document.getElementById('lastname');
    const gender = document.getElementById('gender');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const town = document.getElementById('town');
    const phone1 = document.getElementById('phone1');
    const phone2 = document.getElementById('phone2');
    const zip = document.getElementById('zip');
    const state = document.getElementById('state');

    //this regular expression that id the if the value has number
    const regx = /[0-9]/;
    //these are the condition statements
    if (fname.value == '' ||fname.value.match(regx) ||fname.value.length < 2 ||fname.value.length > 255) {
      fname.style = 'border:1px solid red';
      event.preventDefault();
    }else{
        fname.style = 'border:1px solid green';
    }

    if (lname.value == '' ||lname.value.match(regx) ||lname.value.length < 2 ||lname.value.length > 255 ) {
      lname.style = 'border:1px solid red';
        event.preventDefault();
    }else{
        lname.style = 'border:1px solid green';
    }
    if (country.value == '0') {
      country.style = 'border:1px solid red';
      event.preventDefault();
    }else{
        country.style = 'border:1px solid green';
    }

    if (town.value == '') {
      town.style = 'border:1px solid red';
      event.preventDefault();
    }else{
        town.style = 'border:1px solid green';
    }

    if (phone1.value == '') {
      phone1.style = 'border:1px solid red';
      event.preventDefault();
    }else{
        phone1.style = 'border:1px solid green';
    }

    if (email.value == '') {
      email.style = 'border:1px solid red';
      event.preventDefault();
    }else{
        email.style = 'border:1px solid green';
    }
    if(gender.value==""){
        gender.style='border:1px solid red';
    }else{
        gender.style='border:1px solid green';
    }
    if (phone2.value == '') {
        phone2.style = 'border:1px solid red';
        event.preventDefault();
        }else{
            phone2.style = 'border:1px solid green';
        }
    if (zip.value == '') {
        zip.style = 'border:1px solid red';
        event.preventDefault();
        }else{
            zip.style = 'border:1px solid green';
        }
    if (state.value == '') {
        state.style = 'border:1px solid red';
        event.preventDefault();
        }else{
            state.style = 'border:1px solid green';
        }

        
        if(dob.value==""){
            dob.style='border:1px solid red';
            event.preventDefault();
        }else{
            dob.style='border:1px solid green'; 
        }
        const age = dob.value.split('/')[0];
        let currentdate = new Date();
        let userAge = currentdate.getFullYear() - age;
        if (userAge < 18 || dob.value == '') {
          dob.style = 'border:1px solid red';
          event.preventDefault();
        }
    
  };

  