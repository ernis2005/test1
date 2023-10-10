import React from 'react'
import './Page.scss'
import { СheckMarkSvg } from '../../svg/MentorsCardSvg/СheckMarkSvg'
import { MentorsCardBlock1Svg } from '../../svg/MentorsCardSvg/MentorsCardBlock1Svg'
import { MentorsCardBlocl2Svg } from '../../svg/MentorsCardSvg/MentorsCardBlocl2Svg'
import { MentorsCardBlock3Svg, MentorsCardBlock3Svg1 } from '../../svg/MentorsCardSvg/MentorsCardBlock3Svg'
export const MentorsCard = () => {
  let name = 'MentorsCards'
  return (
    <div className={`${name}`}>
      <div className={`${name}Card`}>
        <div className={`${name}CardImage`}>
          <img src="/images/mentors/Rectangle3296.png" alt="/" />
          <div>
            <samp>
              <p>Jane Doe</p>
              <span>
                UX/UI Design
              </span>
            </samp>
            <СheckMarkSvg />
          </div>
        </div>
        <div className={`${name}CardInfo`}>
          <div className={`${name}CardInfoSvg`}><MentorsCardBlock1Svg /></div>
          <div>
            <p>lorem</p>
            <span>
              Chances are you will be 98% satisfied with the result/ 4.9 is our average
            </span>
          </div>
        </div>

      </div>
      <div className={`${name}Card`}>

        <div className={`${name}CardInfo1`}>
          <div className={`${name}CardInfoSvg1`}><MentorsCardBlocl2Svg /></div>
          <div>
            <p>lorem</p>
            <span>
              Chances are you will be 98% satisfied with the result/ 4.9 is our average
            </span>
          </div>
        </div>
        <div className={`${name}CardImage`}>
          <img src="/images/mentors/Rectangle3303.png" alt="/" />
          <div>
            <samp>
              <p>Alice Doe</p>
              <span>
                Front-End Dev
              </span>
            </samp>
            <СheckMarkSvg />
          </div>
        </div>
      </div>
      <div className={`${name}Card`}>
        <div className={`${name}CardImage`}>
          <img src="/images/mentors/Rectangle3304.png" alt="/" />
          <div>
            <samp>
              <p>Jane Doe</p>
              <span>
                UX/UI Design
              </span>
            </samp>
            <СheckMarkSvg />
          </div>
        </div>
        <div className={`${name}CardInfo2`}>
          <div className={`${name}CardInfoSvg2`}>
            <MentorsCardBlock3Svg />
            
            </div>
            <div  className={`${name}CardInfoSvg`}>
            <MentorsCardBlock3Svg1 />
            </div>
          <div>
            <p>lorem</p>
            <span>
              Chances are you will be 98% satisfied with the result/ 4.9 is our average
            </span>
          </div>
        </div>

      </div>

    </div>
  )
}
