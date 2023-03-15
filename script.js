let submit = document.getElementById("submit");
        let output = document.getElementById("output");
        let output1 = document.getElementById("output1");
        let output2 = document.getElementById("output2");
        submit.addEventListener("click", () => {
            let date1 = new Date(document.getElementById("date-1").value);
            let date2 = new Date()
            if (date1.getTime() && date2.getTime()) {
                let timeDifference = date2.getTime() - date1.getTime();
                let dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
                let tt = Math.floor(timeDifference / (1000 * 3600 ));
                let td = tt - (dayDifference * 24);
                var ha 
                if(td< 1){
                    ha = 0;
                 }
                 else if(td<12){
                    ha =  10;
                 }
                 else{
                    ha=20
                 }
                let total_ammount = ha + (20 * dayDifference)
                let car_ammount = 2 * total_ammount;
                output.innerHTML = `Number of days vechicle parked <span>${dayDifference}</span> Days <span>${td}</span> Hours ` ;
                output1.innerHTML = `BikeAmmount <span>${total_ammount}</span> ` ;
                output2.innerHTML = `CarAmmount <span>${car_ammount}</span> ` ;

        }
        else {
            output.innerHTML = "Please select a valid date";
         }
});