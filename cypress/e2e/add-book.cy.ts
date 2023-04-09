import { DashboardPage,BookPage } from "../page/index"
let dashboardPage:DashboardPage;
let bookPage:BookPage;

describe("Verifying add book process for Library dashboard", () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit("http://localhost:4200/dashboard");
        dashboardPage= new DashboardPage();
        bookPage= new BookPage();
        dashboardPage.addBook();
    });
   describe("Negative cases", () => {
        it("A book should not be created with an empty space name and author.", () => {
            bookPage.saveInfoBook(" ", " ");
            bookPage.saveBook().should('be.disabled');
        });

        it("A book should not be created with an empty space author.", () => {
            bookPage.saveInfoBook("El mapa de los anhelos", " ");
            bookPage.saveBook().should('be.disabled');
        });

        it("A book should not be created with an empty space name.", () => {
            bookPage.saveInfoBook(" ", "Alice Kellen");
            bookPage.saveBook().should('be.disabled');
        });
        
    });
    describe("Positive cases", () => {
        it("The book should be added.", () => {
            bookPage.saveInfoBook("El mapa de los anhelos", "Alice Kellen");
            bookPage.saveBook().should('be.enabled');
            bookPage.saveBook().click();
            dashboardPage.getRowsTable()
            .contains('.ant-table-cell', 'El mapa de los anhelos') 
            .parent() 
            .contains('.ant-table-cell', 'Alice Kellen') 
        });

        
    });

  });