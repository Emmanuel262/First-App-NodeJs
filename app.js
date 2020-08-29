/* eslint-disable */

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const viewRouter = require('./routes/viewRoutes');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const bookingRouter = require('./routes/bookingRoutes');
const reviewRouter = require('./routes/reviewRoutes');

const bestController = require('./controllers/bestController');

// const mainRouter = require('./routes/mainRoutes');
// const amazuRouter = require('./routes/amazuRoutes');
// const ibibanzaRouter = require('./routes/ibibanzaRoutes');
// const imirimaRouter = require('./routes/imirimaRoutes');
// const inzuriRouter = require('./routes/inzuriRoutes');
// const amashyambaRouter = require('./routes/amashyambaRoutes');
// const imodokaRouter = require('./routes/imodokaRoutes');
// const motoRouter = require('./routes/motoRoutes');
// const apartmentRouter = require('./routes/apartmentRoutes');
// const roomsRouter = require('./routes/roomsRoutes');
// const furnitureRouter = require('./routes/furnitureRoutes');
// const ubugeniRouter = require('./routes/ubugeniRoutes');
// const imikinoRouter = require('./routes/imikinoRoutes');
// const muzikaRouter = require('./routes/muzikaRoutes');
// const ibikinishoRouter = require('./routes/ibikinishoRoutes');
// const artistsRouter = require('./routes/artistsRoutes');
// const imyambaroRouter = require('./routes/imyambaroRoutes');
// const ibikoreshoRouter = require('./routes/ibikoreshoRoutes');
// const arangishaRouter = require('./routes/arangishaRoutes');
// const izinaRouter = require('./routes/ahindura-izinaRoutes');
// const amenyeshaRouter = require('./routes/amenyeshaRoutes');
// const kurangaAkaziRouter = require('./routes/kurangaAkaziRoutes');
// const akaziRouter = require('./routes/akaziRoutes');
// const gusabaImpugukeRouter = require('./routes/gusabaImpugukeRoutes');
// const kumenyekanishaImpugukeRouter = require('./routes/kumenyekanishaImpugukeRoutes');
// const ibikorwaIyobokamanaRouter = require('./routes/ibikorwaIyobokamanaRoutes');
// const amakamyoRouter = require('./routes/amakamyoRoutes');
// const busRouter = require('./routes/busRoutes');
// const taxVoitureRouter = require('./routes/taxVoitureRoutes');
// const fusoRouter = require('./routes/fusoRoutes');
// const daihatsuRouter = require('./routes/daihatsuRoutes');
// const ngorouter = require('./routes/ngoRoutes');
// const abikoreraRouter = require('./routes/abikoreraRoutes');
// const ibigoRouter = require('./routes/ibigoRoutes');
// const bankRouter = require('./routes/bankRoutes');
// const ubuconcoRouter = require('./routes/ubuconcoRoutes');
// const ibiribwaRouter = require('./routes/ibiribwaRoutes');
// const amatungoRouter = require('./routes/amatungoRoutes');

const app = express();

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//1. GLOBAL middleware
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set Security HTTP headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Limit requrest from same API
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: 'Too many requests from this IP, Please try again in an hour!'
});

app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
	hpp({
		whitelist: [ 'duration', 'ratingsQuantity', 'ratingsAverage', 'maxGroupSize', 'difficulty', 'price' ]
	})
);

// Test middleware
app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	// console.log(req.cookies);
	next();
});

// 3.1 views to access Routes
app.use('/', viewRouter);
// app.use('/employee', bestController);

// 3.2. Routes

// // app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// app.use('/api/v1/reviews', reviewRouter);
// app.use('/api/v1/booking', bookingRouter);

// app.use('/api/v1/main', mainRouter);
// app.use('/api/v1/amazu', amazuRouter);
// app.use('/api/v1/ibibanza', ibibanzaRouter);
// app.use('/api/v1/imirima', imirimaRouter);
// app.use('/api/v1/inzuri', inzuriRouter);
// app.use('/api/v1/amashyamba', amashyambaRouter);
// app.use('/api/v1/imodoka', imodokaRouter);
// app.use('/api/v1/moto', motoRouter);
// app.use('/api/v1/apartment', apartmentRouter);
// app.use('/api/v1/rooms', roomsRouter);
// app.use('/api/v1/furniture', furnitureRouter);
// app.use('/api/v1/ubugeni', ubugeniRouter);
// app.use('/api/v1/imikino', imikinoRouter);
// app.use('/api/v1/muzika', muzikaRouter);
// app.use('/api/v1/ibikinisho', ibikinishoRouter);
// app.use('/api/v1/artists', artistsRouter);
// app.use('/api/v1/imyambaro', imyambaroRouter);
// app.use('/api/v1/ibikoresho', ibikoreshoRouter);
// app.use('/api/v1/arangisha', arangishaRouter);
// app.use('/api/v1/amazina', izinaRouter);
// app.use('/api/v1/amenyesha', amenyeshaRouter);
// app.use('/api/v1/kurangaAkazi', kurangaAkaziRouter);
// app.use('/api/v1/akazi', akaziRouter);
// app.use('/api/v1/gusabaImpuguke', gusabaImpugukeRouter);
// app.use('/api/v1/kumenyekanishaImpuguke', kumenyekanishaImpugukeRouter);
// app.use('/api/v1/ibikorwaIyobokama', ibikorwaIyobokamanaRouter);
// app.use('/api/v1/amakamyo', amakamyoRouter);
// app.use('/api/v1/bus', busRouter);
// app.use('/api/v1/taxVoiture', taxVoitureRouter);
// app.use('/api/v1/fuso', fusoRouter);
// app.use('/api/v1/daihatsu', daihatsuRouter);
// app.use('/api/v1/ngo', ngorouter);
// app.use('/api/v1/abikorera', abikoreraRouter);
// app.use('/api/v1/ibigo', ibigoRouter);
// app.use('/api/v1/amabanki', bankRouter);
// app.use('/api/v1/ubuconco', ubuconcoRouter);
// app.use('/api/v1/ibiribwa', ibiribwaRouter);
// app.use('/api/v1/amatungo', amatungoRouter);

app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
