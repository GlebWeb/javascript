function timer() {
                var a=document.getElementById('data-time');
                if(a.innerHTML!=0) {
                    a.innerHTML--;
                    setTimeout(timer, 1000);
                }
                else document.write('Отчет окончен');
            }
            setTimeout(timer, 1000);
