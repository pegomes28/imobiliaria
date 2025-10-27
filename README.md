# Imobiliaria

## Introdução

O projeto “Imobiliária Prime” é uma aplicação web desenvolvida com Angular, destinada a conectar corretores de imóveis e clientes, permitindo a gestão de anúncios, visualização de imóveis e interação entre usuários.

O sistema é estruturado como uma SPA (Single Page Application), garantindo alta performance e experiência de usuário fluida, com autenticação, autorização e CRUD completo para corretores.

## Objetivos

Objetivo Geral:
Desenvolver uma plataforma que permita que corretores cadastrarem e gerenciarem anúncios de imóveis e que clientes possam buscar, visualizar e manifestar interesse em imóveis.

Objetivos Específicos:

Criar autenticação e autorização de usuários por perfil (cliente/corretor/admin).

Implementar CRUD completo para corretores gerenciarem imóveis.

Permitir que clientes visualizem imóveis e registrem interesse.

Construir interface responsiva, acessível e intuitiva.

## Público-Alvo

Corretores: Usuários logados que gerenciam seus imóveis e acompanham clientes interessados.

Clientes: Usuários logados que pesquisam imóveis, visualizam detalhes e manifestam interesse.

Visitantes: Usuários não logados que podem visualizar imóveis em destaque.

## Funcionalidades
Tipo de Usuário	Funcionalidade
Público	Visualizar imóveis em destaque, detalhes do imóvel, criar conta de cliente
Cliente	Visualizar imóveis, marcar interesse, ver lista de interesses, editar perfil
Corretor	Login, gerenciar imóveis (CRUD), ver lista de clientes interessados

##  Arquitetura Angular

Componentes: Estrutura modular da interface, cada componente possui template, estilo e lógica.
Exemplos: LoginComponent, DashboardImoveisComponent, MeusInteressesComponent.

Serviços: Lógica de negócio e comunicação com backend (AuthService, ImoveisService).

Injeção de Dependência: Angular fornece serviços de forma centralizada para componentes.

HTTP e Observables: Comunicação com JSON Server usando HttpClient e Observables do RxJS.

Guardas de Rota: Implementação de CanActivate para controle de acesso por perfil de usuário.

##  Estrutura do Projeto

src/
└── app/
    ├── guard/
    │   ├── auth.guard.ts
    │   └── auth.guard.spec.ts
    │
    ├── models/
    │   ├── imovel.model.ts
    │   ├── interesse.model.ts
    │   └── usuario.model.ts
    │
    ├── services/
    │   ├── auth.service.ts
    │   ├── auth.service.spec.ts
    │   ├── imovel.service.ts
    │   ├── imovel.service.spec.ts
    │   ├── interesse.service.ts
    │   └── interesse.service.spec.ts
    │
    │
    ├── views/
    │   ├── adicionar-imovel/
    │   │   ├── adicionar-imovel.component.ts
    │   │   ├── adicionar-imovel.component.html
    │   │   ├── adicionar-imovel.component.scss
    │   │   └── adicionar-imovel.component.spec.ts
    │   │
    │   ├── cadastro/
    │   │   ├── cadastro.component.ts
    │   │   ├── cadastro.component.html
    │   │   ├── cadastro.component.scss
    │   │   └── cadastro.component.spec.ts
    │   │
    │   ├── corretores/
    │   │   ├── corretores.component.ts
    │   │   ├── corretores.component.html
    │   │   ├── corretores.component.scss
    │   │   └── corretores.component.spec.ts
    │   │
    │   ├── detalhes-imovel/
    │   │   ├── detalhes-imovel.component.ts
    │   │   ├── detalhes-imovel.component.html
    │   │   ├── detalhes-imovel.component.scss
    │   │   └── detalhes-imovel.component.spec.ts
    │   │
    │   ├── home/
    │   │   ├── home.component.ts
    │   │   ├── home.component.html
    │   │   ├── home.component.scss
    │   │   └── home.component.spec.ts
    │   │
    │   ├── imovel/
    │   │   ├── imovel.component.ts
    │   │   ├── imovel.component.html
    │   │   ├── imovel.component.scss
    │   │   └── imovel.component.spec.ts
    │   │
    │   ├── login/
    │   │   ├── login.component.ts
    │   │   ├── login.component.html
    │   │   ├── login.component.scss
    │   │   └── login.component.spec.ts
    │   │
    │   └── meus-interesses/
    │       ├── meus-interesses.component.ts
    │       ├── meus-interesses.component.html
    │       ├── meus-interesses.component.scss
    │       └── meus-interesses.component.spec.ts
    │
    ├── app-routing.module.ts
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.spec.ts
    └── app.module.ts

## Diagramas:

 classDiagram
    class Usuario {
        +number id
        +string nome
        +string email
        +string senha
        +string tipo
    }

    class Cliente {
        +Imovel[] interesses
    }

    class Corretor {
        +Imovel[] imoveis
    }

    class Imovel {
        +number id
        +string titulo
        +number corretorId
        +string tipo
        +string cidade
        +number preco
        +string descricao
        +string imagemUrl
    }

    class Interesse {
        +number id
        +number clienteId
        +number imovelId
    }

    Usuario <|-- Cliente
    Usuario <|-- 
    
## Diagrama de Fluxo – Login 

flowchart TD
    A[Usuário] --> B[Tela de Login]
    B --> C[AuthService verifica credenciais]
    C -->|Sucesso| D{Tipo de Usuário}
    D -->|Cliente| E[Redireciona para /meus-interesses]
    D -->|Corretor| F[Redireciona para /dashboard-imoveis]
    C -->|Erro| G[Mensagem de erro]

## Diagrama de Fluxo – Cliente Interessado 

flowchart TD
    A[Cliente] --> B[Busca Imóveis]
    B --> C[Clica em imóvel]
    C --> D[Detalhes do imóvel]
    D --> E[Clique "Tenho Interesse"]
    E --> F[Salvar interesse no backend]
    F --> G[Atualiza lista de interesses]

## Diagrama de Fluxo – Corretor CRUD

flowchart TD
    A[Corretor] --> B[Dashboard de Imóveis]
    B --> C[Adicionar Imóvel]
    C --> D[Formulário]
    D --> E[Salvar via ImovelService]
    E --> B[Lista atualizada]

    B --> F[Editar Imóvel]
    F --> G[Formulário com dados preenchidos]
    G --> H[Atualizar via ImovelService]
    H --> B[Lista atualizada]

    B --> I[Excluir Imóvel]
    I --> J[Confirmação]
    J --> K[Excluir via ImovelService]
    K --> B[Lista atualizada]

## Tecnologias Utilizadas

Frontend: Angular 16+, TypeScript, SCSS

Backend Simulado: JSON Server

Forms: Template-driven ou Reactive Forms

Gerenciamento de Rotas: Angular Router + Guardas

HTTP: HttpClient + Observables

Armazenamento: LocalStorage/SessionStorage para tokens

##  Identidade Visual

Cor Primária: Verde Esmeralda #009B77

Cor Secundária: Cinza Escuro #333333

Cor de Fundo: Branco

## Protótipo

https://www.figma.com/design/nKJpPuGJ6fWSpE5wPuoVex/Untitled?node-id=141-2&t=DTNsR8KATobOrHS8-1
