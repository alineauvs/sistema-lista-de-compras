    // inner text
        let nome = prompt("Digite seu nome:")

        let paragrafo = document.getElementById("paragrafo")

        paragrafo.innerText = nome
    
      //  inner html
        const outro = prompt("Agora digite uma tag com texto")

        let outroParagrafo = document.getElementById("outroParagrafo")

        outroParagrafo.innerHTML = outro
        function alterarP() {
            let n= prompt(" Digite o valor que voce deja colocar no P")

            let pa = document.getElementById("paragrafo")

            pa.innerText = n
       }

        function adicionarHabito(){
            const text = prompt("Digite seu habito")

            let lista = document.getElementById("lista")

            let novoElementoLi = document.createElement("li")
        //    "li" = <li>

            novoElementoLi.innerText = text
            
            lista.append(novoElementoLi)
        }