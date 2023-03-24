// dropdown

function showDropdown() {
    document.getElementById("tasks").style.display = "block";
}

function closeDrop() {
    document.getElementById("tasks").style.display = "none";
}


//adding an item
var newList = document.getElementsByTagName("li");
var index;
for (index=0; index<newList.length; index++) {
    var closeButton = document.createElement("SPAN");
    var closeText = document.createTextNode("X");

    closeButton.className = "delete";
    closeButton.appendChild(closeText);
    newList[index].appendChild(closeButton);

    var completeButton = document.createElement("SPAN");
    var completeText = document.createTextNode("\u2713");

    completeButton.className = "complete";
    completeButton.appendChild(completeText);
    newList[index].appendChild(completeButton);

}


var close = document.getElementsByClassName("delete");
var index;

for (index=0; index<close.length; index++) {
    close[index].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var complete = document.getElementsByClassName("complete");
var index;

for (index=0; index<complete.length; index++) {
    complete[index].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

function newListItem() {
    document.getElementById("tasks").style.display = "none";
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var inputText = document.createTextNode(inputValue);

    var dateInput = document.getElementById("dateSelect").value;
    var dateText = document.createTextNode(dateInput);
    
    var fillerText = document.createTextNode("\nDue: ");

    var br = document.createElement("br");

    li.appendChild(inputText);
    li.appendChild(br);
    li.appendChild(fillerText);
    li.appendChild(dateText);

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

    var completeButton = document.createElement("SPAN");
    var completeText = document.createTextNode("\u2713");

    completeButton.className = "complete";
    completeButton.appendChild(completeText);

    li.appendChild(completeButton);

    for (index=0; index<complete.length; index++) {
        complete[index].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}