const express = require('express');
const app = express();
app.use(express.json());
const port = 3001;

app.use('/api/user', require('./src/routes/userRoutes'))

// connect db
const connection = require('./src/config/index');
connection.query('SELECT 1').then(()=>{
    console.log('connect db success')
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
      });
}).catch(err=>{
    console.log('connect db failed', err)
})

// Chạy server
