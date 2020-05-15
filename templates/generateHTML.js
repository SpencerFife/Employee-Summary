"use strict";

function teamCard(teamMember) {
  return `
    <div class="card">
      <div class="card-header bg-primary" style="color: whitesmoke">
      ${teamMember.getName()} ${teamMember.getRole()}  
      </div>
      <div class="card-body">
          <div class="card" style="width: 18rem;">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${teamMember.getId()}</li>
                <li class="list-group-item">${teamMember.getEmail()}</li>
                <li class="list-group-item">${getDetails(teamMember)}</li>
              </ul>
            </div>
      </div>
    </div>
    `;
}
function getDetails(teamMember) {
  switch (teamMember.getRole()) {
    case "Manager":
      return teamMember.getOfficeNumber();
    case "Intern":
      return teamMember.getSchool();
    default:
      return teamMember.getGithub();
  }
}
module.exports = function generateHtml(teamMembers) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          header {
              background-color: red;
              color: whitesmoke;
              height: 60px;
              font-size: 25px;
              margin-bottom: 50px;
  
          }
        </style>
      </head>
      
      <body>
        <div class="container">
        <header class="d-flex justify-content-center align-items-center">My Team</header>
          <div class="row d-flex flex-wrap justify-content-around">
                ${teamMembers.map((teamMember) => teamCard(teamMember))}
          </div>
        </div>
      </body>
    
    </html>`;
};
