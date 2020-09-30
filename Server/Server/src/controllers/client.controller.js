import Client from '../models/client'

export async function createClient(req, res) {
    const { email, name, password, photo, direction, phone} = req.body;
    try {
        let Aux = await Client.create({
            email,
            name,
            password, 
            direction, 
            photo,
            phone,
        }, {
            fields: ['email','name', 'password', 'photo', 'direction', 'phone']
        });

        return res.json({
            message: 'Client created successfully',
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

export async function getAllClient(req, res) {
    try {
        const Aux = await Client.findAll();
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

export async function getClient(req, res) {
    try {
        const { id } = req.params;
        const Aux = await Client.findOne({
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

export async function deleteClient(req, res) {
    try {
        const { id } = req.params;
        await Client.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'Client deleted successfully',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}

export async function putClient(req, res) {
    try {
        const { id } = req.params;
        const { email, name, password, photo, direction, phone, admin} = req.body;
        const Aux = await Client.findOne({
            where: {
                id
            }
        })
        
        await Aux.update({
            email,
            name,
            password, 
            direction,
            photo,  
            phone,
            admin
        })

        res.json({
            message: 'Client update successfully',
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