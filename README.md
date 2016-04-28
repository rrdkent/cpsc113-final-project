## How to run this code:

Run with 

    node index.jsb92
    
or, should you want to run it with reolading automagically
    
    nodemon index.js
    
## How to Install this code:

Set up the environment.  Make sure you have Node.js, Express, NPM, and nodemon installed.

Clone this git repo (or fork it, if you feel like an adventure): https://github.com/rrdkent/cpsc113-final-project.git

Run (See above)
    nodemon index.js

Voila!





## Objectives:

* Write a web application in a language of your choice: My choice is Javascript, Node.js, Express

* It should listen for HTTP requests: I think I did this?
    
    
* A GET request to the url `/foo` should respond with an HTTP response with:
  - content type "text/plain"
  - status 200
  - content that contains the string "woot"
  - DONE!
 

* A GET request to `/mrw/semester-ends.gif` should 302 redirect to `https://i.imgur.com/pXjrQ.gif` - DONE!


* A GET request to `/` should respond with  status 200 and content-type text/html
  - The page should have *valid* HTML5
  - It should include a form with id="new-chat" and method='POST', a `textarea` input, and a submit button
  - Submitting the form should create a chat and "reload" the current page
  - The page should show a list of submitted chats, each in an HTML element with class="chat"
 
* All the code required to run you app should be under version control using git
  - You should push your git repo to git.yale.edu and make it shared with the following users: klj39 jdh93 yk363 jsb92 hz246

  - One of the git commit messages should have the string "woot" in it: Done: https://github.com/rrdkent/cpsc113-final-project/commit/818e27b0a2bbc9d6abdb1d59dc49d3de8ae853b7
    

  - It must have a README showing how to install and run it: Done


* The application should be deployed to Heroku
* 
* You should submit your git.yale.edu repo URL and your Heroku URL