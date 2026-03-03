"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/banner1.mp4" type="video/mp4" />
      </video>

      {/* Optional smooth overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

    </section>
  );
}