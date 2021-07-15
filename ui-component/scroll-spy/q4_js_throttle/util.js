export const throttle = (func, delay) => {
  let throttled = false;

  return (e) => {
    if (throttled) return;
    throttled = true;

    setTimeout(() => {
      func(e);
      throttled = false;
    }, delay);
  };
};

export const debounce = (func, delay) => {
  let timeoutId = null;
  return (...arg) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(null, ...arg), delay);
  };
};


