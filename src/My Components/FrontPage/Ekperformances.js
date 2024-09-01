import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ekperformances.css";

export function Ekperformances() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="Ekperformance_page">
      <h1 className="Ekperformance_heading1">eK PERFORMANCES</h1>
      <Carousel
        className="Ekperformance_Carousel"
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className=""
            src={"assets/Ekperformances/Ekperformance_img_1.png"}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="Ekperformance_heading3">
              Chhau Dance on aquaculture in Five Star Hotel
            </h3>
            <p className="Ekperformance_p">
              eKalakaar (eK) successfully organized a captivating performance of
              Indian Traditional Performing Art on May 25th, 2023, at Mayfair
              Hotel in Bhubaneswar, Odisha. The event featured an enchanting
              live performance by Chhau Dancers, skillfully portraying the lives
              of Fisherfolk and their profound connection to the realm of
              fishing. The talented group of performers hailed from Mayurbhanj,
              Odisha, which is recognised by the TIME Magazine among the World’s
              Greatest Places of 2023. The audience, comprising of stakeholders
              from industry, government and social sector who were participating
              in the Seminar on Aquaculture, was immersed in a truly remarkable
              experience. eK expresses deep gratitude to esteemed partners,
              including Artists, GIZ, Pantiss, and others, for their invaluable
              support.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=""
            src={"assets/Ekperformances/Ekperformance_img_2.png"}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="Ekperformance_heading3" >Odissi & Sambalpuri Dance on Sanitation</h3>
            <p className="Ekperformance_p" >
              eKalakaar (ek) organized a captivating performance featuring
              Classical Odissi and energetic Sambalpuri dance, centered around
              the theme of sanitation. The event attracted a diverse audience,
              including international guests, spreading awareness and fostering
              meaningful conversations on the subject.{" "}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    </div>
  );
}
