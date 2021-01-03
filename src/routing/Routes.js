import ActivePage from 'pages/ActivePage';
import CompletedPage from 'pages/CompletedPage';
import SearchPage from 'pages/SearchPage';

const Routes = [
  {
    path: '/', component: ActivePage,
  },
  {
    path: '/completed', component: CompletedPage,
  },
  {
    path: '/search', component: SearchPage,
  },
];

export default Routes;
