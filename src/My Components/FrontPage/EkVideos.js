// import React, { useState } from 'react';
// import './EkVideos.css';

// const EkVideosvideos = [
//   {
//     src: 'assets/Ekvideos/Assam_State.mp4'
//   },{
//     src: 'assets/Ekvideos/Chhau-Dasavatar.mp4'
//   },{
//     src: 'assets/Ekvideos/Chhau_Event_at_Bhubaneshwar.mp4'
//   },{
//     src: 'assets/Ekvideos/Kamakhyanagar_Program_1.mp4'
//   },{
//     src: 'assets/Ekvideos/Kamakhyanagar_Program_2.mp4'
//   },{
//     src: 'assets/Ekvideos/Kamakhyanagar_Program_3.mp4'
//   },{
//     src: 'assets/Ekvideos/Odisha_State.mp4'
//   },{
//     src: 'assets/Ekvideos/Dhuduki.mp4'
//   },
// ];

// export function EkVideos() {
//   return (
//     <div id='EkVideos' className='EkVideos_Page'>
//       <h1 className='EkVideos_heading1'>eK VIDEOS</h1>
//       <div className='EkVideos_Media'>
//         {
//           EkVideosvideos.map(video => (
//             <div key={video.src} className='EkVideos_Media_Items'>
//               <video
//                 src={video.src}
//                 className='EkVideos_Media_Item'
//                 onMouseOver={event => event.target.play()}
//                 onMouseOut={event => event.target.pause()}
//                 controls
//                 muted
//               />
//             </div>
//           ))
//         }

//       </div>
//     </div>
//   );
// }




import React from 'react';
import './EkVideos.css';

const EkVideosvideos = [
  {
    src: 'assets/Ekvideos/Assam_State.mp4'
  },{
    src: 'assets/Ekvideos/Chhau-Dasavatar.mp4'
  },{
    src: 'assets/Ekvideos/Chhau_Event_at_Bhubaneshwar.mp4'
  },{
    src: 'assets/Ekvideos/Kamakhyanagar_Program_1.mp4'
  },{
    src: 'assets/Ekvideos/Kamakhyanagar_Program_2.mp4'
  },{
    src: 'assets/Ekvideos/Kamakhyanagar_Program_3.mp4'
  },{
    src: 'assets/Ekvideos/Odisha_State.mp4'
  },{
    src: 'assets/Ekvideos/Dhuduki.mp4'
  },
];

export function EkVideos() {
  const handleMouseOver = event => {
    if (!event.target.paused) {
      event.target.play().catch(error => console.error('Error while playing:', error));
    }
  };

  const handleMouseOut = event => {
    if (!event.target.paused) {
      event.target.pause();
    }
  };

  return (
    <div id='EkVideos' className='EkVideos_Page'>
      <h1 className='EkVideos_heading1'>eK VIDEOS</h1>
      <div className='EkVideos_Media'>
        {
          EkVideosvideos.map(video => (
            <div key={video.src} className='EkVideos_Media_Items'>
              <video
                src={video.src}
                className='EkVideos_Media_Item'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                controls
                muted
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
