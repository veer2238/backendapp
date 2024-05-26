const express = require('express');
const path = require('path');
const app = express();

app.use('/files', express.static(path.join(__dirname, 'files')));


app.get('/html',(req,res) =>{
    res.send('hid')
})


app.listen(3099, () => {
  console.log('server connected');
});
