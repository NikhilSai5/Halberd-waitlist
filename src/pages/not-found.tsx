import { Link } from 'wouter';
import { Mark } from '@/components/Mark';

export default function NotFound() {
  return (
    <div className="grain flex min-h-[100dvh] items-center justify-center bg-[#efeee7] px-6">
      <div className="max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <Mark />
        </div>
        <p className="font-mono text-6xl font-medium tracking-[-.08em] text-[#486551]">404</p>
        <h1 className="mt-4 text-2xl font-medium tracking-[-.04em] text-[#181a16]">Page not found</h1>
        <p className="mt-4 max-w-[280px] text-sm leading-6 text-[#666960]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#18211b] px-6 py-3 text-[11px] font-medium uppercase tracking-[.12em] text-[#f9f9f7] transition-all hover:-translate-y-0.5 hover:bg-[#486551] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486551] focus-visible:ring-offset-2"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
