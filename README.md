# Mortalidade Infantil - Visualização de Dados

## RESUMO

O gráfico apresenta a taxa de mortalidade mundial de recém-nascidos entre os anos de 2000 a 2017, separados por continentes e seus respectivos países. Os dados foram disponibilizados pela OMS - Organização Mundial da Saúde. 
 
O eixo X exibe a quantidade de crianças mortas para cada 1000 vivas, no período de 0 a 27 dias do nascimento, onde podemos observar a grande diferença entre a taxa de mortalidade entre os diversos continentes. Fica evidente a diminuição da taxa de mortalidade em todo o mundo ao longo de 18 anos.
 
O gráfico de entrada possui uma animação exibindo a taxa por continente. Ao clicar na "bolha" do continente, é exibido um segundo gráfico com a taxa dos paises do continente selecionado, onde é possível uma interação destacando somente a linha do país escolhido.
  
  


## DESIGN

O design foi “inspirado” na estrutura de narrativa **copo de martini (martini glass)**. 
  
O gráfico de entrada segue uma estrutura de narrativa orientada pelo autor, com animação. 
Como codificação visual (visual encodings) foram utilizadas variáveis de retina (retinal variables), onde foram utilizadas as propriedades de tamanho para apresentar os dados quantitativos com tamanho proporcional aos valores dos dados proporcionando a percepção de aumento ou diminuição dos valores. A propriedade cor foi utilizada para diferenciar os continentes.

No segundo gráfico, são utilizadas linhas como codificação visual. As linhas exibem as taxas de mortalidade dos países, exibindo de forma eficiente a variação ao longo dos anos.

**Modificações realizadas após feedbacks:**

**_- Grafico de Continentes_**

Possibilidade de visualizar continentes onde o valor da bolha ficou parcialmente ou totalmente sobrepostas por bolhas de outros continentes. Afim de facilitar este tipo de visualização, e também de servir como um filtro permitindo a visualização somente de um ou alguns continentes especificos, foi adicionado a opção de clique na caixa de legendo, permitindo assim adicionar ou remover as bolhas de determinado continente.

Ao retornar do gráfico de paises, visualizar valor da bolha e "tirar" o mouse, a animação ao invés de continuar coma animação ficava pausada. Problema solucionado.

**_- Gráfico de países_**

Foi adicionado opção para seleção de um país especifico. Esta funcionalidade visa facilitar a busca de algum país específico, principalmente quando são muitos paises e as taxas estão muito próximas, como é o caso da EUROPA.

Ainda no gráfico de linhas com as informações dos países, foi adicionado um leve ponto para facilitar o posicionamento do mouse sobre no cruzamento da linha entre eixo X e Y facilitando a visualização do valor exato da taxa daquele ano. O ponto foi suavisado com o intuito de não atrapalhar a visualização do progresso da linha ao longo do tempo.




## FEEDBACK

### FEEDBACK 1

**_Anotações realizadas acompanhando a análise da primeira pessoa:_**

* Começou lendo o título tomando conhecimento e identificando o assunto.
* Identificou a diferenciação das informações por continentes.
* Continuou analisando as informações, eixos e verificando informações contidas nas bolhas.
* Visualizou a grande diferença de taxas, principalmente em relação à Europa.
* Acessou gráfico com detalhes dos países do continente com facilidade.
* Conseguiu visualizar linhas e explorar as linhas de determinados por países.
* No continente ÁSIA, notou alta taxa de mortalidade do Paquistão e baixíssima taxa para o Japão.
* Já na América do Sul, identificou a grande aumento na mortalidade infantil na Venezuela nos últimos anos e relacionou com momento em que o país vive, onde a taxa de mortalidade vem crescendo em ritmo acelerado desde 2011.
* Quanto ao Brasil, conferiu a taxa de 2,5 em 2017. Concluiu que devido ao tamanho do país, considera que provavelmente é um bom índice.
* Achou o gráfico bem intuitivo.
* Disse que ainda existe muita mortalidade infantil, mas que no geral o gráfico mostra uma tendência de evolução para a diminuição da taxa em todos os continentes.


**_Perguntas:_**

**1)** O que você percebeu na visualização? Você notou algum padrão ou relacionamento?

Apesar da alta taxa de mortalidade, notei uma tendência de queda desta taxa de maneira geral, em todos os continentes do mundo.

**2)** Que curiosidade ou perguntas você teve?
	
Curiosidade de saber mais sobre os casos com alta taxa de mortalidade.

