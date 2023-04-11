class DashboardPage {
    private addBookButton: string;
    private deleteBookButton: string;
    private rowsTable: string;
    private paginationSizeChanger: string;
    private paginationSizeOption: string;

    constructor() {
        this.addBookButton ='.ant-btn-primary > .ng-star-inserted:contains("Add")';
        this.deleteBookButton = '[nztype="default"]';
        this.paginationSizeChanger =
        '.ng-star-inserted > .ant-pagination-options.ng-star-inserted > .ant-select.ant-pagination-options-size-changer';
      this.paginationSizeOption = 
        '.ant-select-item > .ant-select-item-option-content';
        this.rowsTable = '.ant-table-tbody > .ant-table-row.ng-star-inserted';      
    }

    public addBook() {
        cy.get(this.addBookButton).click();
    }
    public deleteButton() {
        return cy.get(this.deleteBookButton).click();
    }
    public changePaginationSize(size: string) {
        cy.get(this.paginationSizeChanger).click();
        const newSize = this.paginationSizeOption + `:contains("${size}")`;
        cy.get(newSize).click();
      }

    public getRowsTable() {
        return cy.get(this.rowsTable);
    }

}

export { DashboardPage }