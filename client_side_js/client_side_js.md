# 13 JavaScript in Web Browsers
Note the document you are reading is 6 years old

##( )13.1  Client-Side JavaScript - Window Objects, properties and methods

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


## 13.3.3 Client-Side JavaScript Threading Model

Thread (computing) - In computer science, a thread of execution is the smallest sequence of programmed instructions that can be managed independently by a scheduler, which is typically a part of the operating system. The implementation of threads and processes differs between operating systems, but in most cases a thread is a component of a process.
Multiple threads can exist within one process, executing concurrently and sharing resources such as memory, while different processes do not share these resources. In particular, the threads of a process share its executable code and the values of its variables at any given time.
A race condition occurs when two or more threads can access shared data and they try to change it at the same time. Because the thread scheduling algorithm can swap between threads at any time, you don't know the order in which the threads will attempt to access the shared data. Therefore, the result of the change in data is dependent on the thread scheduling algorithm, i.e. both threads are "racing" to access/change the data

In order to prevent race conditions from occurring, you would typically put a lock around the shared data to ensure only one thread can access the data at a time.
Race conditions can be avoided by employing some sort of locking mechanism before the code that accesses the shared resource:

> HTML5 defines “WebWorkers” which serve as a kind of a background thread (more on web workers follows), but client-side JavaScript still behaves as if it is strictly single-threaded. Even when concurrent execution  is  possible,  client-side  JavaScript  cannot  ever  detect  the  fact  that  it  is occurring
Yes, the other thread will have to wait until the lock is released before it can proceed. This makes it very important that the lock is released by the holding thread when it is finished with it. If it never releases it, then the other thread will wait indefinitely

>Single-threaded execution means that web browsers must stop responding to user input while scripts and event handlers are executing. This places a burden on JavaScript programmers: it means that JavaScript scripts and event handlers must not run for too long

>If your application must perform enough computation to cause a noticeable delay, you should allow the document to load fully before performing that computation, and you should be sure to notify the user that computation is underway and that the browser is not hung

>If it is possible to break your computation down into discrete subtasks, you can use methods such as setTimeout() and setInterval() to run the subtasks in the background while updating a progress indicator that displays feedback to the user

>HTML5 defines a controlled form of concurrency called a “web worker.” A web worker is a background thread for performing computationally intensive tasks without freezing the user interface. The code that runs in a web worker thread does not have access to document content, does not share any state with the main thread or with other workers, and can only communicate with the main thread and other workers through asynchronous events, so the concurrency is not detectable to the main thread, and web workers do not alter the basic single-threaded execution model of JavaScript program.

## 13.3.4 Client-Side JavaCript Timeline

Just consider the fact that internet explorer does exist

This section explains the timeline of JavaScript program execution in more detail.

>Stage 1) Web Browsers creates a Document Object and begins parsiong the webpage, adding Elemen objects and Text nodes to the document as it parses HTML elements and their textual content.
> document.readyStage = 'loading';
`https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState`

> In computer technology, a parser is a program, usually part of a compiler, that receives input in the form of sequential source program instructions, interactive online commands, markup tags, or some other defined interface and breaks them up into parts that can then be managed by other programming (for example, other components in a compiler). A parser may also check to see that all input has been provided that is necessary.
`http://searchmicroservices.techtarget.com/definition/parser`

> Stage 2) /<script/> with no asynx nor defer attributes, are added to the document and execute the inline or external script. These scripts are executed synchronously, and
the parser pauses while the script downloads (if necessary) and runs. 
>document.write()? http://lucybain.com/blog/2015/js-document-write/
> Scripts like these can use document.write() to insert text into the input stream. That text will become part of the document when the parser resumes. Synchronous scripts often simply define functions and register event handlers for later use, but they can traverse and manipulate the document tree as it exists when they run. That is, synchronous scripts can see their own /<script/> element and document content that comes before it.

> Stage 3) When the parser encounters a /<script/> element that has the async attribute set, it begins downloading the script text and continues parsing the document. The script will be executed as soon as possible after it has downloaded, but the parser does not stop and wait for it to download. Asynchronous scripts must not use the document.write()
 method.
 > Why?
 Don't use document.write. The script is being loaded asynchronously, which means it's detached from the document parsing state. There is quite literally NO WAY for the JS engine to know WHERE the document.write should be executed in the page
