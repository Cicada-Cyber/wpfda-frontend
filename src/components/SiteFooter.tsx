import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-sm text-gray-600">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-brand font-bold">Western Province Flying Disc Association</p>
          <p className="mt-1">
            The provincial body for ultimate and flying disc sports in the Western Cape, affiliated
            to the South African Flying Disc Association (SAFDA).
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Formerly the Cape Town Flying Disc Association.
          </p>
        </div>
        <div>
          <p className="text-brand font-semibold">Play</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/ultimate" className="hover:underline">
                What is Ultimate?
              </Link>
            </li>
            <li>
              <Link to="/pickup" className="hover:underline">
                Pickup
              </Link>
            </li>
            <li>
              <Link to="/league" className="hover:underline">
                League
              </Link>
            </li>
            <li>
              <Link to="/clubs" className="hover:underline">
                Clubs
              </Link>
            </li>
            <li>
              <Link to="/calendar" className="hover:underline">
                Calendar
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-brand font-semibold">Association</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/about/committee" className="hover:underline">
                Committee
              </Link>
            </li>
            <li>
              <Link to="/about/policies" className="hover:underline">
                Policies & constitution
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/portal" className="hover:underline">
                Club login
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Western Province Flying Disc Association
      </div>
    </footer>
  )
}
