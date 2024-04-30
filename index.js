router.get('/', (req, res) => {
    res.redirect('/pages/login.html');
});

// Path: /pages/login.html
router.get('/pages/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/login.html'));
});

// Path: /pages/userRegistration.html
router.get('/pages/userRegistration.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/userRegistration.html'));
});

// Path: /pages/recuperarContrasena.html
router.get('/pages/recuperarContrasena.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/recuperarContrasena.html'));
});

// Path: /pages/dashboard.html
router.get('/pages/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/pages/dashboard.html'));
});