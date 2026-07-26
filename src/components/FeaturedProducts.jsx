import "./FeaturedProducts.css";

const products = [
  {
    id: 1,
    name: "Pure Kapoor",
    image: "/images/kapoor.jpg",
    price: "₹149",
    rating: "★★★★★",
  },
  {
    id: 2,
    name: "Cow Ghee",
    image: "/images/ghee.jpg",
    price: "₹299",
    rating: "★★★★★",
  },
  {
    id: 3,
    name: "Hawan Samagri",
    image: "/images/hawan.jpg",
    price: "₹199",
    rating: "★★★★★",
  },
  {
    id: 4,
    name: "Rudraksh Mala",
    image: "/images/rudraksh.jpg",
    price: "₹499",
    rating: "★★★★★",
  },
  {
    id: 5,
    name: "Pooja Oil",
    image: "/images/oil.jpg",
    price: "₹179",
    rating: "★★★★★",
  },
  {
    id: 6,
    name: "Dhoop Sticks",
    image: "/images/dhoop.jpg",
    price: "₹129",
    rating: "★★★★★",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products">

      <h2>Best Selling Products</h2>

      <div className="products-grid">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p className="rating">{product.rating}</p>

            <h4>{product.price}</h4>

            <button>Add to Cart</button>

          </div>

        ))}

      </div>

    </section>
  );
}