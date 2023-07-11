import SaladImg from '../icons_assets/greek-salad.jpg'
import DessertImg from '../icons_assets/lemon dessert.jpg'
import BruchettaImg from '../icons_assets/restauranfood.jpg'

export const HighlightsSection = () => {
  return (
    <section className="s-highlights">
      <div className="container">
        <div className="s-highlights_title-wrap">
          <h2 className="s-highlights_title">This weeks specials!</h2>
          <button className="styled-button">Online Menu</button>
        </div>
        <ul className="cards_list">
          <li className="cards_list_item">
            <div className="cards_list_item__image">
              <img src={SaladImg} alt="card" />
            </div>
            <div className="cards_list_item__content">
              <div className="cards_list_item__title-wrap">
                <h3 className="cards_list_item__title">Greek salad</h3>
                <span className="cards_list_item__price">$12.99</span>
              </div>
              <p className="cards_list_item__descr">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button className="cards_list_item__button">
                Order a delivery
              </button>
            </div>
          </li>
          <li className="cards_list_item">
            <div className="cards_list_item__image">
              <img src={BruchettaImg} alt="card" />
            </div>
            <div className="cards_list_item__content">
              <div className="cards_list_item__title-wrap">
                <h3 className="cards_list_item__title">Greek salad</h3>
                <span className="cards_list_item__price">$12.99</span>
              </div>
              <p className="cards_list_item__descr">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button className="cards_list_item__button">
                Order a delivery
              </button>
            </div>
          </li>
          <li className="cards_list_item">
            <div className="cards_list_item__image">
              <img src={DessertImg} alt="card" />
            </div>
            <div className="cards_list_item__content">
              <div className="cards_list_item__title-wrap">
                <h3 className="cards_list_item__title">Greek salad</h3>
                <span className="cards_list_item__price">$12.99</span>
              </div>
              <p className="cards_list_item__descr">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button className="cards_list_item__button">
                Order a delivery
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
