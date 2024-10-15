import { auth } from '@/db/auth';
import Sidebar from '@/components/Sidebar/Sidebar';

export default async function Home() {
  const session = await auth();
  console.log(session, '<- this is the session object');
  if (!session?.user) {
    return <h1 className="border mx-auto text-white ">Home page</h1>;
  }
  return (
    <div className="overflow-auto text-teritiary w-fit mx-auto">
      <p>user is logged in</p>
    </div>
  );
}
