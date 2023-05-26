const crypto = require('crypto');

class Hmack {
  constructor(move) {
    this.move = move;
  }

  static generateKey() {
    return crypto.randomBytes(32);
  }

  createHmack(key) {
    return  crypto.createHmac('sha256', key).update(this.move.toString()).digest('hex');
  }

}
exports.Hmack = Hmack;
