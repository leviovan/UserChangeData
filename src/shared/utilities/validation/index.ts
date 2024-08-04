import * as yup from 'yup'

export const schemaForm = yup
  .object({
    firstName: yup.string().required().min(3, 'The string must be larger'),
    email: yup
      .string()
      .trim()
      .email('Invalid email')
      .required()
      .min(5, 'The string must be larger'),
    bio: yup.string().trim().required(),
    country: yup.string().trim().required().min(5, 'Must be exactly 5 digits'),
    city: yup.string().trim().required().min(3, 'The string must be larger'),
    address: yup.string().trim().required().min(5, 'The string must be larger'),
  })
  .required()
