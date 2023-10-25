export const fetchData = async ({
  path,
  locale,
  params,
}: {
  path: string;
  locale?: string;
  params?: Record<string, unknown>;
}) => {
  try {
    const response = await fetch(
      `https://prodesignstudio.uz/api/v1/${path}?${
        params
          ? Object.entries(params)
              .map((el) => el.join("="))
              .join("&")
          : ""
      }`,
      {
        method: "GET",
        headers: {
          "Accept-Language": locale ?? "ru",
        },
      }
    );
    return response.json();
  } catch (error) {
    return false;
  }
};
