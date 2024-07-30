export const sanitizeUsername = (username) => {
  return username.replace(/\s+/g, '').toLowerCase().substring(0, 20);
};
