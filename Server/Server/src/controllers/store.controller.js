import Store from '../models/store'

export async function createStore(req, res) {
    const { direction, phone, arrival, leaving} = req.body;
    try {
        let Aux = await Store.create({
            direction, 
            phone, 
            arrival, 
            leaving
        }, {
            fields: ['direction', 'phone', 'arrival', 'leaving']
        });

        return res.json({
            message: 'Store created successfully',
            data: Aux
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

export async function getAllStore(req, res) {
    try {
        const Aux = await Store.findAll();
        res.json({
            data: Aux
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
};

export async function getStore(req, res) {
    try {
        const { id } = req.params;
        const Aux = await Store.findOne({
            where: {
                id
            }
        });
        res.json({
            data: Aux
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function deleteStore(req, res) {
    try {
        const { id } = req.params;
        await Store.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Store deleted successfully',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function putStore(req, res) {
    try {
        const { id } = req.params;
        const { direction, phone, arrival, leaving } = req.body;
        const Aux = await Store.findOne({
            where: {
                id
            }
        })
        
        await Aux.update({
            direction, 
            phone, 
            arrival, 
            leaving
        })

        res.json({
            message: 'Store update successfully',
            data: Aux
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}