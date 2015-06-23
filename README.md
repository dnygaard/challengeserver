ChallengeServer - a little MEAN challenge resultpage
====================================================================

This package was created as a very simple one-page competition resultboard with a full MEAN stack. The intended competition is over, but this project is made public for historic and documentational purposes. Do feel free to clone and change for your own use.

A live version of [ChallengeServer](http://cserver-systek.rhcloud.com/) is hosted on [Red Hat's Open Hybrid Cloud Application Platform](https://www.openshift.com/). Please test and prod at it, but leave it as you found it.
Note that if the server is not used and/or maintained regularly, it will probably be hibernated.


Basic Setup
-----------

ChallengeServer is a tiny NodeJs server that uses the Express Web framework with AngularJs and MongoDB in the backend. 
The single page has three functions:
 * Add a new Contestant with Name, Email and a decimal number representing time spent competing, i.e. a two-decimal real number.
 * Delete an existing Contestant in the list.
 * List contestants in order of least time spent competing first.
 
The project uses MongoJs instead of Mongoose in the mid-layer.  

No time was used to make the application and server secure or fault-tolerant. Modularization would be a natural next development step. 
The project is a hack for one-time use and a starting point for future prototyping projects.


Sources and inspiration, and obstacles
--------------------------------------

Most of the code in this project has been collected from tutorials and webcasts such as Jose Annunziato's talk/videoed class [Web Dev - 4550](https://www.youtube.com/watch?v=34951nhtQco)

Some of the tutorials and webcasts has also been the source of frustration as keeping up with Web Development libraries is working with a constant moving target - many libraries change often and are not always backward compatible, i.e. the tutorials are often outdated....

