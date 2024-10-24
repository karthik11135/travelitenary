import { auth } from '@/db/auth';
import Sidebar from '@/components/Sidebar/Sidebar';
import { CommentBox } from '@/components/Comments/CommentBox';
import HomeScreen from '@/components/landing/HomeScreen';
import LandingScreen from '@/components/landing/LandingScreen';

export default async function Home() {
  const session = await auth();
  console.log(session, '<- this is the session object');
  if (!session) {

    return <LandingScreen />;
  }
  return (
    <HomeScreen />
  );
}
