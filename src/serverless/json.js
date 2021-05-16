import * as crypto from 'crypto';
import { v4 } from 'uuid';

exports.handler = async (event, context) => {
  const randomFillSync = crypto.randomFillSync.bind(crypto);
  global.crypto = {
    ...crypto,
    getRandomValues: randomFillSync
  };
  const uuid = v4();
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(uuid),
  };
};
