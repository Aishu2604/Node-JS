const http = require("http");

// function reqListener(req,res)
// {

// }

// http.createServer(reqListener)

const server = http.createServer(function (req, res) {
  // console.log(req.url,req.method,req.headers)
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`<html>    
        <head>
            <title>
                My First Page
            </title>
        </head>
        <body>
            <h1>Welcome Aishwary Nigam</h1>
        </body>
    </html>`);
    return res.end(); // res.end() tells the node that our code ends here, below this if we agin write res.write(), it will give error,also here we are using return because here we want to stop the code and it will not execute further below. Otherwise it will also execute content of another url
  }

  if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
            <head>
                <title>
                    My First Page
                </title>
            </head>
            <body>
                <h1>Hi Aishwary</h1>
                <p> Welcome to Home Page</p>
            </body>
        </html>`);
    return res.end();
  }

  if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
            <head>
                <title>
                    My First Page
                </title>
            </head>
            <body>
                <h1>Hey! Aishwary</h1>
                <p> Welcome to About Page</p>
            </body>
        </html>`);
    return res.end();
  }
  if (req.url === "/node") {
    res.setHeader("Content-Type", "text/html");

    res.write(`<html>
        <head>
            <title>
                My First Page
            </title>
        </head>
        <body>
            <h1>Wonderful Aishwary</h1>
            <p>Welcome to Node Page</p>
        </body>
    </html>`);
    res.end();
  }
});

server.listen(4000);
