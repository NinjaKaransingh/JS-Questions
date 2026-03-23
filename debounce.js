function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debouncedFn = debounce(() => {
  console.log("API called");
}, 1000);

debouncedFn();
// debouncedFn();
// debouncedFn();
