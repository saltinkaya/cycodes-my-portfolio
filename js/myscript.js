
/* TO DO: Add name and email validation before the popup. So, if name and email is not valid, Alert will not fire. */

/* Declaring variables */
let name_input = document.getElementById('name1'); /* Name Input */
let email_input = document.getElementById('email'); /* Email input */
let text_message = document.getElementById('message'); /* Textarea Message */

let button = document.getElementById('submit-button');  /* Button */

/* Get all values all together in the alert  */

button.addEventListener('click', function () {



    if (name_input.value == false || email_input.value == false || text_message.value == false) {
        alert("Please fill the required areas ");
    }

    else {
        alert("Name: " + name_input.value +
            "\nEmail: " + email_input.value +
            "\nYour Message: " + text_message.value);}

  /*  if (name_input.value != "" ||  email_input.value != "" || text_message.value != "") {

    }
*/
});


