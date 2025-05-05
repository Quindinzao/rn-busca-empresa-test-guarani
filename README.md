# Busca Empresas

Este projeto foi desenvolvido com **React Native CLI**, usando **TypeScript**, **React Navigation**, **Async Storage**, **Context API**, **Emotion-JS** (para biblioteca de estilização), **Vector Icons**, **Splash Screen**, e muito mais.  

## Funções

### ✅ Cadastrar Empresas
Permite ao usuário inserir dados de uma empresa através de um formulário. Os campos incluem CNPJ, razão social, endereço (rua, número, bairro, município, UF, CEP) e uma imagem da empresa, que é opcional. Os dados são armazenados localmente no SQLite para que possam ser acessados mesmo sem conexão com a internet.

### 🗑️ Deletar empresa
Permite ao usuário deletar empresas através da lista de exibição, onde o usuário clica em uma lixeixa, abre-se um alerta e, ao confirmar, a empresa é deletada do SQLite.

### 🔍 Pesquisar por CNPJ na lista
Oferece um campo de busca na tela de listagem das empresas. À medida que o usuário digita o CNPJ (total ou parcial), a lista exibida é filtrada dinamicamente para mostrar apenas as empresas cujo CNPJ contém o texto digitado. Essa busca é feita localmente, com base nos dados armazenados.

### 🛜 Acessar a API ReceitaWS
A API ReceitaWS é utilizada para preencher automaticamente os dados da empresa a partir do número do CNPJ. Ao digitar um CNPJ válido, o app faz uma requisição à API e, caso os dados sejam retornados com sucesso, preenche os campos do formulário com as informações fornecidas (razão social, endereço, etc.), agilizando o processo de cadastro.

### 🌓 Alterar entre tema Dark e Light
A aplicação suporta alternância entre temas claro (Light) e escuro (Dark). O tema afeta cores de fundo, textos, botões e imagens padrão. Essa funcionalidade pode usar o useTheme (com emotion) e pode ser controlada com base nas configurações do sistema operacional ou por uma opção no app.

### ⏳ Exibir uma tela de carregamento enquanto o app é aberto (Splash Screen)
Ao abrir o app, uma tela de carregamento (Splash Screen) é exibida enquanto os recursos iniciais (como bancos de dados ou temas) são carregados. Essa tela pode ser personalizada com o logo da aplicação e ajuda a oferecer uma transição visual suave. É comum implementar essa funcionalidade com a biblioteca react-native-splash-screen para que ela desapareça apenas quando o app estiver totalmente pronto.

## Configurar para rodar

#### IMPORTANTE: Se não conseguirem rodar no ambiente, mandem uma mensagem no número (16) 98169-9765 ou uma mensagem no e-mail j.v.fernandes.contact@gmail.com

```sh
# Configurar ambiente

# Using npm
npm install

# OR using Yarn
yarn
```

### Android

```sh
# Com npm
npm run android

# ou com Yarn
yarn android
```

### iOS

```sh
cd ios
pod install
cd ..
```

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```
