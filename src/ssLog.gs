// スプレッドシートにログを残す
// 使い方
// 1. id変数にスプレッドシートID（https://docs.google.com/spreadsheets/d/xxx/のxxxの部分）を入れる
// 2. sheetNameにスプレッドシートに存在している任意で決めたシート名を入れる
const ssLog = {
    // logシートにログを書き出す
    output: function (obj) {
        var id = config.spreadsheetId;
        var name = config.sheetName.log;
        var spreadSheet = SpreadsheetApp.openById(id);

        // 要素がnullだった場合
        if (!obj) {
            obj = "Null";
        }

        // 書き出す
        spreadSheet.getSheetByName(name).appendRow(
            [new Date(), obj]
        );
        // スプレッドシートを保存する
        SpreadsheetApp.flush();
    }
};

// google.script.run用
function printLog(obj) {
    ssLog.output(obj);
}
