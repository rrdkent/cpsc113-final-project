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


## New Objectives:

Basic Functionality

The first three tests are simple in nature, and test your ability to write basic endpoint functionality.

A GET request to '/' produces an HTTP 200 response with content 'Hello World!' somewhere
A GET request to ''/robots.txt' produces a HTTP 200 response with Content-Type 'text/plain; charset=utf-8'"
A GET request to '/mrw/class-is-done.gif' 301 or 302 redirects to the reaction gif of your choice
Blog Post Functionality

Next, we want to mimic some functionality of a very minimal blog. We'll have you develop a few functions for creating a post, displaying a post, and deleting posts. Note that there is no need to have user accounts!

The way that users can view posts is by visiting /posts/:id, where :id starts at 0 and increments as a new post is created. So the first post created can be accessed via /posts/0 and the second can be accessed via /posts/1. If a post does not exist yet, visiting this page should return a 404 error.

New posts can be created from a form on the homepage.

The test script first checks to make sure that no posts exist. It then tests to make sure that new posts can be created and that the content can be rendered. Finally it tries to delete the created posts and tests that functionality.

The specific tests for the blog are as follows:

There should be no posts at first (checking '/posts/0' returns 404 status)
There should be no posts at first (checking '/posts/1' returns 404 status)
A POST request to '/posts/new' with form data containing a 'text' field creates a new post with id 0 and redirects to '/posts/0'
A GET request to /posts/0 contains the post content that was submitted and status code 200
A POST request to '/posts/new' with form data containing a 'text' field creates a new post with id 1 and redirects to '/posts/1
A GET request to /posts/1 contains the post content that was submitted and status code 200
A DELETE request to '/posts/delete' deletes all existing posts and responses w/ 200 status code
There should be no more posts (checking '/posts/0' returns 404 status)


## OLD Objectives from Kyle's E-mail:

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