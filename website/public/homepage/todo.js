// dropdown
console.log(localStorage.getItem("morePoints"));
// localStorage.setItem("morePoints", 'undefined')

if (localStorage.getItem("morePoints") === 'undefined') {
    var pointTotal = 0;
    var taskTotal = 0;
    document.getElementById("pointCount").innerText = pointTotal;
    document.getElementById("taskCount").innerText = taskTotal;
}
else {
    pointTotal = 0;
    pointTotal += Number(localStorage.getItem("morePoints"));
    taskTotal = 0;
    taskTotal += Number(localStorage.getItem("tasks"));
    document.getElementById("pointCount").innerText = pointTotal;
    document.getElementById("taskCount").innerText = taskTotal;
}




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
            //div.style.display = "none";
            div.remove();
            
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
     if(points == 3){
        points = 1;
     }

     else if( points == 1){
        points = 3;
     }

    pointTotal = points + pointTotal;

    localStorage.setItem("points", pointTotal);

    if (localStorage.getItem("morePoints") === 'undefined') {
        document.getElementById("pointCount").innerText = pointTotal;

    }
    else {
        localStorage.setItem("morePoints", pointTotal);
        document.getElementById("pointCount").innerText = localStorage.getItem("morePoints");
    }


    return pointTotal;
}

function totalTasks() {
    taskTotal = taskTotal + 1;

    localStorage.setItem("tasks", taskTotal);


    if (localStorage.getItem("tasks") === 'undefined') {
        document.getElementById("taskCount").innerText = taskTotal;

    }
    else {
        localStorage.setItem("tasks", taskTotal);
        document.getElementById("taskCount").innerText = localStorage.getItem('tasks');

    }


    return taskTotal;

}



