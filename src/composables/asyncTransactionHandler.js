export const asyncTransactionHandler =
  (fn) =>
  (...args) =>
    Promise.resolve(fn(...args))
      .then((result) => ({ success: true, result }))
      .catch((err) => ({
        success: false,
        error: { message: err.transactionMessage, err },
      }));
