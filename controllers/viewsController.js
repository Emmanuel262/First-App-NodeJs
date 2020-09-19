/* eslint-disable */
const factory = require('../controllers/handlerFactory');
const Tour = require('../models/tourModel');
const Main = require('../models/mainModel');
const Booking = require('../models/bookingModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const Data = require('../models/dataModel');

// Get all available data
exports.getAllDataAvailable = catchAsync(async (req, res, next) => {
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    const amazu = await Data.find({ name: regex }).sort({
      createdAt: 'desc',
    });
    res.status(200).render('amazu', {
      title: `Search Results `,
      amazu,
    });
  }
});

//  amazu data
exports.getAmazuData = catchAsync(async (req, res, next) => {
  const identifier = 'amazu';
  const amazu = await Data.find({ identifier: 'amazu' }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mazu ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amazu Ahari',
    amazu,
  });
});

exports.getOneData = catchAsync(async (req, res, next) => {
  const inzu = await Data.findOne({ slug: req.params.slug });
  if (!inzu) {
    return next(new AppError('No data available', 404));
  }
  res.status(200).render('inzu', {
    title: `${inzu.name}`,
    inzu,
  });
});

//  Ibibanza data
exports.getIbibanzaData = catchAsync(async (req, res, next) => {
  const identifier = 'ibibanza';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta bibanza bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ibibanza Bihari',
    amazu,
  });
});

//  Imirima data
exports.getImirimaData = catchAsync(async (req, res, next) => {
  const identifier = 'imirima';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mirima ihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imirima ihari',
    amazu,
  });
});

//  Inzuri data
exports.getInzuriData = catchAsync(async (req, res, next) => {
  const identifier = 'inzuri';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta nzuri zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Inzuri zihari',
    amazu,
  });
});

//  Amashyamba data
exports.getAmashyambaData = catchAsync(async (req, res, next) => {
  const identifier = 'amashyamba';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mashyamba ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amashyamba ahari',
    amazu,
  });
});
//  Imodoka data
exports.getImodokaData = catchAsync(async (req, res, next) => {
  const identifier = 'imodoka';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta modoka zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imodoka zihari',
    amazu,
  });
});
//  Moto data
exports.getMotoData = catchAsync(async (req, res, next) => {
  const identifier = 'moto';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta moto zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Moto Zihari',
    amazu,
  });
});
//  Ibindi bikoresho data
exports.getIbikoreshoData = catchAsync(async (req, res, next) => {
  const identifier = 'ibikoresho';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta bikoresho bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ibikoresho bihari',
    amazu,
  });
});
//  Apartment  data
exports.getApartmentData = catchAsync(async (req, res, next) => {
  const identifier = 'apartment';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Apartment zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Apartment zihari',
    amazu,
  });
});
//  Rooms  data
exports.getRoomsData = catchAsync(async (req, res, next) => {
  const identifier = 'rooms';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Rooms zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Rooms zihari',
    amazu,
  });
});
//  Imirima  data
exports.getImirimaGData = catchAsync(async (req, res, next) => {
  const identifier = 'imirimag';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Imirima zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imirima zihari',
    amazu,
  });
});
//  Amashyamba  data
exports.getAmashyambaGData = catchAsync(async (req, res, next) => {
  const identifier = 'amashyambag';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Amashyamba zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amashyamba zihari',
    amazu,
  });
});
//  Imodoka  data
exports.getImodokaGData = catchAsync(async (req, res, next) => {
  const identifier = 'imodokag';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Imodoka zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imodoka zihari',
    amazu,
  });
});
//  Moto  data
exports.getMotoGData = catchAsync(async (req, res, next) => {
  const identifier = 'motog';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Moto zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Moto zihari',
    amazu,
  });
});
//  Inshuke data
exports.getInshukeData = catchAsync(async (req, res, next) => {
  const identifier = 'inshuke';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mashuri ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: "Amashuri y'inshuke",
    amazu,
  });
});
//  Abanza data
exports.getAbanzaData = catchAsync(async (req, res, next) => {
  const identifier = 'abanza';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mashuri ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amashuri Abanza',
    amazu,
  });
});
//  Ayisumbuye data
exports.getAyisumbuyeData = catchAsync(async (req, res, next) => {
  const identifier = 'ayisumbuye';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mashuri ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amashuri ayisumbuye',
    amazu,
  });
});
//  kaminuza data
exports.getKaminuzaData = catchAsync(async (req, res, next) => {
  const identifier = 'kaminuza';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mashuri ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amashuri kaminuza',
    amazu,
  });
});
//  ubumenyi ngiro data
exports.getUbumenyiData = catchAsync(async (req, res, next) => {
  const identifier = 'ubumenyingiro';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mashuri ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amashuri ubumenyi ngiro',
    amazu,
  });
});

