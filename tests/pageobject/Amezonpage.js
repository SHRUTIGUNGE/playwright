
export class AmazonPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.searchBox = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
        this.signInButton = '#nav-link-accountList';
    }

    async open() {
        await this.page.goto('https://www.amazon.in/');
    }

    async searchFor(item) {
        await this.page.fill(this.searchBox, item);
        await this.page.click(this.searchButton);
    }

    async clickSignIn() {
        await this.page.click(this.signInButton);
    }
}


