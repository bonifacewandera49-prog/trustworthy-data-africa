import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    const observeNew = () => {
      document.querySelectorAll(".rv:not(.vis)").forEach((el) => obs.observe(el));
    };

    const timer = setTimeout(observeNew, 50);
    const mutObs = new MutationObserver(() => observeNew());
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      obs.disconnect();
      mutObs.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <Background />
      <Navbar />
      <main className="relative z-[1]">{children}</main>
      <Footer />
    </>
  );
}
