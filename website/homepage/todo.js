// dropdown
pointTotal = 0;
taskTotal = 0;
document.getElementById("pointCount").innerText = pointTotal;
document.getElementById("taskCount").innerText = taskTotal;



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
        console.log("the button was pressed out of the function");
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

    var prioritySelect = document.getElementsByName('priority_level');
          
        for(i = 0; i < prioritySelect.length; i++) {
            if(prioritySelect[i].checked)
            priorityText = document.createTextNode(prioritySelect[i].value);
        }
    
    var fillerText = document.createTextNode("\nDue: ");

    var fillerText2 = document.createTextNode("\nPriority Level: ");

    var br = document.createElement("br");
    var br2 = document.createElement("br");

    li.appendChild(inputText);
    li.appendChild(br2);
    li.appendChild(fillerText2);
    li.appendChild(priorityText);
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
            console.log("the button was pressed inside of the function");
        }
    }

    var completeButton = document.createElement("SPAN");
    var completeText = document.createTextNode("\u2713");

    completeButton.className = "complete";
    completeButton.appendChild(completeText);

    li.appendChild(completeButton);

    for (index=0; index<complete.length; index++) {
        complete[index].onclick = function() {
            var newIndex = 0;
            var div = this.parentElement;
            div.style.display = "none";
            
            var notIsFound = true;
            while(notIsFound) {
                if(div.innerHTML[newIndex - 2]==":") {
                    points = div.innerHTML[newIndex];
                    notIsFound = false;

                }
                newIndex = newIndex + 1;
            }

            totalTasks();
            totalPoints( points );
        }
    }

}

function totalPoints( points ) {
    points = Number(points);
    pointTotal = points + pointTotal;

    document.getElementById("pointCount").innerText = pointTotal;
    return pointTotal;
}

function totalTasks() {
    taskTotal = taskTotal + 1;

    document.getElementById("taskCount").innerText = taskTotal;

    return taskTotal;

}
