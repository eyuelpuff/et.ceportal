import useFetch from "../../hooks/usefetch";

function UsingFetch({ url, render }) {
  const { loading, error, data } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: Failed to fetch data</p>;
  }

  // Pass the fetched data to a render prop (function)
  return render(data);
}

export default UsingFetch;
