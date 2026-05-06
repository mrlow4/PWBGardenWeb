var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var lessMiddleware = require("less-middleware");
var logger = require("morgan");

// routers! :)
var indexRouter = require("./app_server/routes/index");
var historyRouter = require("./app_server/routes/history");
var joinDonateRouter = require("./app_server/routes/joindonate");
var whatWeDoRouter = require("./app_server/routes/whatwedo");
var whoWeAreRouter = require("./app_server/routes/whoweare");
var usersRouter = require("./app_server/routes/users");

var handlebars = require('hbs');

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "hbs");

// register handlebars partials (https://www.npmjs.com/package/hbs)
handlebars.registerPartials(__dirname + '/app_server/views/partials');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));

// routes! :)
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/history", historyRouter);
app.use("/jointhegarden", joinDonateRouter);
app.use("/whatwedo", whatWeDoRouter);
app.use("/whoweare", whoWeAreRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
