let timer = document.getElementById('time');
        let loop_num = 0;
        let reco = 0;
        let mn = 1000;
        let butt1 = document.getElementById('answer1');
        let butt2 = document.getElementById('answer2');
        let res = document.getElementById('res');
        let rec = document.getElementById('rec');
        let looser = false;
        function rof() {
            let rand_num1 = Math.floor(Math.random()*10);
            let rand_num2 = Math.floor(Math.random()*10);
            while (rand_num1 == rand_num2){
               rand_num2 = Math.floor(Math.random()*10);
            }
            butt1.innerHTML = rand_num1;
            butt2.innerHTML = rand_num2;
        }
        rof();
        function restart() {
            rof();
            mn = 1000;
            timer.value = 0;
            loop_num = 0;
            butt1.hidden = false;
            butt2.hidden = false;
            time();
            butt1.style.backgroundColor = "white";
            butt2.style.backgroundColor = "white";
            res.innerHTML = "Результат:";
        }
        function lost() {
            butt1.hidden = true;
            butt2.hidden = true;
            res.innerHTML = "Результат:" + loop_num;
            if (reco < loop_num){
                reco = loop_num;
                rec.innerHTML = "рекорд:" + reco;
            }
            
        }
        function increment(a) {
            a.value += 1;
            if (a.value == 100){
                //alert("Вы проиграли");
                lost();
            }
        }
        function time() {
            increment(timer);
            if (timer.value != 100) {
                setTimeout(time, mn);
            }
        }
        time();
        function choise1() {
            
            if (Number(butt1.innerHTML) > Number(butt2.innerHTML)){
                rof();
                timer.value = 0;
                loop_num += 1;
                mn -= 20;
                res.innerHTML = "Результат:" + loop_num;
               
            }
            else{
                lost();
                mn = 0;
                butt1.style.backgroundColor = "red";
            }
        }
        function choise2() {
            if (Number(butt1.innerHTML) < Number(butt2.innerHTML)){
                timer.value = 0;
                loop_num += 1;
                rof();
                mn -= 20;
                res.innerHTML = "Результат:" + loop_num;
            }
            else{
                lost();
                mn = 0;
                butt2.style.backgroundColor = "red";
            }
        }
        