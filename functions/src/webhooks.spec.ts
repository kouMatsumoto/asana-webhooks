import * as asana from 'asana';

const token = '';
const webhookUrl = '';

describe('webhooks', () => {
  test('should run', async () => {
    const client = asana.Client.create().useAccessToken(token);

    const res = await client.projects.findById('1153619935384382');
    // const res = await client.users.me();
    console.log(res);
  });

  test('should run 2', async () => {
    const client = asana.Client.create().useAccessToken(token);

    const res = await client.webhooks.create('1153619935384382', webhookUrl, { filters: [] });
    console.log(res);
  });

  test('should run 3', async () => {
    const client = asana.Client.create().useAccessToken(token);

    const res = await client.webhooks.getAll('1133903957345131');
    console.log(res);
  });
});
