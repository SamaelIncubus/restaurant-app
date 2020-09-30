import Deliver from '../models/deliver'

export async function createDeliver(req, res) {
    const { price, deliverman, direction, client, store, offer } = req.body;
    try {
        let Aux = await Deliver.create({
            price,
            deliverman, 
            direction,
            client, 
            store,
            offer
        }, {
            fields: ['price', 'deliverman', 'direction', 'client', 'store', 'offer']
        });

        return res.json({
            message: 'Deliver created successfully',
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

export async function getAllDeliver(req, res) {
    try {
        const Aux = await Deliver.findAll();
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

export async function getDeliver(req, res) {
    try {
        const { id } = req.params;
        const Aux = await Deliver.findOne({
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

export async function deleteDeliver(req, res) {
    try {
        const { id } = req.params;
        await Deliver.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Deliver deleted successfully',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function putDeliver(req, res) {
    try {
        const { id } = req.params;
        const { price, deliverman, day, direction, client, store, offer } = req.body;
        const Aux = await Deliver.findOne({
            where: {
                id
            }
        })
        
        await Aux.update({
            price,
            deliverman, 
            day, 
            direction,
            client, 
            store,
            offer
        })

        res.json({
            message: 'Deliver update successfully',
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