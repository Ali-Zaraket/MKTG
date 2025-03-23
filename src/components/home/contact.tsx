import { useState } from "react";
import SectionTitle from "../common/section-title";
import Wrapper from "../layouts/wrapper";
import Button from "../ui/button";
import Input from "../ui/input";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    if (success) return;

    try {
      const formElement = e.currentTarget;

      setLoading(true);

      var data = {
        service_id: "service_ne7p051",
        template_id: "template_zzkzp93",
        user_id: "z9hhextWq318KSOes",
        template_params: {
          from_name: `${formElement.firstName.value} ${formElement.lastName.value}`,
          from_email: formElement.email.value,
          message: `Message: ${formElement.message.value}`,
        },
      };

      //   await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   });

      setLoading(false);
      setSuccess(true);
      formElement.reset();
    } catch (err) {
      setError(true);
      setLoading(false);
      setSuccess(false);
      setTimeout(() => setError(false), 1000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[url('/bg.png')] bg-cover bg-center">
      <Wrapper>
        <SectionTitle title="Get in Touch" reverse={true} />

        <p className="mt-8 text-lg tracking-tight text-neutral font-inter sm:max-w-4xl text-center mx-auto">
          For live on-boarding, inquiring about practice partnerships or seamless EMR integrations, contact us to learn
          how ImageAssist can enhance your clinical workflow at any level!
        </p>

        <form className="mt-16 flex flex-col gap-4 w-full sm:max-w-2xl mx-auto" onSubmit={handleSubmit}>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="firstName" className="text-neutral font-thin">
                First Name
              </label>
              <Input type="text" name="firstName" id="firstName" required />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lastName" className="text-neutral font-thin">
                Last Name
              </label>
              <Input type="text" name="lastName" id="lastName" required />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-neutral font-thin">
              Email
            </label>
            <Input type="email" name="email" id="email" required />
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label htmlFor="message" className="text-neutral font-thin">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="block w-full appearance-none rounded-lg border-2 border-neutral/50 px-4 py-3 text-neutral placeholder-neutral focus:outline-none focus:ring focus:ring-neutral sm:text-sm"
              rows={10}
              required
            />
          </div>

          <Button disabled={loading || success || error} type="submit" variant="solid" color="neutral">
            {error ? <span className="material-symbols-outlined">close</span> : null}
            {error ? <span>Something went wrong!</span> : null}
            {success ? <span className="material-symbols-outlined">done</span> : null}
            {success ? <span>Sent!</span> : null}
            {error || success ? null : loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </Wrapper>
    </section>
  );
}
