function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype.name = function() {
  return (this.firstName + " " + this.lastName);
};

Student.prototype.enroll = function(course) {
  var present = false;
  for (var i = 0; i < this.courses.length; i++) {
    if (course === this.courses[i] || course.conflictsWith(this.courses[i])) {
      present = true;
    }
  };

  if (present === false) {
    this.courses.push(course);
    course.students.push(this);
  }

  return course;
};

Student.prototype.courseLoad = function() {
  var load = {};

  for (var i = 0; i < this.courses.length; i++) {
    load[this.courses[i].department] = (load[this.courses[i].department] || 0);
    load[this.courses[i].department] += this.courses[i].credits;
  };

  return load;
};

function Course(courseName, department, credits, days, block) {
  this.students = [];
  this.courseName = courseName;
  this.department =  department;
  this.credits = credits;
  this.days = days;
  this.block = block;
};

Course.prototype.add_student = function(student) {
  student.enroll(this);

  return student;
};

Course.prototype.conflictsWith = function(course) {
  var conflict = false;

  if (this.block === course.block) {
    for (var i = 0; i < this.days.length; i++) {
      for (var j = 0; j < course.days.length; j++) {
        if (this.days[i] === course.days[j]) {
          conflict = true;
        }
      }
    }
  }

  return conflict;
};
