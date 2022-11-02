import React from 'react';
import { createRoot } from 'react-dom/client';

import { Default as ArweaveMedia } from '../stories/ArweaveMedia.stories';

describe('ArweaveMedia', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(
      <ArweaveMedia hash="o-z1Ea6xXyERnujaFyMZwHlsr2SLwnVyDqjP88V2zeE" />
    );
    root.unmount();
  });
});
