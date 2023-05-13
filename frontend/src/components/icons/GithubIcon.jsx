import React from 'react';

import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GithubIcon = () => {
  return <FontAwesomeIcon icon={brands('github')} size="xl" />;
};

export default GithubIcon;
