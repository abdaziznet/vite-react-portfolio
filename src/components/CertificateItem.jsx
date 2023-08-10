import React from "react";

const CertificateItem = ({ img, title, desc, date, url }) => {
  return (
    <div className="certificate__item">
      <img src={img} alt="" className="certificate__img"></img>

      <span className="certificate__date">{date}</span>
      <a href={url} target="_blank">
        <h3 className="certificate__subtitle">{title}</h3> 
      </a>
      <p className="certificate__description">{desc}</p>
    </div>
  );
};

export default CertificateItem;
