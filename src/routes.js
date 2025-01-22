import { Dashboard } from './pages/Dashboard';
import { Unlock } from './pages/Unlock';

export const Routes = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: '/unlock',
    title: 'Unlock',
    component: Unlock,
    authenticatedRoute: false
  }
]; 