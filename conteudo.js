// DADOS EDITÁVEIS DA WIKI
// Artigos, categorias e textos. Edite este arquivo na sua cópia privada antes de publicar no GitHub.
window.WIKI_DADOS = {
  "settings": {
    "title": "Vale das Araucárias",
    "subtitle": "A enciclopédia do seu mundo de Stardew Valley.",
    "introTitle": "Um novo vale para descobrir!",
    "intro": "Explore personagens, cultivos, peixes, locais e segredos. Os exemplos iniciais são fictícios.",
    "version": "0.1.0",
    "tagline": "WIKI • ENCICLOPÉDIA"
  },
  "categories": [
    [
      "sobre",
      "Sobre o mod",
      "Conheça a proposta e o universo deste mod.",
      "book",
      "Navegação"
    ],
    [
      "instalacao",
      "Instalação",
      "Como instalar o mod e os pré-requisitos.",
      "tool",
      "Navegação"
    ],
    [
      "primeiros-passos",
      "Primeiros passos",
      "Comece sua jornada no vale.",
      "leaf",
      "Navegação"
    ],
    [
      "atualizacoes",
      "Atualizações",
      "Notas de versão e mudanças.",
      "scroll",
      "Navegação"
    ],
    [
      "personagens",
      "Personagens",
      "Os rostos e as histórias que habitam o vale.",
      "person",
      "O mundo do mod"
    ],
    [
      "locais",
      "Locais",
      "Regiões, caminhos e pontos de interesse.",
      "house",
      "O mundo do mod"
    ],
    [
      "eventos",
      "Eventos",
      "Encontros e cenas especiais.",
      "star",
      "O mundo do mod"
    ],
    [
      "missoes",
      "Missões",
      "Objetivos, recompensas e descobertas.",
      "scroll",
      "O mundo do mod"
    ],
    [
      "festivais",
      "Festivais",
      "Comemorações ao longo do ano.",
      "star",
      "O mundo do mod"
    ],
    [
      "segredos",
      "Segredos",
      "Mistérios escondidos pela região.",
      "gem",
      "O mundo do mod"
    ],
    [
      "itens",
      "Itens",
      "Objetos, materiais e tesouros.",
      "gem",
      "Vida na fazenda"
    ],
    [
      "cultivos",
      "Cultivos",
      "Sementes, estações e colheitas.",
      "crop",
      "Vida na fazenda"
    ],
    [
      "peixes",
      "Peixes",
      "Criaturas e oportunidades de pesca.",
      "fish",
      "Vida na fazenda"
    ],
    [
      "animais",
      "Animais",
      "Companheiros de campo.",
      "animal",
      "Vida na fazenda"
    ],
    [
      "arvores",
      "Árvores",
      "Espécies e produtos florestais.",
      "tree",
      "Vida na fazenda"
    ],
    [
      "receitas",
      "Receitas",
      "Culinária e criação.",
      "pot",
      "Vida na fazenda"
    ],
    [
      "maquinas",
      "Máquinas",
      "Equipamentos de produção.",
      "tool",
      "Vida na fazenda"
    ],
    [
      "monstros",
      "Monstros",
      "Perigos e criaturas do mundo.",
      "monster",
      "Exploração"
    ],
    [
      "armas",
      "Armas",
      "Equipamentos para aventuras.",
      "sword",
      "Exploração"
    ],
    [
      "ferramentas",
      "Ferramentas",
      "Utensílios para o trabalho.",
      "tool",
      "Exploração"
    ],
    [
      "mapas",
      "Mapas",
      "Rotas e regiões do mod.",
      "map",
      "Exploração"
    ]
  ],
  "pages": [
    {
      "id": "item-cristal",
      "type": "itens",
      "title": "Cristal do Orvalho",
      "slug": "cristal-do-orvalho",
      "description": "Um pequeno cristal translúcido que brilha nas manhãs frias.",
      "sprite": "/assets/gem.png",
      "fields": {
        "Tipo": "Mineral",
        "Raridade": "Incomum",
        "Preço de venda": "120 ouros",
        "Origem": "Bosque Nebuloso",
        "Introduzido em": "0.1.0-demo"
      },
      "aliases": [
        "Cristal da manhã"
      ],
      "related": [
        "local-bosque",
        "missao-primeira-luz"
      ],
      "content": "## Como obter\nEncontrado nas pedras brilhantes do **Bosque Nebuloso**, especialmente após dias chuvosos.\n\n## Utilizações\n- Entregar na missão [[A Primeira Luz]].\n- Guardar como item de coleção.\n\n## Curiosidades\nO brilho muda levemente conforme a hora do dia.\n\n> Conteúdo fictício utilizado para demonstrar as páginas da wiki."
    },
    {
      "id": "npc-lia",
      "type": "personagens",
      "title": "Lia",
      "slug": "lia",
      "description": "Uma botânica curiosa que pesquisa sementes e antigas trilhas da região.",
      "sprite": "/assets/person.png",
      "fields": {
        "Aniversário": "Primavera, dia 14",
        "Residência": "Casa do Bosque",
        "Ocupação": "Botânica",
        "Família": "Não documentada",
        "Versão": "0.1.0-demo"
      },
      "aliases": [
        "Botânica Lia"
      ],
      "related": [
        "local-bosque",
        "item-cristal",
        "evento-florescer"
      ],
      "content": "## Rotina\n| Horário | Local | Atividade |\n| --- | --- | --- |\n| 08:00–11:00 | Casa do Bosque | Cuida das mudas |\n| 12:00–16:00 | Bosque Nebuloso | Pesquisa plantas |\n| Após 18:00 | Casa do Bosque | Descansa |\n\n## Presentes\n| Preferência | Exemplos |\n| --- | --- |\n| Ama | [[Flor-da-lua]] |\n| Gosta | [[Cristal do Orvalho]] |\n| Neutro | Produtos artesanais comuns |\n\n## Eventos de coração\n**2 corações:** encontre Lia perto da estufa em uma manhã de primavera.\n\n## Diálogos\n“Cada estação guarda uma surpresa para quem observa com atenção.”\n\n> Rotina e gostos inteiramente demonstrativos, não oficiais."
    },
    {
      "id": "cultivo-flor",
      "type": "cultivos",
      "title": "Flor-da-lua",
      "slug": "flor-da-lua",
      "description": "Uma flor que abre suas pétalas ao anoitecer.",
      "sprite": "/assets/flower.png",
      "fields": {
        "Estação": "Primavera e Verão",
        "Crescimento": "8 dias",
        "Rebrota": "A cada 3 dias",
        "Sementes": "60 ouros",
        "Venda (base)": "95 ouros",
        "Venda (prata)": "118 ouros",
        "Venda (ouro)": "142 ouros",
        "Venda (irídio)": "190 ouros"
      },
      "related": [
        "npc-lia",
        "receita-cha"
      ],
      "content": "## Estágios de crescimento\n| Semente | Broto | Crescimento | Florescimento |\n| --- | --- | --- | --- |\n| Dia 1 | Dia 3 | Dia 6 | Dia 8 |\n\n## Como cultivar\n- Plante durante a **Primavera** ou o **Verão**.\n- Regue diariamente até a primeira colheita.\n- Após o crescimento inicial, uma nova flor surge a cada três dias.\n\n## Utilizações\nUsada no [[Chá do Luar]] e como presente para [[Lia]]."
    },
    {
      "id": "peixe-lanterna",
      "type": "peixes",
      "title": "Peixe-lanterna",
      "slug": "peixe-lanterna",
      "description": "Pequeno peixe luminoso das águas calmas.",
      "sprite": "/assets/fish.png",
      "fields": {
        "Local": "Lago do Bosque",
        "Estação": "Outono",
        "Horário": "18:00–02:00",
        "Clima": "Qualquer",
        "Dificuldade": "55",
        "Venda": "85 ouros"
      },
      "related": [
        "local-bosque"
      ],
      "content": "## Onde pescar\nProcure-o perto das margens do lago, em noites de outono.\n\n## Dicas\nO movimento é irregular, com breves pausas próximo ao fundo.\n\n> Valores de exemplo, sujeitos à substituição pelos dados do mod."
    },
    {
      "id": "receita-cha",
      "type": "receitas",
      "title": "Chá do Luar",
      "slug": "cha-do-luar",
      "description": "Infusão floral de aroma suave, preparada com ingredientes do bosque.",
      "sprite": "/assets/pot.png",
      "fields": {
        "Categoria": "Culinária",
        "Fonte": "Receita de Lia",
        "Equipamento": "Cozinha",
        "Energia": "45",
        "Saúde": "20",
        "Venda": "140 ouros"
      },
      "related": [
        "cultivo-flor",
        "npc-lia"
      ],
      "content": "## Ingredientes\n| Ingrediente | Quantidade |\n| --- | --- |\n| [[Flor-da-lua]] | 2 |\n| Mel | 1 |\n\n## Como desbloquear\nConverse com [[Lia]] durante a missão de demonstração.\n\n## Efeitos\nRecupera energia e saúde nos valores ilustrativos indicados."
    },
    {
      "id": "local-bosque",
      "type": "locais",
      "title": "Bosque Nebuloso",
      "slug": "bosque-nebuloso",
      "description": "Uma floresta serena, onde a névoa cobre as trilhas ao amanhecer.",
      "sprite": "/assets/tree.png",
      "fields": {
        "Região": "Vale das Araucárias",
        "Acesso": "Após a missão inicial",
        "Horário": "Livre",
        "Personagens": "Lia",
        "Estreia": "0.1.0-demo"
      },
      "related": [
        "npc-lia",
        "item-cristal",
        "peixe-lanterna"
      ],
      "content": "## Visão geral\nO Bosque Nebuloso é uma região demonstrativa repleta de árvores antigas e riachos.\n\n## Recursos disponíveis\n- [[Cristal do Orvalho]]\n- [[Peixe-lanterna]]\n- Flores silvestres\n\n## Visitantes\nDurante a tarde, é possível encontrar [[Lia]] pesquisando sementes.\n\n## Mapa\nO mapa definitivo deverá ser fornecido pelo criador do mod."
    },
    {
      "id": "missao-primeira-luz",
      "type": "missoes",
      "title": "A Primeira Luz",
      "slug": "a-primeira-luz",
      "description": "Ajude Lia a compreender a origem de um brilho misterioso.",
      "sprite": "/assets/scroll.png",
      "fields": {
        "Desbloqueio": "Primeira visita ao Bosque Nebuloso",
        "Objetivo": "Entregar 1 Cristal do Orvalho",
        "Recompensa": "Receita de demonstração",
        "Tipo": "Missão de história"
      },
      "related": [
        "npc-lia",
        "item-cristal",
        "local-bosque"
      ],
      "content": "## Objetivos\n1. Visite o [[Bosque Nebuloso]].\n2. Procure um [[Cristal do Orvalho]].\n3. Converse com [[Lia]] para concluir a missão.\n\n## Recompensa\nUm agradecimento de Lia e a abertura de novos diálogos demonstrativos.\n\n## Observações\nEsta missão é fictícia e deve ser substituída pela missão verdadeira do mod."
    },
    {
      "id": "evento-florescer",
      "type": "eventos",
      "title": "O Primeiro Florescer",
      "slug": "o-primeiro-florescer",
      "description": "Um encontro especial no pequeno jardim de Lia.",
      "sprite": "/assets/flower.png",
      "fields": {
        "Condição": "2 corações com Lia",
        "Estação": "Primavera",
        "Horário": "09:00–16:00",
        "Local": "Bosque Nebuloso"
      },
      "related": [
        "npc-lia",
        "local-bosque"
      ],
      "content": "## Como ativar\nEntre no [[Bosque Nebuloso]] entre 09:00 e 16:00 durante a primavera, com a amizade exigida.\n\n## Cena\nLia apresenta uma planta rara e convida o jogador a conhecer seu trabalho.\n\n## Escolhas\nO diálogo demonstrativo oferece duas respostas amigáveis sem penalidade."
    },
    {
      "id": "maquina-condensador",
      "type": "maquinas",
      "title": "Condensador de Orvalho",
      "slug": "condensador-de-orvalho",
      "description": "Uma pequena máquina que recolhe a umidade da manhã.",
      "sprite": "/assets/machine.png",
      "fields": {
        "Tempo de produção": "12 horas",
        "Entrada": "Flor-da-lua (1)",
        "Saída": "Essência de Orvalho (1)",
        "Desbloqueio": "Projeto demonstrativo"
      },
      "related": [
        "cultivo-flor"
      ],
      "content": "## Funcionamento\nColoque uma [[Flor-da-lua]] na máquina e aguarde.\n\n## Produção\n| Entrada | Saída | Duração |\n| --- | --- | --- |\n| 1 Flor-da-lua | 1 Essência de Orvalho | 12 horas |"
    },
    {
      "id": "monster-musgo",
      "type": "monstros",
      "title": "Guardião de Musgo",
      "slug": "guardiao-de-musgo",
      "description": "Criatura discreta coberta de pequenas folhas.",
      "sprite": "/assets/monster.png",
      "fields": {
        "Habitat": "Bosque Nebuloso",
        "Vida": "55",
        "Dano": "8–12",
        "Saque": "Musgo antigo",
        "Versão": "0.1.0-demo"
      },
      "related": [
        "local-bosque"
      ],
      "content": "## Comportamento\nCaminha lentamente até se aproximar de um intruso.\n\n## Estratégia\nMantenha distância e ataque após a investida.\n\n> Estatísticas fictícias de demonstração."
    },
    {
      "id": "animal-coruja",
      "type": "animais",
      "title": "Coruja-do-vale",
      "slug": "coruja-do-vale",
      "description": "Ave silenciosa que observa o bosque depois do pôr do sol.",
      "sprite": "/assets/owl.png",
      "fields": {
        "Habitat": "Bosque Nebuloso",
        "Atividade": "Noturna",
        "Interação": "Observação",
        "Raridade": "Rara"
      },
      "related": [
        "local-bosque"
      ],
      "content": "## Aparição\nPode ser vista próxima das árvores altas à noite.\n\n## Curiosidade\nSua presença ajuda a dar vida à floresta do exemplo."
    },
    {
      "id": "arvore-prateada",
      "type": "arvores",
      "title": "Salgueiro Prateado",
      "slug": "salgueiro-prateado",
      "description": "Árvore de folhas azuladas encontrada perto de água.",
      "sprite": "/assets/tree.png",
      "fields": {
        "Estação": "Todas",
        "Local": "Bosque Nebuloso",
        "Produto": "Madeira clara",
        "Crescimento": "Desconhecido"
      },
      "related": [
        "local-bosque"
      ],
      "content": "## Características\nÁrvore decorativa com folhagem pálida.\n\n## Recursos\nO rendimento real deverá ser cadastrado depois da integração com os arquivos do mod."
    },
    {
      "id": "arma-espada",
      "type": "armas",
      "title": "Lâmina do Amanhecer",
      "slug": "lamina-do-amanhecer",
      "description": "Espada antiga de brilho dourado.",
      "sprite": "/assets/sword.png",
      "fields": {
        "Tipo": "Espada",
        "Dano": "20–28",
        "Velocidade": "+1",
        "Aquisição": "Recompensa demonstrativa"
      },
      "related": [
        "missao-primeira-luz"
      ],
      "content": "## Obtenção\nPode ser usada como exemplo de equipamento desbloqueável por missão.\n\n## Combate\nSeu ataque rápido é útil contra criaturas pequenas."
    },
    {
      "id": "ferramenta-pincel",
      "type": "ferramentas",
      "title": "Pincel de Botânica",
      "slug": "pincel-de-botanica",
      "description": "Ferramenta delicada para coleta de amostras.",
      "sprite": "/assets/tool.png",
      "fields": {
        "Tipo": "Ferramenta",
        "Utilidade": "Pesquisa",
        "Fonte": "Lia"
      },
      "related": [
        "npc-lia"
      ],
      "content": "## Uso\nFerramenta experimental para interagir com plantas especiais.\n\n## Observações\nSua funcionalidade exata depende da implementação do mod."
    },
    {
      "id": "festival-luzes",
      "type": "festivais",
      "title": "Festival das Luzes Mansas",
      "slug": "festival-das-luzes-mansas",
      "description": "Uma celebração calma da chegada do outono.",
      "sprite": "/assets/star.png",
      "fields": {
        "Data": "Outono, dia 10",
        "Local": "Praça do Vilarejo",
        "Horário": "19:00–23:00"
      },
      "related": [
        "npc-lia"
      ],
      "content": "## Atividades\n- Admirar lanternas suspensas.\n- Conversar com moradores.\n- Participar de uma pequena exposição botânica.\n\n> Festival fictício."
    },
    {
      "id": "segredo-porta",
      "type": "segredos",
      "title": "A Porta Coberta de Hera",
      "slug": "a-porta-coberta-de-hera",
      "description": "Uma passagem esquecida atrás de raízes antigas.",
      "sprite": "/assets/door.png",
      "fields": {
        "Região": "Bosque Nebuloso",
        "Condição": "Desconhecida",
        "Recompensa": "Desconhecida"
      },
      "related": [
        "local-bosque"
      ],
      "content": "## Pistas\nUma inscrição desgastada aponta para as primeiras horas da manhã.\n\n## Descoberta\nOs detalhes foram propositalmente deixados em aberto para receber o conteúdo real."
    },
    {
      "id": "mapa-bosque",
      "type": "mapas",
      "title": "Mapa do Bosque",
      "slug": "mapa-do-bosque",
      "description": "Referência de navegação para a região demonstrativa.",
      "sprite": "/assets/map.png",
      "fields": {
        "Região": "Bosque Nebuloso",
        "Disponibilidade": "Ainda não fornecido"
      },
      "related": [
        "local-bosque"
      ],
      "content": "## Mapa da região\nO autor do mod poderá enviar aqui uma imagem própria do mapa pelo painel administrativo.\n\n## Acesso\nVeja também [[Bosque Nebuloso]]."
    },
    {
      "id": "info-sobre",
      "type": "sobre",
      "title": "Sobre o mod",
      "slug": "sobre-o-mod",
      "description": "Conheça este espaço e como transformá-lo na wiki do seu mod.",
      "sprite": "/assets/book.png",
      "fields": {
        "Status": "Modelo demonstrativo",
        "Idioma": "Português brasileiro",
        "Versão": "0.1.0-demo"
      },
      "related": [],
      "content": "## Bem-vindo\nEsta é uma wiki independente criada para documentar **seu mod de Stardew Valley**. Tudo o que está marcado como demonstrativo serve apenas para apresentar o sistema.\n\n## Personalização\nO conteúdo é mantido e atualizado pela equipe responsável pelo mod.\n\n## Licenças\nA wiki não é afiliada ao ConcernedApe nem à Stardew Valley Wiki oficial."
    },
    {
      "id": "info-instalar",
      "type": "instalacao",
      "title": "Guia de instalação",
      "slug": "guia-de-instalacao",
      "description": "Preparando o ambiente para instalar o mod.",
      "sprite": "/assets/tool.png",
      "fields": {
        "Status": "Guia a completar"
      },
      "related": [],
      "content": "## Antes de começar\nO mod ainda não foi fornecido. Verifique os requisitos específicos na página oficial de distribuição.\n\n## Etapas sugeridas\n1. Instale uma versão compatível do jogo.\n2. Confira os pré-requisitos do mod, como SMAPI, caso aplicáveis.\n3. Faça uma cópia de segurança dos arquivos salvos.\n4. Siga as instruções de instalação disponibilizadas pelo autor.\n\n> Estas etapas são orientações genéricas, não instruções verificadas para um mod específico."
    },
    {
      "id": "info-primeiros",
      "type": "primeiros-passos",
      "title": "Primeiros passos",
      "slug": "primeiros-passos",
      "description": "Um caminho introdutório para novos jogadores.",
      "sprite": "/assets/leaf.png",
      "fields": {
        "Dificuldade": "Iniciante"
      },
      "related": [
        "npc-lia",
        "local-bosque",
        "missao-primeira-luz"
      ],
      "content": "## Seu primeiro dia\nConheça as regiões disponíveis e converse com os moradores.\n\n## Recomendações\n- Explore o [[Bosque Nebuloso]].\n- Converse com [[Lia]].\n- Experimente a missão [[A Primeira Luz]].\n\n> A sequência acima é demonstrativa."
    },
    {
      "id": "info-atualizacoes",
      "type": "atualizacoes",
      "title": "Histórico de atualizações",
      "slug": "historico-de-atualizacoes",
      "description": "Acompanhe as mudanças documentadas na wiki.",
      "sprite": "/assets/scroll.png",
      "fields": {
        "Última versão": "0.1.0-demo"
      },
      "related": [],
      "content": "## 0.1.0-demo\n- Estrutura inicial da wiki.\n- Exemplos fictícios de itens, NPCs, cultivos e locais.\n- Painel de edição e pesquisa.\n\n## Próximos passos\nImportar dados reais do mod e trocar os sprites demonstrativos."
    }
  ],
  "images": {}
};
