/* eslint-disable */

const express = require('express');
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');
const adminFactory = require('../controllers/adminFactory');
const Data = require('../models/dataModel');
const catchAsync = require('../utils/catchAsync');

const router = express.Router();

router.use(authController.isLoggedIn);
router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router.get('/', async (req, res) => {
  const data = await Data.find();
  res.render('admin/mainAdmin', { data });
});
// Admin for Amazu
router.get('/amazu/new', adminFactory.renderNew);
router.get('/amazu/:slug', adminFactory.getOneData);
router.get('/amazu/edit/:id', adminFactory.renderEdit);
router.post('/', adminFactory.createData, saveDataAndRedirect('new'));
router.put('/amazu/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/amazu/:id', adminFactory.deleteData);
// Admin for ibibanza
router.put(
  '/ibibanza/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ibibanza/:id', adminFactory.deleteData);
router.get('/ibibanza/:slug', adminFactory.getOneData);
router.get('/ibibanza/edit/:id', adminFactory.renderEdit);

// Admin for imirima
router.put(
  '/imirima/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imirima/:id', adminFactory.deleteData);
router.get('/imirima/:slug', adminFactory.getOneData);
router.get('/imirima/edit/:id', adminFactory.renderEdit);

// Admin for inzuri
router.put('/inzuri/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/inzuri/:id', adminFactory.deleteData);
router.get('/inzuri/:slug', adminFactory.getOneData);
router.get('/inzuri/edit/:id', adminFactory.renderEdit);

// Admin for amashyamba
router.put(
  '/amashyamba/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/amashyamba/:id', adminFactory.deleteData);
router.get('/amashyamba/:slug', adminFactory.getOneData);
router.get('/amashyamba/edit/:id', adminFactory.renderEdit);

// Admin for imodoka
router.put(
  '/imodoka/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imodoka/:id', adminFactory.deleteData);
router.get('/imodoka/:slug', adminFactory.getOneData);
router.get('/imodoka/edit/:id', adminFactory.renderEdit);

// Admin for moto
router.put('/moto/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/moto/:id', adminFactory.deleteData);
router.get('/moto/:slug', adminFactory.getOneData);
router.get('/moto/edit/:id', adminFactory.renderEdit);

// Admin for ibikoresho
router.put(
  '/ibikoresho/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ibikoresho/:id', adminFactory.deleteData);
router.get('/ibikoresho/:slug', adminFactory.getOneData);
router.get('/ibikoresho/edit/:id', adminFactory.renderEdit);
// Admin for apartment
router.put(
  '/apartment/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/apartment/:id', adminFactory.deleteData);
router.get('/apartment/:slug', adminFactory.getOneData);
router.get('/apartment/edit/:id', adminFactory.renderEdit);
// Admin for rooms
router.put('/rooms/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/rooms/:id', adminFactory.deleteData);
router.get('/rooms/:slug', adminFactory.getOneData);
router.get('/rooms/edit/:id', adminFactory.renderEdit);
// Admin for imirima-gukodesha
router.put(
  '/imirimag/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imirimag/:id', adminFactory.deleteData);
router.get('/imirimag/:slug', adminFactory.getOneData);
router.get('/imirimag/edit/:id', adminFactory.renderEdit);
// Admin for amashyambag
router.put(
  '/amashyambag/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/amashyambag/:id', adminFactory.deleteData);
router.get('/amashyambag/:slug', adminFactory.getOneData);
router.get('/amashyambag/edit/:id', adminFactory.renderEdit);
// Admin for imodokag
router.put(
  '/imodokag/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imodokag/:id', adminFactory.deleteData);
router.get('/imodokag/:slug', adminFactory.getOneData);
router.get('/imodokag/edit/:id', adminFactory.renderEdit);

