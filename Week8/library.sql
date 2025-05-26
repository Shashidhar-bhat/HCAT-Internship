create database library;

use library;

create table library
(
book_id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
author VARCHAR(255) NOT NULL,
publication_year INT,
genre VARCHAR(255)
);

select * from library;

ALTER TABLE library
ADD COLUMN price decimal(10, 2);

ALTER TABLE library
ADD COLUMN bookname varchar(30);

ALTER TABLE library
RENAME COLUMN bookname to Name;

select * from Library;
ALTER TABLE library DROP COLUMN Name;

TRUNCATE table library;

create table office
(
office_id INT PRIMARY KEY AUTO_INCREMENT,
office_name VARCHAR(255) NOT NULL,
location VARCHAR(255) NOT NULL,
employee_count INT
);

INSERT INTO office (office_id, office_name, location, employee_count) VALUES
(1,'Head Office', 'City A', 100),
(2,'Branch Office 1', 'City B', 50),
(3,'Branch Office 2', 'City C', 40),
(4,'Regional Office', 'City D', 30),
(5,'Field Office 1', 'City E', 20),
(6,'Field Office 2', 'City F', 10),
(7,'Sub Office', 'City G', 5),
(8,'Main Office', 'City H', 200);
drop table office;

select * from Office;

update office
set location = 'City E'
where office_name = 'Branch Office 1';

SET SQL_SAFE_UPDATE  = 0;


CREATE TABLE bank_accounts
(
account_number int,
username VARCHAR(25),
password varchar(25),
balance int
);

insert into bank_accounts values
(101, 'Neha', 'neha123', 50000),
(102, 'Priya', 'priya123', 30000),
(103, 'Ravi', 'ravi123', 10000),
(104, 'Naresh', 'naresh123', 100000);

select * from bank_accounts;

SET AUTOCOMMIT = 0;

CREATE VIEW balanceDetails
as
(select avg(balance), account_number as Account
from bank_accounts
group by account_number);


select * from balanceDetails


Delimiter //
create procedure  getBank4()
BEGIN
	select * from bank_accounts;
end//

Delimiter ;


call getBank4();

create database Employee;

use Employee;

CREATE TABLE Employee (
    E_Id INT PRIMARY KEY,
    E_name VARCHAR(50),
    Salary INT,
    DepartmentName VARCHAR(50)
);

Drop table Employee;


INSERT INTO Employee (E_Id, E_name, Salary, DepartmentName)
VALUES
(1, 'Amit', 54000, 'HR'),
(2, 'Sachin', 67000, 'Finance'),
(3, 'Mohit', 81000, 'Development'),
(4, 'Rohit', 48000, 'HR'),
(5, 'Sumit', 52000, 'Development');

DELIMITER //

select DepartmentName, MAX(salary)
from employee
group by e_id;

CREATE PROCEDURE SelectAllEmployees()
BEGIN
    SELECT * FROM Employee;
END//

DELIMITER ;

call SelectAllEmployees();

DELIMITER //

CREATE PROCEDURE UpdateSalary(IN emp_id INT, IN new_salary INT)
BEGIN
    UPDATE Employee
    SET Salary = new_salary
    WHERE E_Id = emp_id;
END//

DELIMITER ;

call UpdateSalary(3, 85000 );

select * from Employee;

DELIMITER //

CREATE PROCEDURE GetDetails(
    IN emp_id INT, 
    OUT emp_name VARCHAR(50), 
    OUT emp_salary INT, 
    OUT emp_department VARCHAR(50)
)
BEGIN
    SELECT E_name, Salary, DepartmentName
    INTO emp_name, emp_salary, emp_department
    FROM Employee
    WHERE E_Id = emp_id;
END//

DELIMITER ;


SET @name = '';
SET @salary = 0;
SET @department = '';

CALL GetDetails(3, @name, @salary, @department);

SELECT @name AS EmployeeName, @salary AS Salary, @department AS DepartmentName;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255)
);

