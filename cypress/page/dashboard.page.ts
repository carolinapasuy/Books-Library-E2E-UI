class DashboardPage {
    private addBookButton: string;
    private deleteBookButton: string;
    private editBookButton: string;
    private booksForPageButton: string;
    private rowsTable: string;

    constructor() {
        this.addBookButton ='.ant-btn-primary > .ng-star-inserted:contains("Add")';
        this.deleteBookButton = 'div[_ngcontent-uqy-c73] > .ant-btn-primary > .ng-star-inserted:contains("Delete")';
        this.booksForPageButton = '.ant-select-selection-item.ng-star-inserted[ng-reflect-label="50 / page"]'; 
        this.rowsTable = '.ant-table-tbody > .ant-table-row.ng-star-inserted';    
        this.editBookButton = 'button.ant-btn-primary.ant-btn-circle';       
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
        cy.get(this.editBookButton) 
        .eq(0) 
        .click();

        cy.wait(1000); 
      }

      public getFirstRowTable() {
        return cy.get(this.rowsTable)
        .eq(0);
    }
}

export { DashboardPage }