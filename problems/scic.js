const students = [
    {name: 'Sayem Bhuiyan', email: 'sayem@gamil.com', avg: 56, fiftyParcentage: true},
    {name: 'Akash Islam', email: 'akash@gamil.com', avg: 54, fiftyParcentage: true},
    {name: 'Shajib Sarker', email: 'shajib@gamil.com', avg: 57, fiftyParcentage: false},
    {name: 'Tipu Ahsan', email: 'tipu@gamil.com', avg: 34, fiftyParcentage: false},
    {name: 'Siam Ahamed', email: 'siam@gamil.com', avg: 50, fiftyParcentage: true},
    {name: 'Asif Mia', email: 'asif@gamil.com', avg: 36, fiftyParcentage: false},
    {name: 'Rana Mia', email: 'ranamia@gamil.com', avg: 24, fiftyParcentage: false}
]


// find the students who are eligible for the scic
// they must get the above of 50 and fiftyPercentage should be true;

const eligibleStudents = students.filter((student) => student.avg >= 50 && student.fiftyParcentage ===true)

const eligibleStudentsEmail = eligibleStudents.map(student => student.email).join(', ');
console.log(eligibleStudentsEmail);