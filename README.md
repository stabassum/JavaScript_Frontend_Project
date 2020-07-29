# Front-End Portfolio Project
This project is a Single Page Application (SPA) that uses a Rails API back-end and a JavaScript + HTML + CSS front-end per assignment specifications.

## Getting Started
To run this app locally, you will need to have [Rails](https://rubyonrails.org/) installed.  Once you do, navigate to the Rails back end located at: `./front-end-portfolio-project/back-end` and run the following commands in terminal:
1. `$ rails db: migrate` to run the ActiveRecord migrations.
2. `$ rails db: seed` to seed the database.
3. `$ rails s` to boot up the Rails server.
With the Rails back end API server running, open a browser and navigate it to the following file location:
`front-end-portfolio-project/front-end/index.html` and the front end should automatically populate with data from the server.  The page should look similiar to the drawing below entitled: *Application Features*

## About This App
This app is designed for volunteers to register for projects in an emergency response or direct impact on community positively during the COVID-19 times of diffculty.


## What Exactly Is This Application Supposed to Accomplish for the User!?
Once the app is started, the user is directed to the home page where they will see a form on the top of the screen to add/create a new volunteer for the COVID pandemic.

Below the volunteer form is displayed the users who are currently registered to volunteer for covid.

1. Beneath each volunteer are a list of projects they are registered to volunteer for. If a volunteer is not registered for any projects, then there is no list of projects displayed beneath their volunteer information.

2. A user can create a new volunteer and delete a volunteer

3. A project that a volunteer registers (create) for can be deleted or edited.


Functionalities:
Minimum 3 Ajax Calls from Create, Read, Delete, and Edit 

Volunteer -> Create (Optional)
Volunteer -> Delete
Volunteer -> Read
Project -> Create
Project -> Delete
Project -> Edit (Optional)

(May delete one of the options above such as : Volunteer -> Create)


## Project File Structure
```
front-end-portfolio-project
├── back-end
│   ├── app
│   │   ├── controllers
│   │   │   ├── volunteers_controller.rb
│   │   │   └── projects_controller.rb
│   │   ├── models
│   │   │   ├──volunteer.rb
│   │   │   └──project.rb
│   │   └── views
│   └── db
│       └── migrate 
│           ├── 20200225220758_create_volunteers.rb
│           └──20200225221159_create_projects.rb
│
├── front-end
│   ├── src
│   │   ├── images
│   │   ├── fetches.js
│   │   ├── index.js
│   │   └── objects.js
│   ├── index.html  
│   └── styles.css
└── README.md
