/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orb: 'var(--orb)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        'formal-accent': 'var(--formal-accent)',

        error: 'var(--error)',
        'error-dark': 'var(--error-dark)',

        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        'primary-dimmed': 'var(--primary-dimmed)',
        'primary-semi-dimmed': 'var(--primary-semi-dimmed)',
        'primary-background': 'var(--primary-background)',
        'primary-dark-red': 'var(--primary-dark-red)',
        'secondary-dimmed': 'var(--secondary-dimmed)',

        'accent-light-transparent': 'var(--accent-light-transparent)',
        'accent-light-active-transparent':
          'var(--accent-light-active-transparent)',
        'secondary-light-transparent': 'var(--secondary-light-transparent)',
        'secondary-light-active-transparent':
          'var(--secondary-light-active-transparent)',

        'accent-semi-transparent': 'var(--accent-semi-transparent)',
        'primary-semi-transparent': 'var(--primary-semi-transparent)',
        'secondary-semi-transparent': 'var(--secondary-semi-transparent)',
        'tertiary-semi-transparent': 'var(--tertiary-semi-transparent)',
        'formal-accent-semi-transparent':
          'var(--formal-accent-semi-transparent)',
        'error-semi-transparent': 'var(--error-semi-transparent)',
      },
      borderRadius: {
        avatar: '6rem',
      },
      width: {
        chart: '108px',
        time: '95px',
        glass: '107px',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
}