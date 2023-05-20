import type { Metadata } from 'next';
import LHeading from '@/ui/LHeading';
import Paragraph from '@/ui/Paragraph';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & open-source text similarity API',
};

export default function Home() {
  return (
    <main>
      <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
        <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
          <div className="h-full gap-6 flex flex-col justify-start items-center lg:justify-center lg:items-start">
            <LHeading
              size={'lg'}
              className="three-d text-black dark:text-light-gold"
            >
              Easily determine <br /> text similarity.
            </LHeading>
            <Paragraph className="max-w-xl lg:text-left">
              With the text similarity API, you can easily determine the
              similarity between two pieces of text with a free{' '}
              <Link
                href={'/login'}
                className="underline underline-offset-2 text-black dark:text-light-gold"
              >
                API key
              </Link>
              .
            </Paragraph>

            <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
              <Image
                priority
                className="img-shadow"
                quality={100}
                style={{ objectFit: 'contain' }}
                fill
                src="/typewriter.png"
                alt="typewriter"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
