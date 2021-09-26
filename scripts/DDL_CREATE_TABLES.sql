USE HASS
GO


IF not exists (SELECT * FROM sysobjects WHERE NAME='stateProduct' and xtype='U')
	BEGIN
		CREATE TABLE productStatus (
			consecutive INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
			state VARCHAR(30) NOT NULL,
			createAt DATETIME,
			updateAt DATETIME,
		)
	END
    
GO

IF not exists (SELECT * FROM sysobjects WHERE NAME='productInformation' and xtype='U')
	BEGIN
		CREATE TABLE productInformation (
			consecutive INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
			holder VARCHAR(100) NOT NULL,
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


