import { useEffect, useState } from 'react';

const getValuesForComparison = sizeObj => ({
  gt: sizeObj.gt,
  lt: sizeObj.lt,
  sm: sizeObj.sm,
  md: sizeObj.md,
  lg: sizeObj.lg,
  xl: sizeObj.xl,
  xxl: sizeObj.xxl,
  xxxl: sizeObj.xxxl
});

export const UseScreen = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
    sizes: {
      sm: 480,
      md: 640,
      lg: 1024,
      xl: 1366,
      xxl: 1920
    },
    lt: {
      sm: false,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
      xxxl: true
    },
    gt: {
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
      xxxl: false
    },
    sm: true,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
    xxxl: false
  });

  useEffect(() => {
    const getSizes = () => {
      const newSizes = {
        gt: {},
        lt: {}
      };
      if (window.innerHeight !== size.height) {
        newSizes.height = window.innerHeight;
      }

      const w = window.innerWidth;

      if (w !== size.width) {
        newSizes.width = w;
      }

      const s = size.sizes;

      newSizes.gt.sm = w >= s.sm;
      newSizes.gt.md = w >= s.md;
      newSizes.gt.lg = w >= s.lg;
      newSizes.gt.xl = w >= s.xl;
      newSizes.gt.xxl = w >= s.xxl;
      newSizes.lt.sm = false;
      newSizes.lt.md = w < s.sm;
      newSizes.lt.lg = w < s.md;
      newSizes.lt.xl = w < s.lg;
      newSizes.lt.xxl = w < s.xl;
      newSizes.lt.xxxl = w < s.xxl;
      newSizes.sm = !newSizes.gt.sm;
      newSizes.md = newSizes.gt.sm && newSizes.lt.lg;
      newSizes.lg = newSizes.gt.md && newSizes.lt.xl;
      newSizes.xl = newSizes.gt.lg && newSizes.lt.xxl;
      newSizes.xxl = newSizes.gt.xl && newSizes.lt.xxxl;
      newSizes.xxxl = newSizes.gt.xxl;

      const sizeHasChanged =
        JSON.stringify(getValuesForComparison(newSizes)) !==
        JSON.stringify(getValuesForComparison(size));

      return [sizeHasChanged, { sizes: size.sizes, ...newSizes }];
    };

    function updateSizes() {
      const [sizeHasChanged, sizes] = getSizes();
      if (sizeHasChanged) {
        setSize(sizes);
      }
    }

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, [size]);

  return size;
};
