const Page = require('./page');


class MainPage extends Page {

    async login(){
        let demo  = await $('/html/body/div[2]/header/div[1]/div/div/div[2]/div/ul/li[3]/div/a');
        let loginButton = await $('/html/body/div[2]/header/div[1]/div/div/div[2]/div/ul/li[3]/div/div/div/a[1]');
        await demo.click();
        await loginButton.click();
    }
    getPageTitle(){
        return super.getPageTitle();
    }

    open () {
        return super.open('https://www.phptravels.net/');
    }
}

module.exports = new MainPage();
