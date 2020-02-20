const websiteUrl = "http://www.novalima.mg.gov.br/portal-transparencia/editais";

const axios = require("axios");
const cheerio = require("cheerio");

/* Use axios to obtain the page in HTML format */
axios.get(websiteUrl)
  .then( (response) => {
    console.log(response.data);
  })
  .catch( (error) => {
    console.log(error);
  })