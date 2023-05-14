import React from 'react';
import renderWithProviders from '../__testUtils__/renderWithProvider';
import { server } from '../__testUtils__/mock/server';
import { rest } from 'msw';
import { waitFor } from '@testing-library/dom';
import App from '../src/App';

const apiData = [
  { file: 'test1.csv', lines: [] },
  { file: 'test1.csv', lines: [] },
  { file: 'test1.csv', lines: [] },
  { file: 'test1.csv', lines: [] }
];

it('grid should render after fetching from API', async () => {
  server.use(
    rest.get(`*`, (req, res, ctx) => {
      return res(ctx.json(apiData));
    })
  );

  const { container } = renderWithProviders(<App />, {
    container: document.body.appendChild(document.createElement('div'))
  });

  await waitFor(() => {
    expect(container).toBeInTheDocument();
  });
});
