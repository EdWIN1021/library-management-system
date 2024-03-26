import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

import { DiSnapSvg } from "react-icons/di";
import { Grid } from "@mui/material";

const footerData = [
  {
    title: "Edwin Inc",
    subtitles: ["Pricing", "Updates", "Beta", "Newsletter"],
  },
  {
    title: "Product",
    subtitles: ["Business", "Designers", "Classrooms", "Newscommers"],
  },
  {
    title: "Resources",
    subtitles: ["Tutorials", "Editorials", "Beta", , "Product"],
  },
  {
    title: "About",
    subtitles: ["Company", "Careers", "Legal", "Help"],
  },
];

const Footer = () => {
  return (
    <section className="text-[white] bg-[#ff8a00] py-10">
      <Grid container className="justify-center gap-5">
        {footerData.map((data) => (
          <Grid item key={data.title} xs={12} sm={4} lg={2}>
            <div>
              <span className="block text-xl text-bold mb-4">
                {data?.title}
              </span>

              {data?.subtitles?.map((subtitle) => (
                <span className="block mb-2" key={subtitle}>
                  {subtitle}
                </span>
              ))}
            </div>
          </Grid>
        ))}
      </Grid>

      <div className="mt-5">
        <span className="block text-center font-bold text-xl">Library</span>
        <p className="text-center my-4">
          © 2023 Edwin Inc. All rights reserved.
        </p>

        <div className="flex justify-center gap-2">
          <AiFillFacebook size={30} />
          <AiFillTwitterSquare size={30} />
          <AiOutlineInstagram size={30} />
          <DiSnapSvg size={30} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
