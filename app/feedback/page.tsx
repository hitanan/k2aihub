import Redirect from '@/components/Redirect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirecting to K2AI Feedback',
  description: 'This page has moved to edu.k2aihub.com',
  robots: {
    index: false,
    follow: false,
  },
};

export default function FeedbackRedirect() {
  return <Redirect to="https://edu.k2aihub.com/feedback" statusCode={301} />;
}
