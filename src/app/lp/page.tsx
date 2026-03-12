const BACKLINKS: { title: string; url: string; description?: string }[] = [
  {
    title: 'energie-duurzaamheid-nederland',
    url: 'http://energie-duurzaamheid-nederland.linkspot.nl',
    description: 'Nederlandse webdirectory voor duurzame energie',
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4 tracking-tight">
          Links
        </h1>
        <p className="text-slate-500 text-sm mb-12">Partnerpagina</p>

        <div className="space-y-6">
          {BACKLINKS.map((link) => (
            <div
              key={link.url}
              className="border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors"
            >
              <a
                href={link.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-lg font-semibold text-primary hover:underline"
              >
                {link.title}
              </a>
              {link.description && (
                <p className="text-slate-600 mt-1 text-sm">{link.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
