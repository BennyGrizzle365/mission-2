# Mission two 
## Mission Management
1. Git strategy
2. Feature Management
3. Definition of done
4. Resouces used

### 1. Git Strategy
A git repo has been created, simply named mission-02.

In this project the main branch wont be used for creating and pushing features and completed items.

Any work that is pushed to the mission-02 repo will be identifiable by its unique user story number and branch name.

example:

 _001-Create-NavBar-Section_

 _002-Create-NavBar-Buttons_

 At the beginning of a new work item, a new branch will need to be created off the latest main branch. This will ensure the local version is always upto date with main branch  which should prevent conflicts arising.

### 2. Feature Management

The development of the application will be based on user stories. The user stories are mostly fixed, however if things are making the scope creep then the user story will be reassessed.

Once a user story has beenn completed then it can be marked as done.

Every user story will have a unique id that will be used as a part of pushing changes to the git repo main branch.

### 3. Definition of done
The dod is basically when the user story is completed. there wont be any testing done other than user testing.

### 4. Resouces used / interesting findings 
[datatables](https://datatables.net/manual/)

[markdown](https://www.markdownguide.org/basic-syntax/)

To complete this project there are a number of resource that were used. poutline below.

Basically with the drama I had at the beginning with git I just decided to work with master branch directly for now.
us-001_initial_layout
Create the layout for the page to include a navigation bar at the top and body which is formated without any margins

us-002_bus_route_objects
Create a list of bus routes. the bus routes are matched to a zone.

```js
const busRoutes = [
  {
    routeId: 1,
    routeName: "Downtown Loop",
    stops: [
      {
        stopName: "Central Station",
        times: ["08:00 AM", "",...],
      },
      { 
        stopName: "Main Street",
        times: ["08:10 AM",""...] },
    ],
  },
]

us-003_Bus_objects
create the bus timetable