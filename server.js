import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const port = 8080;

const mimeTypes = {
  ".html":"text/html",
  ".js":"text/javascript",
  ".css":"text/css",
  ".json":"application/json"
};

http.createServer((req,res)=>{
  const filePath = path.join(__dirname, req.url === "/" ? "index.html" : req.url);
  fs.readFile(filePath,(err,data)=>{
    if(err){
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath);
    res.writeHead(200, {"Content-Type": mimeTypes[ext] || "text/plain"});
    res.end(data);
  });
}).listen(port,()=>console.log("Running on http://localhost:8080"));
