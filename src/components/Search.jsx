const Search = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="What do you want to watch?"
        className="min-w-[200px] w-[100%] max-w-[500px] sm:w-[60%] px-3 py-2 rounded-md border border-gray-300 justify-between items-center gap-2.5 inline-flex bg-transparent text-white text-base font-normal leading-normal focus:outline-0"
        value={searchQuery}
        onChange={onSearchInputChange}
        onKeyPress={onHandleSearch}
      />
    </>
  );
};

export default Search;
