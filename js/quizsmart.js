function Quizsmart(){
          var inicio=confirm('Bem-Vindo ao Quiz SPO Voce tem certeza de que quer participar?');
          var sair = "<html><head><title>Voce nao quis participar</title></head><body>Obrigado pela sua resposta!<br></body></html>";
          if(inicio==false){document.write(sair);}
          else{ window.alert('Começou o game! Clique em Ok abaixo para começar');
          //Inicio do quiz
          var certo = "<b>Correto!</b>"; var errado = "<b style='color:red;'>Errado!</b>";var o = new Array();
          var acertos=0; var erros=0; var respostas = new Array(); var p = new Array() ;var r = new Array();
          var t=6; //COLOQUE AQUI TOTAL DE PERGUNTAS DO QUIZ !!!!
          t = window.prompt("Digite a Quantidade perguntas:  Maximo 06");
          // LISTA DE PERGUNTAS
          p[1] = "\n Onde posso bater o ponto? \n 1: Em Casa \n 2: Dentro da Loja \n 3: 200 metros da loja";
          r[1] = 2;
          p[2] = "Você paga sua participação do plano Medico ? \n 1: Não. sou Imortal  \n 2: Sim. Só quando Utilizo. " ; 
          r[2] = 2;
          p[3] = "Como Assinar o Ponto ? \n 1: Pelo APP CLICK AMBEV + Newmobile   \n 2: Pelo Facebook ";
          r[3] = 1;
          p[4] = "Você Conhece o Sonho do As? \n 1: Ser a melhor e mais feliz direta do Brasil \n 2:Ser a melhor e mais feliz direta do Mexico";
          r[4] = 1;
          p[5] = "Como Você acompanha o resultado do Pex ? \n 1: Através Das Reuiniões Mensais \n 2: Pelo alõ Ambev  ";
          r[5] = 1;
          p[6] = "O que é LTI ? \n 1: Quase Acidente \n 2: Acidente com afastamento";
          r[6] = 1;
          p[7] = "O que é LTI ? \n 1: Quase Acidente \n 2: Acidente com afastamento";
          r[7] = 1;
          p[8] = "O que é LTI ? \n 1: Quase Acidente \n 2: Acidente com afastamento";
          r[8] = 1;
          p[9] = "O que é LTI ? \n 1: Quase Acidente \n 2: Acidente com afastamento";
          r[9] = 1;
          p[10] = "O que é LTI ? \n 1: Quase Acidente \n 2: Acidente com afastamento";
          r[10] = 1;
          
          //ADICIONE MAIS PERGUNTAS AQUI COPIANDO 2 EM 2 LINHAS: P[] = PERGUNTA R[] = RESPOSTA
           for(var i=1;i<=t;i++){o[i] = i;} //gera uma sequencia de t numeros
           for(var i=1;i<=10;i++)          //embaralha a sequencia 10 vezes
           {
            n=Math.round(t*(Math.random())); 
            m=Math.round(t*(Math.random()));
            if(m==0){m++;}
            if(n==0){n++;}
            var temp = o[n];
            o[n]=o[m];
            o[m]=temp;
           } 
          for(var i=1;i<=t;i++)
          {
            respostas[o[i]] = prompt(p[o[i]],"");
             if(respostas[o[i]]==r[o[i]]){respostas[o[i]]=certo;acertos++;}else{respostas[o[i]]=errado;erros++;}
           }
          //fim do quiz
          document.write(" Quiz Spo:<br><br>Suas respostas:<br><br>");
          document.write("<ol>");
          for(var i=1;i<=t;i++)
          {
          document.write("<li>"+respostas[o[i]]);}
          document.write("</ol>");
          document.write("<br>Total de acertos: "+acertos);
          document.write("<br>Total de erros: "+erros);
          document.write("<br><input type=button value='Respostas' Onclick=javascript:if(document.getElementById('rp').style.display=='none'){document.getElementById('rp').style.display='block';}else{document.getElementById('rp').style.display='none';}><br>");
          document.write("<br><div id='rp' class='rp' style='display:none;'><ol>");
          for(var i=1;i<=t;i++)
           { document.write("<li>"+p[o[i]]+"<br>Resposta: </br>"+r[o[i]])};}
          document.write("</ol></div>");
         }
        
        
        
        
    
      