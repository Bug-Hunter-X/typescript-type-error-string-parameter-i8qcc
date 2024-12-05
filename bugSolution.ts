function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(', ');
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane User", "John Doe"];
console.log(greeter(user));

let singleUser = "Jane User";
console.log(greeter(singleUser));