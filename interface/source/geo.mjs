import {geoConicConformal, geoPath} from 'd3-geo';
import {feature} from 'topojson-client';
import fs from 'fs';
const topo = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
const countries = feature(topo, topo.objects.countries);
const W=1000,H=720;
const proj = geoConicConformal().rotate([-4,0]).parallels([38,52]);
const box = {type:'Feature',geometry:{type:'MultiPoint',coordinates:[[-27.5,32],[34.5,32],[-12,58],[30,58],[34.5,36]]}};
proj.fitExtent([[10,10],[W-10,H-10]], box);
proj.clipExtent([[0,0],[W,H]]);
const path = geoPath(proj).digits(1);
let out=[];
for (const f of countries.features){ const d=path(f); if(d && d.length>10) out.push(d); }
export function xy(lon,lat){const p=proj([lon,lat]);return [Math.round(p[0]*10)/10,Math.round(p[1]*10)/10];}
export const landPath = out.join('');
export const size=[W,H];
