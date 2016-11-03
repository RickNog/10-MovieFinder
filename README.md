# 10-MovieFinder

In this project, I created an app that allows movie nerds to search for their favorite movies/tv shows.

Contains Angular JS, Bootstrap and the OMDB API (http://omdbapi.com).

##Mockup:
<img src="http://i.imgur.com/ebody6P.png" /> 

## Tasks
1. Made use of the following AngularJS features to build this application.
  - Configured routing using the `angular-ui-router` package to create two seperate states. One for the Search view, and one for the Detail view.
  - Created a `factory` and inject a `$http` service to call the OMDB API.
  - Created a `controller` and factory I created above **DID NOT USE `$scope`**.
  
## Requirements
* Must be able to search for movies
* Must show results of the search for the movies
* Must be able to view more information for a particular movie

## References
* https://scotch.io/tutorials/angular-routing-using-ui-router
* https://docs.angularjs.org/api/ng/service/$http
* http://www.sitepoint.com/api-calls-angularjs-http-service/
