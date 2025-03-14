import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="pt-12 pb-2 bg-gray-50">
      <div className="text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          Testimonials
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What Our Clients Say
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
}
