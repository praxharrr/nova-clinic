export function Legal({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-5xl font-medium sm:text-6xl">{title}</h1>
      <p className="mt-3 text-sm text-forest-900/60">Last updated: {updated}</p>
      <div className="mt-8 leading-relaxed text-forest-900/85 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:text-forest-900 [&_li]:pl-1 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </main>
  );
}