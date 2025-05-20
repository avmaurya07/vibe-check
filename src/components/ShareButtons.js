import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function ShareButtons({ vibeResult }) {
  const shareUrl = `${window.location.origin}/results/${vibeResult.id}`;
  const title = `I got ${vibeResult.emoji} ${vibeResult.title} on Vibe Check! What's your vibe?`;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="mt-4">
      <p className="mb-3 font-bold">Share your vibe with friends:</p>
      <div className="flex justify-center space-x-4">
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          className="share-button"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="share-button"
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={title}
          className="share-button"
        >
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>

        <button
          onClick={copyToClipboard}
          className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 share-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;
