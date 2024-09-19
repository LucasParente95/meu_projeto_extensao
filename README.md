# 🎥 Extensão de Resumo de Vídeos - Chrome

A extensão **Resumo de Vídeos** para Google Chrome ajuda a gerar automaticamente um resumo conciso a partir das transcrições de vídeos do YouTube! Esta extensão foi desenvolvida para economizar tempo, proporcionando uma visão geral rápida dos pontos principais de qualquer vídeo. 📹

## 🌟 Funcionalidades
- **🔄 Resumo Automático de Vídeos**: Extrai transcrições de vídeos do YouTube e gera um breve resumo do conteúdo.
- **📝 Exibição de Resumo**: Exibe o resumo direto na janela de popup da extensão.
- **🎯 Interface Fácil de Usar**: Botões intuitivos para iniciar o processo de resumo e resetar o conteúdo.

## 📂 Estrutura do Projeto
```
meu_projeto_extensao/
│
├── README.md           # Este arquivo de documentação
├── manifest.json       # Arquivo de configuração da extensão do Chrome
├── MODELO DE BACKLOG DO PRODUTO - Lucas Parente.pdf      # Documento PDF com regras de uso da extensão
│
├── src/                # Diretório de arquivos fonte da extensão
│   ├── popup.html      # HTML da interface do popup
│   │
│   ├── css/            # Diretório de arquivos CSS
│   │   └── style.css   # Estilo da interface do popup
│   │
│   ├── js/             # Diretório de arquivos JavaScript
│   │   └── script.js   # Lógica da extensão
│   │
│   └── imgs/           # Diretório de imagens usadas na extensão
│       ├── icon128.png
│       ├── icon48.png
│       └── icon16.png

```

## 🚀 Como Instalar Localmente
1. **Baixe ou clone este repositório** para seu computador.
2. Abra o **Google Chrome** e navegue até `chrome://extensions/`.
3. Ative o **Modo Desenvolvedor** (localizado no canto superior direito).
4. Clique em **Carregar sem compactação** e selecione a pasta onde o projeto da extensão está localizado.
5. A extensão será carregada e aparecerá na lista de extensões do Chrome.

## 🎯 Como Usar
1. Clique no ícone da **Resumo de Vídeos** na barra de ferramentas do Chrome.
2. Cole o link do vídeo do YouTube ou abra o vídeo no YouTube.
3. Pressione o botão **Resumir** para gerar o resumo.
4. O resumo será exibido no popup da extensão. Você pode **resetar** o resumo a qualquer momento.

## 🚧 Melhorias Futuras
- Adicionar suporte para **múltiplas plataformas de vídeo**, além do YouTube.
- Melhorar o **algoritmo de geração de resumos** para obter visões mais detalhadas e precisas.
- Incluir **transcrição baseada em áudio** para vídeos sem legendas.
- Adicionar a opção de **baixar resumos** como arquivos de texto.

---

Desenvolvido com ❤️ por Lucas de Santana Parente.
