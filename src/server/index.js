var connect = require('connect'),
  serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic('../dist'));
app.listen(3000, () => console.log('Server run on 3000 port'));
