INSERT into department (name)
VALUES ("Management");
INSERT into department (name)
VALUES ("Accounting");
INSERT into department (name)
VALUES ("Quality Control");
INSERT into department (name)
VALUES ("Reception");
INSERT into department (name)
VALUES ("Sales");
INSERT into department (name)
VALUES ("Supplier Relations");
INSERT into department (name)
VALUES ("Customer Service");


INSERT into role (title, salary, department_id)
VALUES ("Regional Manager", 65000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Assistant Regional Manager", 55000, 1);
INSERT into role (title, salary, department_id)
VALUES ("Senior Accountant", 55000, 2);
INSERT into role (title, salary, department_id)
VALUES ("Accountant", 50000, 2);
INSERT into role (title, salary, department_id)
VALUES ("Quality Assurance Rep", 50000, 3);
INSERT into role (title, salary, department_id)
VALUES ("Receptionist", 45000, 4);
INSERT into role (title, salary, department_id)
VALUES ("Regional Sales Director", 55000, 5);
INSERT into role (title, salary, department_id)
VALUES ("Sales Rep", 45000, 5);
INSERT into role (title, salary, department_id)
VALUES ("Supplier Relations", 40000, 6);
INSERT into role (title, salary, department_id)
VALUES ("Customer Service Rep", 40000, 7);


INSERT into employee (first_name, last_name, role_id)
values ("Michael", "Scott", 1); 
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Dwight", "Schrute", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Jim", "Halpert", 2, 1);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Angela", "Martin", 3, 1);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Kevin", "Malone", 4, 4);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Oscar", "Martinez", 4, 4);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Creed", "Bratton", 5, 1);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Pam", "Beesly", 6, 1);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Andy", "Bernard", 7, 3);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Phyllis", "Lapin", 8, 9);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Stanley", "Hudson", 8, 9);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Meredith", "Palmer", 9, 1);
INSERT into employee (first_name, last_name, role_id, manager_id)
values ("Kelly", "Kapoor", 10, 1);
