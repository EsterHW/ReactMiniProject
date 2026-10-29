//הקומפוננטה מקבלת את שם המוצר כ־prop ומחליפה את הטקסט בלחיצה.

import { useState } from "react";

function FavoriteButton({ productName }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => setIsFavorite(!isFavorite)}
    >
      {isFavorite
        ? "♥ במועדפים"
        : `♡ הוספת ${productName} למועדפים`}
    </button>
  );
}

export default FavoriteButton;
