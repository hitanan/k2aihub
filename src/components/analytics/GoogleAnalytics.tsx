'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" async />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1050674312023873"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}

// Custom hook for tracking events
export function useGoogleAnalytics() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (pageTitle: string, pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
        page_title: pageTitle,
        page_path: pagePath,
      });
    }
  };

  const trackLessonStart = (moduleName: string, lessonId: string, lessonTitle: string) => {
    trackEvent('lesson_start', 'engagement', `${moduleName}/${lessonId}`, 1);
    trackEvent('lesson_view', 'education', lessonTitle);
  };

  const trackLessonComplete = (moduleName: string, lessonId: string, timeSpent: number) => {
    trackEvent('lesson_complete', 'engagement', `${moduleName}/${lessonId}`, timeSpent);
  };

  const trackModuleView = (moduleName: string, moduleTitle: string) => {
    trackEvent('module_view', 'navigation', moduleName);
    trackEvent('page_view', 'education', moduleTitle);
  };

  const trackSearchQuery = (query: string, resultsCount: number) => {
    trackEvent('search', 'user_interaction', query, resultsCount);
  };

  const trackResourceClick = (resourceType: string, resourceTitle: string, moduleName: string) => {
    trackEvent('resource_click', 'engagement', `${moduleName}/${resourceType}/${resourceTitle}`);
  };

  const trackVideoPlay = (videoTitle: string, moduleName: string, lessonId: string) => {
    trackEvent('video_play', 'engagement', `${moduleName}/${lessonId}/${videoTitle}`);
  };

  const trackExerciseStart = (exerciseTitle: string, moduleName: string, lessonId: string) => {
    trackEvent('exercise_start', 'engagement', `${moduleName}/${lessonId}/${exerciseTitle}`);
  };

  const trackSolutionView = (exerciseTitle: string, moduleName: string, lessonId: string) => {
    trackEvent('solution_view', 'engagement', `${moduleName}/${lessonId}/${exerciseTitle}`);
  };

  const trackCityView = (cityName: string, regionName: string) => {
    trackEvent('city_view', 'geography', `${regionName}/${cityName}`);
  };

  const trackShare = (shareType: string, contentType: string, contentTitle: string) => {
    trackEvent('share', 'social', `${shareType}/${contentType}/${contentTitle}`);
  };

  return {
    trackEvent,
    trackPageView,
    trackLessonStart,
    trackLessonComplete,
    trackModuleView,
    trackSearchQuery,
    trackResourceClick,
    trackVideoPlay,
    trackExerciseStart,
    trackSolutionView,
    trackCityView,
    trackShare,
  };
}

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: object) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer: any[];
  }
}
