import "./App.css";

const products = [
  {
    name: "Beef",
    description: "Fresh cuts: steak, mince, ribs",
    price: "From R120/kg",
    image: "https://images.unsplash.com/photo-1604908177225-4aa29a70c6d4",
  },
  {
    name: "Chicken",
    description: "Whole chicken, breasts, wings",
    price: "From R45/kg",
    image: "https://images.unsplash.com/photo-1604908554164-6a2d3c6d5327",
  },
  {
    name: "Pork",
    description: "Chops, rashers, ribs",
    price: "From R85/kg",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d0f",
  },
  {
    name: "Lamb",
    description: "Chops, leg, stew meat",
    price: "From R150/kg",
    image: "https://images.unsplash.com/photo-160010758890-6b94519a8ba6",
  },
];

function App() {
  return (
    <div className="container">
      {/* HEADER */}
      <header className="header">
        <h1>🐄 A32 Butchery</h1>
        <p>Fresh • Quality • Affordable Meat</p>
      </header>

      {/* PRODUCTS */}
      <section className="products">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>📍 Visit us today | 📞 071 234 5678</p>
      </footer>
    </div>
  );
}

export default App;
