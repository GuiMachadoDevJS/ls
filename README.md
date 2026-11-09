# LS Manutenção Industrial

Landing Page institucional de alta performance da **LS Manutenção Industrial**, especializada em mecânica pesada, elétrica industrial, hidráulica, pneumática, ajustagem, usinagem e soldas especiais. Atendimento emergencial 24 horas por dia em São Paulo e região.

- **Domínio Oficial:** [https://lsmanutencaoindustrial.com.br](https://lsmanutencaoindustrial.com.br)
- **WhatsApp Oficial:** [(11) 93038-1916](https://wa.me/5511930381916?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.)

---

## Estrutura do Projeto (HTML, CSS e JS Puros)

Este repositório foi construído em tecnologia 100% estática e autônoma, sem dependências de build ou frameworks:

```text
├── index.html         # Página principal com SEO completo e Schema.org
├── css/
│   └── style.css      # Estilos compilados nativos (75KB), temas, fontes e animações
├── js/
│   └── script.js      # Interatividade do menu mobile, scroll-to-top e navegação
├── public/            # Todas as imagens, logos e ícones
├── sitemap.xml        # Mapa do site para Google e buscadores
├── robots.txt         # Diretivas de indexação para robôs de busca
├── CNAME              # Configuração de domínio personalizado
└── README.md          # Documentação do projeto
```

---

## Recursos de SEO Implementados

- **Tag Canonical:** Apontando para `https://lsmanutencaoindustrial.com.br/`.
- **Meta Tags de Busca:** Title otimizado, description comercial com palavras-chave de alta conversão, robots e googlebot.
- **SEO Local & Geo:** Configurado para São Paulo - SP com coordenadas geográficas.
- **Open Graph & Twitter Cards:** Compartilhamentos no WhatsApp, LinkedIn e redes sociais com imagem de prévia (1584x672).
- **Dados Estruturados Schema.org (JSON-LD):** `LocalBusiness` / `ProfessionalService`, `WebSite` e `BreadcrumbList` para Rich Snippets no Google.
- **Sitemap XML & Robots.txt:** Inclui sitemap com indexação de imagens.
- **Performance & Core Web Vitals:** Imagens com dimensões explícitas para evitar CLS, `fetchpriority="high"` no Hero e `loading="lazy"` nas demais.

---

## Hospedagem e Publicação

### 1. Vercel
1. Conecte o repositório na Vercel.
2. Nas configurações do projeto, adicione o domínio personalizado `lsmanutencaoindustrial.com.br`.
3. Configure os apontamentos DNS (A record e CNAME) indicados pela Vercel no painel do seu registrador (ex: Registro.br).

### 2. GitHub Pages
1. Em **Settings > Pages**, selecione a branch `main` e a pasta `/ (root)`.
2. Em **Custom domain**, informe `lsmanutencaoindustrial.com.br` e salve.
3. No Registro.br, aponte os servidores DNS ou registros A do GitHub Pages.
