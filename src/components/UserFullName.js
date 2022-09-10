export default function UserFullName({ name }) {
  return (
    <div>
      <p className="text-2xl  text-purple-700">{`${name.title}  ${name.first}  ${name.last}`}</p>
    </div>
  );
}
