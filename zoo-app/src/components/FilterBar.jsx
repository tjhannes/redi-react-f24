const FilterBar = ({ filter, updateFilter }) => {

  return (<div className="header">
    <nav className="header__nav">
      <div
        className={filter ? "header-mi" : "header-mi active"}
        onClick={() => updateFilter(false)}>
        All Cute Animals
      </div>
      <div
        className={filter ? "header-mi active" : "header-mi"}
        onClick={() => updateFilter(true)}>
        Selectors Choice
      </div>
    </nav>
    <div className="header__logo"></div>
  </div>);
}

export default FilterBar;