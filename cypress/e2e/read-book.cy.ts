import { DashboardPage } from "../page/index";
let dashboardPage: DashboardPage;

describe("Verifying read book process for Library dashboard", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit("http://localhost:4200/dashboard");
    dashboardPage = new DashboardPage();
  });

    describe("Negative cases", () => {
      it("Non existent book reading", () => {
        dashboardPage
          .getRowsTable()
          .get(".ant-table-cell")
          .should("not.contain", "Tecnicas de evaluación de calidad de software")
          .and("not.contain", "Holmes Giovanny");
      });
    });

  describe("Positive cases", () => {
    it("Reading first book on page 1", () => {
      dashboardPage
        .getFirstRowTable()
        .contains(".ant-table-cell", "23 otoños antes de ti")
        .parent()
        .contains(".ant-table-cell", "Elísabet Benavent");
    });

    it("Reading a book on page 1", () => {
      dashboardPage
        .getRowsTable()
        .contains(".ant-table-cell", "Programming Pearls")
        .parent()
        .contains(".ant-table-cell", "Jon Bentley");
    });

    it("Reading a book on page 3", () => {
        dashboardPage.changePage(3);
        dashboardPage
        .getRowsTable()
        .contains(".ant-table-cell", "El mapa de los anhelos")
        .parent()
        .contains(".ant-table-cell", "Alice Kellen");
    });

    it("Loads 10 books on pagination size 10", () =>{
        dashboardPage.getRowsTable().should("have.length", 10);
    })

    it("Loads all books on pagination size 50", () => {
      dashboardPage.changePaginationSize("50 / page");
      dashboardPage.getRowsTable().should("have.length", 24);
    });
  });
});
