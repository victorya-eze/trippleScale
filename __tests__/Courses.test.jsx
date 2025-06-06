import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Courses from '../src/components/Courses';

// Mock framer-motion to avoid animation overhead in tests
jest.mock('framer-motion', () => ({
  AnimatePresence: ({ children }) => <div>{children}</div>,
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
  }
}));

describe('Courses component', () => {
  test('filters courses by search term', () => {
    render(<Courses />);
    // initial render should show multiple courses
    expect(screen.getByText('AWS Cloud Computing')).toBeInTheDocument();
    expect(screen.getByText('Python Programming')).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText('Search courses...');
    fireEvent.change(searchInput, { target: { value: 'Python' } });

    expect(screen.getByText('Python Programming')).toBeInTheDocument();
    // other course should not be visible after filtering
    expect(screen.queryByText('AWS Cloud Computing')).toBeNull();
  });

  test('filters courses by category', () => {
    render(<Courses />);
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'DevOps' } });


    expect(screen.getAllByText('DevOps')[0]).toBeInTheDocument();
    expect(screen.queryByText('AWS Cloud Computing')).toBeNull();
  });
});
