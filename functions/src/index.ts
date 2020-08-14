import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const webhooksTest = functions
  .region('asia-northeast1')
  .timeZone('Asia/Tokyo')
  .https.onRequest(async (request, response) => {
    functions.logger.info('called');

    if (request.method !== 'POST') {
      functions.logger.error('post request required');
      response.status(400).send('error');

      return;
    }

    functions.logger.info('body', request.body);
    response.status(200).send();
  });
