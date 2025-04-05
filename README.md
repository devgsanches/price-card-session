# Price Card Session 🃏💳

Este projeto é uma aplicação web desenvolvida com React, TypeScript e Vite, que permite aos usuários visualizar e comparar cartões de preços de forma dinâmica. Ideal para colecionadores e entusiastas que desejam acompanhar os valores de mercado de seus itens favoritos.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário interativas. ⚛️
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade e a manutenção do código. 📝
- **Vite**: Ferramenta de build rápida e moderna para aplicações web, proporcionando uma experiência de desenvolvimento ágil. ⚡

## Funcionalidades

- **Visualização de Cartões**: Exibe uma lista de cartões com informações detalhadas, incluindo nome, descrição, preço e imagem.
- **Renderização Dinâmica**: Utiliza o método `map` para iterar sobre arrays de objetos e renderizar os cartões de forma eficiente.
- **Gerenciamento de Estado**: Implementa hooks do React para gerenciar o estado da aplicação, garantindo uma experiência de usuário responsiva.
- **Design Responsivo**: Layout adaptável que proporciona uma experiência consistente em dispositivos móveis e desktops.

## Estrutura do Projeto

- **`public/`**: Contém arquivos estáticos, como o `index.html`.
- **`src/`**: Diretório principal do código-fonte.
  - **`assets/`**: Armazena imagens e outros recursos estáticos.
  - **`components/`**: Componentes reutilizáveis da interface, como `Card` e `Header`.
  - **`App.tsx`**: Componente principal da aplicação que gerencia a renderização dos cartões.
  - **`index.tsx`**: Ponto de entrada da aplicação que inicializa o React.
- **`.gitignore`**: Especifica quais arquivos ou pastas o Git deve ignorar.
- **`README.md`**: Documentação do projeto.
- **`vite.config.ts`**: Configurações do Vite para build e desenvolvimento.
