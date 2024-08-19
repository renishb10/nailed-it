import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

const Landing = () => {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Wear Your Socials, Share with a Tap!
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Discover the future of fashion and connectivity with our NFC
              tag-embedded nails, pendants, and accessories. Simply tap your
              accessory to a friend’s phone and instantly share your social
              media profile. Style meets technology, making sharing your world
              easier than ever!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="default">I want one!</Button>
              <a
                href="/about"
                className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

            <Separator className="my-8" />

            <div className="mt-4 text-left">
              <h3 className="text-md font-semibold text-muted-foreground">
                Test Data with Two Sample Users 👇
              </h3>
              <Accordion type="single" collapsible className="mt-4 w-full">
                <AccordionItem value="jane">
                  <AccordionTrigger>Jane Doe</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4 text-sm italic text-muted-foreground">
                      Jane has purchased one asset that has got three nails in
                      it. She created a profile already and assigned/scanned her
                      2 nails with respective profiles and left one untouched.
                      Click on Scan Tag 1/2/3 buttons to find out!
                    </p>
                    <ul>
                      <li>
                        <span className="font-semibold">UserId:</span>{' '}
                        clzzfpgvf00010cmjce2768tk
                      </li>
                      <li className="mt-1">
                        <span className="font-semibold">Assets:</span>{' '}
                        clzzfpb5w00000cmj5o419nqq
                        <ul className="ml-6 mt-0.5">
                          <li>
                            <span className="font-semibold">Tag 1:</span>{' '}
                            clzzfv0tm000a0cl32pocaktr
                          </li>
                          <li>
                            <span className="font-semibold">Tag 2:</span>{' '}
                            cm00vu65000000cjqgu8sfcpg
                          </li>
                          <li>
                            <span className="font-semibold">Tag 3:</span>{' '}
                            cm00xw1q600020cjzd1x4hnsv
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="mt-6 mb-4 flex space-x-3 justify-center">
                      <Button variant="outline">
                        <Link href="/users/clzzfpgvf00010cmjce2768tk">
                          Visit Profile
                        </Link>
                      </Button>
                      <Button variant="default">
                        <Link href="/scan/clzzfv0tm000a0cl32pocaktr">
                          Scan Tag 1
                        </Link>
                      </Button>
                      <Button variant="default">
                        <Link href="/scan/cm00vu65000000cjqgu8sfcpg">
                          Scan Tag 2
                        </Link>
                      </Button>
                      <Button variant="default">
                        <Link href="/scan/cm00xw1q600020cjzd1x4hnsv">
                          Scan Tag 3
                        </Link>
                      </Button>
                      <Button variant="destructive">
                        <Link href="/scan/invalidtagId">Scan Invalid Tag</Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="john">
                  <AccordionTrigger>John Doe</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4 text-sm italic text-muted-foreground">
                      John has purchased one asset that has two nails in it. He
                      has created an account but not a profile. Tag 1 is not
                      scanned yet! Tag 2 for some reason is invalid.
                    </p>
                    <ul>
                      <li>
                        <span className="font-semibold">UserId:</span>{' '}
                        clzzfpk1s00020cmj76v27igm
                      </li>
                      <li className="mt-1">
                        <span className="font-semibold">Assets:</span>{' '}
                        clzzflpdt000008l132uo4pxs
                        <ul className="ml-6 mt-0.5">
                          <li>
                            <span className="font-semibold">Tag 1:</span>{' '}
                            clzzfuws600090cl367aigjoh
                          </li>
                          <li>
                            <span className="font-semibold">Tag 2:</span>{' '}
                            cm01047we00040cl9b7gif8al
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="mt-6 mb-4 flex space-x-3 justify-center">
                      <Button variant="outline">
                        <Link href="/users/clzzfpk1s00020cmj76v27igm">
                          Visit Profile
                        </Link>
                      </Button>
                      <Button variant="default">
                        <Link href="/scan/clzzfuws600090cl367aigjoh">
                          Scan Tag 1
                        </Link>
                      </Button>
                      <Button variant="default">
                        <Link href="/scan/cm01047we00040cl9b7gif8al">
                          Scan Tag 2
                        </Link>
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
