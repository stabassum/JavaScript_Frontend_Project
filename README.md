# JavaScript_Frontend_Project

## JavaScript Single Page Application (SPA)

#### FRONT-END PORTFOLIO PROJECT

Getting Started

About This App
To start the application, cd (change directory) to the “back-end” folder and run the following:

rails db:migrate
rails db:seed
rails s

The above three commands will do the following sequentially:

Create the database table with the associated columns
Seed the database table with data 
Start the server  

Once you have started the rails server, go to the front-end folder and “double-click” index.html
You should land on the applications homepage. 

What this app allows users to do:

>> Once the app is started, the user is directed to the home page where they will see a form on the top of the screen to add/create a new volunteer for the COVID pandemic.

>> Below the volunteer form is displayed the users who are currently registered to volunteer for covid.

>> Beneath each volunteer are a list of projects they are registered to volunteer for. If a volunteer is not registered for any projects, then there is no list of projects displayed beneath their volunteer information.

>> A user can create a new volunteer and delete a volunteer

>> A project that a volunteer registers (create) for can be deleted or edited.


Functionalities:
Minimum 3 Ajax Calls from Create, Read, Delete, and Edit 

Volunteer -> Create (Optional)
Volunteer -> Delete
Volunteer -> Read
Project -> Create
Project -> Delete
Project -> Edit (Optional)

(May delete one of the options above such as : Volunteer -> Create)


Name: COVID VOLUNTEERS Single Page Application

Models:

volunteer.rb
has_many :projects

name
age
contact
skills

project.rb
belongs_to :volunteer

title
description
date
location
time
volunteer_id

What is the Application Supposed to Accomplish for the Users

Project File Structure

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