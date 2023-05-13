import React from 'react';

import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackIcon = () => {
  return <FontAwesomeIcon icon={icon({ name: 'chevron-left' })} />;
};

export default BackIcon;
