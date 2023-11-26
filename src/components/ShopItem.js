export default function ShopItem({ name, price, color, img }) {
  return (
    <article className="product">
      <div className="image-container">
        <img 
          className="product__image"
          src={process.env.PUBLIC_URL + `/assets/images/${img }`}
          alt={name}
        />
      </div>
      <h3 className="product__name">{name}</h3>
      <span className="product__color">{color}</span>
      <span className="product__price">&#36;{price}</span>
      <button className="product__button" type="button">Add to cart</button>
    </article>
  )
}