> Stage 4) When the document is completely parsed
> document.readyState = 'interactive';
> Stage 5) Any scripts that had the defer attribute set are executed, in the order in which they appeared in the document. Async scripts may also be executed at this time. Deferred scripts have access to the complete document tree and must not use the document.write() method.
> Stage 6) The browser fires a DOMContentLoaded event on the Document object. This marks the transition from synchronous script execution phase to the asynchronous event-driven phase of program execution. Note, however, that there may still be async scripts that have not yet executed at this points
> Stage 7) the browser may still be waiting for additional content, such as images, to load. When all such content finishes  loading,  and  when  all async scripts  have  loaded  and  executed
> document.readystate = 'complete';
> Stage 8) From this point on, event handlers are invoked asynchronously in response to user input events, network events, timer expirations, and so on.

--> Script Loading
--> Event Driven Phase

>For very long documents or very slow network connections, it is theoretically
possible that a web browser will render part of a document and allow the user to start
interacting with it before all the scripts have executed. In that case, user input events
might be fired before the event-driven phase of program execution has formally started.
(How much of it is the developers problem, what are the lines that blame the users that have a slow internet connection, to the general operability of the webpage)

## 13.4 Compatibility and Interoperability

Client-side JavaScript compatibility and interoperability issues fall into three general
categories:

Sometimes browser vendors and web developers take the lead and standards bodies write the official version well after the feature is already a de facto standard

**Evolution:** The web platform is always evolving and expanding. A standards body proposes a new feature or API. If the feature seems useful, browser vendors implement it. If enough vendors implement it interoperably, developers begin to use and depend on the feature, and it secures a permanent place in the web platform

Web developers are pulled between wanting to use powerful new features and  wanting  their  web  pages  to  be  usable  by  the  largest  number  of visitors.

**Nonimplementation:** Some vendors implement it and others do not. This is not a matter of current browsers with the feature versus older browsers without it, but a matter of browser implementors who prioritized the feature versus those who did not.

**Bugs:** Every browser has bugs, and none implement all of the client-side JavaScript APIs exactly as specified. Sometimes, writing compatible client-side JavaScript code is a matter of being aware of, and knowing how to work around, the bugs in existing browsers.

The transition between ES3 and ES5 may be the source of compatibility problems, because some browsers will support strict mode while others do not, but the expectation is that browser vendors will implement ES5 interoperably

Awareness of the incompatibilities between browsers is only the first step, of course. Next, you must decide how to address the incompatibilities. One strategy is to restrict yourself to using only those features that are universally supported (or easily emulated) by all of the browsers that you choose to support.

## 13.4.1 Compatibility Libraries

## 13.4.2 Graded Browser Support

>Graded browser support is a testing and QA technique pioneered and championed by Yahoo! that brings some sanity to the otherwise unmanageable proliferation of vendor/ version/OS  browser  variants.  Briefly,  graded  browser  support  involves  choosing “A-grade” browsers that receive full support and testing and identifying “C-grade” browsers that are not powerful enough.

## 13.4.3 Feature Testing

Feature testing (sometimes called capability testing) is a powerful technique for coping with incompatibilities.

If the desired feature is not supported on the current platform, either do not use it on that platform or provide alternative code that works on all platforms.

## 13.4.5 Browser Testing - many tester clients available online

Note that **client sniffing** can be done on the server side as well, with the web server choosing what JavaScript code to send based on how the browser identifies itself in its User-Agent header.

User Agent Examples: `https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent`

## 13.5 Accessibility

Blind users may use a form of “assistive technology” known as a screen reader to convert written words to spoken words. Some screen readers are JavaScript-aware, and others work best when JavaScript is turned off. If you design a website that requires JavaScript to display its information, you ux desexclude the users of these screen readers. 

A cardinal rule of JavaScript accessibility is to design
your code so that the web page on which it is used will still function (at least in some
form) with the JavaScript interpreter turned off.

JavaScript Interpreter: `https://en.wikipedia.org/wiki/JavaScript_engine`

