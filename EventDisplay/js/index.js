// Sample student data
const students = [
    { name: 'John Doe', birthday: '2005-04-03', image: './images/1679289.jpg' },
    { name: 'Jane Smith', birthday: '2005-04-03', image: './images/1679289.jpg' },
    { name: 'lewis', birthday: '2005-04-03', image: './images/1679289.jpg' },
    { name: 'maxi', birthday: '2005-04-03', image: './images/6730119.jpg' },
    { name: 'tim', birthday: '2005-04-03', image: './images/6741680.jpg' },
    { name: 'stark', birthday: '2005-04-03', image: './images/monkeyman.jpg' },
    // Add more student data as needed
];

// Function to display students with upcoming birthdays
function displayStudents() {
    const today = new Date();
    const upcomingStudents = students.filter(student => {
        const studentBirthday = new Date(student.birthday);
        return studentBirthday.getMonth() === today.getMonth() && studentBirthday.getDate() === today.getDate();
    });

    const container = document.getElementById('studentContainer');
    container.innerHTML = '';

    upcomingStudents.forEach(student => {
        const card = document.createElement('div');
        card.classList.add('student-card');
        card.innerHTML = `
            <img src="${student.image}" alt="${student.name}" class="student-image">
            <p>${student.name}</p>
            <p>Birthday: ${student.birthday}</p>
        `;
        container.appendChild(card);
    });
}

// Call displayStudents on page load
displayStudents();
