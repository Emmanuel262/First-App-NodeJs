/* eslint-disable */

const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');
const amazuController = require('../controllers/amazuController');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/', authController.isLoggedIn, viewsController.getAllMain);
router.use(authController.isLoggedIn);
// All Available data
router.get('/all', viewsController.getAllDataAvailable);
// Amazu Route
router.get('/amazu', viewsController.getAmazuData);
router.get('/amazu/:slug', viewsController.getOneData);

// Ibibanza Route
router.get('/ibibanza', viewsController.getIbibanzaData);
router.get('/ibibanza/:slug', viewsController.getOneData);

// Imirima Route
router.get('/imirima', viewsController.getImirimaData);
router.get('/imirima/:slug', viewsController.getOneData);

// Inzuri Route
router.get('/inzuri', viewsController.getInzuriData);
router.get('/inzuri/:slug', viewsController.getOneData);

// Amashyamba Route
router.get('/amashyamba', viewsController.getAmashyambaData);
router.get('/amashyamba/:slug', viewsController.getOneData);

// Imodoka Route
router.get('/imodoka', viewsController.getImodokaData);
router.get('/imodoka/:slug', viewsController.getOneData);

// Moto Route
router.get('/moto', viewsController.getMotoData);
router.get('/moto/:slug', viewsController.getOneData);

// Ibikoresho Route
router.get('/ibikoresho', viewsController.getIbikoreshoData);
router.get('/ibikoresho/:slug', viewsController.getOneData);

// Apartment Route
router.get('/apartment-gukodesha', viewsController.getApartmentData);
router.get('/apartment-gukodesha/:slug', viewsController.getOneData);

// rooms Route
router.get('/rooms-gukodesha', viewsController.getRoomsData);
router.get('/rooms-gukodesha/:slug', viewsController.getOneData);

// imirima Route
router.get('/imirima-gukodesha', viewsController.getImirimaGData);
router.get('/imirima-gukodesha/:slug', viewsController.getOneData);

// amashyamba Route
router.get('/amashyamba-gukodesha', viewsController.getAmashyambaGData);
router.get('/amashyamba-gukodesha/:slug', viewsController.getOneData);

// imodoka Route
router.get('/imodoka-gukodesha', viewsController.getImodokaGData);
router.get('/imodoka-gukodesha/:slug', viewsController.getOneData);

// motoRoute
router.get('/moto-gukodesha', viewsController.getMotoGData);
router.get('/moto-gukodesha/:slug', viewsController.getOneData);

// Inshuke Route
router.get('/inshuke', viewsController.getInshukeData);
router.get('/inshuke/:slug', viewsController.getOneData);

// Abanza Route
router.get('/abanza', viewsController.getAbanzaData);
router.get('/abanza/:slug', viewsController.getOneData);

// Ayisumbuye Route
router.get('/ayisumbuye', viewsController.getAyisumbuyeData);
router.get('/ayisumbuye/:slug', viewsController.getOneData);

// kaminuza Route
router.get('/kaminuza', viewsController.getKaminuzaData);
router.get('/kaminuza/:slug', viewsController.getOneData);

// Ubumenyi ngiro Route
router.get('/ubumenyi-ngiro', viewsController.getUbumenyiData);
router.get('/ubumenyi-ngiro/:slug', viewsController.getOneData);

// amazu kwigurishiriza Route
router.get('/amazu-kwigurishiriza', viewsController.getAmazuKData);
router.get('/amazu-kwigurishiriza/:slug', viewsController.getOneData);

// ibibanza kwigurishiriza Route
router.get('/ibibanza-kwigurishiriza', viewsController.getIbibanzaKData);
router.get('/ibibanza-kwigurishiriza/:slug', viewsController.getOneData);

// imirima kwigurishiriza Route
router.get('/imirima-kwigurishiriza', viewsController.getImirimaKData);
router.get('/imirima-kwigurishiriza/:slug', viewsController.getOneData);

// inzuri kwigurishiriza Route
router.get('/inzuri-kwigurishiriza', viewsController.getInzuriKData);
router.get('/inzuri-kwigurishiriza/:slug', viewsController.getOneData);

// amashyamba kwigurishiriza Route
router.get('/amashyamba-kwigurishiriza', viewsController.getAmashyambaKData);
router.get('/amashyamba-kwigurishiriza/:slug', viewsController.getOneData);

// imodoka kwigurishiriza Route
router.get('/imodoka-kwigurishiriza', viewsController.getImodokaKData);
router.get('/imodoka-kwigurishiriza/:slug', viewsController.getOneData);

// moto kwigurishiriza Route
router.get('/moto-kwigurishiriza', viewsController.getMotoKData);
router.get('/moto-kwigurishiriza/:slug', viewsController.getOneData);

// ubugeni kwigurishiriza Route
router.get('/ubugeni', viewsController.getUbugeniData);
router.get('/ubugeni/:slug', viewsController.getOneData);

