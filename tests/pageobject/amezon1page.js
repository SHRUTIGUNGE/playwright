export class amezon1page {
    /**
     * @param {import('@playwright/test').Page} page
     * 
     */
    constructor(page) {
        this.page = page;
        this.searchBox = '#twotabsearchtextbox';
        this.searchButton = '#nav-search-submit-button';
        this.firstItem = '#[@id="sac-suggestion-row-1-cell-1"]/div[1]';
        this.buyNowButton = '#buy-now-button';
        this.productTitle = '#productTitle';
        this.productPrice = '#priceblock_ourprice, #priceblock_dealprice';
    }

async goto() {
        await this.page.goto('https://www.amazon.in/');
    }

    async searchItem(item) {
        await this.page.fill(this.searchBox, item);
        await this.page.click(this.searchButton);
    }

    async selectFirstItem() {
        await this.page.click(this.firstItem);
    }

    async getProductDetails() {
        const title = await this.page.locator(this.productTitle).innerText();
        const price = await this.page.locator(this.productPrice).innerText();
        return { title, price };
    }

    async buyNow() {
        await this.page.click(this.buyNowButton);
    }
}




