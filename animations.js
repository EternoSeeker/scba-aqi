// Header animation
gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "power4.out" });

// Navbar items animation
gsap.from("nav ul li", { duration: 1, x: -100, opacity: 0, stagger: 0.2, ease: "power4.out" });

// Map container animation
gsap.from(".map-container", { duration: 1, y: 100, opacity: 0, delay: 0.5, ease: "power4.out" });
