class ResponseError extends Error {
  constructor(status, message, data) {
    super(message);
    this.status = status;
    if (data) {
      const messages = [];
      data.map((val) => {
        const message = {
          field: val.path,
          message: val.msg
        };
        messages.push(message);
      });

      this.data = messages;
    }
  }
}

module.exports = ResponseError;