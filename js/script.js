
 const firstName = 'Олег'
  const age = 22
  const profession = 'Начинающий веб-разработчик'
 const country = 'Беларусь'
  const city = 'Гомель'
console.log( firstName, age, profession, country,city);

function chooseName( name ){
  return `Привет ${name}!`
}
const result =  chooseName( 'Олег')
console.log(result)

const users = [
  { name: "Алексей", role: "user" },
  { name: "Мария", role: "admin" },
  { name: "Павел", role: "user" },
  { name: "Елена", role: "user" },
  { name: "Дмитрий", role: "user" },
  { name: "Виталий", role: "admin" }]
  let usersCount = 0;

for (let user of users) {
  if (user.role !== "admin") {
    usersCount++;
  }
}
console.log(`Количество простых пользователей: ${usersCount}`);