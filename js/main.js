
document.getElementById('factButton').addEventListener('click',uselessFactGenerator)

function uselessFactGenerator() {
    const url = 'https://uselessfacts.jsph.pl/api/v2/facts/random'
    fetch(url) 
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('placeForFacts').innerText = data.text
        document.getElementById('factButton').value = `wow that's useless, gimme another`
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}