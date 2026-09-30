# Francisco Simões — Portfolio

Personal portfolio that showcases my academic and personal projects, experience, education, and contact links in a minimal, scroll-based interface.

**Live site:** [franciscosimoes.vercel.app](https://franciscosimoes.vercel.app)

## Tech stack

- [React](https://react.dev/) 19
- [Create React App](https://create-react-app.dev/)
- [react-i18next](https://react.i18next.com/) and [i18next](https://www.i18next.com/) for localization
- [React Icons](https://react-icons.github.io/react-icons/)
- Plain CSS
- [Vercel Analytics](https://vercel.com/docs/analytics) for deployment analytics
- Deployed on [Vercel](https://vercel.com/)

## Run locally

### Prerequisites

- [Node.js](https://nodejs.org/) and npm

### Setup

```bash
git clone https://github.com/surtricecream/portfolio.git
cd portfolio
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm test` | Run the test watcher |

## Project structure

```text
src/
├── components/   # Page sections and reusable UI components
├── data/         # Projects and experience entries
├── lib/          # i18n configuration
└── locales/      # English and Portuguese translations
```