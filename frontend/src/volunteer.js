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
        `<input type="submit" value="Add New Volunteer" style="color:white;background-color:#689e7b">
        </form>
        <br/>`
    }

    static editVolunteerForm(){

    }

}