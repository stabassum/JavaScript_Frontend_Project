document.addEventListener("DOMContentLoaded", () => {
    getVolunteers();
    Volunteer.newVolunteerForm();
})

function toggleHideDisplay(element) {
    if ( element.style.diplay === "none") {
        element.style.diplay = "block"
    } else {
        element.style.display = "none"
    }
}