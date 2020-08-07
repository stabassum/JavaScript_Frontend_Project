// // project objects

// const BASE_URL = "http://localhost:3000"
// const PROJECTS_URL = `${BASE_URL}/projects`

// class Project {
//     constructor(data){
//         this.title = data.title
//         this.description = data.description
//         this.date = data.date
//         this.location = data.location
//         this.time = data.time
//         this.volunteer_id = data.volunteer_id
//     }
// }

// function addProject() {     
//     const project = {
//         title: document.getElementById('title').value,
//         description: document.getElementById('project-description').value,
//         volunteer_id: document.getElementById('project-volunteerId').value 
//     }

//     fetch(PROJECTS_URL, {
//         method: 'POST',
//         body: JSON.stringify(project),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//     .then(resp => resp.json())
//     .then(project => {
//          clearVolunteersHtml()
//          getVolunteers()
//       });
// }

// function renderProjectFormFields(volunteerId) {
//     return `<label><strong>Title: </strong></label><br/>
//     <input type="text" id="title"><br/>
//     <input type="hidden" id="project-volunteerId" value="${volunteerId}">
//     <label><strong>Description:   </strong></label><br/>
//     <input type="text" id="project-description"><br/>  
//     <input type="submit" value="Submit" style="color:white;background-color:orange">
//     `  
// }

// function renderNewProjectForm() {
//     let volunteerId = this.getAttribute('id')
//     this.style.display = "none"
//     let projectsHtml = this.parentElement
//     let projectForm = document.createElement('form')
//     projectForm.setAttribute("onsubmit", "addEvent(); return false;")
//     projectForm.innerHTML = renderProjectFormFields(volunteerId)
//     projectsHtml.appendChild(eventForm)
// }

// function addProjectsClickListeners() {
//     document.querySelectorAll('.view-projects-volunteer-button').forEach(element => {
//         element.addEventListener('click', viewVolunteerProjects)
//     })

//     document.querySelectorAll('.add-project-button').forEach(element => {
//         element.addProjectListener('click', renderNewProjectForm)
//     })
    
//     document.querySelectorAll('.edit-project-button').forEach(element => {
//         element.addProjectListener("click", editProject)
//     })

//     document.querySelectorAll('.delete-project-button').forEach(element => {
//         element.addProjectListener("click", deleteProject)
//     })

// }

// function deleteProject() {
//     let projectId = this.parentElement.getAttribute('project-id')

//     fetch(`http://localhost:3000/projects/${projectId}`, {
//         method: 'DELETE'
//       })
//       .then(resp => resp.json())
//       .then(json => {
//           let selectedProject = document.querySelector(`.card[project-id="${projectId}"]`) 
//           selectedProject.remove()
//       })
// }

// function updateProject() { 
//     let projectId = this.project.target.parentElement.getAttribute('project-id')     
//     let projectElement = document.querySelector(`.card[project-id="${projectId}"]`)
        
//      let project = {
//          title: projectElement.querySelector('#title').value, 
//          description: projectElement.querySelector('#project-description').value, 
//          volunteer_id: projectElement.querySelector('#project-volunteerId').value,
//      }
       
//     fetch(`http://localhost:3000/projects/${projectId}`, {
//         method: 'PATCH',
//         body: JSON.stringify(project),
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
//     })
//     .then(resp => resp.json() )
//     .then(data => {
//          clearVolunteersHtml()
//          getVolunteers()  
//          Volunteer.newVolunteerForm()
//     })
// }

// function renderProjectForm (volunteerId) {
//     let projectForm = document.createElement('form')
//     projectForm.setAttribute("onsubmit", "updateProject(); return false;")
//     projectForm.innerHTML = renderProjectFormFields(volunteerId)
//     return projecttForm 
// }

// function populateProjectForm(data) { 
//     let project = new Project(data)
//     let projectForm = renderProjectForm(project.dog_id)
    
//     projectForm.querySelector('#title').value = project.title 
//     projectForm.querySelector('#project-description').value = project.description 
//     projectForm.querySelector('#project-volunteerId').value = project.volunteer_id 
//     document.querySelector(`.card[project-id="${project.id}"]`).appendChild(eventForm)
// }

// function editProject() { 
//     toggleHideDisplay(this)

//     let projecttId = this.parentElement.getAttribute('project-id')
//     console.log("projectId", projectId)
//     fetch(`http://localhost:3000/projects/${projectId}`)
//     .then(resp => resp.json())
//     .then(data => {

//         populateProjectForm(data)
 
//     })

// }

// function viewVolunteerProjects() {
//     Volunteer.newVolunteerForm()
//     let volunteerSelectedHtml = this.parentElement.querySelector('.projects')
//     toggleHideDisplay(volunteerSelectedHtml)
// }