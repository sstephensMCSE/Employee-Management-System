# 



# Project Title : Employee Management System

This weeks assignment is built entirely from scratch. It has a database with three tables, and javascript node engine that runs the application.  

## Installation
install node.js, run npm init, run npm i.

I use npm install to install the modules inquirer, mysql

<img src="https://github.com/sstephensMCSE/template-engine-employee-summary/blob/main/pics/npm-install.jpg" width="500" title="NPM-Install">

## Project Overview
   This is reminiscent of an old school Employee Management System. The challenge was to create an full-stack application from scratch. 
   Since the project is not hosted, I will include screenshots, and GIF style images to demonstrate the result.

## Psuedo Code

* **department**:

  * **id** - INT PRIMARY KEY
  * **name** - VARCHAR(30) to hold department name

* **role**:

  * **id** - INT PRIMARY KEY
  * **title** -  VARCHAR(30) to hold role title
  * **salary** -  DECIMAL to hold role salary
  * **department_id** -  INT to hold reference to department role belongs to

* **employee**:

  * **id** - INT PRIMARY KEY
  * **first_name** - VARCHAR(30) to hold employee first name
  * **last_name** - VARCHAR(30) to hold employee last name
  * **role_id** - INT to hold reference to role employee has
  * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

Build arrays to represent the selection options:
  * Add departments, roles, employees
  * View departments, roles, employees
  * Update employee roles


Use inquirer to interface with the user actions. 
  

## Technology
- Node JS
- inquirer
- mysql

## Demonstration

<img src="https://github.com/sstephensMCSE/template-engine-employee-summary/blob/main/pics/team-app.jpg" width="500" title="team-app">

<img src="https://github.com/sstephensMCSE/template-engine-employee-summary/blob/main/pics/output.jpg" width="800" title="output">
