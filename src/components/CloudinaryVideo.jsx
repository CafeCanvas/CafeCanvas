import React, { useEffect, useRef } from 'react';

const CloudinaryVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    // Load Cloudinary video player script
    const loadCloudinaryPlayer = () => {
      if (!window.cloudinary) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/cloudinary-video-player@2.0.4/dist/cld-video-player.min.js';
        script.onload = initializePlayer;
        document.head.appendChild(script);

        // Load CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/cloudinary-video-player@2.0.4/dist/cld-video-player.min.css';
        document.head.appendChild(link);
      } else {
        initializePlayer();
      }
    };

    const initializePlayer = () => {
      if (!isMounted) return; // Abort if navigated away
      if (window.cloudinary && videoRef.current) {
        try {
          const player = window.cloudinary.videoPlayer(videoRef.current, {
            cloudName: 'dnf6tfgro',
            publicId: 'Ordering_Food_Via_QR_Code_v7qe51',
            controls: false,
            autoplay: true,
            loop: true,
            muted: true,
            fluid: true,
            playsinline: true,
            hideContextMenu: true,
            showLogo: false,
            bigPlayButton: false,
            colors: {
              accent: '#FF7F50',
              base: '#000000',
            },
          });

          // Hide any overlays and ensure clean playback
          player.on('ready', () => {
            // Remove any UI overlays
            const playerEl = videoRef.current;
            if (!playerEl) return; // Prevent white screen crashes on unmount

            try {
              const overlays = playerEl.querySelectorAll('.vjs-overlay, .vjs-control-bar, .vjs-big-play-button');
              if (overlays) {
                overlays.forEach(overlay => {
                  overlay.style.display = 'none';
                });
              }
            } catch (e) {
              // Silently fail if DOM manipulation fails during routing
            }
          });
        } catch (error) {
          console.warn("Cloudinary video initialization skipped due to routing.");
        }
      }
    };

    loadCloudinaryPlayer();

    return () => {
      // Cleanup if needed
      isMounted = false; // Mark as unmounted
      if (videoRef.current && window.cloudinary) {
        try {
          const player = window.cloudinary.videoPlayer(videoRef.current);
          if (player && player.dispose) {
            player.dispose();
          }
        } catch (e) {
          // Handle cleanup errors silently
        }
      }
    };
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '300px',
      borderRadius: '0.75rem',
      overflow: 'hidden',
      marginBottom: '1.5rem',
      border: '2px solid var(--border-light)',
      position: 'relative'
    }}>
      <video
        ref={videoRef}
        className="cld-video-player"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        playsInline
        muted
        loop
        autoPlay
      />
    </div>
  );
};

export default CloudinaryVideo;
