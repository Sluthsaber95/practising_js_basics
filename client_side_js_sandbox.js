var timestamp = document.getElementById("timestamp");
if (timestamp.firstChild == null)
    timestamp.appendChild(document.createTextNode(new Date().toString()));
timestamp.onclick = function() { this.innerHTML = new Date().toString(); }