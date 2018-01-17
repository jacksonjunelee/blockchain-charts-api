interface Data {
  x?: number;
  y?: number;
}

export interface Chart {
  description ?: string;
  name?: string;
   period? :  string;
   status? :  string; 
  unit? :  string;
   values ?:  Data[];
}
