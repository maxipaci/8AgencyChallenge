const yup = require('yup')

const countrySchema = yup.object({
  body: yup.object({
    name: yup
      .string()
      .required()
      .max(200),
  })
})

module.exports = countrySchema
