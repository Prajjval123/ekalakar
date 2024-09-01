import './Category.css';

const Category = (props) => {
  return (
    <>
      <div className="every-categorie">
        <img className="every-categorie-img" src={props.category.category_img} alt="" />
        <div className="categorie-type">{props.category.category_name}</div>
      </div>
    </>
  );
};

export default Category;
