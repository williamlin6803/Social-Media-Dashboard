export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import FeaturesBlocks from '@/components/features-blocks'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
    </>
  )
}
