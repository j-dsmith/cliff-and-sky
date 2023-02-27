import ContactForm from "@/components/contact-form";

const ContactPage = () => {
  return (
    <section>
      <article className="flex h-screen min-h-screen flex-col bg-black px-8 text-white">
        <div className="-mt-20 flex h-1/2 items-center justify-center text-7xl">
          <h1 className="">Let&apos;s Chat!</h1>
        </div>
        <ContactForm />
      </article>
    </section>
  );
};
export default ContactPage;
