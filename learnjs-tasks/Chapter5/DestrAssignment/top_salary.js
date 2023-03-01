function topSalary(salaries) {
  let max = 0;
  let nameMax = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      nameMax = name;
    }
  }

  return nameMax;
}