export default async function UserDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <h1 className="font-heading">Hello from user {id}</h1>;
}
