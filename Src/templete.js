const generateTeam = (team) => {
  let html = ` <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
      crossorigin="anonymous"
    />
  </head>
  <body style="background-color: lightsteelblue;margin-bottom: 20px">
    <div class="container" style="text-align: center;color: #2c1c47">
      <h1>Team Generator</h1>
    </div>
    <div class="container">
      <div class="row">
    `;
  html += `<div class="card" style="width: 18rem; margin-inline: 10px">
          <div class="card-body">
            <h5 class="card-title">${team[0].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p class="card-text">${team[0].id}</p>
            <a href="mailto:${team[0].email}" class="card-link">${team[0].email}</a>
            <p class="card-text">${team[0].officeNumber}</p>
          </div>
        </div>`;
  for (let i = 1; i < team.length; i++) {
    let employee = team[i];
    if (employee.github === undefined) {
      html += `<div class="card" style="width: 18rem; margin-inline: 10px">
          <div class="card-body">
            <h5 class="card-title">${team[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="card-text">${team[i].id}</p>
            <a href="mailto:${team[i].email}" class="card-link">${team[i].email}</a>
            <p class="card-text">${team[i].school}</p>
          </div>
        </div>`;
    } else {
      html += `<div class="card" style="width: 18rem; margin-inline: 10px">
          <div class="card-body">
            <h5 class="card-title">${team[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="card-text">${team[i].id}</p>
            <a href="mailto:${team[i].email}" class="card-link">${team[i].email}</a>
            <p class="card-text">${team[i].github}</p>
          </div>
        </div>`;
    }
  }

  html += `</div>
  </div>
  </body>
</html>`;
  return html;
};

module.exports = { generateTeam };
