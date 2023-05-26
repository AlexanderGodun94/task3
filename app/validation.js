const errorMessage = require('./errorMessage');
const _ = require('underscore');

function validation(availableMoves) {
  let result = [];
  if (availableMoves.length < 3 ) result.push(errorMessage.COUNT_PARAMETERS);
  if (availableMoves.length > 0 && availableMoves.length % 2 === 0) result.push(errorMessage.EVEN_NUMBER);
  if (_.uniq(availableMoves).length !== availableMoves.length) result.push(errorMessage.REPEATING_PARAMETERS);
  if (result.length !== 0) return result;
  return true;
}

module.exports = validation;
