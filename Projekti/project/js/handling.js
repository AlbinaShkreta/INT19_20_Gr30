let json = '{ "modeli": 64 }';
 
try {
 
  let user = JSON.parse(json); 
  if (!user.emri) {
    throw new SyntaxError("Te dhena te paplotesuara: emri");
  }
 
  console.log( user.emri );
 
} catch(e) {
  console.log( "JSON Error: " + e );  //e.message shfaq = JSON Error: "Te dhena te paplotesuara: emri"
                                      //e shfaq = JSON Error: SyntaxError("Te dhena te paplotesuara: emri");
                                      //e.name = JSON Error: SyntaxError
}
