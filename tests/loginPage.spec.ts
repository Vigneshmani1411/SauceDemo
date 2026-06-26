import { test, expect } from '@playwright/test';
import { LoginPage } from '../Page/loginPage';
import { data } from '../stubs/TestData.json';


test.describe('Login Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });


    // Before Login Page Title Test
    // test('Login Page Title', async ({ page }) => {

    //     const loginPageCopy = new LoginPage(page);

    //     await expect(loginPageCopy.LoginPagetitle).toBeVisible();
    //     expect(await loginPageCopy.LoginPagetitle.innerText()).toBe('Login to your account');

    // });


    //Login User with correct email and password
    test('Valid Login', async ({ page }) => {

        const loginPageCopy = new LoginPage(page);

        // await loginPageCopy.loginFunction('standard_user', 'secret_sauce');

        for(const testData of data) {
            await loginPageCopy.loginFunction(testData.Email, testData.Password);
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            await loginPageCopy.logoutFunction();         
            await expect(page).toHaveURL('https://www.saucedemo.com/');   
        }

        
        // await loginPageCopy.LogoutButton.click();
        // expect(await loginPageCopy.LoginPagetitle.innerText()).toBe('Login to your account');

    });
});
