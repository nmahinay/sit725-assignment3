let userID = null;
//sign in messages
const AddName = () => {
    let userName = $('#PlayerName').val()
        //entering name validation present or not
    if (userName.length == '') {
        alert("Adding player name is required");
        $("#PlayerName").focus();
    } else {
        userID = userName
    }
    //check if only number enetered 
    if (parseInt(userName)) {
        console.log(userName + " is a number.");

    } else {
        console.log(userName + " is NaN.");
    }

}