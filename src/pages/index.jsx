import Head from 'next/head'
import Script from 'next/script'
import * as gtag from "@/components/GoogleAnalytics"
import { useRouter } from 'next/router';
import { useEffect } from "react";

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Favicon } from '@/components/Favicon'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
{/*import { Testimonials } from '@/components/Testimonials'
*/}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>RepSmart - Software for HVACR Manufacturer Representatives</title>
        <Favicon />
        <meta
          name="description"
          content="Tools to quote faster, manage better, and win more for manufacturer representatives of the commercial HVAC&R industry."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
{/*        <Testimonials />
*/}
        <Pricing />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />

    </>
  )
}
