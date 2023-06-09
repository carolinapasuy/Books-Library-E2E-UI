class BookPage {
    private saveBookButton: string;
    private nameBookButton: string;
    private authorBookButton: string;
    private cancelBookButton: string;

    constructor() {
        this.saveBookButton ='.ant-modal-footer > .ng-star-inserted:contains("Save")';
        this.cancelBookButton ='.ant-modal-footer > .ng-star-inserted:contains("Cancel")';
        this.nameBookButton = '#name';
        this.authorBookButton = '#author'; 
    }

    public saveBook() {
        return cy.get(this.saveBookButton);
    }
    public saveInfoBook(name: string, author: string) {
        cy.get(this.nameBookButton).type(name);
        cy.wait(1000);
        cy.get(this.authorBookButton).type(author);
    }

    public updateInfoBook(name?: string, author?: string) {
        if (name) {
            cy.get(this.nameBookButton).clear();
            cy.get(this.nameBookButton).type(name);
        }
        if (author) {
            cy.get(this.authorBookButton).clear();
            cy.get(this.authorBookButton).type(author);
        }
    }

    public cancelBook() {
        return cy.get(this.cancelBookButton).click();
    }

    public clearInputs() {
        cy.get(this.nameBookButton).clear();
        cy.get(this.authorBookButton).clear();
    }
}

export { BookPage }