Web browsers allow keyboard traversal and activation of UI elements with-in a web page, and your JavaScript code should as well. 


## 13.6 Security

Browser vendors have worked hard to balance two competing goals:

+ Defining powerful client-side APIs to enable useful web applications.
* Preventing malicious code from reading or altering your data, compromising your privacy, scamming you, or wasting your time.

## 13.6.1 What JavaScript Can't Do

Web Sockets: `https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API`

> Web browsers’ first line of defense against malicious code is that they simply do not
support certain capabilities. For example, client-side JavaScript does not provide any
way to write or delete arbitrary files or list arbitrary directories on the client computer.
This  means  a  JavaScript  program  cannot  delete  data  or  plant  viruses.

> Similarly, client-side JavaScript does not have any general-purpose networking capa-
bilities; general-purpose Internet clients and servers cannot be written in client-side JavaScript

> Browsers’ second line of defense against malicious code is that they impose restrictions
on the use of certain features that they do support. The following are some restricted
features

+ To prevent pop-up abuse by advertisers, most browsers restrict this feature so that it can happen only in response to a user-initiated event, such as a mouse click
*  JavaScript program can close browser windows that it opened itself, but it is not
allowed to close other windows without user confirmation
* The value property of HTML FileUpload elements cannot be set. If this property could be set, a script could set it to any desired filename and cause the form to upload the contents of any specified file (such as a password file) to the server.
* A script cannot read the content of documents loaded from different servers than the document that contains the script. Similarly, a script cannot register event listeners on documents from different servers. This prevents scripts from snooping on the user’s input (such as the keystrokes that constitute a password entry) to other pages. This restriction is known as the same-origin policy and is described in more detail in the next section.

>Note that this is not a definitive list of client-side JavaScript restrictions. Different
browsers have different security policies and may implement different API restrictions.
Some browsers may also allow restrictions to be strengthened or weakened through
user preferences

## 13.6.2 The Same-Origin Policy

> It  typically  comes  into  play  when  a  web  page  includes /<iframe/> elements or opens other browser windows. In this case, the same-origin policy governs the interactions of JavaScript code in one window or frame with the content of other windows and frames. Specifically, a script can read only the properties of windows and documents that have the same origin as the document that contains the script

> The *origin* of a document is defined as the protocol, host, and port of the URL from which the document was loaded,  And a document loaded with the http: protocol has a different origin than one loaded with the https: protocol, even if they come from the same web server

> It is important to understand that the origin of the script itself is not relevant to the same-origin policy
> The same-origin policy applies to practically all the properties of the Document object, You should consider any window or frame that contains a document from another server to be off-limits to your scripts. If your script opened the window, your script can close it, but it cannot “look inside” the window in any way
>The same-origin policy is necessary to prevent scripts from stealing proprietary information. Without this restriction, a malicious script (loaded through a firewall into a browser on a secure corporate intranet) might open an empty window, hoping to trick the user into using that window to browse files on the intranet
> To support multidomain websites of this sort, you can use the domain property of the Document object. By default, the domain property contains the host-name of the server from which the document was loaded. You can set this property, but only to a string that is a valid domain suffix of itself. Thus, if domain is originally the string “home.example.com”, you can set it to the string “example.com”, but not to “home.example” or “ample.com”. Furthermore, the domain value must have at least one dot in it; you cannot set it to “com” or any other top-level domain.

## 13.6.2.1 Relaxing the same-origin policy

> In some circumstances, the same-origin policy is too restrictive. This section describes three techniques for relaxing it. The same-origin policy poses problems for large websites that use multiple subdomains.
>To support multidomain websites of this sort, you can use the  domain property of the Document object. By default, the  domain  property contains the host- name of the server from which the document was loaded. You can set this property, but only to a string that is a valid domain suffix of itself. Thus, if  domain  is originally the string “home.example.com”, you can set it to the string “example.com”, but not to “home.example” or “ample.com”. Furthermore, the  domain  value must have at least one dot in it; you cannot set it to “com” or any other top-level domain. 

> If two windows (or frames) contain scripts that set  domain  to the same value, the same- origin policy is relaxed for these two windows, and each window can interact with the  other.

> 