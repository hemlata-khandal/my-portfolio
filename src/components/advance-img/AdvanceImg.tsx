import React, { CSSProperties } from "react";

interface AdvanceImgProps {
  src: string;
  srcWebp: string;
  altText: string;
  style?: CSSProperties | undefined;
}

const AdvanceImg: React.FunctionComponent<AdvanceImgProps> = (props) => {
  const { src, srcWebp, altText, style } = props;
  return (
    <picture>
      <source srcSet={srcWebp} type="image/webp" />
      <source srcSet={src} type="image/jpeg" />
      <img src={src} alt={altText} style={style ?? {}} />
    </picture>
  );
};

export default AdvanceImg;
