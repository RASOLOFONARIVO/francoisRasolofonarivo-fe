-- staff_management.dbo.staff definition

-- Drop table

-- DROP TABLE staff_management.dbo.staff;

CREATE TABLE staff_management.dbo.staff (
	id int IDENTITY(1,1) NOT NULL,
	firstname  nvarchar(100) DEFAULT NULL NULL,
	lastname  nvarchar(100) DEFAULT NULL NULL,
	date_of_birth  nvarchar(100) DEFAULT NULL NULL,
	address nvarchar(100) DEFAULT NULL NULL,
	nic nvarchar(100) DEFAULT NULL NULL,
	phone_number int DEFAULT NULL NULL,
	CONSTRAINT PK_staff PRIMARY KEY (id)
);