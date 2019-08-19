export const sendNotification = (variant, handler) => {
  return message =>
    handler(
      message,
      {
        variant,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        }
      }
    )
}

export const sendNotificationsFormErrorResponse = (errorResponse, notificationHandler) => {
  const errorList = errorResponse.errors
    ? errorResponse.errors
    : [errorResponse.message]

  Object.values(errorList)
    .flatMap(x => x)
    .map(sendNotification('warning', notificationHandler))
}
