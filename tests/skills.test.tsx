import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillsSection } from '@/components/sections/skills';
import { skillGroups } from '@/content/skills';

describe('SkillsSection', () => {
  it('renders every skill group label', () => {
    render(<SkillsSection />);
    for (const group of skillGroups) {
      expect(screen.getByText(group.label)).toBeInTheDocument();
    }
  });

  it('renders every individual skill name', () => {
    render(<SkillsSection />);
    const allItems = skillGroups.flatMap((g) => g.items);
    for (const item of allItems) {
      expect(screen.getAllByText(item.name).length).toBeGreaterThan(0);
    }
  });
});
