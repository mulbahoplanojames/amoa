import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const ContactUs = () => {
  return (
    <>
      <section className="py-12 bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Contact Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-200">
              Get in Touch
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto dark:text-slate-400">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="w-full h-fit dark:bg-white">
              <CardHeader>
                <CardTitle className="text-2xl pb-2 text-slate-900">
                  Send us a message
                </CardTitle>
                <CardDescription className="md:text-lg text-base pb-2">
                  Fill out the form below and we'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <Input
                        id="first-name"
                        name="first-name"
                        type="text"
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <Input
                        id="last-name"
                        name="last-name"
                        type="text"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="w-full h-fit dark:bg-white">
              <CardHeader>
                <CardTitle className="text-2xl pb-2 text-slate-900">
                  Contact Information
                </CardTitle>
                <CardDescription className="md:text-lg text-base">
                  You can also reach us using the following contact details.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="ml-3 text-base text-gray-500">
                      <p>techspace@gmail.com</p>
                      <p className="mt-1">Sales: techspace@gmail.com.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="ml-3 text-base text-gray-500">
                      <p>+1 (250) 791-676-207</p>
                      <p className="mt-1">Mon-Fri 6am to 11pm PST</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin
                      className="flex-shrink-0 h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="ml-3 text-base text-gray-500">
                      <p>KG 8, Street</p>
                      <p className="mt-1">Kigali, Rwanda</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
