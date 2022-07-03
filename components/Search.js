const Search = ({ setInput, search }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        {/* <form action="/search-photos" method="get" className="search-bar"> */}
        <input onChange={inputHandler} autoComplete="off" id="search" placeholder="Search for free photos and videos" required type="search" />
        <button id="search-action" onClick={search} title="Search for stock photos">
          <i className="rd__svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </i>
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Search;
