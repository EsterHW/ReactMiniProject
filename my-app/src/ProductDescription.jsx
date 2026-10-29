
import { useState } from "react";

//הקומפוננטה מקבלת את תיאור המוצר באמצעות props ומאפשרת להציג תיאור מלא או מקוצר.
function ProductDescription({ description }) {
  const [expanded, setExpanded] = useState(false);

  const shortDescription =
    description.length > 45
      ? description.slice(0, 45) + "..."
      : description;

  return (
    <div className="description">
      <p>
        {expanded ? description : shortDescription}
      </p>

      {description.length > 45 && (
        <button
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "הצג פחות" : "קרא עוד"}
        </button>
      )}
    </div>
  );
}

export default ProductDescription;
