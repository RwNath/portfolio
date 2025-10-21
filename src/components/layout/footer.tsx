import Link from "next/link";

export default function Footer() {
  return (
    <div className="text-center mt-2 text-sm sm:text-base">
      Fait avec 💖 par{" "}
      <Link
        href="https://discord.com/users/1196153489978572841"
        className="text-blue-200"
      >
        Nath
      </Link>
      <p>
        Voir mon{" "}
        <Link href="https://github.com/RwNath" className="text-blue-200">
          GitHub
        </Link>
      </p>
    </div>
  );
}
