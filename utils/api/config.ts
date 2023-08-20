export const fetchData = async (
  path: string,
  locale?: string,
  params?: Record<string, unknown>
) => {
  try {
    const response = await fetch(`https://pro-design.team/api/v1/${path}`, {
      method: 'GET',
      headers: {
        'Accept-Language': locale ?? 'uz',
      },
    });
    return response.json();
  } catch (error) {
    return false;
  }
};
