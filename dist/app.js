var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=IN&' +
    'apiKey=6a52fcf89183445e90015fa67178f4ec';

var req = new Request(url);
var container = document.getElementById('container')

var data = {}

fetch(req)
    .then(res => res.json())
    .then(json => {
        data = json
        publishArticle(data)
    })


const publishArticle = ({ articles }) => {
    articles.forEach(article => {
        var div = document.createElement('div')
        var readMore = document.createElement('BUTTON')
        var link = document.createElement('A')
        link.href = article.url
        link.innerHTML = 'Read More'
        readMore.appendChild(link)
        div.className = 'article'
        div.appendChild(document.createTextNode(article.title))
        div.appendChild(readMore)
        container.appendChild(div)

    })

}




