import { Button } from '@/components/ui/button';
import { ProfileTable, UserTable } from '@/data/tempdb';
import { Profile } from '@/types';
import Link from 'next/link';

interface UserPageProps {
  params: {
    id: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  const { id: userId } = params;
  const user = UserTable.find((u) => u.id === userId);
  const profiles = user ? ProfileTable.filter((p) => p.userId === userId) : [];

  let messageTxt = user
    ? `Welcome ${user.name}`
    : 'Oops! No such user found. Redirect him to Login/Signup page';

  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {user ? `Welcome ${user.name}` : messageTxt}
            </h1>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
              {profiles.length > 0 ? (
                profiles.map((p) => (
                  <Button
                    key={p.id}
                    asChild
                    className="rounded-md bg-black dark:bg-white w-1/3 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                  >
                    <Link href={p.url} target="_blank">
                      {p.type}
                    </Link>
                  </Button>
                ))
              ) : (
                <Button className="rounded-md bg-black dark:bg-white w-1/3 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">
                  Create Profile
                </Button>
              )}

              <a
                href="/"
                className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPage;
