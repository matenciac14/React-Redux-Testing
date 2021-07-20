import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../types'

// Muestra alerta
export function showAlertAction(alert) {
  return (dispatch) => {
    dispatch(createAlert(alert))
  }
}
const createAlert = alert => ({
  type: SHOW_ALERT,
  payload: alert
})

// ocultar alerta
export function hideAlertAction() {
  return (dispatch) => {
    dispatch(hideAlert())
  }
}

const hideAlert = () => ({
  type: HIDE_ALERT
})