export const delay = (fn: () => void, ms: number = 1000) => {
  setTimeout(() => {
    fn();
  }, ms);
};
