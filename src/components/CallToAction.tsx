import Link from "next/link";

const CallToAction = () => {
  return (
    <>
      <section className="py-6 bg-gray-900 text-white">
        <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
          <h1 className="text-5xl font-bold leading-none text-center">
            Ready to Start your online Presense or Courses?
          </h1>
          <p className="text-xl font-medium text-center md:max-w-xl">
            Join hundreds of happy customers and start your journey with us, we
            are ready to help you.
          </p>
          <div className="flex md:space-x-8 space-x-5 items-center">
            <Link
              href="/contact"
              className="px-8 py-3 text-lg font-semibold rounded-2xl bg-primary_clr text-white"
            >
              Get started
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 text-lg font-normal border rounded-2xl bg-white text-black"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
