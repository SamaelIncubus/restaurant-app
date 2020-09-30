import Offer from '../models/offer'

export async function createOffer(req, res) {
    const { description, launch, closing, discount} = req.body;
    try {
        let Aux = await Offer.create({
            description, 
            launch, 
            closing, 
            discount
        }, {
            fields: ['description', 'launch', 'closing', 'discount']
        });

        return res.json({
            message: 'Offer created successfully',
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

export async function getAllOffer(req, res) {
    try {
        const Aux = await Offer.findAll();
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

export async function getOffer(req, res) {
    try {
        const { id } = req.params;
        const Aux = await Offer.findOne({
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

export async function deleteOffer(req, res) {
    try {
        const { id } = req.params;
        await Offer.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Offer deleted successfully',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function putOffer(req, res) {
    try {
        const { id } = req.params;
        const { description, launch, closing, discount} = req.body;
        const Aux = await Offer.findOne({
            where: {
                id
            }
        })
        
        await Aux.update({
            description, 
            launch, 
            closing, 
            discount
        })

        res.json({
            message: 'Offer update successfully',
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