import Navbar from '@/app/Components/Navbar';
import '@/app/global.css'

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
      <div className="w-full flex-none md:w-64">
        <Navbar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 text-customDarkGold bg-customGoldo">{children}</div>
    </div>
  );
}