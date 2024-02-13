
export const COLORS = {
  white100: '#FFFFFF',
  white_10: '#FAFAFA',

  transsport_black: '#201F1F',
  transsport_black30: '#201F1F33',
  
  grayishPurpleBlue: '#323142',
  grayishPurpleBlue20: '#32314222',
  
  dullGray: '#676767',
  dullGray10: '#5E5D5D',

  bg_light: '#F9F9F9',
  blue_violet_Crayola: '#6C5FBC',
  greenishWhite: '#F7EDD0',
  goldenBirch: '#DAA31A',
  whiteAluminum: '#ADADAD',
  pearlescentLightGray: '#999999',
  deepPurpleBlack: '#030314',
  sapphireBlue: '#1A202C',
  gainsborough: '#E5E5E5B2',
  grayWindow: '#ACADB9',
  deepYellowPink: '#F1534E',
}

export type Colors = {[Property in keyof typeof COLORS]: string};
