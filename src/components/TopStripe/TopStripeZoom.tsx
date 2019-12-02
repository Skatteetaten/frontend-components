import React from 'react';
import { TopStripeMenu, TopStripeMenuProps } from './TopStripeMenu';

export const TopStripeZoom: React.FC<TopStripeMenuProps> = ({ index }) => {
  return (
    <TopStripeMenu
      title={'Endre skriftstørrelse'}
      index={index}
      onRender={
        <li>
          Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre
          eller - for å forminske.
        </li>
      }
    />
  );
};
