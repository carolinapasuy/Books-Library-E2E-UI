import { DashboardPage,BookPage } from "../page/index"
let dashboardPage:DashboardPage;
let bookPage:BookPage;

describe("Verifying add book process for Library dashboard", () => {
    let nametoUpdate: string | number | string[] | undefined;
    let authortoUpdate: string | number | string[] | undefined;

    beforeEach(() => {
        cy.clearCookies();
        cy.visit("http://localhost:4200/dashboard");
        dashboardPage= new DashboardPage();
        bookPage= new BookPage();
        dashboardPage.addBook();
        bookPage.saveInfoBook("El mapa de los anhelos", "Alice Kellen");
        bookPage.saveBook().click();

        dashboardPage.changePaginationSize("50 / page");

        dashboardPage.clickEditBook("El mapa de los anhelos")
    });

    describe("Negative cases", () => { 
         beforeEach(() => {   
            bookPage.clearInputs(); 
        }); 

        it("BUG: A book should not be edited with an empty space name and author.", () => {
            bookPage.updateInfoBook(" ", " ");
            bookPage.saveBook().should('be.disabled');
        });

        it("BUG: A book should not be edited with an empty space author.", () => {          
            bookPage.updateInfoBook("El mapa de los anhelos", " ");
            bookPage.saveBook().should('be.disabled');
        });

        it("BUG: A book should not be edited with an empty space name", () => {           
            bookPage.updateInfoBook(" ", "Alice Kellen");
            bookPage.saveBook().should('be.disabled');
        });

        afterEach(() => {
            dashboardPage.verifyBookInDashboard("El mapa de los anhelos")
            dashboardPage.deleteButton();
        });
        
    });

    describe("Positive cases", () => {
        beforeEach(() => {
            cy.get('#name').invoke('val').then((name) => {
                nametoUpdate = name;
            });
            cy.get('#author').invoke('val').then((author) => {
                authortoUpdate = author;
            });
        });

        it("The name and author book should be edited.", () => {
            bookPage.updateInfoBook("El mapa de los besos", "Alice Swift");
            bookPage.saveBook().should('be.enabled');
            bookPage.saveBook().click();

            dashboardPage.verifyBookTitleAndAuthor("El mapa de los besos", "Alice Swift");
            dashboardPage.getRowsTable()
            .should("not.have.text", nametoUpdate)

        });

        after(() => {
            dashboardPage.verifyBookInDashboard("El mapa de los besos")
            dashboardPage.deleteButton();
        });

        it("The name's book should be edited.", () => {
            bookPage.updateInfoBook("23 otoños antes de ti");
            bookPage.saveBook().should('be.enabled');
            bookPage.saveBook().click();

            dashboardPage.getRowsTable()
            .should("not.have.text", nametoUpdate)

        });

        after(() => {
            dashboardPage.verifyBookInDashboard("23 otoños antes de ti")
            dashboardPage.deleteButton();
        });

        it("The author's book should be edited.", () => {
            bookPage.updateInfoBook(undefined,"Elísabet Benavent");
            bookPage.saveBook().should('be.enabled');
            bookPage.saveBook().click();
           
            dashboardPage.getRowsTable()
            .should("not.have.text", authortoUpdate)
        });
        
        after(() => {
            dashboardPage.verifyBookInDashboard("El mapa de los anhelos")
            dashboardPage.deleteButton();
        });
    });
});