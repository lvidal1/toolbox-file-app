import React from 'react';
import renderWithProviders from '../__testUtils__/renderWithProvider';
import { server } from '../__testUtils__/mock/server';
import { rest } from 'msw';
import { screen, waitFor } from '@testing-library/dom';
import App from '../src/App';

const apiData = [
  { file: 'test1.csv', lines: [{ text: 'NBxKy', number: null, hex: null }] },
  { file: 'test2.csv', lines: [] },
  {
    file: 'test3.csv',
    lines: [
      { text: 'NBxKy', number: null, hex: null },
      { text: 'fpMhYaQgWpvttRoCRCz', number: 893, hex: 'aa0839460361d58c9deb3c6c16a9313e' }
    ]
  },
  { file: 'test4.csv', lines: [] }
];

describe('App', () => {
  it('renders grid that includes card file after fetching from API', async () => {
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

    await waitFor(async () => {
      const allCards = await screen.getAllByTestId('card-file');
      expect(allCards.length).toBe(4);
    });
  });

  it('renders error message if API fails on page load', async () => {
    server.use(
      rest.get('*', (_req, res, ctx) =>
        res.once(ctx.status(500), ctx.json({ message: 'failed connection' }))
      )
    );

    renderWithProviders(<App />);

    const errorText = await screen.findByTestId('error-message');

    await waitFor(() => {
      expect(errorText).toBeInTheDocument();
    });
  });
});
