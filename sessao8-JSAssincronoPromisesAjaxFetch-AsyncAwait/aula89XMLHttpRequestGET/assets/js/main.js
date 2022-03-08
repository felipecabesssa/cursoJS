// Ajax - Asyncronous JavaScript XML 

// XMLHttpRequest
/* 
Aqui crimos uma função request que vai ter um obj xhr que é um XMLHttpRequest
dai mandamos abrir esse obj (open) e pegamos o method (GET/POST) e a URL (obj.url)
isso a gente pega la na função carregaPagina (href) que por sua vez pega o que foi clicado
pelo document.addEventListener('click', e => ...
a função carregaPagina pega o atributo href (getatribute('href')) que retorna 2 call-backs
success ou error
- com promises não precisamos usar call-back ex na função de request abaixo
 */
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
//      Abreviaçao para XMLHttpRequest eral adota esse padrão.
        xhr.open(obj.method, obj.url, true);
//               GET ou POST, URL,    Sync ou Async
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
//            obj.success(xhr.responseText); call-back
              resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    
    const objConfig = {
        method: 'GET',
        url: href
        /* success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }  call-backs */
    };

    try {
        const response = await request(objConfig); /* then(response => {
            carregaResultado();
        }).catch(error => console.log(error)); */
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }
    
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resutado');
    resultado.innerHTML = response;
}