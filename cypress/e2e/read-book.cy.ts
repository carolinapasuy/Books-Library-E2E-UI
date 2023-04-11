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
      dashboardPage.changePaginationSize("50 / page");
      dashboardPage
        .getRowsTable()
        .get(".ant-table-cell")
        .should("not.contain", "Tecnicas de evaluación de calidad de software")
        .and("not.contain", "Holmes Giovanny");
    });
  });

  describe("Positive cases", () => {
    it("Reading existent book", () => {
      dashboardPage.changePaginationSize("50 / page");
      dashboardPage.verifyBookTitleAndAuthor(
        "Don't Make Me Think: A Common Sense Approach to Web Usability",
        "Steve Krug"
      );
    });

    it("Reading another existent book", () => {
      dashboardPage.changePaginationSize("50 / page");
      dashboardPage.verifyBookTitleAndAuthor(
        "Programming Pearls",
        "Jon Bentley"
      );
    });

    it("Loads 10 books on pagination size 10", () => {
      dashboardPage.getRowsTable().should("have.length", 10);
    });

    it("Loads 20 books on pagination size 20", () => {
      dashboardPage.changePaginationSize("20 / page");
      dashboardPage.getRowsTable().should("have.length", 20);
    });

    it("Loads all books on pagination size 50", () => {
      dashboardPage.changePaginationSize("50 / page");
      dashboardPage.getRowsTable().should("have.length", 20);
    });
  });
});
