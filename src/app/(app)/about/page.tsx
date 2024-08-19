import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Seamless Social Sharing with NFC-Embedded Accessories
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Elevate your style and digital presence with our innovative NFC
              tag-embedded nails, pendants, and accessories. These fashionable
              pieces aren’t just for looks—they’re designed to keep you
              connected. Simply link your favorite social media profile to your
              accessory during registration, and with a quick tap against a
              friend’s phone, your profile is instantly shared. No more
              searching or typing—just effortless connection. Perfect for
              influencers, networkers, or anyone who loves blending fashion with
              technology. Explore a new way to express and share your digital
              life with just a touch.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="rounded-md bg-black dark:bg-white px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">
                I want one!
              </Button>
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300"
              >
                Home <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
