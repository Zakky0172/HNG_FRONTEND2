import Logo from "./Logo";
import Search from "./Search";

const Navbar = ({ searchQuery, onSearchInputChange, onHandleSearch }) => {
  return (
    <div className="max-w-[1400px] relative ">
      <div className="absolute top-0 text-white z-20 flex gap-2 justify-between items-center w-full p-6 lg:px-[120px]">
        <Logo color="100" display="hidden" />
        <div className="basis-[70%] flex justify-end">
          <Search
            searchQuery={searchQuery}
            onSearchInputChange={onSearchInputChange}
            onHandleSearch={onHandleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
