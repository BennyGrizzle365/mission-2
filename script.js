//Mission 2 javascript script.js

document.addEventListener("DOMContentLoaded", function () {
  populateDropDown();
});

//These are fake data objects generated by ChatGPT
const busRoutes = [
  {
    routeId: 1,
    routeName: "Downtown Loop",
    stops: [
      {
        stopName: "Central Station",
        times: ["08:00 AM", "09:00 AM", "10:00 AM"],
      },
      { stopName: "Main Street", times: ["08:10 AM", "09:10 AM", "10:10 AM"] },
      { stopName: "Park Avenue", times: ["08:20 AM", "09:20 AM", "10:20 AM"] },
      { stopName: "5th Avenue", times: ["08:30 AM", "09:30 AM", "10:30 AM"] },
      { stopName: "Riverfront", times: ["08:40 AM", "09:40 AM", "10:40 AM"] },
      {
        stopName: "Central Station",
        times: ["08:50 AM", "09:50 AM", "10:50 AM"],
      },
    ],
  },
  {
    routeId: 2,
    routeName: "University Express",
    stops: [
      {
        stopName: "Central Station",
        times: ["07:30 AM", "08:30 AM", "09:30 AM"],
      },
      { stopName: "Elm Street", times: ["07:40 AM", "08:40 AM", "09:40 AM"] },
      {
        stopName: "University Gate",
        times: ["07:50 AM", "08:50 AM", "09:50 AM"],
      },
      {
        stopName: "Campus Center",
        times: ["08:00 AM", "09:00 AM", "10:00 AM"],
      },
      { stopName: "Library", times: ["08:10 AM", "09:10 AM", "10:10 AM"] },
    ],
  },
  {
    routeId: 3,
    routeName: "Suburban Connector",
    stops: [
      {
        stopName: "Central Station",
        times: ["06:45 AM", "08:45 AM", "10:45 AM"],
      },
      { stopName: "Oakwood Park", times: ["07:00 AM", "09:00 AM", "11:00 AM"] },
      { stopName: "Pine Lane", times: ["07:15 AM", "09:15 AM", "11:15 AM"] },
      { stopName: "Maple Drive", times: ["07:30 AM", "09:30 AM", "11:30 AM"] },
      {
        stopName: "Lakeside Mall",
        times: ["07:45 AM", "09:45 AM", "11:45 AM"],
      },
    ],
  },
  {
    routeId: 4,
    routeName: "Coastal Route",
    stops: [
      { stopName: "Harbor View", times: ["08:00 AM", "09:00 AM", "10:00 AM"] },
      {
        stopName: "Seaside Boulevard",
        times: ["08:15 AM", "09:15 AM", "10:15 AM"],
      },
      { stopName: "Beachfront", times: ["08:30 AM", "09:30 AM", "10:30 AM"] },
      {
        stopName: "Lighthouse Point",
        times: ["08:45 AM", "09:45 AM", "10:45 AM"],
      },
      {
        stopName: "Fisherman’s Wharf",
        times: ["09:00 AM", "10:00 AM", "11:00 AM"],
      },
    ],
  },
  {
    routeId: 5,
    routeName: "Airport Shuttle",
    stops: [
      {
        stopName: "Central Station",
        times: ["05:30 AM", "06:30 AM", "07:30 AM"],
      },
      {
        stopName: "Downtown Hotel",
        times: ["05:45 AM", "06:45 AM", "07:45 AM"],
      },
      { stopName: "City Hall", times: ["06:00 AM", "07:00 AM", "08:00 AM"] },
      {
        stopName: "Airport Terminal 1",
        times: ["06:15 AM", "07:15 AM", "08:15 AM"],
      },
      {
        stopName: "Airport Terminal 2",
        times: ["06:30 AM", "07:30 AM", "08:30 AM"],
      },
    ],
  },
  {
    routeId: 6,
    routeName: "Uptown Express",
    stops: [
      {
        stopName: "Central Station",
        times: ["07:00 AM", "08:00 AM", "09:00 AM"],
      },
      { stopName: "High Street", times: ["07:15 AM", "08:15 AM", "09:15 AM"] },
      { stopName: "Uptown Plaza", times: ["07:30 AM", "08:30 AM", "09:30 AM"] },
      { stopName: "North Market", times: ["07:45 AM", "08:45 AM", "09:45 AM"] },
      { stopName: "Ridgeway", times: ["08:00 AM", "09:00 AM", "10:00 AM"] },
    ],
  },
  {
    routeId: 7,
    routeName: "City Circle",
    stops: [
      {
        stopName: "Central Station",
        times: ["09:00 AM", "10:00 AM", "11:00 AM"],
      },
      { stopName: "East End", times: ["09:15 AM", "10:15 AM", "11:15 AM"] },
      { stopName: "South Gate", times: ["09:30 AM", "10:30 AM", "11:30 AM"] },
      { stopName: "West End", times: ["09:45 AM", "10:45 AM", "11:45 AM"] },
      { stopName: "North Point", times: ["10:00 AM", "11:00 AM", "12:00 PM"] },
    ],
  },
  {
    routeId: 8,
    routeName: "Industrial Loop",
    stops: [
      {
        stopName: "Central Station",
        times: ["06:00 AM", "07:00 AM", "08:00 AM"],
      },
      { stopName: "Factory Row", times: ["06:15 AM", "07:15 AM", "08:15 AM"] },
      { stopName: "Tech Park", times: ["06:30 AM", "07:30 AM", "08:30 AM"] },
      {
        stopName: "Logistics Hub",
        times: ["06:45 AM", "07:45 AM", "08:45 AM"],
      },
      {
        stopName: "Central Station",
        times: ["07:00 AM", "08:00 AM", "09:00 AM"],
      },
    ],
  },
  {
    routeId: 9,
    routeName: "Shopping Shuttle",
    stops: [
      {
        stopName: "Central Station",
        times: ["10:00 AM", "11:00 AM", "12:00 PM"],
      },
      {
        stopName: "Mall Entrance",
        times: ["10:15 AM", "11:15 AM", "12:15 PM"],
      },
      { stopName: "Retail Park", times: ["10:30 AM", "11:30 AM", "12:30 PM"] },
      {
        stopName: "Outlet Center",
        times: ["10:45 AM", "11:45 AM", "12:45 PM"],
      },
      {
        stopName: "Central Station",
        times: ["11:00 AM", "12:00 PM", "01:00 PM"],
      },
    ],
  },
  {
    routeId: 10,
    routeName: "Night Owl",
    stops: [
      {
        stopName: "Central Station",
        times: ["11:00 PM", "12:00 AM", "01:00 AM"],
      },
      { stopName: "Night Market", times: ["11:15 PM", "12:15 AM", "01:15 AM"] },
      {
        stopName: "Club District",
        times: ["11:30 PM", "12:30 AM", "01:30 AM"],
      },
      { stopName: "24/7 Diner", times: ["11:45 PM", "12:45 AM", "01:45 AM"] },
      {
        stopName: "Central Station",
        times: ["12:00 AM", "01:00 AM", "02:00 AM"],
      },
    ],
  },
];

function populateDropDown() {
  const selectElement = document.getElementById('routes');

  if (!selectElement) {
    console.error('The select element with ID "routes" was not found.');
    return;
  }
  const placeHolderOption = document.createElement(`option`);
  placeHolderOption.value ="";
  placeHolderOption.disabled=true;
  placeHolderOption.selected=true;
  placeHolderOption.textContent = `SELECT ROUTE`;
  selectElement.appendChild(placeHolderOption);

  for (let i = 0; i < busRoutes.length; i++) {
    const route = busRoutes[i];
    // console.log(`${route.routeId} ${route.routeName}`);
    const option = document.createElement(`option`);
    option.value = route.routeId;
    option.textContent = route.routeName;
    selectElement.appendChild(option);
  }
}
