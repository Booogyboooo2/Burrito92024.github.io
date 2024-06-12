//This file is not used it is just the how the code works
//Instead I used a bookmarklet to retain the same look and not use a button

//Clear Checkmarks
var i = 0;
while (i < document.getElementsByTagName("input").length) {
    document.getElementsByTagName("input")[i].checked = false;
    i++;
}

//Remove Unused/Duplicate Attributes
var i = 0;
while (i < document.getElementsByTagName("input").length) {
    document.getElementsByTagName("input")[i].removeAttribute('id')
    document.getElementsByTagName("input")[i].removeAttribute('name')
    i++;
}