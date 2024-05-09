O projeto contém os seguintes arquivos:

index.html: O arquivo HTML que contém a estrutura da página e os elementos de entrada para as datas, bem como os botões para executar as operações.
index.js: O arquivo JavaScript que contém as funções para comparar datas, calcular o intervalo entre elas e exibir a data atual formatada.
Funcionalidades

Comparação entre as Datas
A função compararDatas() é acionada quando o usuário clica no botão "Comparação entre as Datas". Ela obtém os valores das duas datas inseridas pelo usuário, converte-os em objetos Date e, em seguida, compara-os para determinar qual data é maior. O resultado da comparação é exibido na página.

Exibição da Data Atual Formatada
A função exibirDataAtual() é acionada quando o usuário clica no botão "Data Atual Formatada". Ela cria um objeto Date com a data e hora atuais e formata essa data no seguinte padrão: "hora:minuto - dia/mês/ano". O resultado é exibido na página.

Cálculo do Intervalo entre as Datas
A função calcularIntervalo() é acionada quando o usuário clica no botão "Intervalo entre as Datas". Ela obtém os valores das duas datas inseridas pelo usuário, converte-os em objetos Date e calcula o intervalo em dias entre elas. O resultado do cálculo é exibido na página.

Parte do código foram feitas as comparações das datas, para poderem demontras as diferenças de dias, se as datas inseridas foram iguas, se uma for maior ou menor que a outra.
