/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6096B4', // warna navbar
        secondary: "#FFB84C", // warna kuning
        bgSidebar: '#10152F', // warna background sidebar
        bgDanger: '#F63C14', // warna background merah,
        bgIconActive: '#34457C', // warna icon aktif sidebar
        bgMenuActive: '#F5BF6C', // warna menu aktif sidebar
        textColor: '#FFFFFF',
        bgHoverPrimary: '#436475', 
        bgHoverSecondary: '#e99b25', 
      },
    },
  },
  plugins: [],
}

