# Site institucional Datalyse

Site estático (HTML + CSS + JavaScript puro, sem build). Abra `index.html` direto no navegador
ou publique a pasta inteira no Netlify, Vercel ou GitHub Pages.

## Estrutura

```
site-datalyse/
├── index.html · solucoes.html · segmentos.html · portfolio.html · sobre.html · contato.html
├── css/   tokens.css (cores, tipografia, espaçamentos) · base.css · components.css · pages.css
├── js/    config.js (contatos) · main.js (header, rodapé, ícones, menu, animações)
│          portfolio-data.js (itens do portfólio) · portfolio.js · contato.js
├── assets/ logo-d.png · logo-d-96.png · favicon-32.png · apple-touch-icon.png · og-image.png
│           illustrations/ (mockups SVG) · portfolio/ (prints reais) · team/ (fotos)
├── sitemap.xml · robots.txt
```

Header, rodapé e botão flutuante de WhatsApp são gerados por `js/main.js`, a partir de um único
template — para mudar um link do menu ou do rodapé, edite só esse arquivo.

## Nome "datalyse"

O nome da marca aparece **sempre** na letra do logo (Quicksand peso 500, minúsculo), nunca nas fontes do texto.
Ao escrever o nome em qualquer página nova, use `<span class="dl-name">datalyse</span>`.
No logo (header, menu e rodapé) ele fica azul `#232B85` em fundo claro e branco em fundo marinho.

## Pendências marcadas como EDITAR

| O quê | Onde |
|---|---|
| Número do WhatsApp (DDI + DDD + número, só dígitos) | `js/config.js` → `whatsapp` |
| E-mail de contato | `js/config.js` → `email` |
| Fotos dos sócios (`thaina.jpg`, `douglas.jpg`) | `assets/team/` — enquanto não existirem, aparecem as iniciais |
| Função e mini-bio de cada sócio | `sobre.html` (comentários `<!-- EDITAR -->`) |
| Prints reais dos dashboards | `assets/portfolio/` + campo `imagem` em `js/portfolio-data.js` (nomes previstos em `assets/portfolio/LEIA-ME.txt`) e os 3 cards de "Veja na prática" em `index.html` |
| Domínio definitivo | `sitemap.xml`, `robots.txt` e as tags `canonical` / `og:url` / `og:image` no `<head>` de cada página — hoje estão comentadas com `SEU-DOMINIO` (o datalyse.com.br pertence a outra empresa) |
| Depoimentos reais (opcional) | bloco comentado "PROVA SOCIAL" em `index.html` — só descomentar com depoimentos autorizados |

## Formulário de contato

Por padrão, "Enviar" abre o WhatsApp com a mensagem montada a partir dos campos (sem backend).
Para receber por e-mail via Formspree, siga o comentário acima do `<form>` em `contato.html`
e defina `USAR_FORMSPREE = true` em `js/contato.js`.

## Adicionar um projeto ao portfólio

Copie um bloco em `js/portfolio-data.js`, ajuste os campos e escolha a `categoria`
(`dashboards`, `automacoes`, `aplicativos` ou `sites`). Filtros e contagens se atualizam sozinhos.
