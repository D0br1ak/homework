
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
  { name: "Алексей", age: 27, isAdmin: false  },
  
  { name: "Сергей", age: 22, isAdmin: false  },
  
  { name: "Анна", age: 29, isAdmin: true  },
  
  { name: "Александр", age: 34, isAdmin: true  },
  
  { name: "Семён", age: 28, isAdmin: false  },
  
  { name: "Пётр", age: 21, isAdmin: false  },
  ]
  users.push({}) 
for (let i = 0; i < users.length; i++){
  console.log(users[i]) 
}   
