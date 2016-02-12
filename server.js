(()=>{
    "use strict";
    const express = require('express'),
        app = express();

    app.use(express.static('./dist'));

    app.use('/', (req, res)=>{
        "use strict";
        res.sendFile(process.cwd() + '/client/html/index.html');
    });

    const port = process.env.PORT || 3000;
    app.listen(port, ()=>{
        "use strict";
        console.log('App listening on port: '+port);
    });
})();