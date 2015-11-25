function loginPage(){
  $('#loginDiv').hide();
  $('#formDiv').show();
  $('#signup').hide();
  $('#getPassword').hide();
  $('#resetPassword').hide();
}
function signoutPage(){
  $('#loginDiv').show();
  $('#formDiv').hide();
  $('#signup').hide();
  $('#getPassword').hide();
  $('#resetPassword').hide();
}
function signupPage(){
  $('#loginDiv').hide();
  $('#formDiv').hide();
  $('#signup').show();
  $('#getPassword').hide();
  $('#resetPassword').hide();
}
function getPasswordPage(){
  $('#loginDiv').hide();
  $('#formDiv').hide();
  $('#signup').hide();
  $('#getPassword').show();
  $('#resetPassword').hide();
}
function resetPasswordPage(){
  $('#loginDiv').hide();
  $('#formDiv').hide();
  $('#signup').hide();
  $('#getPassword').hide();
  $('#resetPassword').show();
}
