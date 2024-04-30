router.get('/', (req, res) => {
    res.redirect('../pages/login.html');
});

// Path: /pages/login.html
router.get('/pages/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/login.html'));
});

// Path: /pages/userRegistration.html
router.get('/pages/userRegistration.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/userRegistration.html'));
});

// Path: /pages/recuperarContrasena.html
router.get('/pages/recuperarContrasena.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/recuperarContrasena.html'));
});

// Path: /pages/dashboard.html
router.get('/pages/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/dashboard.html'));
});