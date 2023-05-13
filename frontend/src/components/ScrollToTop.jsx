import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);
};

export default ScrollToTop;
