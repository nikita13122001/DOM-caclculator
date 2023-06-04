function compute(){


    var basicSalary = document.getElementById("basicSalary");
    

    var hra = objsal.hra(basicSalary);
    var da = objsal.da(basicSalary);
    var ta = objsal.ta(basicSalary);
    var pf = objsal.pf(basicSalary);
    var gs = objsal.gs(basicSalary);
    console.log(document.getElementById("hra").innertext = hra);
    document.getElementById("da").innerText = da;
    document.getElementById("ta").innerText= ta;
    document.getElementById("pf").innerText = pf;
    document.getElementById("gs").innerText = gs;
    
}

