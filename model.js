

var  objsal = {


    hra (basicSalary){
        return basicSalary * 0.50;
    },
    da (basicSalary){
        return basicSalary * 0.30;
    },
    ta (basicSalary){
        return basicSalary * 0.20;
    },
    pf (basicSalary){
        return basicSalary * 0.05;
    },
    gs (basicSalary){
        var gs = hra+ta+da+basicSalary-pf;
        return gs;
    }
}