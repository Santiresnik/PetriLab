import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PetriLab',
  description: 'Your personal petri dishes scanner',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="https://cdn.icon-icons.com/icons2/2379/PNG/512/petri_dish_experimentation_biology_education_petri_dish_icon_143934.png"/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}