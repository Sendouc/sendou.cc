import Image from "next/image";

const AuthorTime = ({ time }) => {
  return (
    <div className="flex items-center mt-2 text-sm text-gray-400">
      <Image
        className="inline object-cover w-48 h-48 rounded-full"
        src="/me.png"
        alt="Profile image"
        width={32}
        height={32}
      />
      <a href="https://twitter.com/sendouc" className="ml-2">
        Sendou
      </a>{" "}
      <span className="mx-4">/</span>{" "}
      {new Date(Date.UTC(...time)).toLocaleDateString("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    </div>
  );
};

export default AuthorTime;