// Admin for moto-gukodesha
router.put('/motog/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/motog/:id', adminFactory.deleteData);
router.get('/motog/:slug', adminFactory.getOneData);
router.get('/motog/edit/:id', adminFactory.renderEdit);
// Admin for Amashuri
router.put(
  '/inshuke/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/inshuke/:id', adminFactory.deleteData);
router.get('/inshuke/:slug', adminFactory.getOneData);
router.get('/inshuke/edit/:id', adminFactory.renderEdit);
// Admin for Amashuri
router.put('/abanza/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/abanza/:id', adminFactory.deleteData);
router.get('/abanza/:slug', adminFactory.getOneData);
router.get('/abanza/edit/:id', adminFactory.renderEdit);

// Admin for Amashuri
router.put(
  '/ayisumbuye/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ayisumbuye/:id', adminFactory.deleteData);
router.get('/ayisumbuye/:slug', adminFactory.getOneData);
router.get('/ayisumbuye/edit/:id', adminFactory.renderEdit);
// Admin for Amashuri
router.put(
  '/kaminuza/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/kaminuza/:id', adminFactory.deleteData);
router.get('/kaminuza/:slug', adminFactory.getOneData);
router.get('/kaminuza/edit/:id', adminFactory.renderEdit);
// Admin for Amashuri
router.put(
  '/ubumenyingiro/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ubumenyingiro/:id', adminFactory.deleteData);
router.get('/ubumenyingiro/:slug', adminFactory.getOneData);
router.get('/ubumenyingiro/edit/:id', adminFactory.renderEdit);
// Admin for Kwigurishiriza
router.put('/amazuk/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/amazuk/:id', adminFactory.deleteData);
router.get('/amazuk/:slug', adminFactory.getOneData);
router.get('/amazuk/edit/:id', adminFactory.renderEdit);
// Admin for Kwigurishiriza
router.put(
  '/ibibanzak/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ibibanzak/:id', adminFactory.deleteData);
router.get('/ibibanzak/:slug', adminFactory.getOneData);
router.get('/ibibanzak/edit/:id', adminFactory.renderEdit);
// Admin for Kwigurishiriza
router.put(
  '/imirimak/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imirimak/:id', adminFactory.deleteData);
router.get('/imirimak/:slug', adminFactory.getOneData);
router.get('/imirimak/edit/:id', adminFactory.renderEdit);
// Admin for Kwigurishiriza
router.put(
  '/inzurik/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/inzurik/:id', adminFactory.deleteData);
router.get('/inzurik/:slug', adminFactory.getOneData);
router.get('/inzurik/edit/:id', adminFactory.renderEdit);
// Admin for Kwigurishiriza
router.put(
  '/amashyambak/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/amashyambak/:id', adminFactory.deleteData);
router.get('/amashyambak/:slug', adminFactory.getOneData);
router.get('/amashyambak/edit/:id', adminFactory.renderEdit);
// Admin for Kwigurishiriza
router.put(
  '/imodokak/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imodokak/:id', adminFactory.deleteData);
router.get('/imodokak/:slug', adminFactory.getOneData);
router.get('/imodokak/edit/:id', adminFactory.renderEdit);
// Admin for Kwigurishiriza
router.put('/motok/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/motok/:id', adminFactory.deleteData);
router.get('/motok/:slug', adminFactory.getOneData);
router.get('/motok/edit/:id', adminFactory.renderEdit);
// Admin for Imyidagaduro
router.put('/motok/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/motok/:id', adminFactory.deleteData);
router.get('/motok/:slug', adminFactory.getOneData);
router.get('/motok/edit/:id', adminFactory.renderEdit);

// Admin for Imyidagaduro
router.put(
  '/ubugeni/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ubugeni/:id', adminFactory.deleteData);
router.get('/ubugeni/:slug', adminFactory.getOneData);
router.get('/ubugeni/edit/:id', adminFactory.renderEdit);
// Admin for Imyidagaduro
router.put(
  '/imikino/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imikino/:id', adminFactory.deleteData);
