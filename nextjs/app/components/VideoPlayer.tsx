import React from 'react';

interface VideoPlayerProps {
  embedUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ embedUrl }) => {
  return (
    /* ใช้ aspect-video แทนการคำนวณ padding เองได้ใน Tailwind รุ่นใหม่ 
       แต่ pt-[56.25%] ที่คุณใช้ก็ยังทำงานได้ดีมากในแง่ Compatibility ครับ
    */
    <div className="relative w-full aspect-video overflow-hidden bg-black shadow-2xl rounded-xl border border-white/10 group">
      {/* Loading Overlay: แสดงสีพื้นหลังสวยๆ ระหว่างร่าวิดีโอโหลด */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#010511]">
         <div className="animate-pulse text-red-600 font-black tracking-widest">DOODRAM</div>
      </div>

      <iframe
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
        // ปรับ Sandbox ให้ยืดหยุ่นขึ้นเพื่อให้ฟีเจอร์ของวิดีโอไม่พัง
        sandbox="allow-scripts allow-same-origin allow-presentation allow-forms allow-popups"
        // เพิ่มความเข้ากันได้ของฟีเจอร์ต่างๆ
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title="DooStream Video Player"
      />
      
      {/* เพิ่มขอบเงาจางๆ ทับวิดีโอเพื่อให้ดู Cinematic (Optional) */}
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-xl" />
    </div>
  );
};

export default VideoPlayer;