'use client';

import React, { useState, useEffect } from 'react';

interface ShareButtonProps {
  title?: string;
  description?: string;
  url?: string;
}

export default function ShareButton({ 
  title,
  description,
  url
}: ShareButtonProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareData, setShareData] = useState({
    title: 'K2AI - Nền tảng công nghệ AI dẫn lối',
    description: 'Khám phá Việt Nam và AI thực tế cùng K2AI',
    url: ''
  });

  useEffect(() => {
    setShareData({
      title: title || (typeof document !== 'undefined' ? document.title : 'K2AI - Nền tảng công nghệ AI dẫn lối'),
      description: description || 'Khám phá Việt Nam và AI thực tế cùng K2AI',
      url: url || (typeof window !== 'undefined' ? window.location.href : '')
    });
  }, [title, description, url]);

  const handleShare = async () => {
    // Try native sharing first (mobile)
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Fallback to share menu if user cancels
      }
    }

    // Show custom share menu
    setShowShareMenu(!showShareMenu);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareData.url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareData.url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareData.url)}`,
    zalo: `https://zalo.me/share?url=${encodeURIComponent(shareData.url)}&title=${encodeURIComponent(shareData.title)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareData.url)}&text=${encodeURIComponent(shareData.title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareData.title + ' ' + shareData.url)}`
  };

  const openShare = (platform: keyof typeof shareUrls) => {
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        aria-label="Chia sẻ trang này"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        <span className="hidden sm:inline">Chia sẻ</span>
      </button>

      {/* Share Menu */}
      {showShareMenu && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="font-medium text-gray-900 mb-3">Chia sẻ trang này</h3>
            
            {/* Social platforms */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                onClick={() => openShare('facebook')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
                title="Chia sẻ lên Facebook"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  f
                </div>
                <span className="text-xs mt-1">Facebook</span>
              </button>

              <button
                onClick={() => openShare('zalo')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
                title="Chia sẻ lên Zalo"
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  Z
                </div>
                <span className="text-xs mt-1">Zalo</span>
              </button>

              <button
                onClick={() => openShare('telegram')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
                title="Chia sẻ lên Telegram"
              >
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  T
                </div>
                <span className="text-xs mt-1">Telegram</span>
              </button>

              <button
                onClick={() => openShare('twitter')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
                title="Chia sẻ lên Twitter"
              >
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                  𝕏
                </div>
                <span className="text-xs mt-1">Twitter</span>
              </button>

              <button
                onClick={() => openShare('linkedin')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors"
                title="Chia sẻ lên LinkedIn"
              >
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  in
                </div>
                <span className="text-xs mt-1">LinkedIn</span>
              </button>

              <button
                onClick={() => openShare('whatsapp')}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-green-50 transition-colors"
                title="Chia sẻ lên WhatsApp"
              >
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  W
                </div>
                <span className="text-xs mt-1">WhatsApp</span>
              </button>
            </div>

            {/* Copy link */}
            <div className="pt-3 border-t border-gray-100">
              <button
                onClick={copyToClipboard}
                className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                  copied 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Đã sao chép!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Sao chép liên kết</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {showShareMenu && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setShowShareMenu(false)}
        />
      )}
    </div>
  );
}
