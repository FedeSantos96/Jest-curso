import { isAlpha, isAlphanumeric, isNumeric } from 'validator';

export const isOnlyNumber = (value) => isNumeric(value); 
export const isNumberAndLetter = (value) => isAlphanumeric(value); 
export const isOnlyLetter = (value) => isAlpha(value); 