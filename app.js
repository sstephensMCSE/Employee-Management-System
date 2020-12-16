var mysql = require("mysql");
const inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "employee_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});



function viewDepartments() {
    var sqlStr = "SELECT * FROM department";
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;
        console.table(result)        
        mainMenu();
    })
}

function viewEmployees() {
    var sqlStr ="SELECT employee.first_name, employee.last_name, role.title, role.salary,";
    sqlStr += "department.name AS Department FROM employee JOIN role ON employee.role_id ";
    sqlStr += "= role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;";          
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;
        console.table(result)
        mainMenu();
    })
}

function viewRoles() {
    var sqlStr = "SELECT * FROM role";
    connection.query(sqlStr, function (err, result) {
        if (err) throw err;
        console.table(result)
        mainMenu();
    })
}

// MainMenu
function mainMenu() {
    // Main inquirer prompt

    inquirer.prompt([
    {
    type: "list",
    message: "What would you like to do?",
    name: "choice",
    choices: [
              "View Departments",             
              "View Roles", 
              "View Employees",
              "Add Department",
              "Add Role",
              "Add Employee",
              "Delete Department",
              "Delete Role",
              "Delete Employee"
            ]
    }
]).then(function(val) {
        switch (val.choice) {
            case "View Departments":
                viewDepartments();
            break;
            case "View Roles":
                viewRoles();              
            break;                                  
            case "View Employees":
                viewEmployees();
            break;
            case "Add Department":
                addDepartment();
            break;
            case "Add Role":
                addRole();
            break;
            case "Add Employee":
                addEmployee();
            break;
            case "Delete Department":
                // todo Delete Department
                viewDepartments();
            break;
            case "Delete Role":
                // todo Delete Role
                viewRoles();
              break;      
            case "Delete Employee":
                // todo Delete Employee
                viewEmployees();
              break;
            }
    })
}

// Add Department
function addDepartment() { 
    inquirer.prompt([
        {
          name: "name",
          type: "input",
          message: "Enter the name of the new department"
        }
    ]).then(function(result) {
        var query = connection.query(
            "INSERT INTO department SET ? ",
            {
              name: result.name            
            },
            function(err) {
                if (err) throw err
                console.table(result);
                console.log("Successfully added new department.")
                mainMenu();
            }
        )
    })
  }

// Add Role
function addRole() { 
    connection.query("SELECT role.title AS Title, role.salary AS Salary FROM role",   function(err, res) {
      inquirer.prompt([
          {
            name: "Title",
            type: "input",
            message: "Enter the Title:"
          },
          {
            name: "Salary",
            type: "input",
            message: "Enter the Salary:"
          },
          {
            name: "Department_ID",
            type: "input",
            message: "Enter the Department ID:"
          }
      ]).then(function(result) {
          connection.query(
              "INSERT INTO role SET ?",
              {
                title: result.Title,
                salary: result.Salary,
                department_id: result.Department_ID
              },
              function(err) {
                  if (err) throw err
                  console.table(result);
                  console.log("Successfully added new role.")
                  mainMenu();
              }
          )
  
      });
    });
}

function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter employees first name:",
          name: "First"
        },
        {
          type: "input",
          message: "Enter employees last name:",
          name: "Last"
        },
        {
          type: "input",
          message: "Enter employees Role ID:",
          name: "roleID"
        },
        {
          type: "input",
          message: "Enter employee Manager ID:",
          name: "managerID"
        }
      ])
      .then(function(result) {        
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: result.First,
                last_name: result.Last,
                role_id: result.roleID,
                manager_id: result.managerID                              
            },
            function(err) {
                if (err) throw err;
                console.table(result);
                mainMenu();
            });
      });
  }


// Start the app
mainMenu();