function sortByDate(){
    var tempList, list, index, switching, listItem, shouldSwitch
    tempList = []
    list = document.getElementsByTagName("li");

    for (var index = 0, length = list.length; index < length; index++){
        tempList.push(list[index].innerHTML)
    }

    console.info(tempList);
    switching = true;

    while(switching) {
        switching = false;

        for(i = 0; i < (tempList.length - 1); i++){
            year = '';
            month = '';
            day = '';

            nextYear = '';
            nextMonth = '';
            nextDay = '';

            shouldSwitch = false

            var notIsFound = true;
            var newIndex = 0;

            while(notIsFound) {
                if(tempList[i][newIndex - 2]==":" && tempList[i][newIndex - 3]=="e") {

                    year = tempList[i][newIndex] + tempList[i][newIndex + 1] + tempList[i][newIndex + 2] + tempList[i][newIndex + 3];
                    month = tempList[i][newIndex + 5] + tempList[i][newIndex + 6];
                    day = tempList[i][newIndex + 8] + tempList[i][newIndex + 9];

                    notIsFound = false;

                }

                newIndex = newIndex + 1;
            }

            notIsFound = true;
            newIndex = 0;

            while(notIsFound) {
                if(tempList[i + 1][newIndex - 2]==":" && tempList[i + 1][newIndex - 3]=="e") {

                    nextYear = tempList[i + 1][newIndex] + tempList[i + 1][newIndex + 1] + tempList[i + 1][newIndex + 2] + tempList[i + 1][newIndex + 3];
                    nextMonth = tempList[i + 1][newIndex + 5] + tempList[i + 1][newIndex + 6];
                    nextDay = tempList[i + 1][newIndex + 8] + tempList[i + 1][newIndex + 9];

                    notIsFound = false;

                }

                newIndex = newIndex + 1;
            }
            

            var yearComp = (Number(year)*10000) + (Number(month)*100) + Number(day);
            var nextYearComp =(Number(nextYear)*10000) + (Number(nextMonth)*100) + Number(nextDay);


            if(yearComp > nextYearComp){
                shouldSwitch = true;
                break;
            }
    
        }
        
        if ( shouldSwitch ){
            var swapValue = tempList[i + 1];
            tempList[i + 1] = tempList[i];
            tempList[i] = swapValue;
            switching = true;
        }
    }

    removeIndex = 0;
    while( removeIndex < document.getElementById("todo_list").getElementsByTagName("li").length ){
        const i = document.querySelector("li:last-child");
        i.remove();
    }

    
    addIndex = 0;

    while (addIndex < tempList.length){
        var li = document.createElement("li");

        var fillerText = document.createTextNode("\nDue: ");

        var fillerText2 = document.createTextNode("\nPriority Level: ");

        var br = document.createElement("br");

        var br2 = document.createElement("br");

        var inputValue = "";
        var priority = 0;
        var date = "";

        searchIndex = 0;
        notIsFound = true;
        while( notIsFound ){
            if( tempList[addIndex][searchIndex] == "<" ){
                for(index = 0; index < searchIndex; index++){
                    inputValue = inputValue + tempList[addIndex][index];
                }
                notIsFound = false;
            }
            searchIndex = searchIndex + 1;
        }

        searchIndex = 0;
        notIsFound = true;
        while( notIsFound ){
            if( tempList[addIndex][searchIndex] == ":" ){
                priority = tempList[addIndex][searchIndex + 2];
                notIsFound = false;
            }
            searchIndex = searchIndex + 1;
        }

        searchIndex = 0;
        notIsFound = true;
        while( notIsFound ){
            if( tempList[addIndex][searchIndex] == ":" && tempList[addIndex][searchIndex - 1] == "e" ){
                for(index = 0; index < 10; index++){
                    date = date + tempList[addIndex][searchIndex + 2 + index];
                }
                notIsFound = false;
            }
            searchIndex = searchIndex + 1;

        }
        inputText = document.createTextNode(inputValue);
        priorityText = document.createTextNode(priority);
        dateText = document.createTextNode(date);

        li.appendChild(inputText);
        li.appendChild(br2);
        li.appendChild(fillerText2);
        li.appendChild(priorityText);
        li.appendChild(br);
        li.appendChild(fillerText);
        li.appendChild(dateText);

        document.getElementById("todo_list").appendChild(li);

        var closeButton = document.createElement("SPAN");
        var closeText = document.createTextNode("X");

        closeButton.className = "delete";
        closeButton.appendChild(closeText);

        li.appendChild(closeButton);

        for (index=0; index<close.length; index++) {
            close[index].onclick = function() {
                var div = this.parentElement;
                //div.style.display = "none";
                div.remove();
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
                //div.style.display = "none";
                div.remove();
                
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

        addIndex = addIndex + 1;
    }

    tempList = [];
    
}



function sortByPriority(){
    var tempList, list, index, switching, listItem, shouldSwitch
    tempList = []
    list = document.getElementsByTagName("li");

    for (var index = 0, length = list.length; index < length; index++){
        tempList.push(list[index].innerHTML);
        
    }
    console.info(tempList);

    switching = true;

    while(switching) {
        switching = false;

        for(i = 0; i < (tempList.length - 1); i++){
            shouldSwitch = false

            var notIsFound = true;
            var newIndex = 0;

            while(notIsFound) {
                if(tempList[i][newIndex - 2]==":") {

                    priority = tempList[i][newIndex];
                    notIsFound = false;

                }

                newIndex = newIndex + 1;
            }

            notIsFound = true;
            newIndex = 0;

            while(notIsFound) {
                if(tempList[i + 1][newIndex - 2]==":") {

                    nextPriority = tempList[i + 1][newIndex]
                    notIsFound = false;

                }

                newIndex = newIndex + 1;
            }
 
            if(Number(priority) > Number(nextPriority)){

                shouldSwitch = true;
                break;
         
            }

        }
        
        if ( shouldSwitch ){
            var swapValue = tempList[i + 1];
            tempList[i + 1] = tempList[i];
            tempList[i] = swapValue;
            switching = true;
        }   
    }   


    removeIndex = 0;
    while( removeIndex < document.getElementById("todo_list").getElementsByTagName("li").length ){
        const i = document.querySelector("li:last-child");
        i.remove();
    }

    
    addIndex = 0;


    while (addIndex < tempList.length){
        console.log("in the while loop");
        var li = document.createElement("li");

        var fillerText = document.createTextNode("\nDue: ");

        var fillerText2 = document.createTextNode("\nPriority Level: ");

        var br = document.createElement("br");

        var br2 = document.createElement("br");

        var inputValue = "";
        var priority = 0;
        var date = "";

        searchIndex = 0;
        notIsFound = true;
        while( notIsFound ){
            if( tempList[addIndex][searchIndex] == "<" ){
                for(index = 0; index < searchIndex; index++){
                    inputValue = inputValue + tempList[addIndex][index];
                }
                notIsFound = false;
            }
            searchIndex = searchIndex + 1;
        }

        searchIndex = 0;
        notIsFound = true;
        while( notIsFound ){
            if( tempList[addIndex][searchIndex] == ":" ){
                priority = tempList[addIndex][searchIndex + 2];
                notIsFound = false;
            }
            searchIndex = searchIndex + 1;
        }

        searchIndex = 0;
        notIsFound = true;
        while( notIsFound ){
            if( tempList[addIndex][searchIndex] == ":" && tempList[addIndex][searchIndex - 1] == "e" ){
                for(index = 0; index < 10; index++){
                    date = date + tempList[addIndex][searchIndex + 2 + index];
                }
                notIsFound = false;
            }
            searchIndex = searchIndex + 1;

        }
        inputText = document.createTextNode(inputValue);
        priorityText = document.createTextNode(priority);
        dateText = document.createTextNode(date);

        li.appendChild(inputText);
        li.appendChild(br2);
        li.appendChild(fillerText2);
        li.appendChild(priorityText);
        li.appendChild(br);
        li.appendChild(fillerText);
        li.appendChild(dateText);

        document.getElementById("todo_list").appendChild(li);

        var closeButton = document.createElement("SPAN");
        var closeText = document.createTextNode("X");

        closeButton.className = "delete";
        closeButton.appendChild(closeText);

        li.appendChild(closeButton);

        for (index=0; index<close.length; index++) {
            close[index].onclick = function() {
                var div = this.parentElement;
                //div.style.display = "none";
                div.remove();
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
                //div.style.display = "none";
                div.remove();
                
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

        addIndex = addIndex + 1;
    }

    tempList = [];

}


function bubbleSort( array ) {
    var outerIndex = 0;
    var innerIndex = 0;
    var temp;

    for (outerIndex = 0; outerIndex < array.length; outerIndex++) {

        for (innerIndex = 0; innerIndex < array.length; innerIndex++) {

            if ( array[innerIndex] > array[innerIndex + 1] ) {

                temp = array[innerIndex];

                array[innerIndex] = array[innerIndex + 1];
                
                array[innerIndex + 1] = temp;

            }
        }
    }

    return array;
}
