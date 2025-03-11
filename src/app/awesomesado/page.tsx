"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect,useRef} from "react";

export default function Home() {
  // MVアニメーション
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

    gsap.to("#menu--about", {
      y: "20%",
			opacity: 1,
			duration: 4,
			delay: 3,
			ease: "power2.out",
		});

    gsap.to("#menu--schedule", {
      y: "20%",
			opacity: 1,
			duration: 4,
			delay: 3.2,
			ease: "power2.out",
		});

    gsap.to("#menu--article", {
      y: "20%",
			opacity: 1,
			duration: 4,
			delay: 3.4,
			ease: "power2.out",
		});

    gsap.to("#menu--question", {
      y: "20%",
			opacity: 1,
			duration: 4,
			delay: 3.6,
			ease: "power2.out",
		});
	}, []);

  // GSAPで矢印を上下にゆっくりと動かすアニメーション
  const arrowRef = useRef(null);
  useEffect(() => {
    
    gsap.to(arrowRef.current, {
      y: 20,
      duration: 1.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

	return (
    <>
		<main className="bg-white text-black size-full">
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
										href="#about"
										id="menu--about"
										className="absolute right-0 top-[8vh] min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
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
										href="#schedule"
										id="menu--schedule"
										className="absolute left-0 top-[32vh] min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
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
										href="#article"
										id="menu--article"
										className="absolute right-0 top-[52vh] min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
									>
										<Image
											src="/assets/image/title--article--ready.png"
											alt="オーサムのメニュー"
											className="w-full"
											width={517}
											height={313}
										/>
									</a>
                  <a
										href="#question"
										id="menu--question"
										className="absolute left-0 top-[72vh] min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
									>
										<Image
											src="/assets/image/title--question.png"
											alt="オーサムのメニュー"
											className="w-full"
											width={517}
											height={313}
										/>
									</a>
								</div>
							</div>
              <div className="absolute bottom-5 right-3">
              <div className="text-center">
        <div ref={arrowRef} className="mb-4 inline-block">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <p className="text-white uppercase tracking-widest text-sm">Scroll down</p>
      </div>

              </div>
						</div>
					</div>
				</div>
			</section>
      <p className="mt-10 text-[16px] md:text-[30px] text-red-500 w-full  font-bold text-center block border-yellow-300 border-10 py-4 max-w-[310px] mx-auto">
						※一部コンテンツは鋭意制作中です。
						<br />
						5月ごろ正規リリース予定です
					</p>
			<div className="w-screen mx-auto  py-30">
      
				<section id="about" className="max-w-[700px] mx-auto">
					<div className="">
						<Image
							src="/assets/image/page-top-section__title-about.png"
							alt="オーサムのメニュー"
							className="w-full md:w-[400px] mx-auto  max-w-[300px]"
							width={517}
							height={313}
						/>
					</div>
					<div className="">
						<p className="">
							大人一人、子ども５人前後のグループ行動を基本とし、普段なかなか体験できないような活動を通じ、子どもたちの「行動力」、「問題解決力」、
							「協調性」、「主体性」などを育みます。
						</p>
						<Image
							src="/assets/image/page-top-section__title-about.png"
							alt="オーサムのメニュー"
							className="w-full md:w-[400px] mx-auto max-w-[300px]"
							width={517}
							height={313}
						/>
					</div>
				</section>
				<section id="schedule" className="max-w-[700px] mx-auto">
					<div className="">
						<Image
							src="/assets/image/page-top-section__title-schedule.png"
							alt="オーサムのメニュー"
							className="w-full md:w-[400px] mx-auto max-w-[300px]"
							width={517}
							height={313}
						/>
					</div>
				</section>
				<section id="article" className="max-w-[700px] mx-auto">
					<div className="">
						<Image
							src="/assets/image/page-top-section__title-article.png"
							alt="オーサムのメニュー"
							className="w-full md:w-[400px] mx-auto max-w-[300px]"
							width={517}
							height={313}
						/>
					</div>
				</section>
        <section id="question" className="max-w-[700px] mx-auto">
					<div className="">
						<Image
							src="/assets/image/page-top-section__title-question.png"
							alt="オーサムのメニュー"
							className="w-full md:w-[400px] mx-auto max-w-[300px]"
							width={517}
							height={313}
						/>
					</div>
				</section>
			</div>
		</main>
    </>
	);
}
