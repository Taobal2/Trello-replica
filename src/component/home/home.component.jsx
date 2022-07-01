import React, { useState } from "react";
import { Header } from "../navigation/navigation.component";
import { TopComp } from "../top.component";
import { SecondComponent } from "../second.component";
import { ThirdComponent } from "../third.component";
import { FourthBuild } from "../FourthComponent/fourthBuild.component";
import { FifthComponent } from "../fifth.component";
import { SliderComponent } from "../slider/slider.component.jsx";
import { ContactComponent } from "../contact.component";
import { FooterComponent } from "../footer.component";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const onHandle = () => {
    const check = window.scrollY;
    if (check >= 70) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  window.addEventListener("scroll", onHandle);

  return (
    <div>
      <Header bg={toggle ? "bg" : ""} />
      <TopComp />
      <SecondComponent />
      <ThirdComponent />
      <FourthBuild />
      <FifthComponent />
      <SliderComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};

export default Home;