//  Amazu Kwigurishiriza data
exports.getAmazuKData = catchAsync(async (req, res, next) => {
  const identifier = 'amazuk';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mazu ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amazu ahari yo kwigurishiriza',
    amazu,
  });
});

//  Ibibanza Kwigurishiriza data
exports.getIbibanzaKData = catchAsync(async (req, res, next) => {
  const identifier = 'ibibanzak';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Ibibanza bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ibibanza ahari byo kwigurishiriza',
    amazu,
  });
});
//  Imirima Kwigurishiriza data
exports.getImirimaKData = catchAsync(async (req, res, next) => {
  const identifier = 'imirimak';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Imirima ihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imirima ahari yo kwigurishiriza',
    amazu,
  });
});
//  Inzuri Kwigurishiriza data
exports.getInzuriKData = catchAsync(async (req, res, next) => {
  const identifier = 'inzurik';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Inzuri zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Inzuri zihari zo kwigurishiriza',
    amazu,
  });
});
//  Amashyamba Kwigurishiriza data
exports.getAmashyambaKData = catchAsync(async (req, res, next) => {
  const identifier = 'amashyambak';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Amashyamba ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amashyamba ahari',
    amazu,
  });
});
//  Imodoka Kwigurishiriza data
exports.getImodokaKData = catchAsync(async (req, res, next) => {
  const identifier = 'imodokak';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Imodoka zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imodoka zihari zo kwigurishiriza',
    amazu,
  });
});
//  Moto Kwigurishiriza data
exports.getMotoKData = catchAsync(async (req, res, next) => {
  const identifier = 'motok';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Moto zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Moto zihari zo kwigurishiriza',
    amazu,
  });
});
//  Ibindi Kwigurishiriza data
exports.getIbindiKData = catchAsync(async (req, res, next) => {
  const identifier = 'ibindi kwigurishiriza';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Ibindi bikoresho bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ibindi bihari byo kwigurishiriza',
    amazu,
  });
});
//  Artists data
exports.getArtistsData = catchAsync(async (req, res, next) => {
  const identifier = 'artists';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Artists bahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Artists bahari',
    amazu,
  });
});
//  Ubugeni data
exports.getUbugeniData = catchAsync(async (req, res, next) => {
  const identifier = 'ubugeni';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Ubugeni buhari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ubugeni buhari',
    amazu,
  });
});
//  Imikino data
exports.getImikinoData = catchAsync(async (req, res, next) => {
  const identifier = 'imikino';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta mikino ihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imikino ihari',
    amazu,
  });
});
//  Muzika data
exports.getMuzikaData = catchAsync(async (req, res, next) => {
  const identifier = 'muzika';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta muzika uhari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Muzika ihari',
    amazu,
  });
});
//  Abana data
exports.getAbanaData = catchAsync(async (req, res, next) => {
  const identifier = 'abana';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError("Nta bikinisho by'abana bihari.", 404));
  }

  res.status(200).render('amazu', {
    title: "Ibikinisho by'abana bihari",
    amazu,
  });
});
//  Imyambaro data
exports.getImyambaroData = catchAsync(async (req, res, next) => {
  const identifier = 'imyambaro';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Imyambaro ihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Imyambaro ihari',
    amazu,
  });
});
//  IbikoreshoR data
exports.getIbikoreshoRData = catchAsync(async (req, res, next) => {
  const identifier = 'ibikoreshor';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Ibikoresho made in rwanda bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ibikoresho maed in rwanda bihari',
    amazu,
  });
});

//  Amatangazo Data
exports.getArangishaData = catchAsync(async (req, res, next) => {
  const identifier = 'arangisha';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta matangazo ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amatangazo ahari',
    amazu,
  });
});

