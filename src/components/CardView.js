import ShopCard from "./ShopCard"

export default function CardView({ cards }) {
  return (
    <div className="products">
      {cards.map((card, index) => {
        return <ShopCard key={`${index}${card.name}`} {...card} />
      })}
    </div>
  )
}