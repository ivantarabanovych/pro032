const user = {
    name: 'John Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node.js']
  };
  
  function extractUserInfo({name, age, skills}) {
    return `${name} is ${age} years old and known ${skills[1]}`
  }
  
  const userInfo = extractUserInfo(user);
  console.log(userInfo); 