const fs = require('fs');
const cheerio = require('cheerio');
const got = require('got');

const vgmUrl= 'https://maailmanloppu.fi/';

//got(vgmUrl).then(response => {
//  const $ = cheerio.load(response.body);
//  console.log($('b')[1].children[0].data);
//  console.log($('b')[3].children[0].data);
//}).catch(err => {
//  console.log(err);
//});

got(vgmUrl).then(response => {
    const $ = cheerio.load(response.body);
    let pvm = $('b')[1].children[0].data
    let kello = $('b')[3].children[0].data

    console.log(`Tänään on ${pvm} ja kello on ${kello}`)
  }).catch(err => {
    console.log(err);
  });

//let message;
//if (message.content === 'Am aika') {
//    got(vgmUrl).then(response => {
//        const $ = cheerio.load(response.body);
//        let pvm = $('b')[1].children[0].data
//        let kello = $('b')[3].children[0].data
//
//        console.log(`Tänään on ${pvm} ja kello on ${kello}`)
//      }).catch(err => {
//        console.log(err);
//      });
//}

console.log("PERUNA SALAATTI")