"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		gsap.to("#mv", {
			opacity: 0,
			duration: 4,
			delay: 2,
			ease: "power4.out",
		});

		gsap.to("#mv__logo", {
			opacity: 1,
			duration: 1,
			ease: "power4.out",
		});
		gsap.to("#mv__logo", {
			opacity: 0,
			duration: 4,
			delay: 2,
			ease: "power4.out",
		});

		gsap.to("#mv__menu", {
			opacity: 1,
			duration: 4,
			delay: 2,
			ease: "power4.out",
		});
	}, []);
	return (
		<main className="bg-brand size-full">
			<section className="h-[200vh]">
				<div className="sticky h-screen top-0">
					<div className="h-screen  relative overflow-hidden">
						<Image
							id="mv"
							src="/assets/image/mv.png"
							alt="fv"
							className="size-full opacity-100 object-cover "
							width={1800}
							height={500}
						/>
						<div
							id="mv__logo"
							className="w-[100%] -ml-10  md:w-[500px] absolute top-0 pt-6 left-1/2 -translate-x-1/2 opacity-0"
						>
							<Image
								src="/assets/image/awesome__logo--white.png"
								alt="オーサムのロゴ"
								className="w-full"
								width={517}
								height={313}
							/>
						</div>
						<div
							id="mv__menu"
							className="h-screen w-full absolute top-0 left-1/2 -translate-x-1/2 opacity-0"
						>
							<Image
								src="/assets/image/mv__menu--bg.jpg"
								alt="fv"
								className="size-full opacity-100 object-cover "
								width={1800}
								height={500}
							/>
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[500px]">
								<div className="relative mx-6">
									<a
										href="#"
										id="menu--about"
										className="absolute right-0 top-[10vh] w-[70%] md:w-[400px] hover:opacity-70"
									>
										<Image
											src="/assets/image/title--about.png"
											alt="オーサムのメニュー"
											className="w-full"
											width={517}
											height={313}
										/>
									</a>
									<a
										href="#"
										id="menu--schedule"
										className="absolute left-0 top-[35vh] w-[70%] md:w-[400px] hover:opacity-70"
									>
										<Image
											src="/assets/image/title--schedule.png"
											alt="オーサムのメニュー"
											className="w-full"
											width={517}
											height={313}
										/>
									</a>
									<a
										href="#"
										id="menu--article"
										className="absolute right-0 top-[55vh] w-[70%] md:w-[400px] hover:opacity-70"
									>
										<Image
											src="/assets/image/title--article--ready.png"
											alt="オーサムのメニュー"
											className="w-full"
											width={517}
											height={313}
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="max-w-[700px] mx-auto h-[500px] py-30">
				<section className="">
					<div className="">
						<Image
							src="/assets/image/title--about.png"
							alt="オーサムのメニュー"
							className="w-full"
							width={517}
							height={313}
						/>
					</div>
				</section>
			</div>
		</main>
	);
}
