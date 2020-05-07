/**
 * Helper function to return a value if a given expression is truthy.
 * @param bool to determine if value should be returned or not.
 * @param value the value that should be returned when bool i true.
 * @returns value if bool is true, undefined if false.
 */
export const takeIf = <T>(bool: boolean, value: T) =>
  bool ? value : undefined;
