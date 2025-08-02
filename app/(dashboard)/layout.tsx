
import { NextPage } from 'next'
import { Sidebar } from './_components/Sidebar';
import { OrgSidebar } from './_components/OrgSidebar';
import { Navbar } from './_components/navbar';

interface Props {
    children: React.ReactNode;
}

const DashboardLayout: NextPage<Props> = ({children}:Props) => {
  return (
  <main className="h-full">
    <Sidebar/>
    <div className='pl-[60px] h-full'>
        <div className='flex gap-x-3 h-full'>

            <OrgSidebar/>

            <div className='h-full flex-1'>
              <Navbar/>
                {children}
            </div>
        </div>
    </div> 
  </main>);
}

export default DashboardLayout