function greetPeople(greeting = "Hello", ...names) {
    return names.map(name => `${greeting}, ${name}`)
  }

const greetings = greetPeople("Hi", "Alice", "Bob", "Charlie");
console.log(greetings); 

const defaultGreetings = greetPeople(undefined, "Alice", "Bob");
console.log(defaultGreetings);