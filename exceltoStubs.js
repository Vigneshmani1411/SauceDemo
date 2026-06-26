const XLSX = require('xlsx');
const fs = require('fs');
const excelFolder = './stubs-excel/'

let excelFiles = [];

excelFiles = fs.readdirSync(excelFolder);

excelFiles.forEach((e) => {

    var workBook = XLSX.readFile(excelFolder + e)

    var sheetNameList = workBook.SheetNames;

    sheetNameList.forEach((sheet) => {
        const excelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheet], {
            raw: false,
            defval: ""
        });
        var excelJson = JSON.stringify(excelData);
        excelJson = '{"data": ' + excelJson + '}';
        excelJson = JSON.parse(excelJson);
        var writeStream = fs.createWriteStream("stubs\\" + sheet + ".json");
        writeStream.write(JSON.stringify(excelJson, null, 2));
        writeStream.end;

    })

});