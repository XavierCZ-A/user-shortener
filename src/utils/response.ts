/**
 * This module handles all the message structure for responses.
 * @type {Object}
 */

/**
 * Defines the error message structure
 * @param {int} status The HTTP status code
 * @param  {array|string} messages An array of strings with the messages
 * @return {Object} An object with the structure {messages: [...messages], type: error}
 */
export function errorMessage(
  status: number,
  messages: string[] | string | null,
) {
  return {
    messages: Array.isArray(messages) ? messages : [messages],
    status,
    type: "error",
  };
}
/**
 * Defines the success message structure.
 * @param  {array|string} messages An array of strings with the messages
 * @param  {Number} [status=200] The HTTP status code
 * @return {Object} An object with the structure {messages: [...messages], type: success}
 */
export function successMessage(messages = null, status = 200) {
  return {
    messages: Array.isArray(messages) ? messages : [messages],
    status,
    type: "success",
  };
}
/**
 * Returns the defined data with a success message.
 * @param  {mixed} payload The data to send
 * @param  {Number} [status=200] The HTTP status code
 * @return {Object} An object with the structure {messages: [...messages], type: success}
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function successData(payload: any, status = 200) {
  return {
    payload,
    status,
    type: "success",
  };
}
