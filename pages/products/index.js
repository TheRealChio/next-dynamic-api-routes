import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Page() {
  const { data, isLoading, error } = useSWR("/api/products", fetcher);

  if (isLoading) return <p>Is Loading..</p>;
  if (error) return <p>Something went wrong!</p>;

  console.log(data);

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2>{product.name}</h2>
          <p>
            <strong>{product.price}</strong> {product.currency}
          </p>
          <p>{product.category}</p>
          <Link href={`/products/${product.id}`}>See Details</Link>
        </li>
      ))}
    </ul>
  );
}
