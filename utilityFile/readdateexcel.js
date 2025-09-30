import excel from 'exceljs';

export async function readdataFromExcel(path ,sheetName, rowNum, cellnum) {
    let book = new excel.Workbook();
   await book.xlsx.readFile(path);
   let sheet = await book.getWorksheet(sheetName)
  let data =  await sheet.getRow(rowNum).getCell(cellnum).value
  return data;

}


export async function writedata(path,sheetName){
  const book=new excel.Workbook()
  await book.xlsx.readFile(path)
   const sheet=await book.getWorksheet(sheetName)
  //  const sheet=await book.addWorksheet(sheetName)
  //  sheet.getRow(1).getCell(1).value='helllo'
  //  await book.xlsx.writeFile(path)





  const data=[]
  for(let row=1;row<=sheet.rowCount;row++){
    const rowdata=[]
    for(let column=1;column<=sheet.columnCount;column++){
      let cellvalue=sheet.getRow(row).getCell(column).value
      rowdata.push(cellvalue)
    }
    data.push(rowdata)

  }
return data
}