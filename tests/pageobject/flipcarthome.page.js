 //import data from '../testdata/fdate.json'
import data from 'C:/Users/hp/OneDrive/Desktop/playwright-project/testdata/fdate.json'
export  class flipcarthomepage{
    /**
     * @param {import('playwright').page}page
     */


    constructor(page)
    {
        this.page=page
        this.rtbtn=page.locator('//div[@class="qsHXPi"]').nth(1)
        this.frm=page.locator('//input[@type="text"]').first()
        this.bng=page.locator('//div[.="BLR"]').first()
        
        this.to=page.locator('//input[@type="text"]').nth(1)
        this.delh=page.locator('//div[@class="_98hP1j"]/div//span[text()="New Delhi"]')
        //this.fdate=page.locator(`(//tbody//td//button[text()=${data.date}])[1]`)
        this.frmdate=page.locator(`(//tbody//td//button[text()=${data.date}])[1]`)
        this.rdate=page.locator('//input[@class="v2VFa- k2khBy rOnAcM z2D4XG"]')
        this.rtndate=page.locator(`(//tbody//td//button[text()=${data.date}])[1]`)
        this.serchh=page.locator('//span[.="SEARCH"]')
    }

    async flipdetail(frm,too){
        await this.rtbtn.check()
        await this.frm.fill(frm)
        await this.bng.click()
        await this.to.fill(too)
        await this.delh.click()
        console.log(data.date);
        await this.page.pause()
        await this.frmdate.click()
        await this.rtndate.click()
        // await this.rtndate.click(data.date)
        await this.serchh.click()
    }
}