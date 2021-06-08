const Page = require('./page');


class LoginPage extends Page {

    async fillLoginForm(login, password){
        let loginForm =  await $('/html/body/div[2]/div[1]/section/div/div[1]/div[2]/form/div[3]/div[1]/label/input');
        let pwdForm = await $('/html/body/div[2]/div[1]/section/div/div[1]/div[2]/form/div[3]/div[2]/label/input');
        let submitLogin = await $('//*[@id="loginfrm"]/button');

        await loginForm.setValue(login)
        await browser.pause(2000)
        await pwdForm.setValue(password)
        await browser.pause(2000)
        //await submitLogin.scrollIntoView()
        await browser.pause(2000)
        await submitLogin.click()
        await browser.pause(2000)
        await submitLogin.click()
    }

    getPageTitle(){
        return super.getPageTitle();
    }

    open () {
        return super.open('https://www.phptravels.net/login');
    }
}

module.exports = new LoginPage();
