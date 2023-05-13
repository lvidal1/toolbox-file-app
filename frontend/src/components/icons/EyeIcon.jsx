import React from 'react';

import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EyeIcon = () => {
  return <FontAwesomeIcon icon={icon({ name: 'eye' })} />;
};

export default EyeIcon;
