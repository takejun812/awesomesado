"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "../../components/accordion";

const accordionItems = [
	{
		title: "野外活動のいいところは？",
		content: (
			<>
				自然の中での体験は、子どもたちの成長にとってとても大切なものです。森を歩いたり、虫を捕まえたり、星空を眺めたりすることで、五感が刺激され、発想力や探究心が育まれます。それだけでなく、友達や初めて仲良くなる人たちと一緒に過ごすことで、協調性や思いやりの気持ちも自然と身につきます。小さな挑戦を乗り越える中で、チャレンジする力や自信も育まれていくのです。
				<br />
				<br />
				また、文部科学省の調査によると、自然体験が豊富な子どもほど道徳観や正義感がしっかりしているという結果が出ています。例えば、「友達が悪いことをしていたら止める」「困っている人に手を差し伸べる」といった行動ができる子が多いそうです。自然と向き合うことで、命の大切さや自分の力だけではどうにもならないことがあることを学び、それが社会で生きていく力につながるのかもしれません。
				<br />
				<br />
				しかし、最近では遊べる公園が減ったり、安全面を考えて自由に外で遊ぶ機会が少なくなったりしています。そのため、意識的に自然と触れ合う場を作ることが大切です。まずは、大人が率先して自然に触れ、子どもたちに楽しさを伝えていくことが必要なのかもしれません。
				<br />
				<br />
				自然の中での経験は、すぐに結果が出るものではないですが、大人になったときに「昔の経験があったから今の自分がいる」と気づく瞬間がきっと訪れるはずです。
			</>
		),
	},
	{
		title: "引率者はどんな人？",
		content: (
			<>
				引率者は、子どもと遊ぶことが好きなボランティアで、楽しさと安全を両立させながら活動を支える存在です。
				<br />
				<br />
				　また、また、現場責任者は、大阪の団体で4年間ボランティアリーダーとして活動し、キャンプや日帰り活動の経験を積みました。2024年春までは支部長として企画運営や安全管理を担当。子ども70人、リーダー20人の活動を運営し、プログラムマネージャーも務めました。林間学校や児童養護施設、学童、職業体験テーマパークのスタッフなど多様な経験を活かし、子どもたちの成長を支えています。
			</>
		),
	},
	{
		title: "安全は？",
		content: (
			<>
				活動場所は事前に下見を行い、安全に活動できる環境かを確認します。地形や設備の状況、危険箇所の有無をチェックし、必要に応じて対策を講じます。また、活動当日も引率者が再度危険箇所を確認し、子どもたちが安心して過ごせるよう準備を整えます。活動中は引率者同士が密に連携し、状況を共有しながら安全管理を徹底。万が一の事態にも迅速に対応できるよう、救急対応の準備も行います。安全を最優先にしながら、子どもたちが楽しく学び、成長できる環境を整えています。
			</>
		),
	},
	{
		title: "保険は入っているの？",
		content: (
			<>
				参加に際して、その都度保険加入いたします。安全管理には十分に配慮しておりますが、万が一ケガや病気が発生した場合には、保険の適応範囲内にて対応させていただきます。
				<br />
				<br />
				加入する保険は「Pontaかんたん保険　レジャー保険」です。補償の条件は下記のリンクから約款をご確認ください。
				<br />
				<a
					href="https://ponta.pointhoken.jp/details/1cdc65ad-b6c8-41b4-a2bb-4c160b46d424"
					className="text-blue-300 underline pt-3"
				>
					Pontaかんたん保険　レジャー保険
				</a>
			</>
		),
	},
	{
		title: "今後どんなことをするの？",
		content: (
			<>
				キャンプ、登山、海、秘密基地作り、プロ紙飛行機工作、水鉄砲バトル、逃走中、チャンバラ大戦等、まだまだたくさんの活動を開催予定でございます。
			</>
		),
	},
];
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
		});

		gsap.to("#menu--schedule", {
			y: "20%",
			opacity: 1,
			duration: 4,
			delay: 3.2,
		});

		gsap.to("#menu--article", {
			y: "20%",
			opacity: 1,
			duration: 4,
			delay: 3.4,
		});

		gsap.to("#menu--question", {
			y: "20%",
			opacity: 1,
			duration: 4,
			delay: 3.6,
		});
	}, []);

	// コンテンツのアニメーション
	useEffect(() => {
		gsap.from("#title-about", {
			y: "-140%",
			opacity: 0,
			duration: 3,
			ease: "power4.out",
			// scrollTrigger: {
			// 	trigger: "#title-about",
			// 	start: "top bottom",
			// 	toggleActions: "play none none none",
			// 	markers: true,
			// },
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
											className="absolute right-0 top-0 min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
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
											className="absolute left-0 top-[24vh] min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
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
											className="absolute right-0 top-[44vh] min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
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
											className="absolute left-0 top-[68vh] min-w-[280px] w-[70%] max-w-[400px] md:w-[400px] hover:opacity-70 opacity-0"
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
								<div className="absolute bottom-8 right-10">
									<div className="text-center">
										<div ref={arrowRef} className="mb-4 inline-block">
											<svg
												className="w-6 h-6 text-white"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</div>
										<p className="text-white uppercase tracking-widest text-sm">
											Scroll down
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<p className="mt-10 text-[16px] md:text-[30px] text-red-500 w-full  font-bold text-center block border-yellow-300 border-10 py-4 max-w-[310px] mx-auto">
					※一部コンテンツは鋭意制作中です。
					<br />
					5月ごろ正規リリース予定です。
				</p>
				<div className="w-screen mx-auto  pt-30">
					<section id="about" className="max-w-[700px] mx-auto">
						<div className="">
							<Image
								id="title-about"
								src="/assets/image/page-top-section__title-about.png"
								alt="オーサムのメニュー"
								className="w-full md:w-[400px] mx-auto  max-w-[300px] opacity-100"
								width={517}
								height={313}
							/>
						</div>
						<div className="pt-4">
							<p className="px-4">
								私たちは、文部科学省や経済産業省が提唱する「社会を生き抜く力」を育むことを目的とした団体です。現代社会では、単なる知識だけでなく、「コミュニケーション能力」「自主性」「創造力」「問題解決能力」などが求められています。そこで、私たちは子どもたちがこれらの力を身につけ、将来にわたって活躍できるよう支援しています。
								<br />
								<br />
								活動では、大人1人と子ども5人前後のグループ行動を基本とし、仲間と協力しながらさまざまな課題に挑戦します。これにより、子どもたちは「行動力」「問題解決力」「協調性」「主体性」などを学びます。また、グループでの活動を通じて、多様な価値観に触れ、自ら考え、行動する力を培います。
							</p>
						</div>
					</section>
					<section
						id="schedule"
						className="w-full mx-auto py-15 mt-15 bg-gray-100"
					>
						<div className="max-w-[700px] mx-auto">
							<Image
								id="title-schedule"
								src="/assets/image/page-top-section__title-schedule.png"
								alt="オーサムのメニュー"
								className="w-full md:w-[400px] mx-auto max-w-[300px]"
								width={517}
								height={313}
							/>
							<div className="">
								<h3 className="pt-5 mx-10 text-lg font-bold">直近の活動予定</h3>
								<dl className="flex gap-6 mx-10 pt-3">
									<dt className="">3/23 野外炊飯 カレー編</dt>
									<dd className="">1,300円</dd>
								</dl>
								<dl className="flex gap-6 mx-10 pt-3">
									<dt className="">4/13 野外炊飯 バームクーヘン編</dt>
									<dd className="">1,200円</dd>
								</dl>
								<dl className="flex gap-6 mx-10 pt-3">
									<dt className="">4/20 野外炊飯 ハンバーガー編</dt>
									<dd className="">1,400円</dd>
								</dl>
							</div>
							<div className="mx-auto pt-5 w-full flex justify-center">
								<a
									href="https://docs.google.com/forms/d/e/1FAIpQLSfYJDL23ocV4JqWE6Adc40hWa-FaMaOVe8eCYvAsqW-PHwHDQ/viewform?usp=dialog"
									className="block border rounded-4xl text-center py-3 bg-black text-white w-[300px]"
								>
									申し込みフォームはこちら
								</a>
							</div>
						</div>
					</section>
					<section id="article" className="max-w-[700px] mx-auto pt-15">
						<div className="">
							<Image
								id="title-article"
								src="/assets/image/page-top-section__title-article.png"
								alt="オーサムのメニュー"
								className="w-full md:w-[400px] mx-auto max-w-[300px]"
								width={517}
								height={313}
							/>
						</div>
						<p className="pt-5 text-center">
							毎活動後に記事を投稿する予定です。もうしばらくお待ちください。
						</p>
					</section>
					<section id="question" className=" py-15 mt-15 bg-gray-100">
						<div className="max-w-[700px] mx-auto">
							<Image
								id="title-question"
								src="/assets/image/page-top-section__title-question.png"
								alt="オーサムのメニュー"
								className="w-full md:w-[400px] mx-auto max-w-[300px]"
								width={517}
								height={313}
							/>
							<div className="flex items-center justify-center">
								<Accordion items={accordionItems} />
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
