# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Volunteer.create(name: 'Maryam Khan', age:'38', contact: 'm.khan@gmail.com', skills: 'First Aid, Registerd Nurse, Emergency Medicine')

Project.create(title: 'Nursing Home Volunteer', description: 'Help clean up nuring home thoroughly', date: '07/24/2020', location: "New York, NY", time: "9:00AM - 12:00PM", volunteer_id: 1)
Project.create(title: 'Pre-School Volunteer', description: 'Clean up mess of pre-schoolers', date: '07/28/2020', location: "Albany, NY", time: "1:00PM - 3:00PM", volunteer_id: 1)

Volunteer.create(name: 'Asif Akter', age:'32', contact: 'a.akter@gmail.com', skills: 'EMT Liscenced, Home Health Aide, First Aid, ER Volunteer Experience')

Project.create(title: 'After-School Volunteer', description: 'Help instructors run activities', date: '08/01/2020', location: "Buffalo, NY", time: "3:00PM - 6:00PM", volunteer_id: 2)
Project.create(title: 'ER Volunteer', description: 'Help clean stock room and sanitize hospital floors', date: '08/04/2020', location: "New York, NY", time: "9:00AM - 12:00PM", volunteer_id: 2)