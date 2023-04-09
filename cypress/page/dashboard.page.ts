class DashboardPage {
    private addBookButton: string;
    private deleteBookButton: string;
    private booksForPageButton: string;
    private booksTable: string;
    private rowsTable: string;

    constructor() {
        this.addBookButton ='.ant-btn-primary > .ng-star-inserted:contains("Add")';
        this.deleteBookButton = 'div[_ngcontent-uqy-c73] > .ant-btn-primary > .ng-star-inserted:contains("Delete")';
        this.booksForPageButton = '.ant-select-selection-item.ng-star-inserted[ng-reflect-label="50 / page"]';
        this.booksTable = '.ant-spin-container';      
        this.rowsTable = '.ant-table-row.ng-star-inserted';       
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

    public getAllBooks() {
        return cy.get(this.booksTable);
    }
}

export { DashboardPage }