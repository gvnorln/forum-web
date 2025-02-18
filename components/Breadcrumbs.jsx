import SidebarData from '@/constants/sidebarMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
	// Get the current pathname from the router hook and split it into parts to build the breadcrumbs list later on
	const pathname = usePathname();
	const pathParts = pathname.split('/').filter(Boolean);

	// Find the label for the current path in the sidebar data
	const findLabel = (path, menuItems) => {
		for (const item of menuItems) {
			if (item.path === path) return item.label;
			if (item.submenu) {
				const subLabel = findLabel(path, item.submenu);
				if (subLabel) return subLabel;
			}
		}
		return null;
	};

	// Custom labels for specific paths
	const customLabels = {
		'/simo/prefManagement/addKpi': 'Create',
		'/umum/pemesananKendaraan/pesanKendaraan/createPesanKendaraan': 'Create',
		'/umum/pemesananRuang/create-ruang-rapat-besar': 'Create',
		'/umum/pemesananRuang/create-ruang-rapat-kecil': 'Create',
	};

	// Build the breadcrumbs list based on the current path and the sidebar data
	const breadcrumbs = pathParts.map((part, index) => {
		const path = '/' + pathParts.slice(0, index + 1).join('/');
		const label = customLabels[path] || findLabel(path, SidebarData) || part;

		// Return the breadcrumb item with a link if it's not the last item in the list
		return (
			// Add a key prop to the list item to avoid a React warning
			<li key={path} className="inline-flex items-center">
				<div className="flex items-center">
					<span className="text-gray-400">•</span>
					{index < pathParts.length - 1 ? (
						<Link href={path}>
							<span className="ms-1 text-sm font-medium text-gray-400 hover:text-blue-600 md:ms-2">
								{label}
							</span>
						</Link>
					) : (
						<span className="ms-1 text-sm font-medium text-blue-500 md:ms-2">
							{label}
						</span>
					)}
				</div>
			</li>
		);
	});

	return (
		<div className="flex flex-row justify-start mb-6">
			<nav className="flex" aria-label="Breadcrumb">
				<ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
					<li className="inline-flex items-center">
						<Link href="/dashboard">
							<span className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-blue-600">
								Home
							</span>
						</Link>
					</li>
					{breadcrumbs}
				</ol>
			</nav>
		</div>
	);
};

export default Breadcrumbs;
