router.get('/ihaho', authController.isLoggedIn, viewsController.getAllMain);

router.get('/ihaho/amazu', authController.isLoggedIn, viewsController.getAmazu);
router.get(
  '/ihaho/amazu/:slug',
  authController.isLoggedIn,
  viewsController.getInzu
);

router.get(
  '/ihaho/apartment',
  //   authController.isLoggedIn,
  viewsController.getApartments
);
router.get(
  '/ihaho/apartment/:slug',
  //   authController.isLoggedIn,
  viewsController.getApartment
);

router.get(
  '/ihaho/ibibanza',
  //   authController.isLoggedIn,
  viewsController.getIbibanza
);
router.get(
  '/ihaho/ibibanza/:slug',
  authController.isLoggedIn,
  viewsController.getIkibanza
);

router.get('/ihaho/imirima', viewsController.getImirima);
router.get('/ihaho/imirima/:slug', viewsController.getUmurima);

router.get('/ihaho/inzuri', viewsController.getInzuri);
router.get('/ihaho/inzuri/:slug', viewsController.getUrwuri);

router.get('/ihaho/amashyamba', viewsController.getAmashyamba);
router.get('/ihaho/amashyamba/:slug', viewsController.getIshyamba);

router.get('/ihaho/imodoka', viewsController.getAmamodoka);
router.get('/ihaho/imodoka/:slug', viewsController.getImodoka);

router.get('/ihaho/moto', viewsController.getMotos);
router.get('/ihaho/moto/:slug', viewsController.getMoto);

router.get('/ihaho/ibikoresho', viewsController.getIbikoresho);
router.get('/ihaho/ibikoresho/:slug', viewsController.getIgikoresho);

router.get('/ihaho/rooms', viewsController.getRooms);
router.get('/ihaho/rooms/:slug', viewsController.getRoom);

router.get('/ihaho/imirima-gukodesha', viewsController.getImirimaG);
router.get('/ihaho/imirima-gukodesha/:slug', viewsController.getUmurimaG);

router.get('/ihaho/amashyamba-gukodesha', viewsController.getAmashyambaG);
router.get('/ihaho/amashyamba-gukodesha/:slug', viewsController.getIshyambaG);

router.get('/ihaho/imodokas-gukodesha', viewsController.getImodokaGs);
router.get('/ihaho/imodokas-gukodesha/:slug', viewsController.getImodokaG);

router.get('/ihaho/motos-gukodesha', viewsController.getMotoGs);
router.get('/ihaho/motos-gukodesha/:slug', viewsController.getMotoG);

router.get('/ihaho/inshuke', viewsController.getInshuke);
// router.get('/ihaho/inshuke/:slug', viewsController.getInshuke);

router.get('/ihaho/abanza', viewsController.getAbanzas);
// router.get('/ihaho/abanza/:slug', viewsController.getAbanza);

router.get('/ihaho/ayisumbuye', viewsController.getAyisumbuye);
// router.get('/ihaho/ayisumbuye/:slug', viewsController.getIryisumbuye);

router.get('/ihaho/kaminuza', viewsController.getKaminuzas);
// router.get('/ihaho/kaminuza/:slug', viewsController.getKaminuza);

router.get('/ihaho/ubumeny-ngiro', viewsController.getUbumenyis);
// router.get('/ihaho/ubumenyi/:slug', viewsController.getUbumenyi);

router.get('/ihaho/arangisha', viewsController.getArangisha);
router.get('/ihaho/arangisha/:slug', viewsController.getRangira);

router.get('/ihaho/ahindura', viewsController.getAhindura);
router.get('/ihaho/ahindura/:slug', viewsController.getRihindura);

router.get('/ihaho/amenyesha', viewsController.getAmenyesha);
router.get('/ihaho/amenyesha/:slug', viewsController.getRimenyesha);

router.get('/ihaho/ubuconco', viewsController.getUbuconco);
router.get('/ihaho/ubuconco/:slug', viewsController.getAgaconco);

router.get('/ihaho/ibiribwa', viewsController.getIbiribwa);
router.get('/ihaho/ibiribwa/:slug', viewsController.getIkiribwa);

router.get('/ihaho/amatungo', viewsController.getAmatungo);
router.get('/ihaho/amatungo/:slug', viewsController.getItungo);

router.get('/ihaho/ngo', viewsController.getNgos);
router.get('/ihaho/ngo/:slug', viewsController.getNgo);

router.get('/ihaho/abikorera', viewsController.getAbikorera);
router.get('/ihaho/abikorera/:slug', viewsController.getUwikorera);

router.get('/ihaho/ibigo-bya-leta', viewsController.getIbigo);
router.get('/ihaho/ibigo-bya-leta/:slug', viewsController.getIkigo);

router.get('/ihaho/amabanki', viewsController.getAmabanki);
router.get('/ihaho/amabanki/:slug', viewsController.getBanki);

router.get('/ihaho/fuso', viewsController.getFusos);
router.get('/ihaho/fuso/:slug', viewsController.getFuso);

router.get('/ihaho/daihatsu', viewsController.getDaihatsus);
router.get('/ihaho/daihatsu/:slug', viewsController.getDaihatsu);

router.get('/ihaho/tax-voiture', viewsController.getTaxVoitures);
router.get('/ihaho/tax-voiture/:slug', viewsController.getTaxVoiture);

router.get('/ihaho/moto-transport', viewsController.getMotoTransports);
router.get('/ihaho/moto-transport/:slug', viewsController.getMotoTransport);

router.get('/ihaho/amakamyo', viewsController.getAmakamyo);
router.get('/ihaho/amakamyo/:slug', viewsController.getIkamyo);

