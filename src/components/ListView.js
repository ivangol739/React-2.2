import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  return (
    <div className="products list">
      {items.map((item, index) => {
        return <ShopItem key={`${index}${item.name}`} {...item} />
      })}
    </div>
  )
}