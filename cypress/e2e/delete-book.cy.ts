import { BookPage, DashboardPage } from "../page/index";
let dashboardPage: DashboardPage;
let bookPage: BookPage;

describe("Verifying delete book process for Library dashboard", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("http://localhost:4200/dashboard");
    dashboardPage = new DashboardPage();
    bookPage = new BookPage();
  });

  describe("Positive cases", () => {
    it("Delete a book", () => {
      dashboardPage.addBook();
      bookPage.saveInfoBook("Soy el número cuatro", "Pitacus Lore");
      bookPage.saveBook().click();

      dashboardPage.changePaginationSize("50 / page");
      dashboardPage.verifyBookInDashboard("Soy el número cuatro");
      dashboardPage.deleteButton();
      
      dashboardPage
        .getRowsTable()
        .get(".ant-table-cell")
        .should("not.contain", "Soy el número cuatro");
    });

    it("Delete 2 books", () =>{
      dashboardPage.addBook();
      bookPage.saveInfoBook("Hábitos atómicos", "James Clear");
      bookPage.saveBook().click();

      dashboardPage.addBook();
      bookPage.saveInfoBook("¿Quién se ha llevado mi queso?", "Spencer Johnson");
      bookPage.saveBook().click();

      dashboardPage.changePaginationSize("50 / page");
      dashboardPage.verifyBookInDashboard("Hábitos atómicos");
      cy.wait(1000);
      dashboardPage.verifyBookInDashboard("¿Quién se ha llevado mi queso?");
      dashboardPage.deleteButton();

      dashboardPage
        .getRowsTable()
        .get(".ant-table-cell")
        .should("not.contain", "Hábitos atómicos");
        dashboardPage
        .getRowsTable()
        .get(".ant-table-cell")
        .should("not.contain", "¿Quién se ha llevado mi queso?");
    })
  });
});
