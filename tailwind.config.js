/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0B1120',
        card: '#111827',
        'card-border': '#1F2937',
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
          light: '#60A5FA',
        },
        secondary: {
          DEFAULT: '#38BDF8',
          hover: '#0284C7',
        },
        accent: {
          DEFAULT: '#06B6D4',
          hover: '#0891B2',
        },
        surface: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          800: '#1F2937',
          900: '#111827',
          950: '#0B1120',
        },
        cloud: {
          aws: '#FF9900',
          docker: '#2496ED',
          k8s: '#326CE5',
          terraform: '#7B42BC',
          linux: '#FCC624',
          python: '#3776AB',
          jenkins: '#D24939',
          git: '#F05032',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      boxShadow: {
        'glow-primary': '0 0 25px -5px rgba(59, 130, 246, 0.5)',
        'glow-secondary': '0 0 25px -5px rgba(56, 189, 248, 0.5)',
        'glow-accent': '0 0 25px -5px rgba(6, 182, 212, 0.5)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
