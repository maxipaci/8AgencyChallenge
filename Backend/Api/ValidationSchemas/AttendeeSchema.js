const yup = require('yup')
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const attendeeSchema = yup.object({
  body: yup.object({
    firstName: yup
      .string()
      .required()
      .max(200),
    lastName: yup
      .string()
      .required()
      .max(200),
    email: yup
      .string()
      .email()
      .required()
      .max(200),
    phone: yup
      .string()
      .matches(phoneRegExp)
      .required()
      .max(255),
    job: yup
      .string()
      .required()
      .max(200)
  })
})

module.exports = attendeeSchema
