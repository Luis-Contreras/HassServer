USE HASS
GO

IF not exists (SELECT * FROM sysobjects WHERE NAME='productInformation' and xtype='U')
	BEGIN
		CREATE TABLE productInformation (
			consecutive INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
			holder VARCHAR(100) NOT NULL,
			state VARCHAR(30) NOT NULL,
			weight VARCHAR(50),
			createAt DATETIME NOT NULL,
			price VARCHAR(100) NOT NULL,
			priceUnit VARCHAR(100),
			createBy VARCHAR(100),
			address VARCHAR(100),
			updateAt DATETIME,
		)
	END
    
GO

IF not exists (SELECT * FROM sysobjects WHERE NAME='users' and xtype='U')
	BEGIN
		CREATE TABLE users (
			id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
			username VARCHAR(50) NOT NULL,
			password VARCHAR(60) NOT NULL,
			role VARCHAR(50) NOT NULL,
			createAt DATETIME,
			updateAt DATETIME,
		)
	END
    
GO



