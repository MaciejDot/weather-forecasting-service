export default function forceNonNullable<T>(value: T | null | undefined): T {
  if (value === null || value === undefined) {
    throw new Error(`Expected value to be non-nullable, but got ${value}`);
  }
  return value;
}
