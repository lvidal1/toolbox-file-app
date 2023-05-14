import { rest } from 'msw';

export const handlers = [
  rest.get('/files/data', (req, res, ctx) => {
    // successful response
    return res(ctx.status(200), ctx.json([]), ctx.delay(30));
  })
];
