import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = 10003;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "server/views"));

app.get("/", (request: Request, response: Response) => {
	response.render("pages/index.ejs");
});

app.get("/generate", (request: Request, response: Response) => {
	response.render("pages/generate.ejs");
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
