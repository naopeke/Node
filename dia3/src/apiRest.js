// サーバーの起動と設定は apiRest.js ファイルに記述されているため、このファイルを使ってサーバーを起動するのが適切

const app = require('./app');

app.listen(app.get('port'), function (){
    console.log('Server listen on port ' + app.get('port'))
})
