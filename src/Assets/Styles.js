const unstyledList = props => `
list-style:none;
padding:0;
margin:0;
`;

const color = {
  Violet: "#5C469A",
  White: "#FFFFFF"
};

const fonts = {
  FontMain: "Barlow, sans-serif"
};

const size = {
  mq320: "320px",
  mq375: "375px",
  mq425: "425px",
  mq768: "768px",
  mq1024: "1024px",
  mq1100: "1100px",
  mq1199: "1199px",
  mq1200: "1200px",
  mq1300: "1300px",
  mq1440: "1440px",
  mq1740: "1740px"
};

const device = {
  mq320: `(max-width: ${size.mq320})`,
  mq375: `(max-width: ${size.mq375})`,
  mq425: `(max-width: ${size.mq425})`,
  mq768: `(max-width: ${size.mq768})`,
  mq1024: `(max-width: ${size.mq1024})`,
  mq1100: `(max-width: ${size.mq1100})`,
  mq1199: `(max-width: ${size.mq1199})`,
  mq1200: `(max-width: ${size.mq1200})`,
  mq1300: `(max-width: ${size.mq1300})`,
  mq1440: `(max-width: ${size.mq1440})`,
  mq1740: `(max-width: ${size.mq1740})`
};

module.exports = { color, fonts, device, unstyledList };
