# Projetart Planejados — Landing Page Premium de Alta Conversão

Landing page de altíssimo padrão visual e persuasão desenvolvida exclusivamente para a **Projetart Planejados** (Móveis Planejados & Marcenaria de Luxo sob Medida).

---

## 💎 Destaques do Projeto

- **Design Minimalista & Sofisticado**:
  - Paleta: Off-White (`#FAFAF8`), Grafite Nobre (`#222222`), Dourado Acetinado (`#B08A47`) e Cinza Claro (`#EAEAEA`).
  - Tipografia: *Playfair Display* (títulos em serif de luxo) e *Inter* (leitura limpa e moderna).
- **Foco Único em Conversão**:
  - Todos os botões e CTAs direcionam diretamente para atendimento e orçamento via **WhatsApp**.
  - **Mensagens personalizadas por seção** (Hero, Cozinha, Dormitório, Living, Galeria, CTA Final).
  - **Botão Flutuante de WhatsApp** com efeito ripple e indicador de status "Online agora".
  - **Modal Interativo de Briefing Rápido**: o cliente escolhe o ambiente desejado e seu nome, gerando uma mensagem pré-formatada no WhatsApp.
- **Seções Completas Conforme Briefing**:
  1. **Hero Section**: Headline persuasiva, subheadline, 4 bullets com ícones, CTA dourado com micro-garantia e fotografia editorial de cozinha gourmet em mármore.
  2. **Faixa de Indicadores de Confiança**: Atendimento personalizado, Projeto exclusivo, Acabamento premium, Marcenaria sob medida.
  3. **Ambientes (Layout Zigue-Zague)**: Cozinhas Planejadas, Dormitórios & Closets, Livings Integrados com destaques técnicos e CTAs individuais.
  4. **Diferenciais**: 4 cards elegantes com microinterações (Projeto sob medida, Design sofisticado, Qualidade em cada detalhe, Atendimento próximo).
  5. **Sobre a Empresa**: *"Não vendemos móveis. Criamos espaços que contam histórias"* com foto de consultoria em showroom e métricas de autoridade.
  6. **Galeria de Projetos Interativa**: Filtros por categoria (Cozinha, Closet, Dormitório, Living, Home Office, Banheiro) e **Lightbox completo** com navegação e botão para solicitar projeto similar.
  7. **Depoimentos**: Carrossel elegante com 3 avaliações 5 estrelas reais, autores, tipologia de imóvel e autoplay com pausa ao interagir.
  8. **CTA Final de Fechamento**: Fundo grafite profundo com brilho sutil dourado e botão de alta visibilidade.
  9. **Rodapé Completo**: Links rápidos, endereço físico, horário de atendimento e canais sociais.
- **SEO & Acessibilidade**:
  - H1 único e semântico: *"Móveis Planejados de Alto Padrão: Projetos Exclusivos para Seu Lar"*.
  - Palavras-chave primárias e secundárias otimizadas.
  - Dados estruturados Schema.org (`HomeAndConstructionBusiness`) em JSON-LD.
  - Compatível com leitores de tela (ARIA roles, labels e contrastes WCAG AA).

---

## 🚀 Como Usar e Visualizar

### 1. Visualização Imediata (Standalone)
Basta abrir o arquivo **`index.html`** em qualquer navegador (Chrome, Edge, Firefox, Safari). Não requer instalação de servidores ou softwares adicionais.

### 2. Como Personalizar o WhatsApp e Dados de Contato
Abra o arquivo **`config.js`** em qualquer editor de texto. Nele você pode alterar:
- `whatsappNumber`: Coloque o DDD e número desejado (ex: `"5511999998888"`).
- `whatsappMessages`: Personalize as mensagens que o cliente enviará.
- `address`, `city`, `openingHours`, `instagramUrl`.
Todas as alterações refletem automaticamente na página sem precisar alterar o HTML!

---

## 📦 Como Instalar no WordPress

Você tem duas opções fáceis:

### Opção A: Instalar o Tema Completo (Recomendado)
1. Acesse o seu Painel do WordPress (`seusite.com.br/wp-admin`).
2. Vá em **Aparência > Temas > Adicionar Novo > Enviar Tema**.
3. Selecione o arquivo **`wordpress-theme/projetart-planejados.zip`** presente nesta pasta.
4. Clique em **Instalar Agora** e em seguida **Ativar**.
5. Pronto! Sua landing page premium estará no ar.

### Opção B: Uso no Elementor, Gutenberg ou outro Construtor
- Caso já possua um tema no WordPress e queira apenas usar esta landing page em uma página específica, basta colar o conteúdo do `index.html` em um widget de **HTML Personalizado** ou importar os estilos `style.css` e scripts.

---

## 📁 Estrutura de Arquivos

```
LP Wordpress Editavel com IA/
├── index.html                     # Estrutura HTML5 semântica principal
├── style.css                      # Design system e folhas de estilo CSS
├── app.js                         # Lógica do Lightbox, carrossel e WhatsApp
├── config.js                      # Configurações de telefone, mensagens e contatos
├── README.md                      # Documentação completa
├── assets/
│   └── images/                    # Imagens de alta definição geradas por IA
│       ├── hero_kitchen.jpg
│       ├── ambiente_dormitorio.jpg
│       ├── ambiente_living.jpg
│       ├── sobre_showroom.jpg
│       ├── galeria_closet.jpg
│       ├── galeria_homeoffice.jpg
│       ├── galeria_banheiro.jpg
│       └── galeria_cozinha.jpg
└── wordpress-theme/
    ├── projetart-planejados.zip   # Pacote pronto para instalação no WordPress
    └── projetart-planejados/      # Código-fonte aberto do tema WordPress
        ├── style.css
        ├── index.php
        ├── header.php
        ├── footer.php
        ├── functions.php
        ├── screenshot.png
        ├── config.js
        ├── app.js
        └── assets/images/
```
