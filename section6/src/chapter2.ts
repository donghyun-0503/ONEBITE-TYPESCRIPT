// 접근 제어자
// access modifier
// -> public private protected

class Employee {
  // 필드

  constructor(
    public name: string,
    private age: number,
    protected position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  func() {
    // this.age;
    this.position;
  }
}

const employee = new Employee("이정환", 27, "developer");
employee.name = "홍길동";
// employee.age = 3;
// employee.position = "디자이너";

console.log(employee);
