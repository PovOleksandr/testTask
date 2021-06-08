const DemoPage = require('../pageobjects/demo.page');
const MainPage = require('../pageobjects/main.page');
const LoginPage = require('../pageobjects/LoginPage');
let password = '';
let login = '';

describe('Opening demo page', () => {
    before ( async () => DemoPage.open());

    it('should open demo page', async () =>
        expect(await DemoPage.getPageTitle() ).toBe("Demo Script Test drive - PHPTRAVELS"));
});


describe('Getting credentials', () => {
    it('login" ', async () => {
        login = await DemoPage.getMail()
        expect( login).toBe("user@phptravels.com");
    });
    it('password" ', async () => {
        password = await DemoPage.getPwd()
        expect( password).toBe("demouser");
    });
});

describe('Navigation to main page', () => {
    it('should open main page', async () => {
        await MainPage.open();
        expect( await browser.getUrl()).toBe('https://www.phptravels.net/');
    });
});

describe('Loging in', () => {
    it('should open login page ',  async() => {
        await MainPage.login()
    });

    it('should input and submit form ',  async() => {
        await LoginPage.fillLoginForm(login,password)
    });
});

describe('Checking login', () => {
    it('should get redirected to profile', async () => {
        expect( await browser.getUrl()).toBe('https://www.phptravels.net/account/')
    });
});