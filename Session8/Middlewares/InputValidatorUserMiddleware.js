const { validateCreateuserInput } = require("../validators/createUserInputValidator");

function validateInputMiddleware(req, res, next) {
    const body = req.body;
    const result = validateCreateuserInput(body);

    const {value, error} = result;

    if(error) {
        res.status(400).json({message: "make sure your input is nice ", error});
    } else {
        next();
    }
}

module.exports = validateInputMiddleware;