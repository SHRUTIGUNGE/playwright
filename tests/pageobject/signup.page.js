import { expect } from '@playwright/test';

export class SignupPage {

  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.email = page.locator('#email');
    this.telephone = page.locator('#tel');
    this.password = page.locator('#password');
    this.genderMale = page.locator('#male');
    this.genderFemale = page.locator('#female');
    this.country = page.locator('#country');
    this.signupBtn = page.locator('#submit');
    this.successMsg = page.locator('#msg');
  }

  // ✅ One reusable signup method
  async signup({ username, email, tel, password, gender, country }) {
    await this.page.goto('https://qavbox.github.io/demo/signup/');

    await this.username.fill(username);
    await this.email.fill(email);
    await this.telephone.fill(tel);
    await this.password.fill(password);

    // Select gender
    if (gender.toLowerCase() === 'male') {
      await this.genderMale.check();
    } else {
      await this.genderFemale.check();
    }

    // Select country
    await this.country.selectOption(country);

    // Click signup
    await this.signupBtn.click();

    // Validate success message
    await expect(this.successMsg).toBeVisible();
    await expect(this.successMsg).toHaveText('You have successfully registered.');
  }
}
