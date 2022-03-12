const http = require('http');

const server =  http.createServer(
    (req, res) => {
        if (req.method === 'GET' && req.url === '/lista') {
            console.log('przyszlo GET o /lista');
            res.setHeader('Content-type', 'application/json');
            res.statusCode = 200;
            res.end(`
            [
                {
                    "id": 2,
                    "imie": "Anna",
                    "nazwisko" : "Kowlaski",
                    "wiek": 78,
                    "plec": "k"
                },
                {
                    "id": 22,
                    "imie": "Adam",
                    "nazwisko" : "Nowak",
                    "wiek": 98,
                    "plec": "m"
                },
                {
                    "id": 18,
                    "imie": "Józefa",
                    "nazwisko" : "Glinska",
                    "wiek": 18,
                    "plec": "k"
                }
            ]
            `);
        } else {
            res.statusCode = 404;
            console.log('Nieznane zapytanie');
            res.end(`Nieznane zapytanie`);
        }
    }
);

server.listen(3200, '127.0.0.1', () => {
    console.log('mock server zostal uruchomiony');
})