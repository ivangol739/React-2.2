export default function ShopCard({ name, price, color, img }) {
  return (
    <article className="product">
    <header className="product__header">
      <h3 className="product__title">{name}</h3>
      <span className="product__color">{color}</span>
    </header>
    <div className="product__body">
      <img
        className="product__image"
        src={process.env.PUBLIC_URL + `/assets/images/${img}`}
        alt={name}
      />
    </div>
    <footer className="product__footer">
      <span className="product__price">&#36;{price}</span>
      <button className="product__button" type="button">Add to cart</button>
    </footer>
  </article>
  )
}