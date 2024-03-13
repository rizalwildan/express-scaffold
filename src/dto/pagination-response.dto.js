class PaginationResponseDto {
  page;
  limit;
  total_items;
  total_page;
  items;
  constructor(page, limit, count, items) {
    this.page = parseInt(page);
    this.limit = parseInt(limit);
    this.total_items = count;
    this.total_page = Math.ceil(count / limit);
    this.items = items;
  }
}

module.exports = PaginationResponseDto;