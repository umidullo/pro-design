import axios from "axios";

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
    const response = await axios.get(
      `https://prodesignstudio.uz/api/v1/${path}`,
      {
        headers: {
          "Accept-Language": locale ?? "ru",
        },
        params: {
          ...params,
        },
      }
    );
    return response.data;
  } catch (error) {
    return false;
  }
};
