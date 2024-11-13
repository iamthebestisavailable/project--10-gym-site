function home() {
    document.sgetElementById("homes").style.color="rgb(127, 235, 127)";
    document.getElementById("plans").style.color="white"
    document.getElementById("contact-us").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("programs").style.color="white"
}
function program() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white"
    document.getElementById("contact-us").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("programs").style.color="rgb(127, 235, 127)"
}
function plan() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="rgb(127, 235, 127)"
    document.getElementById("contact-us").style.color="white"
    document.getElementById("blogs").style.color="white"
    document.getElementById("programs").style.color="white"
}
function blog() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white"
    document.getElementById("contact-us").style.color="white"
    document.getElementById("blogs").style.color="rgb(127, 235, 127)"
    document.getElementById("programs").style.color="white"
}
function contact() {
    document.getElementById("homes").style.color="white";
    document.getElementById("plans").style.color="white"
    document.getElementById("contact-us").style.color="rgb(127, 235, 127)"
    document.getElementById("blogs").style.color="white"
    document.getElementById("programs").style.color="white"
}
function submit() {
    let name = document.getElementById("name");
    let num = document.getElementById("number");

    if (name.value =="") {
        alert("enter name")
    } else if (num.value=="") {
        alert("enter number")
    }
    else{
        alert(`Thanks for joining the gym ${name.value}`)
    }

}