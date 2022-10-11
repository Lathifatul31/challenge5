// const express = require("express");
// const router = express.Router();
// const Validator = require("fastest-validator");
// const v = new Validator();
// const path = require("path");
// const fs = require("fs");
// const { Car } = require("../models/index");
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const saveCarData = (data) => {
//   const stringifyData = JSON.stringify(data);
//   fs.writeFileSync(dataPath, stringifyData);
// };
// const getCarData = () => {
//   const jsonData = fs.readFileSync(dataPath);
//   return JSON.parse(jsonData);
// };

// const carRoute = require("./car.js");
// router.use(carRoute);

// // carRoute.post("/cars", async (req, res) => {
// //   if (req.body.ukuran === "Small") {
// //     req.body.type = "Home Car";
// //   } else if (req.body.ukuran === "Medium") {
// //     req.body.type = "Rare Car";
// //   } else if (req.body.ukuran === "Large") {
// //     req.body.type = "SUV";
// //   }
// //   await Car.create({
// //     name: req.body.nama,
// //     type: req.body.type,
// //     price: req.body.harga,
// //     image: req.body.gambar,
// //     size: req.body.ukuran,
// //     createdAt: new Date(),
// //     updatedAt: new Date(),
// //   });

// //   res.redirect("/cars/list");
// // });

// carRoute.post("/cars", async (req, res) => {
//   if (!req.files) return res.status(400).json({ msg: "No File Uploaded" });
//   console.log(req);
//   const nama = req.body.nama;
//   const harga = req.body.harga;
//   const ukuran = req.body.ukuran;
//   const file = req.files.gambar;
//   const fileSize = file.size;
//   const ext = path.extname(file.name);
//   const fileName = file.md5 + ext;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   const allowedType = [".png", ".jpg", ".jpeg"];

//   const schema = {
//     nama: { type: "string", min: 3, max: 50 },
//     harga: { type: "string", min: 3, max: 50 },
//     harga: { type: "string", min: 3, max: 50 },
//     gambar: { type: "string", min: 3, max: 255 },
//   };
//   const validate = v.compile(schema);
//   const valid = validate({ nama: nama, harga: harga, ukuran: ukuran, gambar: url });

//   if (valid) {
//     if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
//     if (fileSize > 2000000) return res.status(422).json({ msg: "Image must be less than 2 MB" });

//     file.mv(`./public/images/${fileName}`, async (err) => {
//       if (err) return res.status(500).json({ msg: err.message });
//       try {
//         await Car.create({ name: nama, price: harga, type: ukuran, image: url });
//         res.status(201).json({ msg: "Cars Created Successfuly" });
//       } catch (error) {
//         console.log(error.message);
//       }
//     });
//   } else {
//     res.status(400).json({ error: valid });
//   }
// });

// carRoute.get("/cars/list", async (req, res) => {
//   const data = await Car.findAll();
//   const cars = JSON.parse(JSON.stringify(data));
//   let newCars = cars.map((car) => {
//     let day = new Date(car.updatedAt).getDay();
//     let month = months[new Date(car.updatedAt).getMonth()];
//     let year = new Date(car.updatedAt).getFullYear();
//     let hour = new Date(car.updatedAt).getHours();
//     let minute = new Date(car.updatedAt).getMinutes();
//     return { ...car, day, month, year, hour, minute };
//   });

//   res.render("cars", { layout: "layouts/app", newCars });
// });

// carRoute.get("/cars/add", (req, res) => {
//   res.render("addNewCar", { layout: "layouts/app" });
// });

// carRoute.get("/cars/list/:size", async (req, res) => {
//   const data = await car.findAll({
//     where: { size: req.params.size },
//   });
//   res.render("cars", { layout: "layouts/app" });
// });

// carRoute.get("/cars/edit/:id", async (req, res) => {
//   const car = await Car.findByPk(req.params.id);
//   res.render("editCar", { layout: "layouts/app", car });
// });

// carRoute.get("/env", function (req, res) {
//   res.send(process.env.APP_NAME);
// });

// carRoute.put("/cars/update/:id", async (req, res) => {
//   if (req.body.ukuran === "Small") {
//     req.body.type = "Home Car";
//   } else if (req.body.ukuran === "Medium") {
//     req.body.type = "Rare Car";
//   } else if (req.body.ukuran === "Large") {
//     req.body.type = "SUV";
//   }
//   const car = await Car.findByPk(req.params.id);
//   await car.update({
//     name: req.body.nama,
//     type: req.body.type,
//     price: req.body.harga,
//     image: req.body.gambar,
//     size: req.body.ukuran,
//     createdAt: car.createdAt,
//     updatedAt: new Date(),
//   });

//   res.redirect("/cars/list");
// });

// carRoute.post("/cars/updatecars/:id", async (req, res) => {
//   if (req.body.ukuran === "Small") {
//     req.body.type = "Home Car";
//   } else if (req.body.ukuran === "Medium") {
//     req.body.type = "Rare Car";
//   } else if (req.body.ukuran === "Large") {
//     req.body.type = "SUV";
//   }
//   console.log(req.files);
//   const file = req.files.gambar;
//   const ext = path.extname(file.name);
//   const fileName = file.md5 + ext;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   const car = await Car.findByPk(req.params.id);
//   await car.update({
//     name: req.body.nama,
//     type: req.body.type,
//     price: req.body.harga,
//     image: url,
//     size: req.body.ukuran,
//     createdAt: car.createdAt,
//     updatedAt: new Date(),
//   });

//   // let newCars = cars.map((car) => {
//   //   let day = new Date(car.updatedAt).getDay();
//   //   let month = months[new Date(car.updatedAt).getMonth()];
//   //   let year = new Date(car.updatedAt).getFullYear();
//   //   let hour = new Date(car.updatedAt).getHours();
//   //   let minute = new Date(car.updatedAt).getMinutes();
//   //   return { ...car, day, month, year, hour, minute };
//   // });

//   // res.rende("cars", { layout: "layouts/app", newCars });
//   res.redirect("/cars/list");
// });

// carRoute.delete("/cars/delete/:id", async (req, res) => {
//   await Car.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.redirect("/cars/list");
// });

// carRoute.get("/test", (req, res) => {
//   const cars = getCarData();
//   const arrayCars = Object.values(cars);
//   res.render("cars", { layout: "layouts/app", arrayCars: arrayCars });
// });

// module.exports = router;