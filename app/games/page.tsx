import Redirect from '@/src/components/Redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to K2AI Education Games',
  description: 'This page has moved to edu.k2aihub.com',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GamesRedirect() {
  return <Redirect to="https://edu.k2aihub.com/practice" statusCode={301} />;
}
