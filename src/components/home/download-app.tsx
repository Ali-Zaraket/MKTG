import SectionTitle from "../common/section-title";

export default function DownloadApp() {
  return (
    <section className="relative overflow-hidden py-32 mx-auto bg-[url('/bg.png')] bg-cover bg-center">
      <div className="relative">
        <div className="mx-auto text-center">
          <SectionTitle title="See how easy patient photos can be" reverse={true} />
          <p className="mt-8 text-lg tracking-tight text-neutral font-inter sm:max-w-2xl text-center mx-auto">
            Try ImageAssist free for 14 days. Then $39/month. No long-term commitment. Cancel anytime. It only takes 30
            seconds to sign up!
          </p>

          <a
            href="https://apps.apple.com/us/app/image-assist-2-0/id6657948612"
            target="_blank"
            rel="noopener noreferrer"
            className="block mx-auto w-fit mt-12"
          >
            <img src="/App+store-light.png" alt="" width="150" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
}
