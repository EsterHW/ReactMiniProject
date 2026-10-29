
import { useState } from "react";
import ProductCard from "./ProductCard";
import ContactForm from "./ContactForm";
import "./App.css";


// זהו הקומפוננט הראשי. הוא מכיל את מערך המוצרים, מציג אותם בעזרת map ומנהל את מצב התצוגה הבהיר והכהה.
const products = [
  {
    id: 1,
    name: "סט כוסות",
    price: 25,
    description: "סט של שישה כוסות זכוכית עמידות, המתאימות לשימוש יומיומי בבית.",
    features: [
      "זכוכית עמידה",
      "מתאימות למדיח",
      "שישה בסט"
    ]
  },
  {
    id: 2,
    name: "בקבוק שתייה",
    price: 40,
    description: "בקבוק שתייה רב פעמי ונוח לנשיאה, שמתאים ללימודים, לעבודה ולפעילות בחוץ.",
    features: [
      "נוח לנשיאה",
      "שומר על טריות",
      "קל לניקוי"
    ]
  },
  {
    id: 3,
    name: "תיק גב",
    price: 120,
    description: "תיק גב מרווח ונוח עם תאים שימושיים, המתאים ללימודים ולשימוש יומיומי.",
    features: [
      "תאים מרובים",
      "רצועות מתכווננות",
      "בד עמיד"
    ]
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <header>
        <h1>חנות המוצרים שלי</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ מצב בהיר" : "🌙 מצב כהה"}
        </button>
      </header>

      <main>
        <h2>המוצרים שלנו</h2>

        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <ContactForm />
      </main>
    </div>
  );
}

export default App;

