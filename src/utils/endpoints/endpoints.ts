export const endpoints = {
  getNews: (host: string, queryParams?: Record<string, string>) => {
    const queryString = queryParams
      ? Object.entries(queryParams)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join('&')
      : '';

    return {
      url: `${host}/api/v1/news${queryString !== '' ? `?${queryString}` : ''}`,
      method: 'GET'
    };
  }
};