//  Amatangazo Data
exports.getAhinduraIzinaData = catchAsync(async (req, res, next) => {
  const identifier = 'ahindura';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta matangazo ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amatangazo ahari',
    amazu,
  });
});
//  Amatangazo Data
exports.getAmenyeshaData = catchAsync(async (req, res, next) => {
  const identifier = 'amenyesha';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta matangazo ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amatangazo ahari',
    amazu,
  });
});
//  Akazi Data
exports.getKurangaAkaziData = catchAsync(async (req, res, next) => {
  const identifier = 'kuranga';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta matangazo ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amatangazo akazi ahari',
    amazu,
  });
});
//  Gusaba Data
exports.getGusabaAkaziData = catchAsync(async (req, res, next) => {
  const identifier = 'gusaba';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta matangazo ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Gusaba akazi ahari',
    amazu,
  });
});
//  Impuguke Data
exports.getImpugukeData = catchAsync(async (req, res, next) => {
  const identifier = 'impuguke';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Mpuguke Ihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Impuguke Zihari',
    amazu,
  });
});
//  Impuguke Data
exports.getImpugukeKumenyekanishaData = catchAsync(async (req, res, next) => {
  const identifier = 'impugukek';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Mpuguke Ihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Impuguke Zihari',
    amazu,
  });
});
//  Iyobokamana Data
exports.getIyobokamanaData = catchAsync(async (req, res, next) => {
  const identifier = 'iyobokamana';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta makuru ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Iyobokamana',
    amazu,
  });
});
//  Transport Data
exports.getAmakamyoTransportData = catchAsync(async (req, res, next) => {
  const identifier = 'amakamyo';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta makamyo ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amakamyo ahari',
    amazu,
  });
});
//  Transport Data
exports.getBusTransportData = catchAsync(async (req, res, next) => {
  const identifier = 'bus';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Bus zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Bus zihari',
    amazu,
  });
});
//  Transport Data
exports.getMotoTransportData = catchAsync(async (req, res, next) => {
  const identifier = 'motot';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Moto zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Moto zihari',
    amazu,
  });
});

//  Transport Data
exports.getTaxVoitureTransportData = catchAsync(async (req, res, next) => {
  const identifier = 'taxvoiture';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta TaxVoiture zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'TaxVoiture zihari',
    amazu,
  });
});
//  Transport Data
exports.getFusoTransportData = catchAsync(async (req, res, next) => {
  const identifier = 'fuso';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Fuso zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Fuso zihari',
    amazu,
  });
});
//  Transport Data
exports.getDaihatsuTransportData = catchAsync(async (req, res, next) => {
  const identifier = 'daihatsu';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Daihatsu zihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Daihatsu zihari',
    amazu,
  });
});
//  Transport Data
exports.getNgoData = catchAsync(async (req, res, next) => {
  const identifier = 'ngo';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Ngo ihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ngo zihari',
    amazu,
  });
});
//  Transport Data
exports.getAbikoreraData = catchAsync(async (req, res, next) => {
  const identifier = 'abikorera';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Abikorera bahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Abikorera bahari',
    amazu,
  });
});
//  Transport Data
exports.getIbigoData = catchAsync(async (req, res, next) => {
  const identifier = 'ibigobyaleta';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Ibigo bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ibigo bihari',
    amazu,
  });
});
//  Transport Data
exports.getAmabankiData = catchAsync(async (req, res, next) => {
  const identifier = 'amabanki';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta Amabanki ahari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amabanki ahari',
    amazu,
  });
});
//  Transport Data
exports.getUbuconcoData = catchAsync(async (req, res, next) => {
  const identifier = 'ubuconco';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta buconco buhari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ubuconco buhari',
    amazu,
  });
});
//  Transport Data
exports.getIbiribwaData = catchAsync(async (req, res, next) => {
  const identifier = 'ibiribwa';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta biribwa bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Ibiribwa ahari',
    amazu,
  });
});
//  Transport Data
exports.getAmatungoData = catchAsync(async (req, res, next) => {
  const identifier = 'amatungo';
  const amazu = await Data.find({ identifier: identifier }).sort({
    createdAt: 'desc',
  });
  if (!amazu) {
    return next(new AppError('Nta matungo bihari.', 404));
  }

  res.status(200).render('amazu', {
    title: 'Amatungo ahari',
    amazu,
  });
});

exports.getAllMain = catchAsync(async (req, res, next) => {
  const main = await Main.find();
  res.status(200).render('mainSite', {
    title: 'Ihaho Group',
    main,
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
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
