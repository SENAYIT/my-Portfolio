import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  // const fixedBreadCrumb = "fixed w-full z-50 bg-slate-950/80 backdrop-blur-md";

  return (
    <nav aria-label="Breadcrumb" className={`mb-6 block p-4 md:p-8`}>
      <ol className="flex text-xl md:text-2xl">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={breadcrumb.active ? "text-cyan-600" : "text-gray-500"}
          >
            <Link href={breadcrumb.href} className="text-base md:text-lg">
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block text-gray-500">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
