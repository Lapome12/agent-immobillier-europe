import fs from 'fs';
import {xy, landPath} from './geo.mjs';
import * as data from './data.mjs';
const D = {...data};
for (const k of ['budget150','horsTop150','budget400','horsTop400']) D[k] = D[k].map(z=>{const [x,y]=xy(z.lon,z.lat); return {...z,x,y};});
const out = fs.readFileSync('template.html','utf8').replace('__LAND__', landPath).replace('__DATA__', JSON.stringify(D));
fs.writeFileSync('../radar-immobilier-europe.html', '<!doctype html>\n<html lang="fr">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n</head>\n<body style="margin:0">\n' + out + '\n</body>\n</html>\n');
console.log(out.length);
