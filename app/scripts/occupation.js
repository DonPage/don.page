/**
 * @function occupation
 * @description - this function handles the occupation input.
 * @param {HTMLElement} input - canvas element.
 * @return {Object}
 */
const occupation = (element) => {
  const config = {attributes: true, childList: false, subtree: false};
  // TODO: do mutation observer stuff.
  const input = {
    value: element.value,
    actions: {
      setValue: (value) => {
        input.value = value;
      }
    },
    subscriptions: {
      pageTitle: (newValue) => {
        document.title = newValue;
      },
      log: (newValue) => {
        console.log(`%c ${newValue} `, 'background: #222; color: #fff;  padding: 5px;');
      },
      localStorage: (newValue) => {
        localStorage.setItem('occupation', newValue)
      }
    }
  };

  return input
};
