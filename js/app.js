let userage=18;
let is_subscribed= true;

if(is_subscribed === true && userage >=18){
    console.log("The user is 18, and subscribed. Welcome!")
} else if (is_subscribed === false && userage >=18){
    console.log("The user is 18, and not subscribed. Sorry!")
} else if (is_subscribed === false && userage <18){
    console.log("The user is not 18, or subscribed")
} else if (is_subscribed === true && userage <18){
    console.log("user is not 18")
}








