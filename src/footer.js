import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/SiiyaN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Noxolo Siya Ndlovu
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/SiiyaN/dictionary.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://amazing-daffodil-60a014.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}
