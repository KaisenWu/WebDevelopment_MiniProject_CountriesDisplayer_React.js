import React from 'react';

export default function Footer() {
  const currentYear = new Date();
  return (
    <footer>
      <p>Generated Today: {currentYear.toString()}</p>
    </footer>
  );
}