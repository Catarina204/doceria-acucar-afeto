import produtos from "../data/produtos.json";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section id="catalogo">
      <h2>Nossos doces</h2>
      <div className="lista">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
