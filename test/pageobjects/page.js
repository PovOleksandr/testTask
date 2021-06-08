/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    getPageTitle(){
        return browser.getTitle();
    }
    open (path) {
        return browser.url(`${path}`)
    }
}
