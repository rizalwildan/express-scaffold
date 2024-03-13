const ResponseError = require('../error/response.error');
const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false
  });

  if (result.error) {
    console.log(result.error.details);
    throw new ResponseError(422, 'validation error', result.error.message);
  } else {
    return result.value;
  }
};

module.exports = validate;