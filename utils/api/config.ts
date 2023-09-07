export const fetchData = async (
  path: string,
  locale?: string,
  params?: Record<string, unknown>
) => {
  try {
    const response = await fetch(`https://prodesignstudio.uz/api/v1/${path}`, {
      method: "GET",
      headers: {
        "Accept-Language": locale ?? "ru",
      },
    });
    return response.json();
  } catch (error) {
    return false;
  }
};
