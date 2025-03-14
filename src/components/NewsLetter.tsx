"use client";

const NewsLetter = () => {
  return (
    <>
      <section className="py-14 md:py-16 bg-primary_clr">
        <div className="container px-4">
          <div className="grid grid-cols-12 lg:grid-cols-7 place-items-center text-center text-white">
            <div className="col-span-12">
              <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
                Join with us for more information
              </h2>

              <div className="grid grid-cols-12 place-items-center">
                <div className="col-span-12 sm:col-span-6 sm:col-start-4 sm:px-3 md:px-12 lg:px-24">
                  <p className="text-lg leading-6 mb-12">
                    Subscribe to our newsletter to get the latest news and
                    updates.
                  </p>
                  <form>
                    <div className="relative flex flex-wrap items-center justify-between p-2 bg-white rounded w-full">
                      <input
                        type="email"
                        className="min-h-12 leading-10 px-4 w-full"
                        required
                        placeholder="Enter Email"
                      />
                      <div className="absolute right-1">
                        <button className="bg-primary_clr hover:bg-opacity-90 text-white border border-primary_clr/80 py-3 px-7 rounded transition font-normal">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
