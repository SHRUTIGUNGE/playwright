// page.flight.js
export class flightspage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.fromInput = page.locator('input[name="0-departcity"]');   
    this.toInput = page.locator('input[name="0-arrivalcity"]');
    this.dateInput = page.locator('input[name="0-dateofdeparture"]');
    this.searchBtn = page.getByRole("button", { name: "SEARCH" });
    this.loginPopupCloseBtn = page.locator('button._2KpZ6l._2doB4z'); // optional: close login modal
  }

  async goto() {
    await this.page.goto("https://www.flipkart.com/travel/flights");
    
    if (await this.loginPopupCloseBtn.isVisible({ timeout: 3000 })) {
      await this.loginPopupCloseBtn.click();
    }
  }

  async enterFrom(city) {
    await this.fromInput.fill(city);
    await this.page.keyboard.press("Enter");
  }

  async enterTo(city) {
    await this.toInput.fill(city);
    await this.page.keyboard.press("Enter");
  }

  async pickDate(pickDate) {
    await this.dateInput.fill(pickDate);
    
  }

  async searchFlights() {
    await this.searchBtn.click();
    await this.page.waitForSelector(".flight-result-card");
  }
}
