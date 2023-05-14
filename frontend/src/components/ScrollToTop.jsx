import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    if (document?.documentElement?.scrollTo) {
      document.documentElement.scrollTo(0, 0);
    }
  }, []);
};

export default ScrollToTop;
