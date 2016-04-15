import nominatim from 'nominatim-geocode'

export function reverse(q) {
  return new Promise((res,rej) => {
    nominatim.reverse(q, (err,result) => {
      if(err){
        rej(err);
      } else{
        res(result);
      }
    })
  })
}

export function geocode(q) {
  return new Promise((res,rej) => {
    nominatim.geocode(q, (err,result) => {
      if(err){
        rej(err);
      } else{
        res(result);
      }
    })
  })
}
