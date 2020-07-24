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

    }

}

// Retreive all volunteers

function getVolunteers(){
    fetch("http://localhost:3000/volunteers")
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
    })
}

// Edit volunteer form

function editVolunteer(){

}

// Delete a volunteer

function deleteVolunteer(){
    let volunteerID = this.parentElement.getAttribute('data-volunteer-id')

    fetch()
}

function addVolunteersClickListeners(){

}

