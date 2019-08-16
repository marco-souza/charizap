import * as Yup from 'yup'

const REQUIRED = 'Field is required!'

export const validationSchema = Yup.object()
  .shape({
    phpMyAdmin: Yup.bool().required(REQUIRED),
  })

export const formFields = {
  phpMyAdmin: false,
}
