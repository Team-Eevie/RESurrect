const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

//define routes
const userRouter = require('./routers/userRouter');
const resumeRouter = require('./routers/resumeRouter');


//parse cookies
app.use(cookieParser());  
//parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve static files
app.use('/', express.static(path.resolve(__dirname, '../src/styles.scss')));

//serve up the index.html
app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, '../src/index.html'));
  });


//direct to routers
app.use('/user', userRouter);
app.use('/resume', resumeRouter);



//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
      log: 'Express middleware error occured',
      status: 500,
      message: {
          err: `${err} at middleware has occured`,
      },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message)
})


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
  
  module.exports = app;