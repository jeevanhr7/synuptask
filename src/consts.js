export const DELIVERY_DATE_FORMAT = "MMMM Do YYYY, h:mm:ss a"

export const orderStatusMap = {
  10: "Pending",
  20: "Changed",
  30: "accepted",
  40: "enroute",
  50: "check and print",
  60: "delivered",
  70: "ready for pickup",
  80: "cancelled",
  90: "rejected",
  100: "deleted",
}
export const NAME_REGEX = /^[a-zA-Z][a-zA-Z ]{0,33}[a-zA-Z]$/i
export const PHONE_NUMBER_REGEX = /^(\+\d{1,2}\s)?\(?[7-9]\d{2}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i