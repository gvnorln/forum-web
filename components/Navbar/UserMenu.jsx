'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const UserMenu = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsDropdownOpen(false);
		}
	};

	const handleLogout = (e) => {
		e.preventDefault();
		sessionStorage.removeItem('token');
		window.location.href = '/';
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				id="dropdownAvatarNameButton"
				onClick={toggleDropdown}
				className="flex items-center text-sm pe-1 font-medium text-bluebig rounded-full hover:text-blue-600 dark:hover:text-blue-900 md:me-0 dark:text-white"
				type="button"
			>
				<span className="sr-only">Open user menu</span>
				<Image
					className="w-6 h-6 me-2 rounded-full border-2 border-black"
					src="/images/avatars/avatar.jpg"
					alt="user photo"
					width={28}
					height={28}
				/>
				Bonnie Green
				<svg
					className="w-2.5 h-2.5 ms-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>

			{isDropdownOpen && (
				<div
					id="dropdownAvatarName"
					className="z-10 absolute right-0 mt-2 w-36 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
				>
					<div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
						<div className="font-medium">Pro User</div>
						<div className="truncate">user@gmail.com</div>
					</div>
					<ul
						className="py-2 text-sm text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownAvatarNameButton"
					>
						<li>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Dashboard
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Settings
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
							>
								Earnings
							</a>
						</li>
					</ul>
					<div className="py-2 cursor-pointer">
						<a
							onClick={handleLogout}
							className=" cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
						>
							Sign out
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserMenu;
