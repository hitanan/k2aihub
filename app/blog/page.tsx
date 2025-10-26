import Redirect from '@/components/Redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to K2AI Blog',
  description: 'This page has moved to edu.k2aihub.com',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BlogRedirect() {
  return <Redirect to="https://edu.k2aihub.com/blog" statusCode={301} />;
}
