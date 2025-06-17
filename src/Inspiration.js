import React from "react";
import "./inspiration.css";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Img1 from "./assets/uebergabe-de.webp";
import Img2 from "./assets/blog-edtonomy-com.webp";
import Img3 from "./assets/shannonsometimes-com.webp";
import Img4 from "./assets/babagoeschina-com.webp";
import Img5 from "./assets/ciberseguridad-blog-2.webp";
import Img6 from "./assets/garyindiana-nl.webp";
import Img7 from "./assets/roamsaudi-com.webp";
import Img8 from "./assets/blog-contmatic-com-br.webp";
import Single from "./Single";
const Inspiration = () => {
  return (
    <div className="insp-main">
      <div className="insp-span">
        <span className="insp-s1">See Reiro theme in action.</span>
        <span className="insp-s2">Feel inspired.</span>
      </div>
      <div className="insp-show-arrow">
        <p>Latest of the Showcase</p>
        <div className="seeAll">
          <p>See all </p>
          <FaArrowRight />
        </div>
      </div>
      <div className="insp-comp">
        <Single
          title={"Built wit Reirdo"}
          heading={"uebergabe.de"}
          file={Img1}
          icon={<MdOutlineArrowOutward />}
        />
        <Single
          title={"Built wit Reirdo"}
          heading={"blog.edtonomy.com "}
          file={Img2}
          icon={<MdOutlineArrowOutward />}
        />

        <Single
          title={"Built wit Reirdo"}
          heading={"shannonsometimes.com "}
          file={Img3}
          icon={<MdOutlineArrowOutward />}
        />

        <Single
          title={"Built wit Reirdo"}
          heading={"babagoeschina.com"}
          file={Img4}
          icon={<MdOutlineArrowOutward />}
        />

        <Single
          title={"Built wit Reirdo"}
          heading={"ciberseguridad.blog"}
          file={Img5}
          icon={<MdOutlineArrowOutward />}
        />

        <Single
          title={"Built wit Reirdo"}
          heading={"garyindiana.nl"}
          file={Img6}
          icon={<MdOutlineArrowOutward />}
        />

        <Single
          title={"Built wit Reirdo"}
          heading={"roamsaudi.com"}
          file={Img7}
          icon={<MdOutlineArrowOutward />}
        />

        <Single
          title={"Built wit Reirdo"}
          heading={"blog.contmatic.com.br"}
          file={Img8}
          icon={<MdOutlineArrowOutward />}
        />
      </div>
    </div>
  );
};

export default Inspiration;
