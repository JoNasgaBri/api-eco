// Dados simulados - Dicas de Reciclagem
const dicasReciclagem = [
    "Separe o lixo orgânico do reciclável. Isso facilita muito o processo!",
    "Lave as embalagens recicláveis (potes, garrafas) para remover restos de comida.",
    "Papéis engordurados (caixa de pizza) ou sujos (guardanapos usados) não são recicláveis.",
    "Pilhas e baterias devem ser descartadas em locais específicos, não no lixo comum ou reciclável.",
    "Vidros quebrados devem ser embrulhados em jornal ou papel grosso para evitar acidentes.",
    "Isopor é reciclável em muitas cidades, verifique a coleta seletiva local.",
    "Tampinhas de garrafa PET também são recicláveis!",
    "Caixas de leite (Tetra Pak) são recicláveis, geralmente junto com papéis ou plásticos."
  ];
  
  // Dados simulados - Consumo de Água
  const dadosConsumoAgua = {
    consumoMedioLitros: {
      banho15min: 135,
      lavarLoucaMaquina: 40,
      lavarLoucaMao: 100,
      vasoSanitarioConvencional: 10,
      vasoSanitarioAcoplado: 6,
      lavarRoupaMaquina: 135
    },
    dicasEconomia: [
      "Reduza o tempo no banho. 5 minutos são suficientes!",
      "Feche a torneira ao escovar os dentes ou fazer a barba.",
      "Só use a máquina de lavar louça ou roupa quando estiverem cheias.",
      "Verifique e conserte vazamentos em torneiras e vasos sanitários.",
      "Reutilize a água da máquina de lavar roupa para lavar quintais ou calçadas.",
      "Regue as plantas de manhã cedo ou à noite para diminuir a evaporação."
    ]
  };
  
  // Dados simulados - Alternativas aos Plásticos
  const alternativasPlasticos = [
    {
      itemPlastico: "Copo descartável",
      alternativa: "Copo reutilizável (vidro, inox, silicone), caneca ou xícara."
    },
    {
      itemPlastico: "Canudo plástico",
      alternativa: "Canudo de inox, vidro, bambu, silicone ou simplesmente beber direto no copo."
    },
    {
      itemPlastico: "Sacola plástica de supermercado",
      alternativa: "Sacola reutilizável (ecobag de tecido, ráfia), carrinho de feira ou caixas de papelão."
    },
    {
      itemPlastico: "Garrafa PET de água/refrigerante",
      alternativa: "Garrafa reutilizável (squeeze) de inox, vidro ou alumínio. Beber água da torneira (se tratada) ou de filtros."
    },
    {
      itemPlastico: "Talheres descartáveis",
      alternativa: "Talheres de metal (carregar um kit na bolsa/mochila) ou de bambu reutilizável."
    },
    {
      itemPlastico: "Embalagens de Isopor para comida",
      alternativa: "Levar seu próprio pote reutilizável ao comprar comida para viagem."
    }
  ];
  
  // Dados simulados - Calendário Ambiental
  const calendarioAmbiental = [
    { data: "22 de Março", evento: "Dia Mundial da Água" },
    { data: "22 de Abril", evento: "Dia da Terra" },
    { data: "22 de Maio", evento: "Dia Internacional da Biodiversidade" },
    { data: "05 de Junho", evento: "Dia Mundial do Meio Ambiente" },
    { data: "08 de Junho", evento: "Dia Mundial dos Oceanos" },
    { data: "17 de Junho", evento: "Dia Mundial de Combate à Desertificação e à Seca" },
    { data: "21 de Setembro", evento: "Dia da Árvore" },
    { data: "Sem data fixa (geralmente Setembro)", evento: "Dia Mundial da Limpeza (World Cleanup Day)" },
    { data: "04 de Outubro", evento: "Dia Mundial dos Animais" },
    { data: "05 de Dezembro", evento: "Dia Mundial do Solo" }
  ];
  
  // Exporta todos os dados usando exportação nomeada
  export {
      dicasReciclagem,
      dadosConsumoAgua,
      alternativasPlasticos,
      calendarioAmbiental
  };