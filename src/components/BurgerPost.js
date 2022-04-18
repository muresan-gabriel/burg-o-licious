import Header from "./BurgerImage";

function BurgerPost() {
  return (
    <div className="card asset-post bg-dark text-white">
      <Header></Header>
      <div className="d-flex justify-content-center align-items-center card-img-overlay text-asset-container">
        <h5 className="card-title asset-name">Dutch Burger</h5>
        <a href="#" className="stretched-link"></a>
      </div>
    </div>
  );
}

export default BurgerPost;
