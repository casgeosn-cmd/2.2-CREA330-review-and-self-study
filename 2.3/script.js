newFunction();

function newFunction() {
    const allStudents = [
        'A',
        'B-',
        1,
        4,
        5,
        'D',
        'F',
        2,
        'A-',
        'B',
        'C',
        'C-'
    ];

    const studentsWhoPass = []; const PASSING_SCORE = 3;
    const PASSING_GRADE = 'C';

    for (let student of allStudents) {
        if (student >= PASSING_SCORE) {
            studentsWhoPass.push(student);
        }
        else if (student <= PASSING_GRADE) {
            studentsWhoPass.push(student);
        }
    }
}
