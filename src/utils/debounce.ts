/**
 * Creates a debounced function that delays invoking func until after wait milliseconds
 * have elapsed since the last time the debounced function was invoked.
 */
export function debounce<T extends unknown[]>(
  func: (...args: T) => unknown,
  wait: number,
  immediate?: boolean,
): ((...args: T) => void) & { cancel: () => void } {
  let timeout: NodeJS.Timeout | undefined;

  const executedFunction = function (...args: T) {
    const later = () => {
      timeout = undefined;
      if (!immediate) func(...args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func(...args);
  };

  executedFunction.cancel = function () {
    clearTimeout(timeout);
    timeout = undefined;
  };

  return executedFunction;
}
