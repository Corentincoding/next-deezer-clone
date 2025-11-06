export default function AlbumsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 p-4 border-r bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">🎵 Deezer Clone</h2>
        <ul>
          <li>
            <a href="/albums" className="text-blue-600 hover:underline">
              Albums
            </a>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
