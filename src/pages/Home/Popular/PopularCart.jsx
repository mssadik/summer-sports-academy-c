
const PopularCart = ({ classItem }) => {
  const { class_img, class_name,  } = classItem;

  return (
    <div className="popular-cart border p-5">
      <img src={class_img} alt={class_name} className="popular-cart-image sm:w-[400px] rounded-md" />
      <h2 className="text-xl font-bold">{class_name}</h2>
    </div>
  );
};

export default PopularCart;
