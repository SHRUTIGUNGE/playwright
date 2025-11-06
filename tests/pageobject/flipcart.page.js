export  class Flipcart {
/**
 *  * @param {import('playwright').Page} page
 */
    constructor(page) {
        this.page = page;
        this.flipsrcfiled=page.locator("//span[text()='Flight Bookings']")
        
     
    }
    async srcdetail()
    {
        await this.flipsrcfiled.click()
        
    }
}