## Day 16 of Internship at SurfBoard:


Today we just had two sessions since we are getting a long holiday from tomorrow. Koushik taught us more about how functions work and helped us understand the scope of variables within a function. I also understood that the way these functions work are kind of similar in all programming languages but just the syntax may vary. The overall idea of how it works is what we need to clearly grasp in order to be able to write good understandable code that works. He also talked about using proper data type definitions for defining values such as String or number. He also helped us understand functional parameters such as named parameters and positional parameters. These parameters within a function act according to the reference by name or the reference by position within a function scope. It is important to understand the working of functions and the scope of a function since it can be used in other programming languages. Koushik used the example of Dart, which is an open source language developed in Google with the aim of allowing developers to use an object oriented language with static type analysis. It allows to have function declaration and a variable must be declared before it is used. Dart uses the `var` or `const` keyword to achieve the same. The syntax for declaring a variable is as given below  : 
`var name = 'josh';` 
All variables in dart store a reference to the value rather than containing the value. Although other languages may have their own way of defining functions, their syntax is as follows:

```
return_type function_name (parameters)
 {
  function body
}
```

A function generally have two states which is :

Declaration
Creation

Parameter declarations are optional. Functions that take no parameters are written without parentheses. Koushik also showed us how a compiler goes through a program and its execution of each line and functions which is called an execution stack. After a certain function is finished in the stack it is deleted from the stack allowing for other functions to take its memory.


 Rexelia took a session on how to `<script>` tags in HTML as an internal script as well as an external script through reference. Using the script tags we can use javascript functions to execute onclick events and having functions that do something based on the user's inputs and actions. 

Internal Script looks like this within a `<body>` tag:
```
<script>
function hello(){
    console.log(“Hello”);
</script>
```

And an external is referenced within a `<body>` tag like this:

```
<script src=”./main.js”></script>
```
And inside the main.js, we can have our javascript functions or our whole code. This is the one that is commonly used when making a website to have interactivity and event handlers from users inputs as well as to show alerts on such inputs. We can also use javascript frameworks and libraries to write more efficient code and they are all called using script tag reference. Usually these libraries have a CDN version available on the internet which is lightweight and does not take too much memory instead of importing the whole library every time.


