var express = require('express');
var router = express.Router();
const Validator = require('fastest-validator');

const { Cars } = require('../models')


const v = new Validator();

router.get('/', async (req, res) => {
    const cars = await Cars.findAll();
    return res.json(cars);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const cars = await Cars.findByPk(id);
    return res.json(cars || {});
});

router.post('/', async (req, res) => {
   const schema = {
    name: 'string',
    type: 'string',
    price: 'string',
    image: 'string',
    size: 'string'
   }

   const validate = v.validate(req.body, schema);

   if (validate.length) {
    return res
    .status(400)
    .json(validate);
   }

   const cars = await Cars.create(req.body);

   res.json(cars);
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;

    let cars = await Cars.findByPk(id);

    if (!cars) {
        return res.json({message: 'Cars is not found!'});
    }

    const schema = {
        name: 'string|optional',
        type: 'string|optional',
        price: 'string|optional',
        image: 'string|optional',
        size: 'string|optional'
       }
    
       const validate = v.validate(req.body, schema);
    
       if (validate.length) {
        return res
        .status(400)
        .json(validate);
       }

    cars = await cars.update(req.body);
    res.json(cars);
});

router.delete('/:id', async(req, res) => {
    const id = req.params.id;

    const cars = await Cars.findByPk(id);

    if (!cars) {
        return res.json({ message: 'Car not Found' });
    }
    await cars.destroy();

    res.json({
        message: 'Data is Deleted'
    });
});

module.exports = router;