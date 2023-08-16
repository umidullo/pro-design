export const renderLabel = (str: string): string => {
  switch (str) {
    case 'uz':
      return "O'zb";
    case 'en':
      return 'Eng';
    case 'ru':
      return 'Рус';
    default:
      return "O'zb";
  }
};
