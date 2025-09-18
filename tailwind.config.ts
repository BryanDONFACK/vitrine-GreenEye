import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--color-background))',
        foreground: 'rgb(var(--color-text-primary))',
        card: {
          DEFAULT: 'rgb(var(--color-surface))',
          foreground: 'rgb(var(--color-text-primary))',
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary))',
          foreground: 'rgb(255 255 255)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary))',
          foreground: 'rgb(var(--color-text-primary))',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent))',
          foreground: 'rgb(255 255 255)',
        },
        muted: {
          DEFAULT: 'rgb(var(--color-surface))',
          foreground: 'rgb(var(--color-text-secondary))',
        },
        border: 'rgb(var(--color-border))',
        success: 'rgb(var(--color-success))',
        warning: 'rgb(var(--color-warning))',
        error: 'rgb(var(--color-error))',
      },
      borderRadius: {
        lg: '0.75rem',
        md: '0.5rem',
        sm: '0.25rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'magnetic': 'magnetic 0.3s ease-out',
        'tilt': 'tilt 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'morph': 'morph 4s ease-in-out infinite',
        'parallax': 'parallax 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgb(var(--color-primary)), 0 0 10px rgb(var(--color-primary)), 0 0 15px rgb(var(--color-primary))' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgb(var(--color-primary)), 0 0 20px rgb(var(--color-primary)), 0 0 30px rgb(var(--color-primary))' 
          },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(-2px, -2px) scale(1.02)' },
        },
        tilt: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(5deg) rotateY(5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '20px' },
          '50%': { borderRadius: '50px' },
        },
        parallax: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config;