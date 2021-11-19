/**
 * browser matrix
 */
export const BROWSER_MATRIX = {
  win : {
    os       : '>=10',
    browsers : {
      edge    : '>=90',
      chrome  : '>=90',
      firefox : '>=90',
      opera   : '>=80',
    }
  },
  osx : {
    os       : ['>=10', '<13'],
    browsers : {
      safari  : ['>=10', '<=14'],
      chrome  : ['>=94', null],
      firefox : ['>=90', null],
    }
  },
  iOS : {
    os       : '>=14',
    browsers : {
      chrome : '>=80',
      safari : '>=12'
    }
  },
  android : {
    os       : '>=11',
    browsers : {
      chrome         : '>=91',
      firefox        : '>=93',
      samsungBrowser : false,
      opera          : false
    }
  }
};

/**
 * screen size too small
 */
export const SCREEN_SIZE_MATRIX = {
  minimum : {
    width  : 1080,
    height : 720
  },
  maximum : {
    width  : 1150,
    height : 1600
  },
};

/**
 * rotate device on phones
 */
export const DEVICE_ROTATION = {
  phone  : ['portrait'],
  tablet : ['portrait', 'landscape']
};