router.get('/ihaho/ibikorwa', viewsController.getIbikorwa);
router.get('/ihaho/ibikorwa/:slug', viewsController.getIgikorwa);

router.get('/ihaho/impuguke', viewsController.getImpugukes);
router.get('/ihaho/impuguke/:slug', viewsController.getImpuguke);

router.get(
  '/ihaho/kumenyekanisha-impuguke',
  viewsController.getKumenyekanishaImpugukes
);
router.get(
  '/ihaho/kumenyekanisha-impuguke/:slug',
  viewsController.getKumenyekanishaImpuguke
);

router.get('/ihaho/gusaba-impuguke', viewsController.getGusabaImpugukes);
router.get('/ihaho/gusaba-impuguke/:slug', viewsController.getGusabaImpuguke);

router.get('/ihaho/kuranga-akazi', viewsController.getKurangaAkazis);
router.get('/ihaho/kuranga-akazi/:slug', viewsController.getKurangaAkazi);

router.get('/ihaho/gusaba-akazi', viewsController.getGusabaAkazis);
router.get('/ihaho/gusaba-akazi/:slug', viewsController.getGusabaAkazi);

router.get(
  '/ihaho/ibikoresho-made-in-rwanda',
  viewsController.getMadeInRwandaIbikoreshos
);
router.get(
  '/ihaho/ibikoresho-made-in-rwanda/:slug',
  viewsController.getMadeInRwandaIgikoresho
);

router.get('/ihaho/made-in-rwanda-imyambaro', viewsController.getImyambaro);
router.get(
  '/ihaho/made-in-rwanda-imyambaro/:slug',
  viewsController.getUmwambaro
);

router.get('/ihaho/made-in-rwanda-artists', viewsController.getArtists);
router.get('/ihaho/made-in-rwanda-artists/:slug', viewsController.getArt);

router.get('/ihaho/ubugeni', viewsController.getUbugenis);
router.get('/ihaho/ubugeni/:slug', viewsController.getUbugeni);

router.get('/ihaho/imikino', viewsController.getImikino);
router.get('/ihaho/imikino/:slug', viewsController.getUmukino);

router.get('/ihaho/muzika', viewsController.getMuzikas);
router.get('/ihaho/muzika/:slug', viewsController.getMuzika);

router.get('/ihaho/ibikinisho-by-abana', viewsController.getIbikinisho);
router.get('/ihaho/ibikinisho-by-abana/:slug', viewsController.getIgikinisho);

router.get('/ihaho/amazu-kwi', viewsController.getAmazuKwis);
router.get('/ihaho/amazu-kwi/:slug', viewsController.getAmazuKwi);

router.get('/ihaho/ibibanza-kwi', viewsController.getIkibanzaKwis);
router.get('/ihaho/ibibanza-kwi/:slug', viewsController.getIkibanzaKwi);

router.get('/ihaho/imirima-kwi', viewsController.getImirimaKwis);
router.get('/ihaho/imirima-kwi/:slug', viewsController.getUmurimaKwi);

router.get('/ihaho/inzuri-kwi', viewsController.getInzuriKwis);
router.get('/ihaho/inzuri-kwi/:slug', viewsController.getUrwuriKwi);

router.get('/ihaho/amashyamba-kwi', viewsController.getAmashyambaKwis);
router.get('/ihaho/amashyamba-kwi/:slug', viewsController.getIshyambaKwi);

router.get('/ihaho/imodoka-kwi', viewsController.getImodokaKwis);
router.get('/ihaho/imodoka-kwi/:slug', viewsController.getImodokaKwi);

router.get('/ihaho/moto-kwi', viewsController.getMotoKwis);
router.get('/ihaho/moto-kwi/:slug', viewsController.getMotoKwi);

router.get('/ihaho/ibikoresho-kwi', viewsController.getIbikoreshoKwis);
router.get('/ihaho/ibikoresho-kwi/:slug', viewsController.getIgikoreshoKwi);

// router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', viewsController.getSignUpForm);
router.get('/me', authController.protect, viewsController.getAccount);
// router.get('/my-tours', authController.protect, viewsController.getMyTours);

router.get('/amazu', authController.isLoggedIn, viewsController.getCyamunara);
router.get('/imirima', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/ibibanza',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/inzuri', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/amashyamba-ya-cyamunara',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/moto', authController.isLoggedIn, viewsController.getCyamunara);
router.get('/imodoka', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/ibindi-bikoresho',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/amashyamba',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/rooms', authController.isLoggedIn, viewsController.getCyamunara);
router.get('/inshuke', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/ubumenyi-ngiro',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  "/ibikinsho-by'abana",
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/apartment',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/arangisha',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/ibindi', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/gusaba-impuguke',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/kaminuza',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/bus', authController.isLoggedIn, viewsController.getCyamunara);
router.get('/muzika', authController.isLoggedIn, viewsController.getCyamunara);
router.get('/ngo', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/ibikoresho',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/abanza', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/ibiribwa',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/gusaba-akazi',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/ubugeni', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/amakamyo',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/artists', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/daihatsu',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/amenyesha',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/ayisumbuye',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/ubuconco',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/impuguke',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/imikino', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/tax-voiture',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/imyambaro',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/ibigo-bya-leta',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/kuranga-akazi',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/ibindi', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/ibikorwa',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get('/fuso', authController.isLoggedIn, viewsController.getCyamunara);
router.get(
  '/ahindura-izina',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/amabanki',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/kumenyekanisha',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
router.get(
  '/abikorera',
  authController.isLoggedIn,
  viewsController.getCyamunara
);
// router.get(
//   '/test-list',
//   authController.isLoggedIn,
//   viewsController.getCyamunara
// );
