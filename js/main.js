Parse.initialize("x40POIuJX8WKxgMEGKP1LAW6xmI3oU2g6cRpTjo9", "99gMOxg5JMzbneZ4tCoxrXIp1aLVnLtP7QJHRbKR");


var user = new Parse.User();
user.set("username", "my name");
user.set("password", "my pass");
user.set("email", "email@example.com");

// other fields can be set just like with Parse.Object
user.set("phone", "650-555-0000");

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});