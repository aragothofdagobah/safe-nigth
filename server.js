 require('dotenv').config();

 var express          = require('express'),
     app              = express(),
     path             = require('path'),
     port             = process.env.PORT || 8080,
     mongoose         = require('mongoose'),
     expressLayouts   = require('express-ejs-layouts'),
     bodyParser       = require('body-parser'),
     session          = require('express-session'),
     cookieParser     = require('cookie-parser'),
     flash            = require('connect-flash'),
     expressValidator = require('express-validator');

app.use(cookieParser());
app.use(session({
   secret: process.env.SECRET,
   cookie: { maxAge: 60000 },
   resave: false,    // forces the session to be saved back to the store
   saveUninitialized: false  // dont save unmodified
}));
     app.use(flash());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(require('./app/routes'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connection to mLab succesful');
  app.listen(port, () => {
    console.log(`App is listening on ${port}`);
  })
});