**3)** O que você acha que é o principal destaque dessa visualização?

Devido ao formato com animação, achei a visualização bastante intuitiva. Fácil de identificar a tendência e diferença entre os diversos continentes ao longo do tempo.

**4)** Existe algo que você não entendeu no gráfico? Você teve alguma dificuldade?

No primeiro gráfico, nos anos mais recentes tive um pouco de dificuldade em visualizar o continente Asiático, devido à sobreposição das bolhas. Mas dá para entender perfeitamente que as taxas de mortalidade são praticamente idênticas entre quatro continentes no ano de 2017, por exemplo.

**5)** Alguma sugestão de melhoria? O que você mudaria?

Sem sugestões.


### FEEDBACK 2

**_Anotações realizadas acompanhando a análise da segunda pessoa:_**

* A primeira percepção notada foi a redução da taxa no decorrer dos anos.
* Notou a grande diferença de taxa de mortalidade do continente africano em relação aos demais.
* Na visualização da América do Sul, notou uma linha com grande variação para cima, ao analisar o país viu que tratava-se da Venezuela, e fez a relação com a situação atual do país.
* Ao analisar os países do continente asiático, ficou espantada com a alta taxa de mortalidade do Paquistão e Afeganistão.
* Surpreendeu-se ao visualizar a baixa taxa de mortalidade da EUROPA, onde fica visível a concentração da grande maioria dos países onde a taxa de mortalidade fica abaixo da de 2,5.
* Em determinado momento, quis visualizar a taxa da ásia no ano de 2017 e teve dificuldade devido a sobreposição das bolhas.
* No gráfico de linhas, encontrou dificuldade em identificar um determinado país.


**_Perguntas:_**

**1)** O que você percebeu na visualização? Você notou algum padrão ou relacionamento?

Notei que ainda existem muitas crianças morrendo, mesmo com a queda significativa apresentada no gráfico. Os países mais pobres são os mais afetados, ficando evidente a maior taxa de mortalidade.

**2)** Que curiosidade ou perguntas você teve?

Fiquei curiosa em identificar os países que apresentaram aumento da taxa de mortalidade. E tentar identificar os motivos que podem ter causado este aumento.
	
**3)** O que você acha que é o principal destaque dessa visualização?

A Europa, ao observar fica evidente que há certa preocupação desde sempre com esses índices.

**4)** Existe algo que você não entendeu no gráfico? Você teve alguma dificuldade?

Sim, as linhas todas embaralhadas no gráfico com as informações dos países. Demorou para entender a informação. Não há como filtrar um país específico em meio a todas aquelas linhas juntas.

**5)** Alguma sugestão de melhoria? O que você mudaria?

Colocar filtros no gráfico que exibe os países. Visualizando o continente Europeu, como existem muitos países e grande concentração das taxas abaixo de 2, fica difícil encontrar um país específico, por exemplo a Alemanha, é muito difícil de encontrar.


### FEEDBACK 3

**_ Comentários enviados pelo usuário: _**

Achei interessante esse tipo de gráfico, acho que nunca tinha visto nesse formato, as bolhas sendo do tamanho da proporção de quantidades do eixo X é algo bem legal e intuitivo de interpretar.



**_Perguntas:_**
	
**1)** O que você percebeu na visualização? Você notou algum padrão ou relacionamento?
	
De cara percebe-se que no geral a taxa caiu no mundo todo nesses 18 anos.

**2)** Algo nos dados te despertou alguma curiosidade?
	
Sim, no detalhado da América do sul, notei que:

No Brasil, de 2015 a 2016 teve um aumento na taxa de mortalidade infantil de 0.3 (me questionei o porque apesar de saber que esse não é o intuito)

Venezuela teve um aumento significativo nos últimos 4 anos (imaginei que seja por conta dos problemas que o país está passando)

Chile e Uruguai tiveram os melhores resultados.

**3)** O que você acha que é o principal destaque dessa visualização (seja alguma informação, seja o formato do gráfico, etc)?
Acredito que seja o fato de que a taxa está diminuindo em todo o mundo apesar de que, na minha opinião, o senso comum pode achar que os dados não são críveis já que é um indicativo positivo. Muitos pensam que o mundo está piorando quando nesse gráfico é visto o oposto disso, ao menos quanto a taxa de mortalidade infantil.

**4)** Existe algo que você não entendeu no gráfico? Você teve alguma dificuldade?
	
