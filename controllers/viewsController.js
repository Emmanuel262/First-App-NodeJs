/* eslint-disable */
const factory = require('../controllers/handlerFactory');
const Tour = require('../models/tourModel');
const Main = require('../models/mainModel');
const Amazu = require('../models/amazuModel');
const Apartment = require('../models/apartment');
const Abikorera = require('../models/abikoreraModel');
const Ahindura = require('../models/ahindura-izinaModel');
const Akazi = require('../models/akaziModel');
const Amakamyo = require('../models/amakamyoModel');
const Amashyamba = require('../models/amashyambaModel');
const Amatungo = require('../models/amatungoModel');
const Amenyesha = require('../models/amenyeshaModel');
const Arangisha = require('../models/arangishaModel');
// const Artist = require('../models/ArtistsModel');
const Bank = require('../models/bankModel');
const Bus = require('../models/busModel');
const Daihatsu = require('../models/daihatsuModel');
const Furniture = require('../models/furnitureModel');
const GusabaImpuguke = require('../models/gusabaImpugukeModel');
const Ibibanza = require('../models/ibibanzaModel');
const Ibigo = require('../models/ibigoModel');
const Fuso = require('../models/fusoModel');
const IbikinishoAbana = require('../models/ibikinishoModel');
const Ibikoresho = require('../models/ibikoreshoModel');
const IbikorwaIyobokamana = require('../models/ibikorwaIyobokamanaModel');
const Ibiribwa = require('../models/ibiribwaModel');
const Imikino = require('../models/imikinoModel');
const Imirima = require('../models/imirimaModel');
const Imodoka = require('../models/imodokaModel');
const Imyambaro = require('../models/imyambaroModel');
const Inzuri = require('../models/inzuriModel');
const KumenyekanishaImpuguke = require('../models/kumenyekanishaImpugukeModel');
const KurangaAkazi = require('../models/kurangaAkaziModel');
const Moto = require('../models/kurangaAkaziModel');
const Muzika = require('../models/muzikaModel');
const Ngo = require('../models/ngoModel');
const Rooms = require('../models/roomsModel');
const TaxVoiture = require('../models/taxVoitureModel');
const Ubuconco = require('../models/ubuconcoModel');
const Ubugeni = require('../models/ubugeniModel');
const Post= require('../models/postModel');

const Booking = require('../models/bookingModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getApartments = catchAsync(async (req, res, next) => {
  const amazu = await Apartment.find();
  if (!amazu) {
    return next(new AppError('Nta Apartments zihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Apartments zihari.',
    amazu,
  });
});

