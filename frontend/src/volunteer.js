// volunteer objects will be created

const volunteerFormFields =
        `<label><strong>Name: </strong></label><br/>
        <input type="text" id="name"><br/>
        <input type="hidden" id="volunteerId">

        <label><strong>Age:   </strong></label><br/>
        <input type="integer" id="age"><br/>  
        
        <label>Contact:   </strong></label><br/>
        <input type="text" id="contact"><br/>  
       
        <label><strong>Skills: </strong></label><br/>
        <textarea id="skills" rows="4" cols="25"></textarea><br/>`


class Volunteer{
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.age = data.age
        this.contact = data.contact
        this.skills = data.skills
    }

    static newVolunteerForm(){
        let newVolunteerFormDiv = document.getElementById('volunteer-form')
        newVolunteerFormDiv.innerHTML = 
        ` <form onsubmit="createVolunteer(); return false;">` + 
        volunteerFormFields + 
        `<input type="submit" value="Add New Volunteer" style="color:black;background-color:white">
        </form>
        <br/>`
    }

    static editVolunteerForm(){
        let editVolunteerFormDiv = document.getElementById('volunteer-form')
        editVolunteerFormDiv.innerHTML = `
        <form onsubmit="updateVolunteer(); return false;">` + 
        volunteerFormFields + 
        `<input type="submit" value="Update Info">
        </form>
        <br/>`
    }

}

// Retreive all volunteers
// AJAX request to fetch volunteers

function getVolunteers(){
    const volunteersURL = "http://localhost:3000/volunteers"
    fetch(volunteersURL)
    .then(resp => resp.json())
    .then(data => {
        renderVolunteersHtml(data)
        addVolunteersClickListeners()
        addEventsClickListeners()
    })
}

// Create new volunteers

function createVolunteer(){
    const volunteer = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        contact: document.getElementById('contact').value,
        skills: document.getElementById('skills').value,
    }

    fetch("http://localhost:3000/volunteers", {
        method: 'POST',
        body: JSON.stringify(volunteer),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    .then(resp => resp.json())
    .then(volunteer => {
        clearVolunteersHtml()
        getVolunteers()
        Volunteer.newVolunteerForm()
    });
}

// Click on volunteer's name to view/hide additional info

function showMoreInfo(){
    console.log("this", this)
    console.log(this.parentElement.querySelector('.additional-info'))
    toggleHideDisplay(this.parentElement.querySelector('.additional-info'))
}

// Edit volunteer form

function updateVolunteer(){

}

// Delete a volunteer

function deleteVolunteer(){
    let volunteerID = this.parentElement.getAttribute('data-volunteer-id')

    fetch()
}

function addVolunteersClickListeners(){
    document.querySelectorAll('.volunteer-name').forEach(element => {
        element.addEventListener("click", showMoreInfo)
    })

    document.querySelectorAll('.edit-volunteer-button').forEach(element => {
        element.addEventListener("click", editVolunteer)
    })

    document.querySelectorAll('.delete-volunteer-button').forEach(element => {
        element.addEventListener("click", deleteVolunteer)
    })

    document.querySelector('.sort-button').addEventListener("click", sortVolunteers)
}

function clearVolunteersHtml() {
    let volunteersIndex = document.getElementById("volunteers-list")
    volunteersIndex.innerHTML = ''
}

//////////////////////

Volunteer.prototype.volunteerProjectsHtml = function () {

	let volunteerProjects = this.projects.map(project => {
    let date = parseDate(project.updated_at)

        return (`
        <div class="card" project-id="${project.id}" >
        <i>Last update: </i>${date} <br/>
        <strong>Title: </strong>${project.title} <br/>
        <strong>Description: </strong>${project.description} <br/>
        
        <button class="edit-project-button" style="background-color:orange">Edit Record</button>  
        <button class="delete-project-button" style="background-color:red">Delete Record</button>  
        </div>
		`)
    }).join('')

    return (volunteerProjects)
}

Volunteer.prototype.volunteerHtml = function () {
     
    return `<div class="card" data-volunteer-id="${this.id}">
            <button class="view-projects-volunteer-button" style="background-color:blue">View Record</button>  
            <button class="edit-volunteer-button" style="background-color:orange">Edit Info</button>  
            <button class="delete-volunteer-button" style="background-color:red">Delete Volunteer</button>
            </br></br>
            <strong class="volunteer-name">${this.name}</strong> <br/>
            <strong>Age: </strong>${this.age} years old <br/>
            <strong>Contact: </strong>${this.contact} <br/>
            
            <div class="additional-info" style="display:none">     
            <strong>Skills: </strong>${this.skills}<br/>
            </div>
        </div>` 
}

Volunteer.prototype.addProjectButton = function () {

    let addNewProjectButton = document.createElement('button')
    addNewProjectButton.className = 'add-project-button'
    addNewProjectButton.id = this.id 
    addNewProjectButton.innerText = "Add Project"
    addNewProjectButton.style.backgroundColor = "green"
     
    return addNewProjectButton

}

function renderVolunteersHtml(data) {
    let volunteersIndex = document.getElementById("volunteers-list")

    data.forEach((volunteer) => {
  
        let projectsIndexHtml = document.createElement('div')
        projectsIndexHtml.className = 'projects'
        projectsIndexHtml.style.display = 'none'
        let emptyProjectsHtml = projectsIndexHtml
          

        let newVolunteer = new Volunteer(volunteer)
        projectsIndexHtml.innerHTML = newVolunteer.volunteerProjectsHtml()     
   
        volunteersIndex.innerHTML += newVolunteer.volunteerHtml() 
   
        let selectedVolunteerHtml = document.querySelector(`.card[data-volunteer-id="${newVolunteer.id}"]`)           
        selectedVolunteerHtml.append(projectsIndexHtml.childElementCount ? projectsIndexHtml : emptyProjectsHtml )
        selectedVolunteerHtml.querySelector('.projects').appendChild(newVolunteer.addProjectButton())

    });

}