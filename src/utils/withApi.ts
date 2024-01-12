async function withApi<T>(
  fn: () => Promise<T>,
  { onSuccess, onError }: { onSuccess?: (response: T) => void; onError?: (error: unknown) => void },
) {
  try {
    const response = await fn();
    onSuccess && onSuccess(response);
  } catch (error) {
    onError && onError(error);
  }
}

export default withApi;
