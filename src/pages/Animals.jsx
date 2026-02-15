function Animals() {
  const animals = ["Cattle", "Goats", "Pigs", "Chickens"];

  return (
    <section>
      <h2>Our Animals</h2>
      <div className="animal-grid">
        {animals.map((a) => (
          <div key={a} className="animal-card">
            {a}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Animals;
