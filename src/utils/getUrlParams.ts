export const getUrlParams = (query?: string) => {
  return query
    ? Object.entries(query)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    : null;
};
