import { useEffect, useState } from 'react';

// @ts-ignore TODO
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
        lt: {},
        height: 0,
        width: 0
      };
      if (window.innerHeight !== size.height) {
        newSizes.height = window.innerHeight;
      }

      const w = window.innerWidth;

      if (w !== size.width) {
        newSizes.width = w;
      }

      const s = size.sizes;
      // @ts-ignore TODO
      newSizes.gt.sm = w >= s.sm;
      // @ts-ignore TODO
      newSizes.gt.md = w >= s.md;
      // @ts-ignore TODO
      newSizes.gt.lg = w >= s.lg;
      // @ts-ignore TODO
      newSizes.gt.xl = w >= s.xl;
      // @ts-ignore TODO
      newSizes.gt.xxl = w >= s.xxl;
      // @ts-ignore TODO
      newSizes.lt.sm = false;
      // @ts-ignore TODO
      newSizes.lt.md = w < s.sm;
      // @ts-ignore TODO
      newSizes.lt.lg = w < s.md;
      // @ts-ignore TODO
      newSizes.lt.xl = w < s.lg;
      // @ts-ignore TODO
      newSizes.lt.xxl = w < s.xl;
      // @ts-ignore TODO
      newSizes.lt.xxxl = w < s.xxl;
      // @ts-ignore TODO
      newSizes.sm = !newSizes.gt.sm;
      // @ts-ignore TODO
      newSizes.md = newSizes.gt.sm && newSizes.lt.lg;
      // @ts-ignore TODO
      newSizes.lg = newSizes.gt.md && newSizes.lt.xl;
      // @ts-ignore TODO
      newSizes.xl = newSizes.gt.lg && newSizes.lt.xxl;
      // @ts-ignore TODO
      newSizes.xxl = newSizes.gt.xl && newSizes.lt.xxxl;
      // @ts-ignore TODO
      newSizes.xxxl = newSizes.gt.xxl;

      const sizeHasChanged =
        JSON.stringify(getValuesForComparison(newSizes)) !==
        JSON.stringify(getValuesForComparison(size));

      return [sizeHasChanged, { sizes: size.sizes, ...newSizes }];
    };

    function updateSizes() {
      const [sizeHasChanged, sizes] = getSizes();
      if (sizeHasChanged) {
        // @ts-ignore TODO
        setSize(sizes);
      }
    }

    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, [size]);

  return size;
};
