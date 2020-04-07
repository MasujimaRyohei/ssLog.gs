# ssLog.gs

Spreadsheet log.

You can output log to sheet.

# Useage

Prepare.
Fill your data.
```JavaScript
// config.gs
const config = {
    spreadsheetId: 'YOUR_SHEET_ID',
    sheetName: {
        'log': 'YOUR_SHEET_NAME',
    },
};
```

In .gs file.
```JavaScript
ssLog.print("Hello world");
```
or
```JavaScript
printLog("Hello world");
```

In GAS client (.html)
```JavaScript
google.script.run.printLog("Hello world");
```
