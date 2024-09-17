export function calculatePaginationParams(perPage = 4, page = 1) {
  const endAt = page * perPage - 1;
  const startAt = endAt - (perPage - 1);

  return {
    startAt,
    endAt,
    isFirstPage: page === 1,
    perPage,
  };
}
