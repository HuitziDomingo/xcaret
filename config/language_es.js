export const XcaretDataES = async () => {
    let data = await fetch('https://raw.githubusercontent.com/javialcocer/test-json/main/data.json')
    let jsonValues = await data.json() 
    console.log(jsonValues.es)
    return jsonValues.es
}

