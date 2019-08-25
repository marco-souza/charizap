import * as Yup from 'yup'

export const REQUIRED = 'Field is required!'
export const AWS = 'aws'
export const DIGITAL_OCEAN = 'digitalOcean'
export const SELF_HOSTED = 'selfHosted'

export const providers = {
  [DIGITAL_OCEAN]: [
    { placeholder: 'Name your credentials so you can find it in the future',
      label: 'Credential Name',
      name: 'name' },

    { placeholder: '+15 characters',
      label: 'Your credential',
      name: 'key' },
  ],
  [AWS]: [
    { placeholder: 'Name your credentials so you can find it in the future',
      label: 'Credential Name',
      name: 'name' },

    { placeholder: '+20 characters',
      label: 'Your key',
      name: 'key' },

    { placeholder: '+20 characters',
      label: 'Your secret',
      name: 'secret' },
  ],
  [SELF_HOSTED]: [
    { placeholder: 'e.g.: 188.1.2.3',
      label: 'Public IP Address',
      name: 'ip' },

    { placeholder: '22',
      label: 'SSH port',
      name: 'port' },
  ],
}

export const validationSchema = Yup.object()
  .shape({
    provider: Yup.object().required(REQUIRED),
    name: Yup.string()
      .when('provider', {
        is: [DIGITAL_OCEAN, AWS],
        then: Yup.string().min(1).required(REQUIRED)
      }),
    key: Yup.string()
      .when('provider', {
        is: DIGITAL_OCEAN,
        then: Yup.string().min(15).required(REQUIRED)
      })
      .when('provider', {
        is: AWS,
        then: Yup.string().min(20).required(REQUIRED)
      }),
    secret: Yup.string()
      .when('provider', {
        is: AWS,
        then: Yup.string().min(20).required(REQUIRED)
      }),
    ip: Yup.string()
      .when('provider', {
        is: SELF_HOSTED,
        then: Yup.string().min(8).required(REQUIRED)
      }),
    port: Yup.string()
      .when('provider', {
        is: SELF_HOSTED,
        then: Yup.string().min(2).required(REQUIRED),
      }),
  })

export const formFields = {
  ip: '',
  key: '',
  port: '',
  name: '',
  secret: '',
  provider: '',
}