router.get('/imikino/:slug', adminFactory.getOneData);
router.get('/imikino/edit/:id', adminFactory.renderEdit);
// Admin for Imyidagaduro
router.put('/muzika/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/muzika/:id', adminFactory.deleteData);
router.get('/muzika/:slug', adminFactory.getOneData);
router.get('/muzika/edit/:id', adminFactory.renderEdit);
// Admin for Imyidagaduro
router.put('/abana/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/abana/:id', adminFactory.deleteData);
router.get('/abana/:slug', adminFactory.getOneData);
router.get('/abana/edit/:id', adminFactory.renderEdit);
// Admin for made in rwanda
router.put(
  '/artists/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/artists/:id', adminFactory.deleteData);
router.get('/artists/:slug', adminFactory.getOneData);
router.get('/artists/edit/:id', adminFactory.renderEdit);
// Admin for made in rwanda
router.put(
  '/imyambaro/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/imyambaro/:id', adminFactory.deleteData);
router.get('/imyambaro/:slug', adminFactory.getOneData);
router.get('/imyambaro/edit/:id', adminFactory.renderEdit);
// Admin for made in rwanda
router.put(
  '/ibikoreshor/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ibikoreshor/:id', adminFactory.deleteData);
router.get('/ibikoreshor/:slug', adminFactory.getOneData);
router.get('/ibikoreshor/edit/:id', adminFactory.renderEdit);

// Admin for Amatangazo
router.put(
  '/arangisha/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/arangisha/:id', adminFactory.deleteData);
router.get('/arangisha/:slug', adminFactory.getOneData);
router.get('/arangisha/edit/:id', adminFactory.renderEdit);

// Admin for Amatangazo
router.put(
  '/ahindura/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ahindura/:id', adminFactory.deleteData);
router.get('/ahindura/:slug', adminFactory.getOneData);
router.get('/ahindura/edit/:id', adminFactory.renderEdit);
// Admin for Amatangazo
router.put(
  '/amenyesha/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/amenyesha/:id', adminFactory.deleteData);
router.get('/amenyesha/:slug', adminFactory.getOneData);
router.get('/amenyesha/edit/:id', adminFactory.renderEdit);

// Admin for Akazi
router.put(
  '/kuranga/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/kuranga/:id', adminFactory.deleteData);
router.get('/kuranga/:slug', adminFactory.getOneData);
router.get('/kuranga/edit/:id', adminFactory.renderEdit);
// Admin for Akazi
router.put('/gusaba/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/gusaba/:id', adminFactory.deleteData);
router.get('/gusaba/:slug', adminFactory.getOneData);
router.get('/gusaba/edit/:id', adminFactory.renderEdit);

// Admin for Impuguke
router.put(
  '/impuguke/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/impuguke/:id', adminFactory.deleteData);
router.get('/impuguke/:slug', adminFactory.getOneData);
router.get('/impuguke/edit/:id', adminFactory.renderEdit);
// Admin for Impuguke
router.put(
  '/impugukek/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/impugukek/:id', adminFactory.deleteData);
router.get('/impugukek/:slug', adminFactory.getOneData);
router.get('/impugukek/edit/:id', adminFactory.renderEdit);

// Admin for Iyobokamana
router.put(
  '/iyobokamana/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/iyobokamana/:id', adminFactory.deleteData);
router.get('/iyobokamana/:slug', adminFactory.getOneData);
router.get('/iyobokamana/edit/:id', adminFactory.renderEdit);

// Admin for Transport
router.put(
  '/amakamyo/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/amakamyo/:id', adminFactory.deleteData);
