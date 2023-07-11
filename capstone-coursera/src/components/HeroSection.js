export const HeroSection = ({ setIsFormReservationVisible }) => {
  return (
    <section className="s-hero">
      <div className="container">
        <div>
          <h1 className="s-hero_title">Little Lemon</h1>
          <span className="s-hero_subtitle">Chicago</span>
          <p className="s-hero_description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <button
            className="styled-button"
            onClick={() => setIsFormReservationVisible(true)}
          >
            Reserve a Table
          </button>
        </div>
        <div className="s-hero_image"></div>
      </div>
    </section>
  )
}
