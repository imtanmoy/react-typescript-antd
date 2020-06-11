export function debounce(func: Function, wait: number, immediate?: boolean) {
  // immediate默认为false
  let timeout: number | null;
  let args: IArguments | null;
  let context: null;
  let timestamp: number;
  let result: any;

  let debounceFunction: any;

  // eslint-disable-next-line no-var
  var later = function later() {
    const last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = window.setTimeout(later, wait - last);
      debounceFunction.id = timeout;
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args as any);
        // eslint-disable-next-line no-multi-assign
        if (!timeout) context = args = null;
      }
    }
  };

  // eslint-disable-next-line func-names
  debounceFunction = function () {
    // @ts-ignore
    context = this;
    // eslint-disable-next-line prefer-rest-params
    args = arguments;
    timestamp = Date.now();
    const callNow = immediate && !timeout;
    if (!timeout) {
      timeout = window.setTimeout(later, wait);
      debounceFunction.id = timeout;
    }
    if (callNow) {
      result = func.apply(context, args);
      // eslint-disable-next-line no-multi-assign
      context = args = null;
    }

    return result;
  };
  return debounceFunction;
}
