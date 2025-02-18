"use client";

import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer/Footer';
import NavbarMenu from '@/components/Navbar/Navbar';
import SidebarMenu from '@/components/Sidebar/Sidebar';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	return isHomePage ? (
		<main>{children}</main>
	) : (
		<>
			<NavbarMenu />
			<div className="flex min-h-screen">
				<div className="flex flex-col h-full">
					<SidebarMenu />
					<Footer />
				</div>
				<main className="flex-1 my-12 mx-14">
					{children}
				</main>
			</div>
		</>
	);
}
