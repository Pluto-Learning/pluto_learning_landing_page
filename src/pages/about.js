import About_Hero_Section from "@/components/About/About_Hero_Section";
import Co_Founder from "@/components/About/Co_Founder";
import Stay_Connected from "@/components/About/Stay_Connected";
import Footer from "@/components/common/Footer";
import React from "react";

export default function About() {
  return (
    <div>
      <About_Hero_Section />
      <Co_Founder />
      <Stay_Connected />
      <Footer />
    </div>
  );
}
