import 'crypto';
import { v4 } from 'uuid';

exports.handler = (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: v4(),
  };
};
