# 13 JavaScript in Web Browsers
Note the document you are reading is 6 years old

## 13.1  Client-Side JavaScript - Window Objects, properties and methods

> The Window object is the main entry point to all client-side JavaScript features and APIs. It represents a web browser window or frame, and you can refer to it with the identifier window. The Window object defines properties like location, which refers to a Location object that specifies the URL currently displayed in the window and allows a script to load a new URL into the window.

>In client-side JavaScript, the Window object is also the global object. This means that the Window object is at the top of the scope chain and that its properties and methods are effectively global  variables  and  global  functions he  Window  object  has  a  property  named window that always refers to itself.

>One of the most important properties of the Window object is document: it refers to a Document object that represents the content displayed in the window

>Another set of important properties on Window, Document, and Element objects are the event handler properties. These allow scripts to specify functions that should be invoked asynchronously when certain events occur. Event handlers allow JavaScript code to alter the behavior of windows, of documents, and of the elements that make up those documents. Event handler properties have names that begin with the word “on”.

>One of the most important event handlers is the onload handler of the Window object. It is triggered when the content of the document displayed in the window is stable and ready to be manipulated. JavaScript code is commonly wrapped within an onload event handler.


## 13.1.1 JavaScript in Web Documents

>A JavaScript program can traverse and manipulate document content through the
Document object and the Element objects it contains. It can alter the presentation of that content by scripting CSS styles and classes. And it can define the behavior of document elements by registering appropriate event handlers. The combination of scriptable
content, presentation, and behavior is called Dynamic HTML or DHTML

>Web applications use all of the JavaScript DHTML features that web documents do,
but they also go beyond these content, presentation, and behavior manipulation APIs
to  take  advantage  of  other  fundamental  services  provided  by  the  web  browser
environment.

>Web browsers define low-level APIs for networking, saving data, and drawing graphics. The best known of these advanced services is the XMLHttpRequest object, which enables networking through scripted HTTP requests. Web apps use this service to obtain new information from the
server without a page reload.

> Web applications are, by definition, JavaScript programs that use the OS-type services provided by the web browser, and they would not be expected to work with JavaScript disabled. Where pg 311

## 13.2 Embedding JavaScript in HTML 

Decided to skip this section as there is one widely used way, an etiquette perhaps, that is of course a source attribute embedding a JavaScript file inside a script tag

## 13.3 Execution of JavaScript Programs

>Remember, though, that there is no formal definition of what the boundaries of a JavaScript program are. If the container document and the contained document are from the same server, the code in one document can interact with the code in the other, and you can treat them as two interacting parts of a single program

>Scripts generally (but not always) run in the order in which they appear in the document.

>Once the document is loaded and all scripts have run, JavaScript execution enters its second phase. This phase is asynchronous and event-driven. During this event-driven phase, the web browser invokes event handler functions (defined by HTML event handler attributes, by scripts executed in the first phase, or by previously invoked event handlers) in response to events that occur asynchronously.

>The loading phase of a JavaScript program is relatively short, typically lasting only a second or two.

>Once the document is loaded, the event-driven phase lasts for as long as the document is displayed by the web browser. Because this phase is asynchronous and event-driven, there may be long periods of inactivity, where no JavaScript is executed, punctuated by bursts of activity triggered by user or network events

>Both core JavaScript and client-side JavaScript have a single-threaded execution model.
Scripts and event handlers are (or must appear to be) executed one at a time without
concurrency. This keeps JavaScript programming simple

## 13.3.1 Synchronous, Asynchronous, and Deffered Scripts

>but if the script source code is in an external file specified with a *src* attribute, this means that the portions of the document that follow the script will not appear in the browser until the script has been downloaded and executed.

>This *synchronous* or *blocking* script execution is the default only. The /<script/> tag can have defer and async attributes, which (in browsers that support them) cause scripts to be executed differently. These are boolean attributes—they don’t have a value; theyjust need to be present on the /<script/> tag. HTML5 says that these attributes are only meaningful when used in conjunction with the src attribute, but some browsers may support deferred inline scripts as well:
<script defer src="deferred.js"></script>
<script async src="async.js"></script>

> Note that deferred scripts run in the order in which they appear in the document. Async
scripts run as they load, which means that they may execute out of order.

`http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html`

> Mentions to use the function made before to load a document asynchronously, isn't required

## 13.3.2 Event-Driven JavaScript

>We write programs that register event handler functions. These functions are then invoked asynchronously when the events for which they were registered occur. A web application that wants to enable keyboard shortcuts for common actions would register an event handler for key events, for example. Even noninteractive programs use events. Suppose you wanted to write a program that would analyze the structure of its document and automatically generate a table of contents for the document. No event handlers for user input events are necessary, but the program would still register an onload event handler so that it would know when the document had finished loading and was ready to have a table of contents generated.

> When we speak of an event, we must specify both the event type (the name) and the target: a click event on an HTMLButtonElement object, for example, or a readystatechange event on an XMLHttpRequest object
> If we want our program to respond to an event, we write a function known as an “event handler,” “event listener,” or sometimes just a “callback.” We then register this function so that it is invoked when the event occurs
>  Asynchronous programming with events often involves nested functions and it is not uncommon to end up writing code that defines functions within functions within functions
> Events whose targets are elements in a document often propagate up the document tree in a process known as “bubbling.” If the user clicks the mouse on a /<button/> element, for example, a click event is fired on the button. If that event is not handled (and its propagation stopped) by a function registered on the button, the event bubbles up to whatever element the button is nested within, and any click event handler registered on that container element will be invoked

`readystatechange what is this property?`
you have
to use another event handler registration technique. Most objects that can be event
targets have a method named 
addEventListener()
, which allows the registration of
multiple listeners:
`window.addEventListener("load", function() {...}, false);`
`request.addEventListener("readystatechange", function() {...}, false);`



This means I need to consider event type, there are many, so for the sake of time and learning with a solid founation, both "load" and "readystatechange" is picked.
`https://developer.mozilla.org/en-US/docs/Web/Events/load_(ProgressEvent)`
`https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`
`http://stackoverflow.com/questions/4110081/difference-between-html-and-dom`
`https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState`
`https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange`

v. invoke (computing)
cause (a procedure) to be carried out

> The functions passed to setTimeout() are registered differently than true event handlers, and they are usually called “callbacks” instead of “handlers,” but they are asynchronous just as event handlers are.

adj. asynchronous controlling the timing of operations by the use of pulses sent when the previous operation is completed rather than at regular intervals.

When you execute something synchronously, you wait for it to finish before moving on to another task. When you execute something asynchronously, you can move on to another task before it finishes.

> an onLoad()function that registers a function to be run when the document finishes  loading. onLoad() is  a  very  useful  function,
