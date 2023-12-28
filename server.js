// server.js
const express = require('express');
const next = require('next');
const apiRoutes = require('./routes/apiRoutes'); // Import your separate route file
const testRoutes = require('./routes/newtest')
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Use your separate route file
    server.use('/api', apiRoutes);
    server.use('/test',testRoutes);

    // Default Next.js handler
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
});
