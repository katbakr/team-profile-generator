const Employee = require("../lib/employee");

test('should create employee object', () => {
    const employee = new Employee('Sam', 420, 'sammayo@gmail.com');

    expect(employee.name).toEqual('Sam');
    expect(employee.id).toEqual(420);

})