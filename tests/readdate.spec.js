import {test} from '@playwright/test';
import { readdataFromExcel, writedata } from '../utilityFile/readdateexcel';

test("read data from excel", async()=>{


   
//  let data1 = await readdataFromExcel("./testdata/testdata.xlsx","Sheet1",1,1)
//  let data2 = await readdataFromExcel("./testdata/testdata.xlsx","Sheet1",2,1)
//  let data3 = await readdataFromExcel("./testdata/testdata.xlsx","Sheet1",3,1)
// let date4=await readdataFromExcel("./testdata/testdata.xlsx","Sheet1",1,2)
// let date5=await readdataFromExcel("./testdata/testdata.xlsx","Sheet1",2,2)
//  let date6=await readdataFromExcel("./testdata/testdata.xlsx","Sheet1",3,2)

    let out =await writedata("./testdata/testdata.xlsx","Sheet5")

console.log(out);


})