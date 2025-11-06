import {test ,expect} from '@playwright/test'
export class Swiggy{

constructor(page){
    this.page=page
    this.url="https://www.amazon.in/"
    this.seacrh=page.locator("//input[@id='twotabsearchtextbox']")
    this.bedsel=page.locator(" //span[normalize-space()='sheet king size']")
    this.bcart=page.locator("//button[@id='a-autoid-3-announce']")
    this.pensel=page.locator("//span[normalize-space()='drive 256 gb']")
    this.pcart=page.locator("//button[@id='a-autoid-1-announce']")
    this.bagsel=page.locator("//span[normalize-space()='for man']")
    this.bbcart=page.locator("//button[@id='a-autoid-1-announce']")

    // this.sele=page.locator("//span[normalize-space()='12959 Reviews']")
    this.addcart=page.locator("//span[@id='nav-cart-count']")
    // this.size=page.locator("//span[text()='XS']")
    this.cartpage=page.locator("//div[@class='sc-kFkjun cEGPDc TabWrapper-sc-1edf3ww-0 jtaRdY']//*[name()='svg']")
    
}

async go(){
    await this.page.goto(this.url)
    await expect(this.page).toHaveURL("https://www.amazon.in/")


}
async besel(){
    await  this.bedsel.click()

}
async psel(){
    await this.pensel.click()
}
async basel(){
    await this.bagsel.click()
}
async seacrhh(sch){
    await this.seacrh.fill(sch)

}

async bedcart(){
    await this.bcart.click()
}


async bagcart(){
    await  this.bbcart.click()
}
// async seleee(){
//     await this.sele.click()
// }

async pencart(){
    await this.pcart.click()
}



// async addd(){
//     await this.addcart.click()
// }
// async sizee(){
//     await this.size.click()
// }
// async cheakCart(){
//     await this.cartpage.click()
// }





}