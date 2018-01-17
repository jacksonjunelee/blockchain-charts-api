import {Chart} from './chart';

export const ChartMock: Chart = {
  description :  "The total number of bitcoins that have already been mined; in other words, the current supply of bitcoins on the network.",
   name :  "Bitcoins in circulation",
   period :  "day" ,
  status :  "ok" ,
  unit :  "BTC" ,
  values :  [
    {x: 1230940800, y: 50} ,
     {x: 1231113600, y: 50} ,
     {x: 1231286400, y: 50} ,
    {x: 1231459200, y: 750} 
  ]
}
