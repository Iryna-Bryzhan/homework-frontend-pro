function Student(name, surname, birthDate, assessments = []) {
  this.name = name,
  this.surname = surname,
  this.birthDate = birthDate,
  this.assessments = assessments,
  this.visiting = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
  const totalYear = new Date().getFullYear();
  return totalYear - this.birthDate;
};

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.assessments.length; i++) {
    sum += this.assessments[i];
  }
  const average = sum / this.assessments.length;
  return average;
};

Student.prototype.present = function () {
  for (let i = 0; i < this.visiting.length; i++) {
    if (this.visiting[i] === null) {
      this.visiting[i] = true;
      break;
    }
  }
  return this;
};

Student.prototype.absent = function () {
  for (let i = 0; i < this.visiting.length; i++) {
    if (this.visiting[i] === null) {
      this.visiting[i] = false;
      break;
    }
  }
  return this;
};

Student.prototype.summary = function () {
  const visitTrue = this.visiting.filter((el) => el === true);
  const averageVisit = visitTrue.length / this.visiting.length;
  const averageAssessments = this.getAverage()

  if (averageAssessments > 90 && averageVisit > 0.9) {
    console.log("Молодець!");
  } else if (averageAssessments > 90 || averageVisit > 0.9) {
    console.log("Добре, але можна краще!");
  } else {
    console.log("Редиска!");
  }
};

const student1 = new Student("Kate", "Ivanova", 1997, [90, 100, 95, 100, 85]);
const student2 = new Student("Ivan", "Petrov", 1996, [90, 85, 95, 100, 85]);

student1.absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().absent()


student2.absent().absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().absent()

console.log(student1);
console.log(student1.getAge());
console.log(student1.getAverage());
student1.summary();

console.log(student2);
console.log(student2.getAge());
console.log(student2.getAverage());
student2.summary();



class Student2{
  constructor(name, surname, birthDate, assessments = []) {
  this.name = name,
  this.surname = surname,
  this.birthDate = birthDate,
  this.assessments = assessments,
  this.visiting = new Array(25).fill(null);
}


getAge() {
  const totalYear = new Date().getFullYear();
  return totalYear - this.birthDate;
};

getAverage() {
  let sum = 0;
  for (let i = 0; i < this.assessments.length; i++) {
    sum += this.assessments[i];
  }
  const average = sum / this.assessments.length;
  return average;
};

present() {
  for (let i = 0; i < this.visiting.length; i++) {
    if (this.visiting[i] === null) {
      this.visiting[i] = true;
      break;
    }
  }
  return this;
};

absent() {
  for (let i = 0; i < this.visiting.length; i++) {
    if (this.visiting[i] === null) {
      this.visiting[i] = false;
      break;
    }
  }
  return this;
};

summary () {
  const visitTrue = this.visiting.filter((el) => el === true);
  const averageVisit = visitTrue.length / this.visiting.length;
  const averageAssessments = this.getAverage()

  if (averageAssessments > 90 && averageVisit > 0.9) {
    console.log("Молодець!");
  } else if (averageAssessments > 90 || averageVisit > 0.9) {
    console.log("Добре, але можна краще!");
  } else {
    console.log("Редиска!");
  }
};
}

const student3 = new Student2("Vika", "Ivanova", 2000, [95, 100, 95, 100, 85]);
const student4 = new Student2("Victor", "Petrov", 1991, [90, 85, 75, 100, 85]);

student3.absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().absent()


student4.absent().absent().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().present().absent()

console.log(student3);
console.log(student3.getAge());
console.log(student3.getAverage());
student3.summary();

console.log(student4);
console.log(student4.getAge());
console.log(student4.getAverage());
student4.summary();

