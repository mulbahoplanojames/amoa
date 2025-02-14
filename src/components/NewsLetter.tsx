"use client";

import { newsLetterSchema } from "@/Schema/zod-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newsLetterSchema>) => {
    console.log(values);
  };

  return (
    <>
      <section className="py-6 md:py-16  dark:text-white">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12  place-items-center">
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h1 className="text-5xl font-bold leading-none">
              Get Latest Updates From Us
            </h1>
            <p className="text-lg">
              Subscribe to our newsletter and stay up-to-date with our latest
              news and updates.
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="py-5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
