import useFetch from "../../hooks/usefetch";

function Header() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/home");

  if (loading) return <p>Loading .. </p>;
  if (error) {
    console.error(error);
    return <p>Error loading data</p>;
  }

  return (
    <header className="flex relative justify-between items-center h-15 w-screen bg-[#37393A] p-6 opacity-100">
      <div className="w-40">
        <a
          style={{ backgroundImage: `url(${data?.data?.nav?.img?.url})` }}
          className="block h-11 w-11 fixed top-2.5 rounded-4xl items-center justify-center bg-cover bg-right-bottom overflow-hidden"
        ></a>
      </div>
      <div className="w-175 h-15 flex justify-center gap-4">
        <ul className="flex items-center gap-4 ">
          {data?.data?.nav?.nav?.map((item, index) => (
            <li
              key={index}
              className="text-white hover:text-grey-300 hover:underline"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <h1 className="py-1 px-4 text-white hover:text-grey-300 hover:underline">
          Sign In
        </h1>
        <h1 className="bg-[#0d4d99] rounded-lg text-white py-1 px-4 hover:bg-[#23FFD3] hover:text-black">
          Sign Up
        </h1>
      </div>
    </header>
  );
}

export default Header;
