import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import DashboardSidebar from './Sidebar/DashboardSidebar';

const Dashboard = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/login');
  }

  return (
    <section>
      <DashboardSidebar />
    </section>
  );
};

export default Dashboard;
