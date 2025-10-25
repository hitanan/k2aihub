/**
 * Create URL-safe, non-diacritic Vietnamese slug (ASCII-only)
 * - Remove all Vietnamese diacritics (including Đ/đ -> d)
 * - Keep a-z, 0-9 and dashes
 * - Collapse spaces to single dash
 */
export function createVietnameseSlug(text: string): string {
  if (!text) return '';

  // Normalize and strip diacritics
  const withoutDiacritics = text
    .toLowerCase()
    .trim()
    // Normalize to NFD form and remove combining marks
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // Vietnamese special letters
    .replace(/đ/g, 'd');

  return (
    withoutDiacritics
      // Remove all non-alphanumeric characters except spaces and dashes
      .replace(/[^a-z0-9\s-]/g, '')
      // Replace whitespace with dashes
      .replace(/\s+/g, '-')
      // Collapse multiple dashes
      .replace(/-+/g, '-')
      // Trim leading/trailing dashes
      .replace(/^-+|-+$/g, '')
  );
}
