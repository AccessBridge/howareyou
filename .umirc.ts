import { defineConfig } from '@umijs/max';

export default defineConfig({
  esbuildMinifyIIFE: true,
  history: {
    type: 'browser', // Use browser-based routing
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  locale: {
    default: 'en-US',
    antd: true, // Enable Ant Design localization
    baseNavigator: true, // Use the browser's language settings
    baseSeparator: '-', // Locale code separator
    useLocalStorage: true, // Save locale to localStorage
  },
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Login',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: 'Elderly Residents',
      path: '/home',
      access: ['isVolunteer', 'isStaff'],
      component: './Home',
    },
    {
      path: '/elderly/:id',
      component: './ElderlyProfile',
      access: 'isStaff',
      layout: true,
    },
    {
      name: 'Register Visit',
      path: '/register-visit/:id',
      component: './RegisterVisit',
      access: ['isVolunteer', 'isStaff'],
      layout: true,
    },
    {
      name: 'Display Visits',
      path: '/display-visits',
      component: './DisplayVisits',
      access: ['isVolunteer', 'isStaff'],
      layout: true,
    },
    {
      name: 'Visit Detail',
      path: '/visit/:id',
      component: './VisitDetail',
      access: ['isVolunteer', 'isStaff'],
      hideInMenu: true,
    },
  ],
  npmClient: 'pnpm',
});
