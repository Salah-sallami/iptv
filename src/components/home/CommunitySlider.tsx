"use client";

import { useState, useEffect, useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CommunitySlider() {
  const images = [
    {
      url: "https://i.ibb.co/N6LytSrM/c1.avif",
      alt: "Cinema theatre audience",
      motionDelay: "0s",
    },
    {
      url: "https://i.ibb.co/VphJnHkp/574493458-122278119380226681-7617861953409758888-n.avif",
      alt: "Cinematic sci-fi desert",
      motionDelay: "2s",
    },
    {
      url: "https://i.ibb.co/vv3qnD1K/MV5-BNj-Iw-ZDQy-OTMt-Nj-Vj-Ny00-ODBi-LTlm-ZWYt-YTJk-Yz-Vj-MTc2-NWJk-Xk-Ey-Xk-Fqc-Gc-V1.avif",
      alt: "Community streaming party",
      motionDelay: "1s",
    },
    {
      url: "https://i.ibb.co/8LFmFxfr/8-services-IPTV-illegaux-bloques-en-France-60115864e6c83.avif",
      alt: "Music concert & live broadcast",
      motionDelay: "3s",
    },
    {
      url: "https://i.ibb.co/Rqm28p1/MV5-BYz-Qy-Yj-Zm-Mjct-Mz-Iy-Zi00-MDI0-LWJh-NGQt-Mz-Q3-MTFl-NDgw-NGM5-Xk-Ey-Xk-Fqc-Gc-V1-FMjpg-UX1000.avif",
      alt: "Live event festival crowd",
      motionDelay: "1.5s",
    },
  ];

  // Infinite duplicated track for continuous seamless motion
  const extendedImages = [...images, ...images, ...images];

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mouseVelocity, setMouseVelocity] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef<number>(0);
  const animFrameId = useRef<number | null>(null);
  const lastWindowScrollY = useRef<number>(0);
  const scrollVelocity = useRef<number>(0);

  // Intersection Observer to only run RAF when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll-linked velocity listener: When user scrolls the page, accelerate the slider dynamically!
  useEffect(() => {
    const onWindowScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastWindowScrollY.current;
      lastWindowScrollY.current = currentScrollY;
      // Inject scroll delta into horizontal slider motion
      scrollVelocity.current = deltaY * 0.45;
    };

    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);

  // Smooth continuous motion loop with requestAnimationFrame and scroll-linked momentum
  useEffect(() => {
    if (!isVisible) {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      return;
    }

    const track = containerRef.current;
    if (!track) return;

    let baseSpeed = 0.85;

    const animate = () => {
      // Smoothly decay scroll velocity
      scrollVelocity.current *= 0.92;

      const currentSpeed = isHovered 
        ? baseSpeed * 0.25 + scrollVelocity.current 
        : baseSpeed + mouseVelocity * 1.5 + scrollVelocity.current;

      scrollPos.current += currentSpeed;

      // Wrap around seamlessly
      const singleSetWidth = track.scrollWidth / 3;
      if (singleSetWidth > 0) {
        if (scrollPos.current >= singleSetWidth) {
          scrollPos.current -= singleSetWidth;
        } else if (scrollPos.current < 0) {
          scrollPos.current += singleSetWidth;
        }
      }

      track.scrollLeft = scrollPos.current;
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible, isHovered, mouseVelocity]);

  // Dynamic mouse tilt & directional motion acceleration
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    setMouseVelocity(normalizedX);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMouseVelocity(0);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-white text-slate-900 py-20 lg:py-28 relative overflow-hidden border-b border-slate-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Scroll Animation */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-slate-600 uppercase">
            Streaming that never buffers
          </p>
          <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 font-sans leading-tight">
            Not even in 4K
          </h2>
        </ScrollReveal>

        {/* Continuous 3D Panoramic Curved Motion Track */}
        <ScrollReveal variant="scale" delay={150} className="relative py-4 overflow-hidden select-none">
          
          {/* Smooth Scrolling Track */}
          <div
            ref={containerRef}
            className="flex items-center gap-4 sm:gap-6 md:gap-8 overflow-x-hidden no-scrollbar perspective-[1200px] py-4"
            style={{
              scrollBehavior: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {extendedImages.map((img, index) => {
              const tiltAngle = (index % 4 === 0) ? 5 : (index % 4 === 1) ? 2 : (index % 4 === 2) ? -2 : -5;

              return (
                <div
                  key={`${img.url}-${index}`}
                  style={{
                    transform: `perspective(1000px) rotateY(${tiltAngle}deg) scale(0.98)`,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative shrink-0 w-[170px] sm:w-[250px] md:w-[330px] h-[230px] sm:h-[330px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 group transition-transform duration-700 ease-out hover:scale-103"
                >
                  {/* Motion Image with Ken-Burns Continuous Zoom & Float */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={img.url}
                      alt={img.alt}
                      style={{
                        animation: `kenburns-drift 14s ease-in-out infinite alternate`,
                        animationDelay: img.motionDelay,
                      }}
                      className="w-full h-full object-cover pointer-events-none scale-105 will-change-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
