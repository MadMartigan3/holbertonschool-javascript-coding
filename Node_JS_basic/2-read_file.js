const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    
    const lines = data.split('\n');
    const students = lines.filter(line => line.trim() !== '');
    
    if (students.length === 0) {
      console.log('Nombre d\'étudiants : 0');
      return;
    }

    const header = students.shift();
    
    const studentCount = students.length;
    console.log(`Nombre d'étudiants : ${studentCount}`);
    
    const fields = {};

    students.forEach(student => {
      const [firstName, lastName, age, field] = student.split(',');
      
      if (!fields[field]) {
        fields[field] = [];
      }
      
      fields[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Nombre d'étudiants en ${field} : ${names.length}. Liste : ${names.join(', ')}`);
    }

  } catch (error) {
    throw new Error('Impossible de charger la base de données');
  }
}

module.exports = countStudents;
