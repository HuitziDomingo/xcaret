export const XcaretData = async () => {
    let data = await fetch('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json')
    let jsonValues = await data.json() // return Object.entries(jsonValues['es']) en caso de querer un idioma explecitose puede enviar asi
    return jsonValues
}