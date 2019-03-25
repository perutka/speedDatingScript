function Student(name, companies, priorityCompany) {
  this.name = name;
  this.companies = companies;
  this.priorityCompany = priorityCompany;
}

function myFunction() {
  Logger.log("OMG");
  var app = SpreadsheetApp;
  var ss = app.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  var entries = sheet.getRange("B2:D3").getValues().map(makeStudent);
  Logger.log(entries);
  
  var allCompanies = [].concat.apply([], entries.map(getCompanies)).filter(onlyUnique);
  Logger.log(allCompanies);
  
}

function getCompanies(student) {
  return student.companies;
}

function makeStudent(row) {
  return new Student(row[0], row[1].split(", "), row[2]);
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

