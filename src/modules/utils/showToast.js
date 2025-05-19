import { Toast } from 'bootstrap'

/**
 *
 * @param {string} title
 * @param {string} message
 * @returns {void}
 */
export const showToast = (title, message) => {
  document.querySelector('.toast-header .me-auto').textContent = title
  document.querySelector('.toast-body').textContent = message

  const messageToast = document.querySelector('#messageToast')
  const toastBootstrap = Toast.getOrCreateInstance(messageToast)
  toastBootstrap.show()
}
