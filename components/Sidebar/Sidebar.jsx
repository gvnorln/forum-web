'use client';

// Import necessary modules and components
import SidebarData from '@/constants/sidebarMenu.js';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// Define the SidebarMenu component
const SidebarMenu = () => {
	// Initialize activeItems state with the value from sessionStorage or default value
	const [activeItems, setActiveItems] = useState(() => {
		const storedActiveItems = sessionStorage.getItem('activeItems');
		return storedActiveItems
			? JSON.parse(storedActiveItems)
			: {
					menu: null,
					subMenu: null,
					subSubMenu: null,
			  };
	});

	// Save activeItems to sessionStorage whenever it changes
	useEffect(() => {
		sessionStorage.setItem('activeItems', JSON.stringify(activeItems));
	}, [activeItems]);

	// Function to handle menu click by setting active menu and resetting submenu and subsubmenu only if it's not active
	const handleMenuClick = (menuId) => {
		setActiveItems((prevState) => ({
			...prevState,
			menu: prevState.menu === menuId ? null : menuId,
			subMenu: null,
			subSubMenu: null,
		}));
	};

	// Function to handle submenu click by setting active submenu and resetting subsubmenu only if it's not active
	const handleSubMenuClick = (e, subMenuId, hasSubSubMenu) => {
		if (hasSubSubMenu) {
			e.preventDefault();
		}
		setActiveItems((prevState) => ({
			...prevState,
			subMenu: prevState.subMenu === subMenuId ? null : subMenuId,
			subSubMenu: null,
		}));
	};

	// Function to handle subsubmenu click by setting active subsubmenu only if it's not active
	const handleSubSubMenuClick = (subSubMenuId) => {
		setActiveItems((prevState) => ({
			...prevState,
			subSubMenu: prevState.subSubMenu === subSubMenuId ? null : subSubMenuId,
		}));
	};

	// Function to render menu icon with active state based on active menu
	const renderMenuIcon = (menu) => (
		<div
			className={`flex items-center justify-center w-10 p-0.5 z-10 ${
				activeItems.menu === menu.id ? 'bg-blueBig' : ''
			}`}
			onClick={() => handleMenuClick(menu.id)}
		>
			<img className="w-10" alt="" src={menu.icon} />
		</div>
	);

	// Function to render menu with submenu and subsubmenu based on active state of each item
	const renderMenu = (menu) => (
		<React.Fragment key={menu.id}>
			<li key={menu.id}>
				<div className="flex items-center cursor-pointer">
					{renderMenuIcon(menu)}
					<span
						className={`ml-4 font-bold ${
							activeItems.menu === menu.id || activeItems.menu === null
								? 'block'
								: 'hidden'
						} text-black text-lg ${
							activeItems.menu === menu.id
								? 'absolute top-40 mt-0.5 left-[123px]'
								: ''
						}`}
						onClick={() => handleMenuClick(menu.id)}
					>
						{menu.label}
					</span>
				</div>
				{/* Render submenu and subsubmenu based on active state */}
				{activeItems.menu === menu.id && menu.submenu && (
					<ul className="pl-12 mt-4 absolute top-48 left-42">
						{menu.submenu.map((subMenu) => (
							<Link href={subMenu.path} key={subMenu.id}>
								<li key={subMenu.id}>
									<div
										className={`flex items-center cursor-pointermi mb-3.5 p-1.5 rounded-md ${
											activeItems.subMenu === subMenu.id
												? 'bg-lightpurplebig'
												: 'hover:bg-lightpurplebig'
										}`}
										onClick={(e) =>
											handleSubMenuClick(e, subMenu.id, subMenu.submenu)
										}
									>
										{subMenu.icon && (
											<img className="h-5 w-5" alt="" src={subMenu.icon} />
										)}
										<span
											className={`ml-4 font-semibold ${
												activeItems.subMenu === subMenu.id
													? 'text-purplebig font-semibold'
													: 'text-black'
											}`}
										>
											{subMenu.label}
										</span>
									</div>
									{activeItems.subMenu === subMenu.id && subMenu.submenu && (
										<ul className="pl-5 mb-4 space-y-2">
											{subMenu.submenu.map((subSubMenu) => (
												<Link href={subSubMenu.path} key={subSubMenu.id}>
													<li
														className={`flex items-center cursor-pointer my-2 p-1.5 rounded-md ${
															activeItems.subSubMenu === subSubMenu.id
																? 'bg-lightpurplebig'
																: 'hover:bg-lightpurplebig'
														}`}
														onClick={() => handleSubSubMenuClick(subSubMenu.id)}
													>
														<span
															className={`ml-4 ${
																activeItems.subSubMenu === subSubMenu.id
																	? 'text-purplebig font-semibold'
																	: 'text-black'
															}`}
														>
															{subSubMenu.label}
														</span>
													</li>
												</Link>
											))}
										</ul>
									)}
								</li>
							</Link>
						))}
					</ul>
				)}
			</li>
		</React.Fragment>
	);

	// Render the sidebar menu
	return (
		<div className="right-[60px] flex w-[310px] bg-white border-2 border-gray-200 flex-col py-1 rounded-2xl ml-[90px] my-12">
			<ul className="space-y-4 flex-grow my-2">
				{SidebarData.map((menu) => renderMenu(menu))}
			</ul>
		</div>
	);
};

// Export the SidebarMenu component
export default SidebarMenu;
