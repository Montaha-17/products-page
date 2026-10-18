
import heroDecoration from "@/assets/hero-decoration.svg";

export function Hero() {
  return (
    <section className="relative mt-4 min-h-[260px] w-full overflow-hidden rounded-[12px] bg-surface">

      {/* Background decoration */}
      <img
        src={heroDecoration}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Title */}
      <h1 className="relative z-10 px-6 pt-6 font-brand text-[32px] font-bold leading-[1.1] text-brand-text md:text-[48px]">
        Explore Our Shop
      </h1>

      {/* Description */}
      <p className="relative z-10 mx-6 mt-6 max-w-[580px] pb-6 font-brand text-[12px] leading-relaxed text-brand-text md:absolute md:bottom-6 md:left-[36%] md:mx-0 md:mt-0 md:pb-0 md:text-[14px]">
        From skincare to makeup, our platform features a wide range of
        products that cater to all your beauty needs. We strive to provide
        our customers with a luxury shopping experience, from browsing
        through our carefully selected products to receiving them in our
        signature packaging. Shop with us for the ultimate in beauty luxury.
      </p>
    </section>
  );
}
