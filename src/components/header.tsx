import { useState } from "react";
import Image from "next/image";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div>
				<a href="" className="block w-[100px]">
					<Image
						src="/assets/image/awesome__logo.png"
						alt="オーサムのロゴ"
						className="w-full"
						width={517}
						height={313}
					/>
				</a>
				<div className="size-5">
					<button
						className="md:hidden focus:outline-none"
						onClick={() => setIsOpen(!isOpen)}
					>
						<div className="w-8 h-6 flex flex-col justify-between">
							<span
								className={`bg-white h-1 w-full transition transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
							></span>
							<span
								className={`bg-white h-1 w-full transition ${isOpen ? "opacity-0" : "opacity-100"}`}
							></span>
							<span
								className={`bg-white h-1 w-full transition transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
							></span>
						</div>
					</button>

					{/* メニュー（PC用） */}
					<ul className="hidden md:flex space-x-6">
						<li>
							<a href="#home" className="hover:text-gray-400">
								Home
							</a>
						</li>
						<li>
							<a href="#skills" className="hover:text-gray-400">
								Skills
							</a>
						</li>
						<li>
							<a href="#projects" className="hover:text-gray-400">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:text-gray-400">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* モバイルメニュー */}
				<div
					className={`md:hidden transition-transform duration-300 ease-in-out ${isOpen ? "scale-100" : "scale-0"} transform origin-top`}
				>
					<ul className="flex flex-col items-center space-y-4 py-4 bg-gray-800">
						<li>
							<a href="#home" className="text-white text-lg">
								Home
							</a>
						</li>
						<li>
							<a href="#skills" className="text-white text-lg">
								Skills
							</a>
						</li>
						<li>
							<a href="#projects" className="text-white text-lg">
								Projects
							</a>
						</li>
						<li>
							<a href="#contact" className="text-white text-lg">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
