const express = require('express'),
      router  = express.Router(),
      apiController     = require('./controllers/api.controller'    ),
      mainController    = require('./controllers/main.controller'   ),
      profileController = require('./controllers/profile.controller'),
      adminController   = require('./controllers/admin.controller'  );

module.exports = router;

//Handled by apiController
router.route('/api/:id')
      .get(apiController.readUser)
      .put(apiController.updateUser)
      .delete(apiController.removeUser);

router.get('/api/users', apiController.getAllUsers);
router.post('/api/:fn/:ln/:em/:pw/', apiController.createUser);

//Handled by mainController
router.get('/');
router.get('/about');
router.get('/contact');

//Handled by profileController
router.route('/:id')
      .get()
      .put()
      .delete();

router.post('/:id/approve');
router.post('/:id/homeless');

//Handled by adminController
router.route('/admin/:id')
      .get()
      .post()


router.get('/admin');
