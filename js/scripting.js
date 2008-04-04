function validateContactForm(form) {
  var re_email = new RegExp("^([a-zA-Z0-9_'+*$%\^&!\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9:]{2,4})+$");
  
  if(!form.name.value) {
    alert('Please enter your name');
    form.name.select();
    return false;
  }
  
  if(!form.email.value) {
    alert('Please enter your email');
    form.email.select();
    return false;
  } 
  
   if(!re_email.test(form.email.value)) {
    alert('Please enter a valid email');
    form.email.select();
    return false;
  }    

  if(!form.comment.value) {
    alert('Please enter a comment');
    form.comment.select();
    return false;
  }
  else {
    form.input_send.value = "Sending...";
  	return true;
  }
}