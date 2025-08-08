const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .pattern(/^[a-zA-Z ]+$/)
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.pattern.base': 'Name can only contain letters and spaces',
        }),

    age: Joi.number()
        .integer()
        .min(0)
        .max(120)
        .required(),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),

    password: Joi.string()
        .min(6)
        .max(30)
        .pattern(/^[a-zA-Z0-9@#$%^&*()_+!-]+$/)
        .required()
        .messages({
            'string.pattern.base': 'Password must only contain letters, numbers or special characters',
        }),
});


function validateCreateuserInput(userInput) {
    return schema.validate(userInput);
}


module.exports = {validateCreateuserInput}