router.get('/amakamyo/:slug', adminFactory.getOneData);
router.get('/amakamyo/edit/:id', adminFactory.renderEdit);
// Admin for Transport
router.put('/bus/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/bus/:id', adminFactory.deleteData);
router.get('/bus/:slug', adminFactory.getOneData);
router.get('/bus/edit/:id', adminFactory.renderEdit);
// Admin for Transport
router.put('/motot/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/motot/:id', adminFactory.deleteData);
router.get('/motot/:slug', adminFactory.getOneData);
router.get('/motot/edit/:id', adminFactory.renderEdit);
// Admin for Transport
router.put(
  '/taxvoiture/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/taxvoiture/:id', adminFactory.deleteData);
router.get('/taxvoiture/:slug', adminFactory.getOneData);
router.get('/taxvoiture/edit/:id', adminFactory.renderEdit);
// Admin for Transport
router.put('/fuso/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/fuso/:id', adminFactory.deleteData);
router.get('/fuso/:slug', adminFactory.getOneData);
router.get('/fuso/edit/:id', adminFactory.renderEdit);
// Admin for Transport
router.put(
  '/daihatsu/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/daihatsu/:id', adminFactory.deleteData);
router.get('/daihatsu/:slug', adminFactory.getOneData);
router.get('/daihatsu/edit/:id', adminFactory.renderEdit);

// Admin for Inkunga
router.put('/ngo/:id', adminFactory.updateData, saveDataAndRedirect('edit'));
router.delete('/ngo/:id', adminFactory.deleteData);
router.get('/ngo/:slug', adminFactory.getOneData);
router.get('/ngo/edit/:id', adminFactory.renderEdit);
// Admin for Inkunga
router.put(
  '/abikorera/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/abikorera/:id', adminFactory.deleteData);
router.get('/abikorera/:slug', adminFactory.getOneData);
router.get('/abikorera/edit/:id', adminFactory.renderEdit);
// Admin for Inkunga
router.put(
  '/ibigobyaleta/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ibigobyaleta/:id', adminFactory.deleteData);
router.get('/ibigobyaleta/:slug', adminFactory.getOneData);
router.get('/ibigobyaleta/edit/:id', adminFactory.renderEdit);
// Admin for Inkunga
router.put(
  '/amabanki/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/amabanki/:id', adminFactory.deleteData);
router.get('/amabanki/:slug', adminFactory.getOneData);
router.get('/amabanki/edit/:id', adminFactory.renderEdit);

// Admin for Isoko
router.put(
  '/ubuconco/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ubuconco/:id', adminFactory.deleteData);
router.get('/ubuconco/:slug', adminFactory.getOneData);
router.get('/ubuconco/edit/:id', adminFactory.renderEdit);
// Admin for Isoko
router.put(
  '/ibiribwa/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/ibiribwa/:id', adminFactory.deleteData);
router.get('/ibiribwa/:slug', adminFactory.getOneData);
router.get('/ibiribwa/edit/:id', adminFactory.renderEdit);
// Admin for Isoko
router.put(
  '/amatungo/:id',
  adminFactory.updateData,
  saveDataAndRedirect('edit')
);
router.delete('/amatungo/:id', adminFactory.deleteData);
router.get('/amatungo/:slug', adminFactory.getOneData);
router.get('/amatungo/edit/:id', adminFactory.renderEdit);

function saveDataAndRedirect(path) {
  return catchAsync(async (req, res) => {
    let data = req.data;
    data.name = req.body.name;
    data.summary = req.body.summary;
    data.description = req.body.description;
    data.cost = req.body.cost;
    data.size = req.body.size;
    data.nationality = req.body.nationality;
    data.intara = req.body.intara;
    data.identifier = req.body.identifier;
    data.akarere = req.body.akarere;
    data.umurenge = req.body.umurenge;
    data.owner = req.body.owner;
    data.akagari = req.body.akagari;
    data.videoLink = req.body.videoLink;
    data.imageCover = req.body.imageCover;

    try {
      data = await data.save();
      res.redirect(`/admin`);
    } catch (err) {
      console.log(err);
      res.render(`admin/${path}`, { data });
    }
  });
}

module.exports = router;