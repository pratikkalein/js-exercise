let Person = function (name, age) {
  let person = {};

  person.name = name;
  person.age = age;

  person.greeting = function () {
    return "Hello I am " + person.name + ". I am " + person.age + " years old.";
  };
  return person;
};

function createAndGreetPerson() {
  const name = document.getElementById("personName").value;
  const age = document.getElementById("personAge").value;

  if (!name || age <= 0) {
    document.getElementById("greetingMessage").textContent =
      "Please enter a valid name and age.";
    return;
  }

  const person = Person(name, age);
  document.getElementById("greetingMessage").textContent = person.greeting();
}
