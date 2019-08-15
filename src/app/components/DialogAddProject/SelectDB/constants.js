import * as Yup from 'yup'

const REQUIRED = 'Field is required!'

export const validationSchema = Yup.object()
  .shape({
    mysql: Yup.bool().required(REQUIRED),
  })

export const formFields = {
  mysql: false,
}