// imikino kwigurishiriza Route
router.get('/imikino', viewsController.getImikinoData);
router.get('/imikino/:slug', viewsController.getOneData);

// muzika kwigurishiriza Route
router.get('/muzika', viewsController.getMuzikaData);
router.get('/muzika/:slug', viewsController.getOneData);

// ibikinisho-by-abana kwigurishiriza Route
router.get('/ibikinisho-by-abana', viewsController.getAbanaData);
router.get('/ibikinisho-by-abana/:slug', viewsController.getOneData);

// Made in Rwanda kwigurishiriza Route
router.get('/artists', viewsController.getArtistsData);
router.get('/artists/:slug', viewsController.getOneData);

// Made in Rwanda kwigurishiriza Route
router.get('/imyambaro', viewsController.getImyambaroData);
router.get('/imyambaro/:slug', viewsController.getOneData);

// Made in Rwanda kwigurishiriza Route
router.get('/ibikoresho-rwanda', viewsController.getIbikoreshoRData);
router.get('/ibikoresho-rwnda/:slug', viewsController.getOneData);

// Amatangazo Route
router.get('/arangisha', viewsController.getArangishaData);
router.get('/arangisha/:slug', viewsController.getOneData);

// Amatangazo Route
router.get('/ahindura', viewsController.getAhinduraIzinaData);
router.get('/ahindura/:slug', viewsController.getOneData);

// Amatangazo Route
router.get('/amenyesha', viewsController.getAmenyeshaData);
router.get('/amenyesha/:slug', viewsController.getOneData);

// Amatangazo Route
router.get('/kuranga-akazi', viewsController.getKurangaAkaziData);
router.get('/kuranga-akazi/:slug', viewsController.getOneData);

// Amatangazo Route
router.get('/gusaba-akazi', viewsController.getGusabaAkaziData);
router.get('/gusaba-akazi/:slug', viewsController.getOneData);

// Impuguke Route
router.get('/gusaba-impuguke', viewsController.getImpugukeData);
router.get('/gusaba-impuguke/:slug', viewsController.getOneData);

// Impuguke Route
router.get(
  '/kumenyekanisha-impuguke',
  viewsController.getImpugukeKumenyekanishaData
);
router.get('/kumenyekanisha-impuguke/:slug', viewsController.getOneData);

// Transport Route
router.get('/ibikorwa', viewsController.getIyobokamanaData);
router.get('/ibikorwa/:slug', viewsController.getOneData);

// Amakamyo Route
router.get('/amakamyo', viewsController.getAmakamyoTransportData);
router.get('/amakamyo/:slug', viewsController.getOneData);

// Bus Route
router.get('/bus-transport', viewsController.getBusTransportData);
router.get('/bus-transport/:slug', viewsController.getOneData);

// Moto Route
router.get('/moto-transport', viewsController.getMotoTransportData);
router.get('/moto-transport/:slug', viewsController.getOneData);

// TaxVoiture Route
router.get('/tax-voiture', viewsController.getTaxVoitureTransportData);
router.get('/tax-voiture/:slug', viewsController.getOneData);

// Fuso Route
router.get('/fuso-transport', viewsController.getFusoTransportData);
router.get('/fuso-transport/:slug', viewsController.getOneData);

// Daihatsu Route
router.get('/daihatsu-transport', viewsController.getDaihatsuTransportData);
router.get('/daihatsu-transport/:slug', viewsController.getOneData);

// NGO Route
router.get('/ngo', viewsController.getNgoData);
router.get('/ngo/:slug', viewsController.getOneData);

// Abikorera Route
router.get('/abikorera', viewsController.getAbikoreraData);
router.get('/abikorera/:slug', viewsController.getOneData);

// Ibigo bya leta Route
router.get('/ibigo-bya-leta', viewsController.getIbigoData);
router.get('/ibigo-bya-leta/:slug', viewsController.getOneData);

// Amabanki Route
router.get('/amabanki', viewsController.getAmabankiData);
router.get('/amabanki/:slug', viewsController.getOneData);

// ubuconco Route
router.get('/ubuconco', viewsController.getUbuconcoData);
router.get('/ubuconco/:slug', viewsController.getOneData);

// Ibiribwa Route
router.get('/ibiribwa', viewsController.getIbiribwaData);
router.get('/ibiribwa/:slug', viewsController.getOneData);

// Amatungo Route
router.get('/amatungo', viewsController.getAmatungoData);
router.get('/amatungo/:slug', viewsController.getOneData);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);

router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
// router.get('/signup', viewsController.getSignUpForm);
router.get('/me', authController.protect, viewsController.getAccount);

router.get(
  '/add',
  authController.protect,
  authController.isLoggedIn,
  authController.restrictTo('admin'),
  adminController.addData
);
router.use(authController.restrictTo('admin'));
router.get('/amazu/add', viewsController.getAmazuData);

// router.get('/add', adminController.addData);

module.exports = router;
