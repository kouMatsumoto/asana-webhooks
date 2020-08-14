import * as functions from 'firebase-functions';

export const webhooksTest = functions.region('asia-northeast1').https.onRequest(async (request, response) => {
  functions.logger.info('called');

  if (request.method !== 'POST') {
    functions.logger.error('post request required');
    response.status(400).send('error');

    return;
  }

  functions.logger.info('body', request.body);

  const authKey = 'X-Hook-Secret';
  response.setHeader(authKey, request.header(authKey) || '');
  response.status(200).send();
});
