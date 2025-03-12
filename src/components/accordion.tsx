import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface AccordionItem {
	title: string;
	content: React.ReactNode;
}

interface AccordionProps {
	items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	useEffect(() => {
		items.forEach((_, index) => {
			if (contentRefs.current[index]) {
				gsap.to(contentRefs.current[index], {
					height: activeIndex === index ? "auto" : 0,
					opacity: activeIndex === index ? 1 : 0,
					duration: 0.5,
					ease: "power2.inOut",
				});
			}
		});
	}, [activeIndex, items]);

	return (
		<div className="w-full max-w-md mx-auto">
			{items.map((item, index) => (
				<div key={index} className="border-b border-gray-200">
					<button
						onClick={() => toggleAccordion(index)}
						className="w-full text-left py-4 px-2 focus:outline-none flex justify-between items-center"
					>
						<span className="font-medium">Q.{item.title}</span>
						<span className="ml-4 text-[20px]">
							{activeIndex === index ? "-" : "+"}
						</span>
					</button>
					<div
						ref={(el) => {
							contentRefs.current[index] = el;
						}}
						className="overflow-hidden"
						style={{ height: 0, opacity: 0 }}
					>
						<div className="py-2 px-4 flex gap-2">
							<span className="block"> A.</span>
							<div className="">{item.content}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
