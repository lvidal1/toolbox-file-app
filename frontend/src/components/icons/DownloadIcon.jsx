import React from 'react';

import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DownloadIcon = () => {
  return <FontAwesomeIcon icon={icon({ name: 'download' })} />;
};

export default DownloadIcon;
