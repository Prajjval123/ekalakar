import styles from "./AboutUs.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.aboutUsParent}>
        <b className={styles.aboutUs}>ABOUT eK</b>
        <div className={styles.frameGroup}>
          <div className={styles.ekalakaarekIsBuildingTheParent}>
            <div className={styles.ekalakaarekIsBuilding}>
              eKalakaar(eK) is building the first integrate technology enabled
              platform that will connect opportunity seekers-Indian traditional
              performing artists, including classical and folk singers, dancers,
              musicians, and theatre artists to performance opportunities with
              talent seekers- Patrons such as high-end hospitality, corporates
              and development sector organizations.
              <div id="AboutUS_text_Readmore" style={{display:"none"}}> We provide Indian
                traditional performing Artists with Naam(recognition),
                Kaam(opportunities) and Daam(fair compensation). We are doing this
                by curating unique experiences for discerning patrons that seek
                authenticity, experiential engagement, and cultural immersion to
                create memorable experiences for their end users. These
                experiences will enable patrons to achieve their business and
                social impact goals by harnessing the power of traditional Indian
                performing art


                <b className={styles.whatWeDo}>What We Do</b>
                <div className={styles.makeTalentMeetContainer}>
                  <ul className={styles.makeTalentMeetOpportunityT}>
                    <li className={styles.makeTalentMeet}>
                      Make talent meet opportunity
                    </li>
                    <li className={styles.makeTalentMeet}>
                      Take art beyond entertainment
                    </li>
                    <li>Create an art conscious society</li>
                  </ul>
                </div>
                <b className={styles.whatWeDo}>Why We Do</b>
                <div className={styles.makeTalentMeetContainer}>
                  <ul className={styles.makeTalentMeetOpportunityT}>
                    <li className={styles.makeTalentMeet}>
                      Major economic driver for tourism and livelihood
                    </li>
                    <li className={styles.makeTalentMeet}>
                      Art for wellness and social behaviour change
                    </li>
                    <li>Position India as the world’s cultural superpower</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.pg22} alt="" src={'assets/AboutUs/pg2.png'} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
