import Cart from '../models/cart'

export async function createCart(req, res) {
    const { sizing, extra, amount, deliver, product } = req.body;
    try {
        let Aux = await Cart.create({
            sizing, //sizing: sizing
            extra,
            amount,
            deliver,
            product
        }, {
            fields: ['sizing', 'extra', 'amount', 'deliver', 'product']
        });

        return res.json({
            message: 'Cart created successfully',
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

export async function getAllCart(req, res) {
    try {
        const Aux = await Cart.findAll();
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

export async function getCart(req, res) {
    try {
        const { id } = req.params;
        const Aux = await Cart.findOne({
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

export async function deleteCart(req, res) {
    try {
        const { id } = req.params;
        await Cart.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Cart deleted successfully',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function putCart(req, res) {
    try {
        const { id } = req.params;
        const { sizing, extra, amount, deliver, product } = req.body;
        const Aux = await Cart.findOne({
            where: {
                id
            }
        })

        await Aux.update({
            sizing,
            extra,
            amount,
            deliver,
            product,
            where: {
                id
            }
        })

        res.json({
            message: 'Cart update successfully',
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