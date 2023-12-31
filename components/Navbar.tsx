"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { is } from "date-fns/locale";


export default function NavBar() {

	const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false)
	const pathName = usePathname()
	const indexSecondSlashInPathName = pathName.indexOf("/", 1)
	if (indexSecondSlashInPathName > -1) {
		var pathNameNew = pathName.substring(0, indexSecondSlashInPathName)
	} else {
		var pathNameNew = pathName
	}

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setIsNavbarMobileOpen(false)
		);
	}, []);

	interface NavBarButtonType {
		name: string,
		path: string
	}

	const renderNavbarButton = ({ name, path }: NavBarButtonType) => {
		return <li>
			<Link href={path}>
				<Button
					variant="ghost"
					className={` ${pathNameNew === path ? "font-bold text-lg" : "text-base"}   `}
				>
					{name}
				</Button>
			</Link>
		</li>
	}

	const isLogedIn = true

	const navList = (
		<ul className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
			{renderNavbarButton({ name: "Home", path: "/" })}
			{renderNavbarButton({ name: "Pricing", path: "/pricing" })}
			{renderNavbarButton({ name: "Community", path: "/community" })}
			{isLogedIn ? (
				<>
					{renderNavbarButton({ name: "Profile", path: "/profile" })}
					{renderNavbarButton({ name: "Your routine", path: "/routine" })}
					{renderNavbarButton({ name: "Create routine", path: "/createroutine" })}
				</>
			) : ""}
		</ul>
	);


	return (
		<>
			<nav className="sticky inset-0 z-50 h-max rounded-none max-w-full shadow-md bg-opacity-80 backdrop-saturate-200 backdrop-blur-2xl bg-white border border-white/80 dark:bg-dark dark:border-none">
				<div className="container py-3 flex items-center justify-between">
					{/* Left side */}
					{/* Logo */}
					<div> Skinmemo </div>


					{/* Right side */}
					<div className="flex items-center gap-4">

						{/* Render navlist */}
						<div className=" hidden lg:block">
							{navList}
						</div>

						{/* Button Login */}
						{!isLogedIn && (
							<div className="">
								<Link href="/login">
									<Button className="flex gap-2 items-center">
										<User size={18} />
										<span>
											Login
										</span>
									</Button>
								</Link>
							</div>
						)}

						{/* Avatar */}
						{isLogedIn && (
							<div className="flex gap-2 items-center">
								<Avatar>
									<AvatarImage src="https://picsum.photos/200" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span className="font-semibold">Quang</span>
							</div>
						)}

						{/* Icon Hamburger */}
						<button
							className="h-6 w-6 text-inherit lg:hidden dark:text-white"
							onClick={() => { setIsNavbarMobileOpen(!isNavbarMobileOpen) }}
						>
							{isNavbarMobileOpen ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</nav>

			{/* Navbar on mobile (PUT OUTSIDE THE NAV)*/}
			{isNavbarMobileOpen && (
				<div className="flex flex-col gap-5 justify-center items-center text-center mx-4 py-5 border border-gray-20 rounded-xl">
					{navList}
					{/* Login button */}
					{/* <div className="">
						<Link href="/login">
							<Button>
								Login
							</Button>
						</Link>
					</div> */}
				</div>
			)}
		</>
	)
}