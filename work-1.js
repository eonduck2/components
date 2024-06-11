const formatHTML = (language) => {
  const htmlData = {
    titleOne: `이종수`,
    titleTwo: `Lee`,
    h1: `ㅎㅇ`,
    p: `ㅎㅇㅎㅎㅇ`,
  };

  const lang = () => {
    if (language === `KOR`) {
      return htmlData.titleOne;
    } else if (language === `ENG`) {
      return htmlData.titleTwo;
    }
  };

  let html = `
             <html>
                <head>
                    <title>${lang()}</title>
                </head>
                <body>
                    <h1>${htmlData.h1}</h1>
                    <p>${htmlData.p}</p>
                </body>
             </html>   
            `;
  return html;
};

console.log(formatHTML(`KOR`));
