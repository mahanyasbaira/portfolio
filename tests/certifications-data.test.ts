import { describe, it, expect } from 'vitest';
import { certifications } from '@/content/certifications';

describe('certifications data integrity', () => {
  it('has unique ids', () => {
    const ids = certifications.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every cert has a name, issuer, category, and image', () => {
    for (const c of certifications) {
      expect(c.name).toBeTruthy();
      expect(c.issuer).toBeTruthy();
      expect(c.category).toBeTruthy();
      expect(c.image).toMatch(/\.(png|jpg|jpeg|svg|webp)$/i);
    }
  });

  it('every verifyUrl is a valid https url', () => {
    for (const c of certifications) {
      if (c.verifyUrl) {
        expect(c.verifyUrl).toMatch(/^https:\/\//);
      }
    }
  });
});
