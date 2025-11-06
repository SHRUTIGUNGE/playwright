import { test } from '@playwright/test';
import {SignupPage} from './pageobject/signup.page.js'
import data from '../testdata/newdata.json';

test.describe('Signup Page Tests', () => {
  data.forEach((user, index) => {
    test(`Signup Test ${index + 1} - ${user.username}`, async ({ page }) => {
      const signup = new SignupPage(page);
      await signup.signup(user);
    });
  });
});
