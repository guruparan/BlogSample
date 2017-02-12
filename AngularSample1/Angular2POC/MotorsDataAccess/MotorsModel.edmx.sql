
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 11/20/2016 17:09:26
-- Generated from EDMX file: D:\gUrU\Projects\Self\VS 2013\Angular2POC\MotorsDataAccess\MotorsModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [MyWorksDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------


-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Brands'
CREATE TABLE [dbo].[Brands] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Country] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Models'
CREATE TABLE [dbo].[Models] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Name] nvarchar(max)  NOT NULL,
    [Year] smallint  NOT NULL,
    [Brand_Id] int  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'Brands'
ALTER TABLE [dbo].[Brands]
ADD CONSTRAINT [PK_Brands]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Models'
ALTER TABLE [dbo].[Models]
ADD CONSTRAINT [PK_Models]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [Brand_Id] in table 'Models'
ALTER TABLE [dbo].[Models]
ADD CONSTRAINT [FK_BrandModel]
    FOREIGN KEY ([Brand_Id])
    REFERENCES [dbo].[Brands]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_BrandModel'
CREATE INDEX [IX_FK_BrandModel]
ON [dbo].[Models]
    ([Brand_Id]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------