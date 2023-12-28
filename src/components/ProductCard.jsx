const ProductCard = ({ title, description, price }) => {
  return (
    <div className="product-card">
      <img src="" alt="" />
      <h1>{title}</h1>
      <div className="product-description">{description}</div>
      <div className="product-footer">
        <h2>{price}</h2>
        <input type="text" placeholder="0" />
      </div>
    </div>
  );
};

export default ProductCard;