exports.getApartment = catchAsync(async (req, res, next) => {
  const inzu = await Apartment.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Apartment Zihari', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getIbibanza = catchAsync(async (req, res, next) => {
  const amazu = await Ibibanza.find();
  if (!amazu) {
    return next(new AppError('Nta Bibanza bihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'ibibanza bigurishwa',
    amazu,
  });
});

exports.getIkibanza = catchAsync(async (req, res, next) => {
  const inzu = await Ibibanza.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Kibanza gihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu}`,
    inzu,
  });
});

exports.getImirima = catchAsync(async (req, res, next) => {
  const amazu = await Imirima.find();
  if (!amazu) {
    return next(new AppError('Nta Mirimima ihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imirima  Igurishwa',
    amazu,
  });
});

exports.getUmurima = catchAsync(async (req, res, next) => {
  const inzu = await Imirima.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Murima Uhari .', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getInzuri = catchAsync(async (req, res, next) => {
  const amazu = await Inzuri.find();
  if (!amazu) {
    return next(new AppError('Nta Nzuri Zihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Inzuri Zigurishwa',
    amazu,
  });
});

exports.getUrwuri = catchAsync(async (req, res, next) => {
  const inzu = await Inzuri.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Nzuri Zihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmashyamba = catchAsync(async (req, res, next) => {
  const amazu = await Amashyamba.find();
  if (!amazu) {
    return next(new AppError('Nta Mashyamba Ahari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amashyamba Agurishwa',
    amazu,
  });
});

exports.getIshyamba = catchAsync(async (req, res, next) => {
  const inzu = await Amashyamba.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta shyamba  rihari', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmamodoka = catchAsync(async (req, res, next) => {
  const amazu = await Imodoka.find();
  if (!amazu) {
    return next(new AppError('Nta Modoka Zihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imodoka Zigurishwa',
    amazu,
  });
});

exports.getImodoka = catchAsync(async (req, res, next) => {
  const inzu = await Imodoka.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Modoka Ihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getMotos = catchAsync(async (req, res, next) => {
  const amazu = await Moto.find();
  if (!amazu) {
    return next(new AppError('Nta Moto Zihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Moto Zigurishwa',
    amazu,
  });
});

exports.getMoto = catchAsync(async (req, res, next) => {
  const inzu = await Moto.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Moto Ihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getIbikoresho = catchAsync(async (req, res, next) => {
  const amazu = await Ibikoresho.find();
  if (!amazu) {
    return next(new AppError('Nta Bikoresho Bihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibikoresho Bigurishwa',
    amazu,
  });
});

exports.getIgikoresho = catchAsync(async (req, res, next) => {
  const inzu = await Ibikoresho.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Gikoresho Gihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getRooms = catchAsync(async (req, res, next) => {
  const amazu = await Rooms.find();
  if (!amazu) {
    return next(new AppError('Nta Byumba Bihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibyumba  Byo Kuraramo',
    amazu,
  });
});

exports.getRoom = catchAsync(async (req, res, next) => {
  const inzu = await Rooms.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Cyumba Gihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getImirimaG = catchAsync(async (req, res, next) => {
  const amazu = await Imirima.find();
  if (!amazu) {
    return next(new AppError('Nta Mirima Ihari', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imirima Igurishwa',
    amazu,
  });
});

exports.getUmurimaG = catchAsync(async (req, res, next) => {
  const inzu = await Imirima.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Murima Uhari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmashyambaG = catchAsync(async (req, res, next) => {
  const amazu = await Amashyamba.find();
  if (!amazu) {
    return next(new AppError('Nta Mashyamba Ahari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amashyamba Agurishwa',
    amazu,
  });
});

exports.getIshyambaG = catchAsync(async (req, res, next) => {
  const inzu = await Amashyamba.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Shyamba Rihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getImodokaGs = catchAsync(async (req, res, next) => {
  const amazu = await Imodoka.find();
  if (!amazu) {
    return next(new AppError('Nta Modoka Zihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imodoka Zigurishwa',
    amazu,
  });
});

exports.getImodokaG = catchAsync(async (req, res, next) => {
  const inzu = await Imodoka.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Modoka Zihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getMotoGs = catchAsync(async (req, res, next) => {
  const amazu = await Moto.find();
  if (!amazu) {
    return next(new AppError('Nta Moto Zihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Moto Zigurishwa',
    amazu,
  });
});

exports.getMotoG = catchAsync(async (req, res, next) => {
  const inzu = await Moto.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Moto Zihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getArangisha = catchAsync(async (req, res, next) => {
  const amazu = await Arangisha.find();
  if (!amazu) {
    return next(new AppError('Nta Matangazo Ahari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amatangazo Arangisha',
    amazu,
  });
});

exports.getRangira = catchAsync(async (req, res, next) => {
  const inzu = await Arangisha.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Tangazo Rihazi.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAhindura = catchAsync(async (req, res, next) => {
  const amazu = await Ahindura.find();
  if (!amazu) {
    return next(new AppError('Nta Matangazo Ahari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amatangazo Ahindura Izina',
    amazu,
  });
});

exports.getRihindura = catchAsync(async (req, res, next) => {
  const inzu = await Ahindura.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Tangazo Rihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmenyesha = catchAsync(async (req, res, next) => {
  const amazu = await Amenyesha.find();
  if (!amazu) {
    return next(new AppError('Nta Matangazo Ahari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amatangazo Amenyesha',
    amazu,
  });
});

exports.getRimenyesha = catchAsync(async (req, res, next) => {
  const inzu = await Amenyesha.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Tangazo Rihari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getUbuconco = catchAsync(async (req, res, next) => {
  const amazu = await Ubuconco.find();
  if (!amazu) {
    return next(new AppError('Nta Buconco Buhari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ubuconco Bwo Kwisoko',
    amazu,
  });
});

exports.getAgaconco = catchAsync(async (req, res, next) => {
  const inzu = await Ubuconco.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Gaconco Gahari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getIbiribwa = catchAsync(async (req, res, next) => {
  const amazu = await Ibiribwa.find();
  if (!amazu) {
    return next(new AppError('Nta Biribwa Bihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibiribwa Kw\'isoko',
    amazu,
  });
});

exports.getIkiribwa = catchAsync(async (req, res, next) => {
  const inzu = await Ibiribwa.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Kiribwa.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmatungo = catchAsync(async (req, res, next) => {
  const amazu = await Amatungo.find();
  if (!amazu) {
    return next(new AppError('Nta Matungo.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amatungo Agurishwa',
    amazu,
  });
});

exports.getItungo = catchAsync(async (req, res, next) => {
  const inzu = await Amatungo.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Tungo.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getNgos = catchAsync(async (req, res, next) => {
  const amazu = await Ngo.find();
  if (!amazu) {
    return next(new AppError('Nta NGO.', 404));
  }
  res.status(200).render('amazu', {
    title: 'NGO',
    amazu,
  });
});

exports.getNgo = catchAsync(async (req, res, next) => {
  const inzu = await Ngo.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta NGO.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAbikorera = catchAsync(async (req, res, next) => {
  const amazu = await Abikorera.find();
  if (!amazu) {
    return next(new AppError('Nta Bikorera.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Abikorera Bahari',
    amazu,
  });
});

exports.getUwikorera = catchAsync(async (req, res, next) => {
  const inzu = await Abikorera.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Muntu Wikorera.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getIbigo = catchAsync(async (req, res, next) => {
  const amazu = await Ibigo.find();
  if (!amazu) {
    return next(new AppError('Nta Bigo.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibigo Byikorera',
    amazu,
  });
});

exports.getIkigo = catchAsync(async (req, res, next) => {
  const inzu = await Ibigo.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Kigo.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});
exports.getAmabanki = catchAsync(async (req, res, next) => {
  const amazu = await Bank.find();
  if (!Amazu) {
    return next(new AppError('Nta Banki.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Banks',
    amazu,
  });
});

exports.getBanki = catchAsync(async (req, res, next) => {
  const inzu = await Bank.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Bank.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});
exports.getFusos = catchAsync(async (req, res, next) => {
  const amazu = await Fuso.find();
  if (!amazu) {
    return next(new AppError('Nta Fuso.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Fusos',
    amazu,
  });
});

exports.getFuso = catchAsync(async (req, res, next) => {
  const inzu = await Fuso.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Fuso.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getDaihatsus = catchAsync(async (req, res, next) => {
  const amazu = await Daihatsu.find();
  if (!amazu) {
    return next(new AppError('Nta Daihatsus.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Daihatsus',
    amazu,
  });
});

exports.getDaihatsu = catchAsync(async (req, res, next) => {
  const inzu = await Daihatsu.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Daihatsu.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getTaxVoitures = catchAsync(async (req, res, next) => {
  const amazu = await TaxVoiture.find();
  if (!amazu) {
    return next(new AppError('Nta Taxvoitures.', 404));
  }
  res.status(200).render('amazu', {
    title: 'TaxVoitures',
    amazu,
  });
});

exports.getTaxVoiture = catchAsync(async (req, res, next) => {
  const inzu = await TaxVoiture.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Taxvoiture.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getMotoTransports = catchAsync(async (req, res, next) => {
  const amazu = await Moto.find();
  if (!amazu) {
    return next(new AppError('Nta Moto Transport.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Moto Transport',
    amazu,
  });
});

exports.getMotoTransport = catchAsync(async (req, res, next) => {
  const inzu = await Moto.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Moto Transport.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmakamyo = catchAsync(async (req, res, next) => {
  const amazu = await Amakamyo.find();
  if (!amazu) {
    return next(new AppError('Nta Makamyo.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amakamyo Gutwara',
    amazu,
  });
});

exports.getIkamyo = catchAsync(async (req, res, next) => {
  const inzu = await Amakamyo.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Kamyo.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getIbikorwa = catchAsync(async (req, res, next) => {
  const amazu = await IbikorwaIyobokamana.find();
  if (!amazu) {
    return next(new AppError('Nta Bikorwa.', 404));
  }
  res.status(200).render('amazu', {
    title: 'IbikorwaIyobokamana',
    amazu,
  });
});

exports.getIgikorwa = catchAsync(async (req, res, next) => {
  const inzu = await IbikorwaIyobokamana.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Gikorwa Iyobokamana.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getImpugukes = catchAsync(async (req, res, next) => {
  const amazu = await GusabaImpuguke.find();
  if (!amazu) {
    return next(new AppError('Nta Mpuguke.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Gusaba Impuguke',
    amazu,
  });
});

exports.getImpuguke = catchAsync(async (req, res, next) => {
  const inzu = await GusabaImpuguke.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Mpuguke.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getKumenyekanishaImpugukes = catchAsync(async (req, res, next) => {
  const amazu = await KumenyekanishaImpuguke.find();
  if (!amazu) {
    return next(new AppError('Nta Mpuguke Imenyekanishwa.', 404));
  }
  res.status(200).render('amazu', {
    title: 'KumenyekanishaImpuguke',
    amazu,
  });
});

exports.getKumenyekanishaImpuguke = catchAsync(async (req, res, next) => {
  const inzu = await KumenyekanishaImpuguke.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Kumenyekanisha Impuguke.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getGusabaImpugukes = catchAsync(async (req, res, next) => {
  const amazu = await GusabaImpuguke.find();
  if (!amazu) {
    return next(new AppError('Nta Gusaba Impuguke.', 404));
  }
  res.status(200).render('amazu', {
    title: 'GusabaImpuguke',
    amazu,
  });
});

exports.getGusabaImpuguke = catchAsync(async (req, res, next) => {
  const inzu = await GusabaImpuguke.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Gusaba Impuguke.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getKurangaAkazis = catchAsync(async (req, res, next) => {
  const amazu = await KurangaAkazi.find();
  if (!amazu) {
    return next(new AppError('Nta Kuranga Akazi.', 404));
  }
  res.status(200).render('amazu', {
    title: 'KurangaAkazi',
    amazu,
  });
});

exports.getKurangaAkazi = catchAsync(async (req, res, next) => {
  const inzu = await KurangaAkazi.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Kuranga Akazi.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getGusabaAkazis = catchAsync(async (req, res, next) => {
  const amazu = await Akazi.find();
  if (!amazu) {
    return next(new AppError('Nta Gusaba Akazi.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Akazi',
    amazu,
  });
});

exports.getGusabaAkazi = catchAsync(async (req, res, next) => {
  const inzu = await Akazi.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Gusaba Akazi.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getMadeInRwandaIbikoreshos = catchAsync(async (req, res, next) => {
  const amazu = await Ibikoresho.find();
  if (!amazu) {
    return next(new AppError('Nta Made in Rwanda.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibikoresho Made in Rwanda',
    amazu,
  });
});

exports.getMadeInRwandaIgikoresho = catchAsync(async (req, res, next) => {
  const inzu = await Ibikoresho.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Made In Rwanda.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getImyambaro = catchAsync(async (req, res, next) => {
  const amazu = await Imyambaro.find();
  if (!amazu) {
    return next(new AppError('Nta Myambaro.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imyambaro',
    amazu,
  });
});

exports.getUmwambaro = catchAsync(async (req, res, next) => {
  const inzu = await Imyambaro.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Mwambaro.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});
exports.getArtists = catchAsync(async (req, res, next) => {
  const amazu = await Artist.find();
  if (!amazu) {
    return next(new AppError('Nta Artists.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Artist',
    amazu,
  });
});

exports.getArt = catchAsync(async (req, res, next) => {
  const inzu = await Artist.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Artist.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getUbugenis = catchAsync(async (req, res, next) => {
  const amazu = await Ubugeni.find();
  if (!amazu) {
    return next(new AppError('Nta Bugeni.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ubugeni',
    amazu,
  });
});

exports.getUbugeni = catchAsync(async (req, res, next) => {
  const inzu = await Ubugeni.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Bugeni.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getImikino = catchAsync(async (req, res, next) => {
  const amazu = await Imikino.find();
  if (!amazu) {
    return next(new AppError('Nta Mikino Ihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imikino',
    amazu,
  });
});

exports.getUmukino = catchAsync(async (req, res, next) => {
  const inzu = await Imikino.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Mukino Uhari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getMuzikas = catchAsync(async (req, res, next) => {
  const amazu = await Muzika.find();
  if (!amazu) {
    return next(new AppError('Nta Muzika zihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Muzika',
    amazu,
  });
});

exports.getMuzika = catchAsync(async (req, res, next) => {
  const inzu = await Muzika.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Muzika Uhari.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});
exports.getIbikinisho = catchAsync(async (req, res, next) => {
  const amazu = await IbikinishoAbana.find();
  if (!amazu) {
    return next(new AppError('Nta Bikinisho.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibikinisho Abana ',
    amazu,
  });
});

exports.getIgikinisho = catchAsync(async (req, res, next) => {
  const inzu = await IbikinishoAbana.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Gikinisho.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmazuKwis = catchAsync(async (req, res, next) => {
  const amazu = await Amazu.find();
  if (!amazu) {
    return next(new AppError('Nta Mazu.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amazu Agurishwa',
    amazu,
  });
});

exports.getAmazuKwi = catchAsync(async (req, res, next) => {
  const inzu = await Amazu.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Nzu.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getIkibanzaKwis = catchAsync(async (req, res, next) => {
  const amazu = await Ibibanza.find();
  if (!amazu) {
    return next(new AppError('Nta Bibanza Bihari.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibibanza Bigurishwa',
    amazu,
  });
});

exports.getIkibanzaKwi = catchAsync(async (req, res, next) => {
  const inzu = await Ibibanza.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Kibanza.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getImirimaKwis = catchAsync(async (req, res, next) => {
  const amazu = await Imirima.find();
  if (!amazu) {
    return next(new AppError('Nta Mirima.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imirima Igurishwa',
    amazu,
  });
});

exports.getUmurimaKwi = catchAsync(async (req, res, next) => {
  const inzu = await Imirima.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Murima.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getInzuriKwis = catchAsync(async (req, res, next) => {
  const amazu = await Inzuri.find();
  if (!amazu) {
    return next(new AppError('Nta Nzuri.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Inzuri Zigurishwa',
    amazu,
  });
});

exports.getUrwuriKwi = catchAsync(async (req, res, next) => {
  const inzu = await Inzuri.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Rwuri.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getAmashyambaKwis = catchAsync(async (req, res, next) => {
  const amazu = await Amashyamba.find();
  if (!amazu) {
    return next(new AppError('Nta Mashyamba.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amashyamba Agurishwa',
    amazu,
  });
});

exports.getIshyambaKwi = catchAsync(async (req, res, next) => {
  const inzu = await Amashyamba.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Shyamba.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getImodokaKwis = catchAsync(async (req, res, next) => {
  const amazu = await Imodoka.find();
  if (!amazu) {
    return next(new AppError('Nta Modoka.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Imodoka Zigurishwa',
    amazu,
  });
});

exports.getImodokaKwi = catchAsync(async (req, res, next) => {
  const inzu = await Imodoka.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Modoka.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getMotoKwis = catchAsync(async (req, res, next) => {
  const amazu = await Moto.find();
  if (!amazu) {
    return next(new AppError('Nta Moto.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Moto Zigurishwa',
    amazu,
  });
});

exports.getMotoKwi = catchAsync(async (req, res, next) => {
  const inzu = await Moto.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Moto.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getIbikoreshoKwis = catchAsync(async (req, res, next) => {
  const amazu = await Ibikoresho.find();
  if (!amazu) {
    return next(new AppError('Nta Bikoresho.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Ibikoresho Bigurishwa',
    amazu,
  });
});

exports.getIgikoreshoKwi = catchAsync(async (req, res, next) => {
  const inzu = await Ibikoresho.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('Nta Gikoresho.', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

exports.getOverview = catchAsync(async (req, res, next) => {
  // 1. Get tour data from collection
  const tours = await Tour.find();

  // 2. Build template

  // 3. Render that template using tour data from step 1
  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
});

exports.getAllMain = catchAsync(async (req, res, next) => {
  const main = await Main.find();
  res.status(200).render('mainSite', {
    title: 'Ihaho Group',
    main,
  });
});
// Amashuri akeneye gukosorwa

exports.getInshuke = catchAsync(async (req, res, next) => {
  return next(new AppError('There is no information yet.', 404));
});

exports.getAbanzas = catchAsync(async (req, res, next) => {
  return next(new AppError('There is no information yet.', 404));
});

exports.getAyisumbuye = catchAsync(async (req, res, next) => {
  return next(new AppError('There is no information yet.', 404));
});

exports.getKaminuzas = catchAsync(async (req, res, next) => {
  return next(new AppError('There is no information yet.', 404));
});
exports.getUbumenyis = catchAsync(async (req, res, next) => {
  return next(new AppError('There is no information yet.', 404));
});
// aha niho arangiriye

exports.getAmazu = catchAsync(async (req, res, next) => {
  const amazu = await Amazu.find();
  if (!amazu) {
    return next(new AppError('Nta Mazu.', 404));
  }
  res.status(200).render('amazu', {
    title: 'Amazu Agurishwa',
    amazu,
  });
});
exports.getInzu = catchAsync(async (req, res, next) => {
  const inzu = await Amazu.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    field: 'review rating user',
  });
  if (!inzu) {
    return next(new AppError('Nta Nzu.', 404));
  }
  res.status(200).render('inzu', {
    title: 'We the best',
    inzu,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // 1. Get the data, for the requested tour (including reviews and tour guide)
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    field: 'review rating user',
  });
  if (!tour) {
    return next(new AppError('There is no tour with that name.', 404));
  }
  // 2. Build template

  // 3. Render that template using data from step 1

  res.status(200).render('tour', {
    title: `${tour.name} Tour`,
    tour,
  });
});

exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

exports.getSignUpForm = (req, res) => {
  res.status(200).render('signup', {
    title: 'Create Your Account',
  });
};
// testing CRUD operation
// exports.getAmazuTest = catchAsync(async (req, res) => {
//   const main = await Post.find();
//   res.status(200).render('management/mainLayout', {
//     title: 'Best Test ever',
//     main,
//   });
// });

// exports.getAmazuList = catchAsync(async (req, res) => {
//   const amazu = await Post.find();
//   res.status(200).render('management/list', {
//     title: 'Amazu Yose',
//     amazu,
//   });
// });

// end of testing

exports.getAccount = catchAsync(async (req, res) => {
  const main = await Main.find();
  res.status(200).render('account', {
    title: 'your account',
    main,
  });
});

exports.getAccountTest = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account',
  });
};

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1. Find all bookings
  const bookings = await Booking.find({ user: req.user.id });

  // 2. Find tours with the returned IDs
  const tourIDs = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render('overview', {
    title: 'My Tours',
    tours,
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).render('account', {
    title: 'your account',
    user: updatedUser,
  });
});

exports.getCyamunara = catchAsync(async (req, res) => {
  const main = await Main.find();
  res.status(200).render('adminMan', {
    title: 'Manage Cyamunara',
    main,
  });
});
