import { Review } from "./interfaces";

export const getReviews = async (): Promise<Review[]> => {
  await new Promise((res) => setTimeout(res, 2000));

  return [
    {
      id: 1,
      platform: "Google",
      rating: 4,
      date: "2023-09-15T16:00:00Z",
      text: "Отличный сервис!",
    },
    {
      id: 2,
      platform: "Яндекс",
      rating: 3,
      date: "2023-08-14T09:00:00Z",
      text: "Ок, но можно лучше",
    },
    {
      id: 3,
      platform: "2ГИС",
      rating: 5,
      date: "2023-11-13T08:00:00Z",
      text: "Прекрасно!",
    },
    {
      id: 4,
      platform: "Google",
      rating: 5,
      date: "2023-11-19T10:00:00Z",
      text: "Отлично!",
    },
    {
      id: 5,
      platform: "Яндекс",
      rating: 5,
      date: "2023-11-14T09:00:00Z",
      text: "Хорошо!",
    },
    {
      id: 6,
      platform: "2ГИС",
      rating: 2,
      date: "2023-09-04T08:00:00Z",
      text: "Плохо...",
    },
    {
      id: 7,
      platform: "Google",
      rating: 4,
      date: "2023-11-15T10:00:00Z",
      text: "Супер))",
    },
    {
      id: 8,
      platform: "Яндекс",
      rating: 4,
      date: "2023-10-24T09:00:00Z",
      text: "Хорошо, но есть недочеты.",
    },
    {
      id: 9,
      platform: "2ГИС",
      rating: 3,
      date: "2023-08-08T08:00:00Z",
      text: "Нормально",
    },
  ];
};
