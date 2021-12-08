const Response = require('../../Core/Dtos/Response.js')

const Validation = (schema) => async (req, res, next) => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params
        },
        { abortEarly: false }
      )
      return next()
    } catch (err) {
      return res.status(400).json(new Response(
          false, 
          err.message, 
          { errors: err.errors }
        )
      );
    }
  }

module.exports = Validation;
