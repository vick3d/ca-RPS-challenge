const { Given, When, Then, After } = require("cucumber");

	After(async function() {
			return await this.closeHomePage()
	})

	Given('I visit the site', async function () {
			return await this.openHomePage()
	});

	When('I click on {string}', async function (btnName) {
			return await this.clickOnBtn(btnName)
	});

	Then('I should see {string}', async function (content) {
			return await this.pageHasTextContent(content)	
	});
