describe('Проверка на позитивный кейс авторизации', function () {

    it('Позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/'); // Найти сайт
         cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
         cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
         cy.get('#loginButton').click();// Нажать войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible'); //Проверить нужный текст
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик

        })
        it('Проверка логики восстановления пароля', function () {
            cy.visit('https://login.qa.studio/'); // Найти сайт
            cy.get('#forgotEmailButton').click();//Нажат  «Забыли пароль»
            cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввести любой имейл
            cy.get('#restoreEmailButton').click();// нажать на кнопку отпаравить код
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail').should('be.visible'); // Проверка текста
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
            
        })
        it('Проверка на негативный кейс авторизации не правильный пароль', function () {
            cy.visit('https://login.qa.studio/'); // Найти сайт
            cy.get('#mail').type('german@dolnikov.ru'); // Ввести правильный логин
            cy.get('#pass').type('iLoveqastudio2'); // Ввести не правильный пароль
            cy.get('#loginButton').click();// Нажать войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible'); //Проверить нужный текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
          
            
        })
        it('Проверка на негативный кейс авторизации не правильный логин', function () {
            cy.visit('https://login.qa.studio/'); // Найти сайт
            cy.get('#mail').type('german@dolniko.ru'); // Ввести не правильный логин
            cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
            cy.get('#loginButton').click();// Нажать войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет').should('be.visible'); //Проверить нужный текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
          
            
        })
        it('Проверка на негативный кейс валидации', function () {
            cy.visit('https://login.qa.studio/'); // Найти сайт
            cy.get('#mail').type('germandolniko.ru'); // Ввести логин без @
            cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
            cy.get('#loginButton').click();// Нажать войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации').should('be.visible'); //Проверить, что получаем текст с ошибкой
           
          
            
        })
        it('Проверка на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio/'); // Найти сайт
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввести логин GerMan@Dolnikov.ru
            cy.get('#pass').type('iLoveqastudio1'); // Ввести правильный пароль
            cy.get('#loginButton').click();// Нажать войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно').should('be.visible'); //Проверить нужный текст
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //наличие кнопки крестик
          
            
        })
      
   
 }) 

