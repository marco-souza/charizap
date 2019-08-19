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

export const sendNotificationsFormErrorResponse = (errorResponse, notificationHandler) =>
  Object.values(errorResponse.errors)
    .flatMap(x => x)
    .map(sendNotification('warning', notificationHandler))
