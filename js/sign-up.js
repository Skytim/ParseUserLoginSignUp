	
$(document).on("pageinit","#initialpage",function(){

  $.getScript( 'http://www.parsecdn.com/js/parse-1.3.0.min.js', function() {
  Parse.initialize("x40POIuJX8WKxgMEGKP1LAW6xmI3oU2g6cRpTjo9", "99gMOxg5JMzbneZ4tCoxrXIp1aLVnLtP7QJHRbKR");

  $(document).on('click', '#sign-up-submit', function() { 
    var username=$('input[name="txt-user-name"]').val();
    var email=$('input[name="txt-email"]').val();
    var password=$('input[name="txt-password"]').val();
    var passwordconfirm=$('input[name="txt-password-confirm"]').val();
    if(password!=passwordconfirm){
      alert("passwordconfirm error");
      // break;
    }
    else
    {
    var user = new Parse.User();
    user.set("username", username);
    user.set("email", email);
    user.set("password", passwordconfirm);
    user.signUp(null, {
           success: function(user) {
             // Hooray! Let them use the app now.
                                     },
           error: function(user, error) {
             // Show the error message somewhere and let the user try again.
              alert("Error: " + error.code + " " + error.message);
                                          }
                          
                      });
    }

                                                          });
});



 });