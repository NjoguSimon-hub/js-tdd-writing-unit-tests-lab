const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('mom')).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome('car')).toBe(false);
    expect(isPalindrome('hello')).toBe(false);
  });

  test('returns true for mixed case palindromes', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
    expect(isPalindrome('MoM')).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws error for non-alphabetic characters', () => {
    expect(() => isPalindrome('race car')).toThrow();
    expect(() => isPalindrome('race123')).toThrow();
    expect(() => isPalindrome('race!')).toThrow();
  });

  test('throws error for non-string input', () => {
    expect(() => isPalindrome(123)).toThrow();
    expect(() => isPalindrome(null)).toThrow();
    expect(() => isPalindrome(undefined)).toThrow();
  });
});
