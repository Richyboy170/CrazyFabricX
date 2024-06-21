"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import '@/app/globals.css';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'DASHBOARD', href: '/MyAccount/Dashboard' },
  { name: 'ORDERS', href: '/MyAccount/Orders' },
  { name: 'POINTS', href: '/MyAccount/Points' },
  { name: 'ACCOUNT DETAILS', href: '/MyAccount/AccountDetails', },
  { name: 'ADDRESSES', href: '/MyAccount/Addresses'},
  { name: 'LOG OUT', href: '/MyAccount/LogInAndRegister'},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-customRed p-3 text-sm font-medium hover:bg-yellow-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  'bg-sky-100 text-customGold': pathname === link.href,
                },
              )}
            >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
