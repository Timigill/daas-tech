"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/app/globals.css";``

const caseStudies = [
	{
		id: 1,
		image: "/case1.png",
		title: "Digital Systems Accelerate Sales- Smart Workflow Helped Close 3× More Deals, Faster",
		description:
			"RetailRev faced issues with overstock and missed sales. We helped them implement a dynamic inventory management system with real-time tracking and automated reordering — minimizing waste and maximizing sales.",
		points: ["3x More Deals", "40% Faster Responses", "95% Lead Accuracy", "CRM Fully Synced"],
	},
	{
		id: 2,
		image: "/case2.png",
		title: "RetailRev Optimized Inventory with Smart Digital Solutions",
		description:
			"RetailRev reduced overstock and missed sales opportunities using AI-based inventory predictions and dynamic reordering strategies.",
		points: ["25% Inventory Reduction", "30% Increase in Sales", "Real-time Forecasting"],
	},
	{
		id: 3,
		image: "/case3.png",
		title: "ChatGenie Reduced Support Load by 60% With Smart Chat Solutions",
		description:
			"ChatGenie partnered with DaaS Tech Innovations to build an efficient support system. We developed a custom chatbot solution that delivered instant responses and resolved routine queries — easing the burden on human support teams.",
		points: ["60% Lower Support Costs", "24/7 Instant Help", "Higher Customer Satisfaction"],
	},
];

const Study = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const scrollContainerRef = useRef(null);

	// For drag-to-scroll
	const isDragging = useRef(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Mouse drag-to-scroll handlers (enable for all devices, not just mobile)
	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const onMouseDown = (e) => {
			isDragging.current = true;
			startX.current = e.pageX - container.offsetLeft;
			scrollLeft.current = container.scrollLeft;
			container.style.cursor = "grabbing";
			document.body.style.userSelect = "none"; // Prevent text selection
		};

		const onMouseUp = () => {
			isDragging.current = false;
			container.style.cursor = "grab";
			document.body.style.userSelect = ""; // Restore text selection
		};

		const onMouseMove = (e) => {
			if (!isDragging.current) return;
			const x = e.pageX - container.offsetLeft;
			const walk = (x - startX.current) * 3.5; // Increased multiplier for faster drag
			container.scrollLeft = scrollLeft.current - walk;
		};

		container.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);
		window.addEventListener("mousemove", onMouseMove);
		container.style.cursor = "grab";

		// Touch events for mobile (for completeness)
		const onTouchStart = (e) => {
			isDragging.current = true;
			startX.current = e.touches[0].pageX - container.offsetLeft;
			scrollLeft.current = container.scrollLeft;
		};
		const onTouchEnd = () => {
			isDragging.current = false;
		};
		const onTouchMove = (e) => {
			if (!isDragging.current) return;
			const x = e.touches[0].pageX - container.offsetLeft;
			const walk = (x - startX.current) * 2.5; // Increased multiplier for faster drag
			container.scrollLeft = scrollLeft.current - walk;
		};
		container.addEventListener("touchstart", onTouchStart);
		container.addEventListener("touchend", onTouchEnd);
		container.addEventListener("touchmove", onTouchMove);

		return () => {
			container.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("mousemove", onMouseMove);
			container.removeEventListener("touchstart", onTouchStart);
			container.removeEventListener("touchend", onTouchEnd);
			container.removeEventListener("touchmove", onTouchMove);
			document.body.style.userSelect = "";
		};
	}, []);

	const prev = () => {
		setDirection(-1);
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
		);
	};

	const next = () => {
		setDirection(1);
		setCurrentIndex((prevIndex) =>
			prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1
		);
	};

	const handleScroll = () => {
		if (!scrollContainerRef.current) return;
		const container = scrollContainerRef.current;
		const scrollPosition = container.scrollLeft;
		const containerWidth = container.offsetWidth;
		const newIndex = Math.round(scrollPosition / containerWidth);
		if (newIndex !== currentIndex) {
			setCurrentIndex(newIndex);
		}
	};

	const variants = {
		enter: (dir) => ({
			x: dir > 0 ? 300 : -300,
			opacity: 0,
			scale: 0.95,
		}),
		center: {
			x: 0,
			opacity: 1,
			scale: 1,
		},
		exit: (dir) => ({
			x: dir > 0 ? -300 : 300,
			opacity: 0,
			scale: 0.95,
		}),
	};

	return (
		<section
			className="d-flex flex-column align-items-center text-center"
			style={{
				background: "var(--background)",
				color: "var(--foreground)",
				fontFamily: "Inter, sans-serif",
				padding: "60px 20px",
				minHeight: "100vh",
			}}
		>
			<motion.span
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}
				className="badge mb-3"
				style={{
					background: "var(--accent)",
					color: "#fff",
					fontWeight: 600,
					fontSize: 15,
					letterSpacing: 1,
					padding: "8px 18px",
					borderRadius: 20,
				}}
			>
				Case Studies
			</motion.span>

			<motion.h2
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.2 }}
				viewport={{ once: true }}
				style={{ fontWeight: 700, maxWidth: 800 }}
			>
				See How Smart Digital Solutions Transforms Businesses
			</motion.h2>

			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 0.4 }}
				viewport={{ once: true }}
				style={{
					fontSize: 17,
					color: "var(--muted-text)",
					maxWidth: 600,
					margin: "0 auto 40px auto",
				}}
			>
				See how Digital Solutions streamlines operations, boosts productivity, and drives growth.
			</motion.p>

			{/* Remove isMobile check: always show scrollable/drag-to-scroll container */}
			<div
				ref={scrollContainerRef}
				onScroll={handleScroll}
				style={{
					display: "flex",
					overflowX: "auto",
					scrollSnapType: "x mandatory",
					width: "80%",
					maxWidth: "80%",
					scrollBehavior: "smooth",
					gap: "20px",
					padding: "0 20px",
					marginBottom: "20px",
					WebkitOverflowScrolling: "touch",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					cursor: "grab",
					userSelect: "none",
				}}
			>
				{caseStudies.map((study) => (
					<div
						key={study.id}
						style={{
							flex: "0 0 auto",
							width: "76vw",
							scrollSnapAlign: "start",
							borderRadius: 20,
							overflow: "hidden",
							boxShadow: "var(--border-color) 0px 0px 10px",
							minHeight: 420,
							backgroundColor: "var(--card-bg)",
							display: "flex",
							flexDirection: "row",
						}}
					>
						<div
							style={{
								width: "40%",
								height: "auto",
								backgroundImage: `url(${study.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
								flexShrink: 0,
							}}
						></div>
						<div style={{ 
							padding: "20px", 
							textAlign: "left",
							flex: 1,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}>
							<h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{study.title}</h3>
							<p style={{ color: "var(--muted-text)", marginBottom: "15px", fontSize: "0.9rem" }}>
								{study.description}
							</p>
							<ul style={{ paddingLeft: 0, fontSize: "0.9rem" }}>
								{study.points.map((point, idx) => (
									<li key={idx} style={{ marginBottom: "6px", listStyleType: "none" }}>
										{point}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>

			{/* Carousel Dots */}
			<div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: 20 }}>
				{caseStudies.map((_, idx) => (
					<div
						key={idx}
						style={{
							width: 10,
							height: 10,
							borderRadius: "50%",
							backgroundColor: idx === currentIndex ? "#8b5cf6" : "var(--muted-text)",
							transition: "background-color 0.3s ease",
						}}
					/>
				))}
			</div>
		</section>
	);
};

export default Study;
