class DashboardPage {
    private addBookButton: string;
    private deleteBookButton: string;
    private rowsTable: string;
    private paginationSizeChanger: string;
    private paginationSizeOption: string;
    private firstPageButton: string;
    private secondPageButton: string;
    private thirdPageButton: string;

    constructor() {
        this.addBookButton ='.ant-btn-primary > .ng-star-inserted:contains("Add")';
        this.deleteBookButton = '[nztype="default"]';
        this.paginationSizeChanger ='.ng-star-inserted > .ant-pagination-options.ng-star-inserted > .ant-select.ant-pagination-options-size-changer';
        this.paginationSizeOption = '.ant-select-item > .ant-select-item-option-content';
        this.rowsTable = '.ant-table-tbody > .ant-table-row.ng-star-inserted';    
        this.firstPageButton ='.ng-star-inserted > .ant-pagination-item.ng-star-inserted > .ng-star-inserted:contains("1")';
        this.secondPageButton ='.ng-star-inserted > .ant-pagination-item.ng-star-inserted > .ng-star-inserted:contains("2")';
        this.thirdPageButton ='.ng-star-inserted > .ant-pagination-item.ng-star-inserted > .ng-star-inserted:contains("3")';
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
    public verifyBookTitleAndAuthor(title: string, author: string){  
        this.getRowsTable()
        .get(".ant-table-cell")
        .should("contain", title)
        .and("contain", author);
    }

    public verifyBookInDashboard(title: string){   
        this.getRowsTable()
        .contains('td', title)
        .parent()
        .find('[type="checkbox"]')
        .check();
    }
    public clickEditBook(title: string){   
        this.getRowsTable()
        .contains('td', title)
        .parent()
        .find('.anticon-edit')
        .click();
    }

    public getFirstRowTable() {
        return cy.get(this.rowsTable)
        .eq(0);
    }

}

export { DashboardPage };
