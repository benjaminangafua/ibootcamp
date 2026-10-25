export const heroImages = {
  learning: '/images/learning-together.webp',
  confidence: '/images/learning-with-confidence.webp',
  lab: '/images/learning-lab.jpeg',
  future: '/images/future-learners.jpeg',
} as const
export default function HeroBackground({ image, position = 'center 45%' }: { image: string; position?: string }) {
  return <><img src={image} alt="" aria-hidden="true" fetchPriority="high" className="hero-background" style={{objectPosition:position}} /><div className="hero-shade" aria-hidden="true" /></>
}
