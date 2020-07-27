// https://stackoverflow.com/questions/24468459/sending-a-json-to-server-and-retrieving-a-json-in-return-without-jquery
// https://www.encodedna.com/javascript/how-to-create-a-simple-crud-application-using-only-javascript.htm
tasksList=[]

function addTask() {
    
	// Read data from the user input
    var taskTitle = document.getElementById("taskTitle").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var tasksTable = document.getElementById("TasksTable");
    
    var task=JSON.stringify({
		"taskTitle": taskTitle.toString(),
		"taskDescription": taskDescription.toString()
    });
    
    var http = new XMLHttpRequest();
    var url = '/task';
    
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {
    	//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            getTaskById(http.responseText);
        }
    }
    http.send(task);
}


function updateTask(taskId) {
	
	var http = new XMLHttpRequest();
	
    var url = '/task'+'/'+String(taskId);
    
    http.open('GET', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {
    	//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        	
            var res=JSON.parse(http.responseText);
            
            // Create three input elements
        	var taskTitle=document.createElement("input");
        	var taskDescription=document.createElement("input");
        	taskTitle.value=res.taskTitle;
        	taskDescription.value=res.taskDescription;
        	
        	
        }
    }
    http.send();
	
	
	
    
	// Read data from the user input
    var taskTitle = document.getElementById("taskTitle").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var tasksTable = document.getElementById("TasksTable");
    
    var task=JSON.stringify({
		"taskTitle": taskTitle.toString(),
		"taskDescription": taskDescription.toString()
    });
    
    var http = new XMLHttpRequest();
    var url = '/task';
    
    http.open('POST', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {
    	//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            getTaskById(http.responseText);
        }
    }
    http.send(task);
}

 
function deleteTask(Id) {
      
	var http = new XMLHttpRequest();
    var url = '/task'+'/'+String(Id);
    
    http.open('DELETE', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {
    	//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
            
            var table = document.getElementById("tasksTable");
            for (var i = 0, row; row = table.rows[i]; i++) {
               //iterate through rows
               //rows would be accessed using the "row" variable assigned in the for loop
            	console.log(row.cells[0].innerHTML)
            	if (row.cells[0].innerHTML == Id) {
            		alert(Id, row.cells[0]);
            		table.deleteRow(i);
                }
            }
        }
    }
    http.send();
}

function deleteRow(btn) {
	  var row = btn.parentNode.parentNode;
	  row.parentNode.removeChild(row);
}

function getTaskById(Id) {
	
	var http = new XMLHttpRequest();
	
    var url = '/task'+'/'+String(Id);
    
    http.open('GET', url, true);

    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {
    	//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        	
            var res=JSON.parse(http.responseText)
            
        	// Find a <table> element with id="myTable":
        	var table = document.getElementById("tasksTable");

        	// Create an empty <tr> element and add it to the 1st position of the table:
        	var row = table.insertRow();

        	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        	var cell0 = row.insertCell(0);
        	var cell1 = row.insertCell(1);
        	var cell2 = row.insertCell(2);
        	var cell3 = row.insertCell(3);

        	// Add some text to the new cells:
        	cell0.innerHTML = res.taskId;
        	cell1.innerHTML = res.taskDescription;
        	cell2.innerHTML = res.taskTitle;
        	cell3.innerHTML = '<button type="button" onclick=updateTask('+res.taskId+') class="btn btn-primary">Update</button>'+' '+'<button type="button" onclick=deleteTask('+res.taskId+') class="btn btn-primary">Delete</button>';
        }
    }
    http.send();
}
 
function getAllTasks() {
    
	// Create a XMLHttpRequest object
	var http = new XMLHttpRequest();
	
	// Url relative to localhost
    var url = '/tasks';
    
    // Initialize the http object
    http.open('GET', url, true);

    // Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/json');

    http.onreadystatechange = function() {
    	// Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            //alert(http.responseText);
        	
            var res=JSON.parse(http.responseText);
            
            tasksList=res;
            showTasksTable();
        }
    }
    http.send();    
}

function showTasksTable() {
	var table = document.getElementById("tasksTable");
	
	//alert("tasksList"+tasksList)
	
	for(i in tasksList) {
		
		//document.write(5 + 6);
		
		//task=JSON.parse(task);
		
		// Create an empty <tr> element and add it to the 1st position of the table:
    	var row = table.insertRow();

    	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    	var cell0 = row.insertCell(0);
    	var cell1 = row.insertCell(1);
    	var cell2 = row.insertCell(2);
    	var cell3 = row.insertCell(3);

    	// Add some text to the new cells:
    	cell0.innerHTML = tasksList[i].taskId;
    	cell1.innerHTML = tasksList[i].taskDescription;
    	cell2.innerHTML = tasksList[i].taskTitle;
    	cell3.innerHTML = '<button type="button" onclick=updateTask('+tasksList[i].taskId+') class="btn btn-primary">Update</button>'+' '+'<button type="button" onclick=deleteTask('+tasksList[i].taskId+') class="btn btn-primary">Delete</button>';
	}
}
 
function load() {
    
    console.log("Page is successfully loaded");
    getAllTasks();
}