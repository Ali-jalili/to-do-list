const router = require('express').Router();


const todoItemsModal = require('../models/todoItems')


router.post('/api/item', async (req, res) => {
    try {
        const newItem = new todoItemsModal({

            item: req.body.item
        })

        const seveItems = await newItem.save()
        res.status(200).json(seveItems)


    } catch (error) {
        res.json(error);
    }
})

router.get('/api/items', async (req, res) => {
    try {
        const allTodoItems = await todoItemsModal.find({});
        res.status(200).json(allTodoItems)
    }
    catch (error) {
        res.json(error)
    }
})


router.put('/api/item/:id', async (req, res) => {
    try {
        const updateItem = await todoItemsModal.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json('Item Updated')
    }
    catch (error) {
        res.json(error)
    }
});




router.delete('/api/item/:id', async (req, res) => {
    try {
        const deletItem = await todoItemsModal.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Delete')
    }
    catch (error) {
        res.json(error);
    }
})


module.exports = router;