const Page = require('./page');


class DemoPage extends Page {
    constructor() {
        super();
    }
    async getMail() {
        let field =  await $('/html/body/div[2]/main/section[1]/div/div/div[2]/div/div/div[2]/div/div/div[2]/div[2]/div');
        let text =  await field.getHTML(false);
        return text.slice( 32, text.search("<br>") );
    }

    async getPwd() {
        let field =  await $('/html/body/div[2]/main/section[1]/div/div/div[2]/div/div/div[2]/div/div/div[2]/div[2]/div');
        let text =  await field.getHTML(false);
        return text.slice( text.search("d</strong>")+11, -9  );
    }

    getPageTitle(){
        return super.getPageTitle();
    }

    open () {
        return super.open('https://phptravels.com/demo/');
    }
}

module.exports = new DemoPage();
