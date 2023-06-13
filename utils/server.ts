export const callAPI = async (route: string, options: RequestInit) => {
  const response = await fetch(route, options);
  return response;
};
