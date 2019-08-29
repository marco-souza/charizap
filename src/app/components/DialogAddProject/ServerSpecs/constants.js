import * as Yup from 'yup'

import { REQUIRED } from 'app/helpers/forms'

export const validationSchema = Yup.object()
  .shape({
    name: Yup.string().min(1).required(REQUIRED),
    size: Yup.object(),
  })

export const formFields = {
  name: '',
  size: null,
}