Após acessar a bolha da América do Sul, no Brasil, tive dificuldade para gerar a linha pontilhada com o valor exato da taxa para o ano de 2016 (essa que aparece quando se deixa o cursor do mouse em cima de uma linha de ano).
Usei ela pra saber o grau de aumento na taxa com relação aos outros períodos (anos, no caso).

**5)** Alguma sugestão de melhoria? O que você mudaria?

Poderia ter um zoom geral no gráfico, para poder expandir e dai ler uma maior quantidade de informação (informação que aliás já está lá, só está difícil de acessar).
Caso o zoom existisse, acredito que resolveria a dificuldade que expliquei na resposta da pergunta 4.



### FEEDBACK 4

**_Comentários enviados pelo usuário:_**

* Não tinha noção da taxa de mortalidade no mundo, achei bem interessante que a taxa está reduzindo, mas foi possível notar que alguns países a taxa tem aumentado, isso se explica em função do momento que o país está passando, tal como guerra civil, crise políticas entre outros.
* Foi possível notar que os  países mais desenvolvido ou com mais educação a taxa de mortalidade é menor.
* O gráfico de bolhas com animação ficou sensacional, no qual é possível verificar a evolução da taxa de mortalidade por continente.
* O gráfico de dados por país ficou muito bom, no qual é possível ver a evolução da taxa por país e quais países têm as maiores ou as menores taxas.
* O gráfico de bolhas com as bolhas proporcional ao tamanho da taxa, chama a atenção e dá destaque para as taxas maiores.
* A única questão que encontrei foi quando eu entrei gráfico de dados dos países e retornei para o gráfico de continente e durante a animação passei o mouse sobre as bolhas, a animação parou de funcionar e não consegui fazer funcionar novamente, somente entrando no gráfico de dados dos países e retornando para o gráfico de bolhas.


**_Perguntas:_**

**1)** O que você percebeu na visualização? Você notou algum padrão ou relacionamento?

Percebe-se que com o passar dos anos a taxa de mortalidade foi reduzindo, achei bem interessante a similaridade e a proporcionalidade da taxa de redução de mortes entre os continentes,  foi possível notar que os continentes mais desenvolvidos possuem taxas menores de mortalidade.

**2)** Algo nos dados te despertou alguma curiosidade?

Achei bem interessante que cuba tem uma das menores taxas de mortalidade, pensava que fosse Canada ou USA.

**3)** O que você acha que é o principal destaque dessa visualização (seja alguma informação, seja o formato do gráfico, etc)?

O principal destaque é a desigualdade mundial, onde se tem menor desenvolvimento ou a menor a educação, possui maior taxa de mortalidade.

**4)** Existe algo que você não entendeu no gráfico? Você teve alguma dificuldade?

Dificuldades de selecionar país, em função da quantidade de países por continente e dificuldade para retornar a animação do gráfico de continente quando para a animação.

Para achar um país específico tem ficar procurando linha por linha no gráfico de dados dos países.

**5)** Alguma sugestão de melhoria? O que você mudaria?

No Gráfico de continentes, quando estava em movimento e ao passar o mouse sobre as bolhas dos continentes, a animação do gráfico para e não consegui fazer o gráfico continuar com a animação.

No Gráfico de continentes, ao finalizar a animação, o "YEAR" volta para 2000, deveria ficar em 2017 e mostrar o ano da bolha de continente selecionado.

Seria interessante mostrar na caixa de diálogo dos gráficos, a taxa média de evolução da mortalidade desde 2000 até data selecionada.

No gráfico de dados, seria interessante pode selecionar o nome do país e destacar qual linha do gráfico.





## RECURSOS


- https://www.who.int/gho/database/en/
- https://www.worldatlas.com/cntycont.htm
- https://www.youtube.com/watch?v=jbkSRLYSojo
- http://dimplejs.org/advanced_examples_index.html
- https://www.gapminder.org/tools/#$chart-type=bubbles
- http://www.storytellingwithdata.com/blog/2018/10/23/scores-of-scatterplots 
- https://apandre.files.wordpress.com/2011/02/chartchooserincolor.jpg
- https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.wide_to_long.html
- https://bost.ocks.org/mike/selection/
- https://stackoverflow.com/
- http://bl.ocks.org/WilliamQLiu/76ae20060e19bf42d774
- https://www.d3-graph-gallery.com/graph/basic_datamanipulation.html
- https://c3js.org/samples/transition_duration.html
- http://www.geografia.fflch.usp.br/publicacoes/Geousp/Geousp23/Artigo_Luiz_e_Silvio.pdf


