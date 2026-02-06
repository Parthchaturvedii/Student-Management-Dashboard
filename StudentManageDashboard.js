let students = [
    { id: 1 , name: 'rahul sharma' , course: 'BTech CSE'},
    { id: 2 , name: 'Ananya verma' , course: 'BCA'}
];

function renderstudents() {
    const table = document.getElementById('studentTable');
    table.innerHTML = '';
    students.forEach((s,index) => {
        table.innerHTML += `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.course}</td>
            <td><button class="delete" onclick="deletestudent(${index})">Delete</button></td>
        </tr>`;
    });
    document.getElementById('totalStudents').innerText = students.length;
}

function addstudent() {
    const name = prompt('Enter student name');
    const course = prompt('Enter course');
    if ( name && course) {
        students.push({ id: students.length +1 , name , course});
        renderstudents();
    }
}

function deletestudent(index) {
    students.splice(index , 1); 
        renderstudents();
}


renderstudents();