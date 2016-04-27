## How to run this code:

Run with 

    node index.jsb92
    
or, should you want to run it with reolading automagically
    
    nodemon index.js
    








Objectives:

* Write a web application in a language of your choice.
* It should listen for HTTP requests
* A GET request to the url `/foo` should respond with an HTTP response with:
  - content type "text/plain"
  - status 200
  - content that contains the string "woot"
* A GET request to `/mrw/semester-ends.gif` should 302 redirect to `https://i.imgur.com/pXjrQ.gif`
* A GET request to `/` should respond with  status 200 and content-type text/html
  - The page should have *valid* HTML5
  - It should include a form with id="new-chat" and method='POST', a `textarea` input, and a submit button
  - Submitting the form should create a chat and "reload" the current page
  - The page should show a list of submitted chats, each in an HTML element with class="chat"
* All the code required to run you app should be under version control using git
  - You should push your git repo to git.yale.edu and make it shared with the following users: klj39 jdh93 yk363 jsb92 hz246

  - One of the git commit messages should have the string "woot" in it
  - It must have a README showing how to install an run it
* The application should be deployed to Heroku
* You should submit your git.yale.edu repo URL and your Heroku URL