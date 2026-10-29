
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import ProductDescription from "./ProductDescription";

// הקומפוננטה מציגה כרטיס מוצר, רשימת מאפיינים, כפתורי שינוי כמות, סכום לתשלום וכפתור הוספה לעגלה.
//לכל מופע של ProductCard יש state עצמאי. לכן שינוי הכמות של בקבוק השתייה לא משנה את הכמות של תיק הגב.
function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
    setAddedToCart(false);
  }

  function decreaseQuantity() {
    setQuantity((prev) => Math.max(0, prev - 1));
    setAddedToCart(false);
  }

  function addToCart() {
    if (quantity > 0) {
      setAddedToCart(true);
    }
  }

  return (
    <section className="product-card">
      <h3>{product.name}</h3>

      <p className="price">
        מחיר ליחידה: {product.price} ₪
      </p>

      <ProductDescription
        description={product.description}
      />

      <h4>מאפייני המוצר:</h4>

      <ul>
        {product.features.map((feature, index) => (
          <li key={`${product.id}-${index}`}>
            {feature}
          </li>
        ))}
      </ul>

      <div className="quantity-controls">
        <button onClick={increaseQuantity}>+</button>

        <span>כמות: {quantity}</span>

        <button
          onClick={decreaseQuantity}
          disabled={quantity === 0}
        >
          −
        </button>
      </div>

      <p className="total">
        סה״כ: {quantity * product.price} ₪
      </p>

      {addedToCart ? (
        <p className="success-message">
          נוסף לעגלה: {quantity} יחידות
        </p>
      ) : (
        <button
          onClick={addToCart}
          disabled={quantity === 0}
        >
          הוספה לעגלה
        </button>
      )}

      <FavoriteButton productName={product.name} />
    </section>
  );
}

export default ProductCard;
