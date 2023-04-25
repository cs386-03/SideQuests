var newList = document.getElementsByTagName("li");
var index;
for (index=0; index<newList.length; index++) {
    var closeButton = document.createElement("SPAN");
    var closeText = document.createTextNode("X");

    closeButton.className = "delete";
    closeButton.appendChild(closeText);
    newList[index].appendChild(closeButton);
}


var close = document.getElementsByClassName("delete");
var index;

for (index=0; index<close.length; index++) {
    close[index].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newListItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var inputText = document.createTextNode(inputValue);

    li.appendChild(inputText);

    if (inputValue === '') {
        alert("Write something before you add goober!");
    } else {
        document.getElementById("todo_list").appendChild(li);
    }
    document.getElementById("input").value = "";


    var closeButton = document.createElement("SPAN");
    var closeText = document.createTextNode("X");

    closeButton.className = "delete";
    closeButton.appendChild(closeText);

    li.appendChild(closeButton);

    for (index=0; index<close.length; index++) {
        close[index].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}