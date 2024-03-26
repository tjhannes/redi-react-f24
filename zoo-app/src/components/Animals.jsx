const Animals = ({ list }) => {

  return (
    <div className="animals-list">
      {list.map((animal, index) =>
        <div className="animal-info" key={index}>
          <figure>
            <img src={animal.img} alt={animal.name} />
          </figure>
          <div>
            <h2>{animal.name}</h2>
            <p>{animal.description}</p>
            <div className="animal-info__location">
              &#128062;<span>{animal.latinName}</span>
              &#127758;<span>{animal.region}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Animals;