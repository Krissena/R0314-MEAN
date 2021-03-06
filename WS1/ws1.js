var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`\   
    <html>\n
		<head>\n
			<style type=text/css>\n
				th,td {border-color:black;border-style:solid;border-width:1px;}\n
			</style>\n
        </head>\n
        <body>\n
            <table style="width:400px;border-color:black;border-style:solid;border-width:1px">\n
				<tr>\
                    <th>Name</th>\
                    <th>Item</th> \
                    <th>Material</th>\
                </tr>\
                <tr>\
                    <td>Tom</td>\
                    <td>Shirt</td>\
                    <td>Cotton</td>\
                </tr>\
                <tr>\
                    <td>Matt</td>\
                    <td>Pants</td>\
                    <td><a href="https://en.wikipedia.org/wiki/Wool">wool</a></td>\
                </tr>\
                <tr>\
                    <td>John</td>\
                    <td>Jacket</td>\
                    <td>cashmere wool</a></td>\
                </tr>\
            </table>\
        </body>\
    </html>
    `);
    response.end();
  })
  .listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
