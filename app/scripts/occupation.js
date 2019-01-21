/**
 * @function occupation
 * @description - this function handles the occupation input.
 * @param {HTMLElement} element - input element.
 */
const occupation = (element) => {
  const input = {
    value: element.value,
    actions: {
      setValue: (value) => {
        input.value = value;
        element.setAttribute('value', value);
      }
    },
    subscriptions: {
      pageTitle: (newValue) => {
        document.title = `Don.Page - ${newValue}`;
      },
      log: (newValue) => {
        console.log(`%c ${newValue} `, 'background: #222; color: #fff;  padding: 5px;');
      },
      localStorage: (newValue) => {
        localStorage.setItem('occupation', newValue)
      }
    }
  };

  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
        Object.keys(input.subscriptions).map(key => {
          input.subscriptions[key].call(this, element.value)
        })
      }
    }
  });

  observer.observe(element, {attributes: true, childList: false, subtree: false});

  element.addEventListener('input', (e) => {
    input.actions.setValue(e.target.value)
  });

  const defaultOccupation = localStorage.getItem('occupation') || 'Software Engineer';
  input.actions.setValue(defaultOccupation);
};
