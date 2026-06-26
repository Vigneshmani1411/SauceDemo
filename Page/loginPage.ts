import playwright from 'playwright';
import { test, expect, Page, Locator } from '@playwright/test';

export class LoginPage {

    loginPage: Page;
    EmailInput: Locator;
    PasswordInput: Locator;
    LoginButton: Locator;
    LogoutButton: Locator;
    MenuButton: Locator;
    CloseMenuButton: Locator;
    AllItemsLink: Locator;
    AboutLink: Locator;
    LogoutLink: Locator;
    ResetAppStateLink: Locator;




    constructor(page: Page) {
        this.loginPage = page;

        // this.LoginPagetitle = this.loginPage.locator('text=Login to your account');

        this.EmailInput = this.loginPage.locator('input[name="user-name"]');
        
        this.PasswordInput = this.loginPage.locator('input[name="password"]');

        this.LoginButton = this.loginPage.getByRole('button', { name: 'Login' });

        this.LogoutButton = this.loginPage.getByRole('button', { name: 'Logout' });

        this.MenuButton = this.loginPage.locator('#react-burger-menu-btn');
        this.CloseMenuButton = this.loginPage.locator('#react-burger-cross-btn');
        
        this.AllItemsLink = this.loginPage.locator('[data-test="inventory-sidebar-link"]');
        this.AboutLink = this.loginPage.locator('[data-test="about-sidebar-link"]');
        this.LogoutLink = this.loginPage.locator('[data-test="logout-sidebar-link"]');
        this.ResetAppStateLink = this.loginPage.locator('[data-test="reset-sidebar-link"]');


    }

    async loginFunction(email: string, password: string) {
        await this.EmailInput.fill(email);
        await this.PasswordInput.fill(password);
        await this.LoginButton.click();
    }
     
    async logoutFunction() {
        await this.MenuButton.click();
        // Add time out in this step to wait for the LogoutLink to be visible before clicking it  -------> Comment 1 
        await this.LogoutLink.waitFor({ state: 'visible' }); 
        await this.LogoutLink.click();
    }


}

