import { HeroSection } from './HeroSection'
import { HighlightsSection } from './HighlightsSection'

export const Main = ({ setIsFormReservationVisible }) => {
  return (
    <main>
      <HeroSection setIsFormReservationVisible={setIsFormReservationVisible} />
      <HighlightsSection />
    </main>
  )
}
