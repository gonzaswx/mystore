export const NAME_App = "Adadis";
export const DESCRIPTION = "La mejor calidad al mejor precio";

export async function getData (categorias) {
    const response = await fetch (
        `https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`        
    )
const data = await response.json();
return data.results;
}
