export default function MapSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">
            Find Us
          </h2>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="aspect-[16/9] w-full bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5772549393128!2d30.0538539097707!3d-1.9204750366384027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca3f75b7b8b91%3A0xc9ab953c704fa9d3!2sKigali%20Independent%20University!5e0!3m2!1sen!2srw!4v1741968879249!5m2!1sen!2srw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
