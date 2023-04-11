class DashboardPage {
  private addBookButton: string;
  private deleteBookButton: string;
  private editBookButton: string;
  private booksForPageButton: string;
  private rowsTable: string;
  private firstPageButton: string;
  private secondPageButton: string;
  private thirdPageButton: string;
  private paginationSizeChanger: string;
  private paginationSizeOption: string;

  constructor() {
    this.addBookButton = '.ant-btn-primary > .ng-star-inserted:contains("Add")';
    this.deleteBookButton =
      'div[_ngcontent-uqy-c73] > .ant-btn-primary > .ng-star-inserted:contains("Delete")';
    this.booksForPageButton =
      '.ant-select-selection-item.ng-star-inserted[ng-reflect-label="50 / page"]';
    this.rowsTable = ".ant-table-tbody > .ant-table-row.ng-star-inserted";
    this.editBookButton = "button.ant-btn-primary.ant-btn-circle";
    this.firstPageButton =
      '.ng-star-inserted > .ant-pagination-item.ng-star-inserted > .ng-star-inserted:contains("1")';
    this.secondPageButton =
      '.ng-star-inserted > .ant-pagination-item.ng-star-inserted > .ng-star-inserted:contains("2")';
    this.thirdPageButton =
      '.ng-star-inserted > .ant-pagination-item.ng-star-inserted > .ng-star-inserted:contains("3")';
    this.paginationSizeChanger =
      '.ng-star-inserted > .ant-pagination-options.ng-star-inserted > .ant-select.ant-pagination-options-size-changer';
    this.paginationSizeOption = 
      '.ant-select-item > .ant-select-item-option-content';
  }

  public addBook() {
    cy.get(this.addBookButton).click();
  }
  public deleteButton() {
    return cy.get(this.deleteBookButton).click();
  }
  public getBooksForPageButton() {
    return cy.get(this.booksForPageButton).click();
  }

  public getRowsTable() {
    return cy.get(this.rowsTable);
  }
  public getBookToEditFirstButton() {
    cy.get(this.editBookButton).eq(0).click();

    cy.wait(1000);
  }

  public getFirstRowTable() {
    return cy.get(this.rowsTable).eq(0);
  }

  public changePage(number: number) {
    if (number === 1) {
      return cy.get(this.firstPageButton).click();
    } else if (number === 2) {
      return cy.get(this.secondPageButton).click();
    } else if (number === 3) {
      return cy.get(this.thirdPageButton).click();
    }

    return null;
  }

  public changePaginationSize(size: string) {
    cy.get(this.paginationSizeChanger).click();
    const newSize = this.paginationSizeOption + `:contains("${size}")`;
    cy.get(newSize).click();
  }
}

export { DashboardPage };
