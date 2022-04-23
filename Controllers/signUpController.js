const db = require('../config/dbConfig');
const SignUpController = db.SignUp;



exports.sendUserSignupForm = (req, res) => {
    // Create a Tutorial
    let customer = {};

    try {
        // Building Customer object from upoading request's body
        customer.userName = req.body.userName,
            customer.firstName = req.body.firstName,
            customer.lastName = req.body.lastName,
            customer.email = req.body.email,
            customer.phno = req.body.phno,
            customer.user_type = req.body.user_type,
            console.log('.......', customer)
        // Save to MySQL database

        SignUpController.create(customer).then(result => {

            // send uploading message to client
            return res.status(200).json({
                message: "Upload Successfully a Customer with id = " + result.user_id,
                user: result,
                status: "success"
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}
exports.usersList = (req, res) => {
    SignUpController.findAll()
        .then(list => {
            res.status(200).json({
                message: "Get all Users' Infos Successfully!",
                users: list
            });
        })
        .catch(error => {
            // log on console
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}
exports.deleteById = async (req, res) => {
    try {
        let customerId = req.params.id;
        console.log("..........", req.params)
        let customer = await SignUpController.findByPk(customerId);

        if (!customer) {
            return res.status(404).json({
                message: "Does Not exist a Customer with id = " + customerId,
                error: "404",
            });
        } else {
            await customer.destroy();
            return res.status(200).json({
                message: "Delete Successfully a Customer with id = " + customerId,
                customer: customer,
                status: 'success'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error -> Can NOT delete a customer with id = " + req.params.id,
            status: 'error',
            error: error.message,
        });
    }
}
exports.editUserID = (req, res) => {
    // find all Customer information from 
    let customerId = req.params.id;
    SignUpController.findByPk(customerId)
        .then(customer => {
            res.status(200).json({
                message: " Successfully Get a Customer with id = " + customerId,
                user: customer
            });
        })
        .catch(error => {
            // log on console
            console.log(error);

            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
}
exports.updateUser = (req, res) => {
    // Create a Tutorial
    let customer = {};

    try {
        // Building Customer object from upoading request's body

        customer.userName = req.body.userName,
            customer.firstName = req.body.firstName,
            customer.lastName = req.body.lastName,
            customer.email = req.body.email,
            customer.phno = req.body.phno,
            customer.user_type = req.body.user_type,
            console.log('.......id', customer)
        // Save to MySQL database

        SignUpController.update(customer, { where: { user_id: req.body.id } }).then(result => {

            // send uploading message to client
            return res.status(200).json({
                message: "Upload Successfully a Customer with id = " + result.user_id,
                user: result,
                status: "success"
            });
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fail!",
            status: 'error',
            error: error.message
        });
    }
}