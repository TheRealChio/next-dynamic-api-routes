import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Page() {
  const router = useRouter();
  const { data, isLoading, error } = useSWR(
    `/api/products/${router.query.id}`,
    fetcher
  );

  if (isLoading) return <p>Is Loading..</p>;
  if (error) return <p>Something went wrong!</p>;

  console.log(data);
  return (
    <div>
      <h2>{data.name}</h2>
      <p>
        <strong>
          {data.price}
          {data.currency}
        </strong>
      </p>
      <p>{data.category}</p>
      <p>{data.description}</p>
      <Link href={"/products"}>Go Back</Link>
    </div>
  );
}
