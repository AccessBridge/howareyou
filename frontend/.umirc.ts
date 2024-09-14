import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/cases',
    },
    {
      name: 'Login',
      path: '/login',
      component: './Login',
      layout: false,
    },
    {
      name: 'Appointments',
      path: '/appointments',
      component: './Appointments',
      access: 'isVolunteer',
    },
    {
      name: 'Cases',
      path: '/cases',
      component: './Cases',
      access: 'isVolunteer',
    },
    // {
    //   name: 'Elderly Residents',
    //   path: '/residents',
    //   access: 'isVolunteer',
    //   component: 'Residents',
    // },
    {
      path: '/residents/:id',
      component: './ResidentProfile',
      access: 'isVolunteer',
    },
  ],
  npmClient: 'pnpm',
});
