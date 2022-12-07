const templateManager = function (manager) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <h5 class="card-subtitle mb-2 text-muted">${manager.name}</h5>
      <p class="id">ID: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</p>
      <p class="office">Office Number: ${manager.office}</p>
    </div>
  </div> 
  `
}

const templateEngineer = function (engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <h5 class="card-subtitle mb-2 text-muted">${engineer.name}</h5>
      <p class="id">ID: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</p>
      <p class="github">GitHub: ${engineer.github}</p>
    </div>
  </div>     
`
}

const templateIntern = function (intern) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <h5 class="card-subtitle mb-2 text-muted">${intern.name}</h5>
      <p class="id">ID: ${intern.id}</p>
      <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</p>
      <p class="school">School: ${intern.school}</p>
    </div>
  </div>     
`
}

generateHTML = (data) => {

    employeeArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole



        if (role === 'manager') {
            const managerData = templateManager(employee)
            employeeArray.push(managerData);
        }

        if (role === 'engineer') {
            const engineerData = templateengineer(employee)
            employeeArray.push(engineerData);
        }

        if (role === 'intern') {
            const internData = templateintern(employee)
            employeeArray.push(internData);
        }
    }

    const employeeData = employeeArray.join('')

    const generateTeam = templateTeamPage(employeeData);
    return generateTeam;
}

const templateTeamPage = function (employeeData) {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <header>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">My Team</span>
      </nav>
   </header> 
<div class="cards">
${employeeData}
</div>

    </body>
    </html> 
    `;
}

module.exports = generateHTML;