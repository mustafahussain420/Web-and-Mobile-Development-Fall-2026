let items = [
    { id: 1, name: 'Item One'},
    { id: 2, name: 'Item Two'}
];

// 1. GET all items (Read)
app.get('/api/items', (req, res) => {
    res.status(200).json(items);
});

// 2. GET a single item by ID (Read)
    
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found'});
    res.status(200).json(item);
});

// 3. POST a new item (Create)
app.post('/api/items', (req, res) => {
    if (!req.body.name) {
        return res.stauts(400).json({ message: 'Name is required' });
    }

    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// 4. DELETE an item (Delete)
app.delete('/api/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).json({ message: 'Item not found'});

    items.splice(itemIndex, 1);
    res.status(200).json({ message: 'Item successfully deleted'});
});