import * as Yup from 'yup'

const REQUIRED = 'Field is required!'

export const validationSchema = Yup.object()
  .shape({
    name: Yup.string().min(1).required(REQUIRED),
    size: Yup.string().min(1),
  })

export const formFields = {
  name: '',
  size: '',
}
