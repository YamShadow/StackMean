
declare const Promise: any;
const apiKey = `eb09dd46f99b48e18ba4b62d99845410`;
const baseUrl = `https://newsapi.org/v2/`;
const select = document.getElementsByTagName(`select`)[0];

const getSources = (url: string): Promise<any> => {

    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(jsonData => resolve(jsonData))
            .catch(error => { reject(error) })
    })
}

let url = `${baseUrl}sources?apikey=${apiKey}`;

getSources(url)
    .then(
        (res) => {
            for (let item of res.sources) {
                let option = document.createElement(`option`);
                option.textContent = item.name;
                option.value = item.id;
                select.appendChild(option)
            }
        }
    )
    .catch(error => console.error(error))


select.addEventListener(`change`, (e) => {
    let url = `${baseUrl}everything?apikey=${apiKey}&sources=${select.value}`;
    console.log(url)
    getSources(url)
        .then(
            (res) => {
                console.log(res);
                let main = document.getElementsByTagName(`main`)[0];
                for (let item of res.articles) {
                    console.log(item);
                    let div = document.createElement(`div`);
                    let h2 = document.createElement(`h2`);
                    h2.textContent = item.title
                    div.appendChild(h2);
                    let p = document.createElement(`p`);
                    p.textContent = item.content;
                    div.appendChild(p)
                    main.appendChild(div);
                }
            }
        )
        .catch(error => console.error(error))

})