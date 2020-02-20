const websiteUrl = "http://www.novalima.mg.gov.br/portal-transparencia/editais";
const findClass  = ".file-list";
const findText   = ".file-description";
const findDate   = ".file-date";

const axios   = require("axios");
const cheerio = require("cheerio");

/* Use axios to obtain the page in HTML format */
axios.get(websiteUrl)
  .then((response) => {

    /* Load HTML info into cheerio instance */
    const $ = cheerio.load(response.data);

    /* For each element on specified class */
    $(findClass).each((i, elem) => {
      /* Obtain its date and convert to text. Trim white spaces*/
      const urlDate = $(elem).find(findDate).text().trim();

      /* Obtain element text if date matches as yesterday */
      if (urlDate == yesterday()) {
        const urlText = $(elem).find(findText).text().trim();
        console.log(urlText);
        console.log(urlDate);
      }
    })
  })
  .catch( (error) => {
    console.log(error);
  });

  function yesterday () {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate()-1);
    var dd = String(yesterday.getDate()).padStart(2, '0');
    var mm = String(yesterday.getMonth() + 1).padStart(2, '0');
    var yyyy = yesterday.getFullYear();

    return [dd, mm, yyyy].join('/');
  }