import { useEffect, useState } from 'react';

type ScreenSizesWidth = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};
type ScreenSizesSet = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
  xxxl?: boolean;
};
type ScreenSizes = {
  width: number;
  height: number;
  sizes?: ScreenSizesWidth;
  lt: ScreenSizesSet;
  gt: ScreenSizesSet;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl?: boolean;
  xxxl?: boolean;
};

const getValuesForComparison = (sizeObj: ScreenSizes) => ({
  gt: sizeObj.gt,
  lt: sizeObj.lt,
  sm: sizeObj.sm,
  md: sizeObj.md,
  lg: sizeObj.lg,
  xl: sizeObj.xl,
  xxl: sizeObj.xxl,
  xxxl: sizeObj.xxxl,
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
      xxl: 1920,
    },
    lt: {
      sm: false,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
      xxxl: true,
    },
    gt: {
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
      xxxl: false,
    },
    sm: true,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
    xxxl: false,
  });

  useEffect(() => {
    const getSizes = () => {
      const newSizes = {} as ScreenSizes;
      if (window.innerHeight !== size.height) {
        newSizes.height = window.innerHeight;
      }

      const w = window.innerWidth;

      if (w !== size.width) {
        newSizes.width = w;
      }

      const s = size.sizes;

      newSizes.gt = {
        sm: w >= s.sm,
        md: w >= s.md,
        lg: w >= s.lg,
        xl: w >= s.xl,
        xxl: w >= s.xxl,
      };

      newSizes.lt = {
        sm: false,
        md: w < s.sm,
        lg: w < s.md,
        xl: w < s.lg,
        xxl: w < s.xl,
        xxxl: w < s.xxl,
      };

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
