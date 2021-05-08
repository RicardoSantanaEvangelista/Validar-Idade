    function verificar(){
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if(fano.value.length == 0 || Number(fano.value) > ano){
            window.alert('[ERRO]Varifique os dados e tente novamente !')

        }else{
           var fsex = document.getElementsByName('radsex')
           var idade = ano - Number(fano.value)
           var genero = ''
           var img = document.createElement('img')
           img.setAttribute('id', 'foto')
           if(fsex[0].checked){
               genero = 'Masculino'
               if(idade >= 0 && idade <= 10){
                    //CRIANÇA
                    img.setAttribute('src', 'bebeM.jpg')
               }else if( idade < 21){
                   //JOVEM
                   img.setAttribute('src', 'jovemH.jpg')
               }else if(idade < 50){
                    //ADULTO
                    img.setAttribute('src', 'homemAdulto.jpg')
               }else {
                   //IDOSO
                   img.setAttribute('src', 'homemVelho.jpg')
               }
           }else if(fsex[1].checked){
               genero = 'Mulher'
               if(idade >= 0 && idade <= 10){
                    //CRIANÇA
                    img.setAttribute('src', 'bebeF.jpg')
                }else if( idade < 21){
                    //JOVEM
                    img.setAttribute('src', 'jovemF.jpg')
                }else if(idade < 50){
                    //ADULTO
                    img.setAttribute('src', 'mulherAdulta.jpg')
                 }else {
                    //IDOSO
                    img.setAttribute('src', 'mulherVelha.jpg')
                 }
           }
           res.style.textAlign = 'center'
           res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
           res.appendChild(img)
        }

    }
