const Ropa = require('../models/ropa');

const ropaController = {
    getAll: async (req, res) => {
        try {
            const ropas = await Ropa.findAll();
            res.json(ropas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const ropa = await Ropa.findByPk(req.params.id);
            if (ropa) {
                res.json(ropa);
            } else {
                res.status(404).json({ message: 'Ropa no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const nuevaRopa = await Ropa.create(req.body);
            res.status(201).json(nuevaRopa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const ropa = await Ropa.findByPk(req.params.id);
            if (ropa) {
                await ropa.update(req.body);
                res.json(ropa);
            } else {
                res.status(404).json({ message: 'Ropa no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const ropa = await Ropa.findByPk(req.params.id);
            if (ropa) {
                await ropa.destroy();
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Ropa no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = ropaController;
