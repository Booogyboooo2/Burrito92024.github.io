//This file is not used it is just the code of how it works
//Instead I used a bookmarklet to retain the same look and not use a button

var i = 0;
while (i < document.getElementsByTagName("input").length) {
    document.getElementsByTagName("input")[i].checked = false;
    i++;
}