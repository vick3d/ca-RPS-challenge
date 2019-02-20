const { setWorldConstructor } = require('cucumber')
const { expect } = require('chai')
const puppeteer = require('puppeteer')

const HOME_PAGE = 'http://localhost:3000'

class RpsWorld {
  constructor() {}

  // Open the home page using puppeteer
  async openHomePage() {
    this.browser = await puppeteer.launch({headless: false, slowmo: 100})
    this.page = await this.browser.newPage()
    await this.page.goto(HOME_PAGE)
  }

  async pageHasTextContent(expectedContent) {
      const pageContent = await this.page.content()
      const actualContent = pageContent.match(expectedContent)[0]

      expect(actualContent).to.be.eq(expectedContent)
	}
	
	async clickOnBtn(btnName) {
		const btnSelector = this.btnSelectorFromName(btnName.toLowerCase())
		await this.page.waitForSelector(btnSelector)
		await this.page.click(btnSelector)
	}

	btnSelectorFromName(btnName) {
    switch (btnName) {
      case 'rock':
        return '.rock'
        break
      case 'paper':
				return '.paper'
			case 'scissors':
				return '.scissors'
        break
      default:
        throw `${btnName} button is not defined`
        break
    }
  }

	async closeHomePage() {
    await this.browser.close()
  }
}

setWorldConstructor(RpsWorld)