import Product from '../models/product'

export async function createProduct(req, res) {
    const { name, allergens, price, information, photo, category, description } = req.body;
    try {
        let Aux = await Product.create({
            name, 
            allergens, 
            price, 
            information, 
            photo, 
            category, 
            description
        }, {
            fields: ['name', 'allergens', 'price', 'information', 'photo', 'category', 'description']
        });

        return res.json({
            message: 'Product created successfully',
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

export async function getAllProduct(req, res) {
    try {
        const Aux = await Product.findAll();
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

export async function getProduct(req, res) {
    try {
        const { id } = req.params;
        const Aux = await Product.findOne({
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

export async function deleteProduct(req, res) {
    try {
        const { id } = req.params;
        await Product.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Product deleted successfully',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function putProduct(req, res) {
    try {
        const { id } = req.params;
        const { name, allergens, price, information, photo, category, description } = req.body;
        const Aux = await Product.findOne({
            where: {
                id
            }
        })
        
        await Aux.update({
            name, 
            allergens, 
            price, 
            information, 
            photo, 
            category, 
            description
        })

        res.json({
            message: 'Product update successfully',
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