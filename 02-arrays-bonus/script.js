const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(teachers)

const reversdTeachers = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  reversdTeachers.push(teachers[i]);
}
console.log(reversdTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(name => name.length >= 5);
console.log(longNames)

const lonNames = [];
for (let i = 0; i < teachers.length; i++) {
  const curTeacher = teachers[i];
 if (curTeacher.length >= 5){
  longNames.push(curTeacher);
 }
}
console.log(lonNames);

// 3. Rimuovi 'Ed' dall'array teachers
const noEd = teachers.filter(name => name !== 'Ed');
console.log(noEd)



// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent =  teachers.includes('Fabio');
console.log(isFabioPresent)


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(', ');
console.log(teachersString)

