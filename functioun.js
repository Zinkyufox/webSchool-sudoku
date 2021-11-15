    //Поиск в строке (на вход подается судоку и номер строки, в которой надо найти уникальный элемент)

    const getSet = (a,b) => {
        let answer = []
        for (let i = 0; i < 9; i++){
            if (a[b][i].length <= 9){
                for (let j = 0; j < 9; j++){
                    answer.push(a[b][i][j])  //все элементы строки в один массив 
                }
            }
        }
    //проверка есть ли элементы вида 0,0,3,0,0....
        let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
        let c = []                      //массив для вывода
        let h


        for (let i = 0; i < 9; i++){
            let q = 0
            if (a[b][i].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[b][i][j] == 0){
                        q += 1
                    }
                    else{
                        h = a[b][i][j]
                    }
                }
                if (q==8){
                    c[0] = b
                    c[1] = i
                    c[2] = h
                    p += 1
                    return c
                }
            }
        }

//если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
        answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
        if (p != 1) {
            for (let i = 0; i < 9; i++){
                if (a[b][i].length <= 9){
                    for (let j = 0; j < 9; j++){
                        if (a[b][i][j] == answer[0]){
                            c[0] = b
                            c[1] = i
                            c[2] = answer[0]
                            return c
                        }
                    }
                }
            }
        }
    }


    //Поиск в столбце (на вход подается судоку и номер столбца, в котором надо найти уникальный элемент)
//ВЫВОД В ФОРМАТЕ СТРОКА, СТОЛБЕЦ, ЭЛЕМЕНТ

    const getSetcolumn = (a,b) => {
                let answer = []
        for (let i = 0; i < 9; i++){
            if (a[i][b].length <= 9){
                for (let j = 0; j < 9; j++){
                    answer.push(a[i][b][j])  //все элементы столбца в один массив 
                }
            }
        }
    //проверка есть ли элементы вида 0,0,3,0,0....
        let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
        let c = []                      //массив для вывода
        let h


        for (let i = 0; i < 9; i++){
            let q = 0
            if (a[i][b].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[i][b][j] == 0){
                        q += 1
                    }
                    else{
                        h = a[i][b][j]
                    }
                }
                if (q==8){
                    c[0] = i
                    c[1] = b
                    c[2] = h
                    p += 1
                    return c
                }
            }
        }
        //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
        answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
        if (p != 1) {
            for (let i = 0; i < 9; i++){
                if (a[i][b].length <= 9){
                    for (let j = 0; j < 9; j++){
                        if (a[i][b][j] == answer[0]){
                            c[0] = i
                            c[1] = b
                            c[2] = answer[0]
                            return c
                        }
                    }
                }
            }
        }
    }
 
// //Поиск в 3x3 (на вход подается судоку, номер строки и столбца, откуда начинать поиск)

    
    const getSet3x3 = (a,n,k) => {
        let answer = []
        for (let i = n; i < n+3; i++){
            if (a[i][k].length <= 9){
                for (let j = 0; j < 9; j++){
                    answer.push(a[i][k][j])  //все элементы столбца в один массив 
                }
            }
        }
    //проверка есть ли элементы вида 0,0,3,0,0....
        let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
        let c = []                      //массив для вывода
        c[0] = []
        c[1] = []
        c[2] = []
        let h


        for (let i = n; i < n+3; i++){
            let q = 0
            if (a[i][k].length <= 9){
                for (let j = 0; j < 9; j++){
                    if (a[i][k][j] == 0){
                        q += 1
                    }
                    else{
                        h = a[i][k][j]
                    }
                }
                if (q==8){
                    c[0][0] = i
                    c[0][1] = k
                    c[0][2] = h
                    p += 1
                }
            }
        }
        //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
        answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента

//вывод позиции уникального элемента
        if (p != 1) {
            for (let i = n; i < n+3; i++){
                if (a[i][k].length <= 9){
                    for (let j = 0; j < 9; j++){
                        if (a[i][k][j] == answer[0]){
                            c[0][0] = i
                            c[0][1] = k
                            c[0][2] = answer[0]
                        }
                    }
                }
            }
        }

//второй столбец матрицы 3 на 3    
        for (let i = n; i < n+3; i++){
            if (a[i][k].length <= 9){
                for (let j = 0; j < 9; j++){
                    answer.push(a[i][k+1][j])  //все элементы столбца в один массив 
                }
            }
        }
        //проверка есть ли элементы вида 0,0,3,0,0....
            // let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
            // let c = []                      //массив для вывода
            // let h
    
    
            for (let i = n; i < n+3; i++){
                let q = 0
                if (a[i][k+1].length <= 9){
                    for (let j = 0; j < 9; j++){
                        if (a[i][k+1][j] == 0){
                            q += 1
                        }
                        else{
                            h = a[i][k+1][j]
                        }
                    }
                    if (q==8){
                        c[1][0] = i
                        c[1][1] = k+1
                        c[1][2] = h
                        p += 1
                    }
                }
            }
            //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
            answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента
    
    //вывод позиции уникального элемента
            if (p != 1) {
                for (let i = n; i < n+3; i++){
                    if (a[i][k+1].length <= 9){
                        for (let j = 0; j < 9; j++){
                            if (a[i][k+1][j] == answer[0]){
                                c[1][0] = i
                                c[1][1] = k+1
                                c[1][2] = answer[0]
                            }
                        }
                    }
                }
            }
      

 //третий столбец матрицы 3 на 3     
        for (let i = n; i < n+3; i++){
            if (a[i][k+2].length <= 9){
                for (let j = 0; j < 9; j++){
                    answer.push(a[i][k+2][j])  //все элементы столбца в один массив 
                }
            }
        }
        //проверка есть ли элементы вида 0,0,3,0,0....
            // let p = 0                        //счетчик, который покажет, нашелся ли такой элемент
            // let c = []                      //массив для вывода
            // let h
    
    
            for (let i = n; i < n+3; i++){
                let q = 0
                if (a[i][k+2].length <= 9){
                    for (let j = 0; j < 9; j++){
                        if (a[i][k+2][j] == 0){
                            q += 1
                        }
                        else{
                            h = a[i][k+2][j]
                        }
                    }
                    if (q==8){
                        c[2][0] = i
                        c[2][1] = k+2
                        c[2][2] = h
                        p += 1
                    }
                }
            }
            //если элемента 0,3,0,0,0 не оказалось, то ищем среди оставшихся уникальный
            answer = answer.filter(a=>answer.filter(b=>b===a).length==1) //поиск уникального элемента
    
    //вывод позиции уникального элемента
            if (p != 1) {
                for (let i = n; i < n+3; i++){
                    if (a[i][k+2].length <= 9){
                        for (let j = 0; j < 9; j++){
                            if (a[i][k+2][j] == answer[0]){
                                c[2][0] = i
                                c[2][1] = k+2
                                c[2][2] = answer[0]
                            }
                        }
                    }
                }
        if (c[0].length != 0){
            return c[0]
        }
        if (c[1].length != 0){
            return c[1]
        }
        if (c[2].length !=0 ){
            return c[2]
        }
    }
}   