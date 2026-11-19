"use strict";

const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};
const server = http.createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Invalid URL");
    return;
  }
  const file = path.resolve(root, pathname === "/" ? "index.html" : `.${pathname}`);
  if (!file.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  try {
    const content = await fs.readFile(file);
    response.writeHead(200, { "Content-Type": mimeTypes[path.extname(file)] || "application/octet-stream" });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR" || error.code === "EISDIR") {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    console.error("Unable to serve request:", error);
    response.writeHead(500);
    response.end("Internal server error");
  }
});
server.on("error", error => {
  console.error("Unable to start AS Granites:", error.message);
  process.exitCode = 1;
});
server.listen(port, "127.0.0.1", () => console.log(`AS Granites: http://127.0.0.1:${port}`));
