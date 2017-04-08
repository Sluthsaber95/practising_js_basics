// Set the location property to navigate to a new web page
window.location = "http://www.google.co.uk/";
//output -> the window location changed to google.co.uk
//output -> console

//The Window object also defines methods like alert(), which displays a message in a dialog box, and 
//setTimeout(), which registers a function to be invoked after a specified amount of time:
setTimeout(function() { alert('Hello World'); }, 2000);
// output -> dialog box alert containing string hello world pops up after 2 sec
// output -> console
// Notice that the code above does not explicitly use the window property.

/*Sandbox Block - objects, properties and methods*/
// Find the element with id="timestamp"
var timestamp = document.getElementById("timestamp");
//Document object has important methods such as getElementById(), which returns a single document element
//The Element object returned by getElementById() has other important properties and methods that allow 
// scripts to get its content, set the value of its attributes, and so on:
//If the element is empty, then insert the current date and time into it
if (timestamp.firstChild == null)
    timestamp.appendChild(document.createTextNode(new Date().toString()));
//output -> inside empty div element Wed Apr 05 2017 16:04:44 GMT+0100 (GMT Standard Time)
//output from sandbox.js -> sandbox.html
// Explicitly alter the presentation of the heading element
timestamp.style.backgroundColor = "yellow";
// output -> console
// Or just change the class and let the stylesheet specify the details:
timestamp.className = "highlight";
// output -> changed the className from "splat" to "highlight"
// output -> class="splat" was added to div id="timestamp"
// output -> console >> timestamp.className = "highlight
/*
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Title of the document</title>
</head>

<body>
    Content of the document......
    <div id="timestamp" class="splat">Timestamp</div>
</body>
<script src="client_side_js_sandbox.js"></script>

</html>
*/
// Update the content of the timestamp element when the user clicks on it
timestamp.onclick = function() { this.innerHTML = new Date().toString(); }


/*Sandbox - Onload function*/
/*
<!DOCTYPE html>
<html>

<head>
    <style>
        //CSS styles for this page
        
        .reveal * {
            display: none;
        }
        // Children of class="reveal" are  not shown
        
        .reveal *.handle {
            display: block;
        }
        //Except for the class="handle" child 
    </style>
    <script>
        // Don't do anything until the entire document has loaded
        window.onload = function() {
            // Find all container elements with class "reveal"
            var elements = document.getElementsByClassName("reveal");
            for (var i = 0; i < elements.length; i++) { // For each one...
                var elt = elements[i];
                // Find the "handle" element with the container of index 1
                //index requirements, needs specificity
                var title = elt.getElementsByClassName("handle")[1];
                // When that element is clicked, reveal the rest of the content
                title.onclick = function() {
                    if (elt.className == "reveal") elt.className = "revealed";
                    else if (elt.className == "revealed") elt.className = "reveal";
                }
            }
        };
    </script>
</head>

<body>
    <div class="reveal">
        <h1 class="handle">Click Here to Reveal Hidden Text</h1>
        <p class="handle">This paragraph is hidden. It appears when you click on the title.</p>
        <p>What if I add another paragraph</p>
    </div>
</body>

</html>
*/

/*State of the art 1996*/
/*
<!DOCTYPE html>
<html>

<head>

    <h1>Table of Factorials</h1>
    <script>
        function factorial(n) { // A function to compute factorials
            if (n <= 1) return n;
            else return n * factorial(n - 1);
        }
        document.write("<table>"); // Begin an HTML table
        document.write("<tr><th>n</th><th>n!</th></tr>"); // Output table header
        for (var i = 1; i <= 10; i++) { // Output 10 rows
            document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
        }
        document.write("</table>"); // End the table
        document.write("Generated at " + new Date()); // Output a timestamp
    </script>
</head>

<body>
</body>

</html>
*/