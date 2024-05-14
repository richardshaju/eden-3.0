import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import * as authController from "./controllers/auth.js"; 
import * as companyController from "./controllers/company.js"; 
import * as employeeController from "./controllers/employee.js"; 


// Configurations
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post('/signup', async(req, res) => {
  const result = await authController.signup(req.body);
  res.send(result)
})

app.post('/login', async(req, res) => {
  const result = await authController.login(req.body);
  res.send(result)
})

app.post('/createcompany', async(req, res) => {
  const result = await companyController.createCompany(req.body);
  res.send(result)
})

app.get('/getcompanies/:id', async(req, res) => {
  const id = req.params.id;
  const result = await companyController.getCompanies(id);
  res.send(result);
});

app.post('/joincompany', async(req, res) => {
  const result = await companyController.joinCompany(req.body);
  res.send(result);
});
app.post('/jointhecompany', async(req, res) => {
  const result = await companyController.joinTheParticularCompany(req.body);
  res.send(result); 
});

app.get('/fetchcompany/:id', async(req, res) => {
  const id = req.params.id;
  const result = await companyController.fetchCompany(id);
  res.send(result);
});

app.put('/updateemployee', async(req, res) => {
  const result = await employeeController.updateEmployee(req.body);
  console.log(result);
  res.send(result);
});









const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

  export default app