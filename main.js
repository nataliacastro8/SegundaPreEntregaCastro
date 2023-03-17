//INICIO DEL PROGRAMA
let bienvenidos = prompt ("Ingrese si usted es: \n 1)Alumno \n 2)Profesor ")

switch (bienvenidos){
    case "Alumno":
        //INGRESO AL SISTEMA (CONTRASENA 12345678)
        let nombreAlumno = (prompt("Bienvenido! Ingrese nombre del alumno:"));
        let contraseniaAlumno = (parseInt(prompt(nombreAlumno + " ingrese su contrasena (Numero de DNI)")));
        const contraseniaCorrecta = 12345678;

        for(i = 0 ; i < 2 ; i++){
        if (contraseniaAlumno === contraseniaCorrecta){
        alert("Has ingresado al sistema de notas");
        break 
        } else {
        contraseniaAlumno=parseInt(prompt("Contrasenia incorrecta, ingrese de nuevo"));
        }
        };

        //PROMEDIO DE CUATRIMESTRES

        function sumarNotas (notaPrimerCuatri, notaSegundoCuatri, notaTercerCuatri, notaCuartoCuatri){
        let sumarNotas = notaPrimerCuatri + notaSegundoCuatri + notaTercerCuatri + notaCuartoCuatri;
        return sumarNotas;
        }

        let notaPrimerCuatri = (parseFloat(prompt("Ingrese la nota del primer cuatrimestre")));
        let notaSegundoCuatri = (parseFloat(prompt("Ingrese la nota del segundo cuatrimestre")));
        let notaTercerCuatri = (parseFloat(prompt("Ingrese la nota del tercer cuatrimestre")));
        let notaCuartoCuatri = (parseFloat(prompt("Ingrese la nota del cuarto cuatrimestre")));

        let sumaDeNotas = sumarNotas(notaPrimerCuatri, notaSegundoCuatri, notaTercerCuatri, notaCuartoCuatri);

        let promedio = sumaDeNotas / 4;
        alert("Su promedio es: " + promedio);

        //PASAR DE ANIO

        if (promedio >= 6){
            alert ("FELICITACIONES!!! HAS PASADO DE ANIO");
        } else{
            alert ("Lo sentimos :( No has llegado al promedio para pasar de anio.");
        }
        break;
    
    case "Profesor":
        //INGRESO AL SISTEMA (CONTRASENA 87654321)
        let nombreProfesor = (prompt("Bienvenido! Ingrese nombre del profesor:"));
        let contraseniaProfesor = (parseInt(prompt(nombreProfesor + " ingrese su contrasena (Numero de DNI)")));
        const contraseniaProfeCorrecta = 87654321;

        for(i = 0 ; i < 2 ; i++){
        if (contraseniaProfesor === contraseniaProfeCorrecta){
        alert("Has ingresado al sistema de notas(EXCLUSIVO PROFESORES)");
        break 
        } else {
        contraseniaProfesor=parseInt(prompt("Contrasenia incorrecta, ingrese de nuevo"));
        }
        };

        //CREAMOS LA PLANTILLA DE LOS ALUMNOS
        class Alumnos {
            constructor (alumno, promedio){
                this.nombre = alumno;
                this.promedio = promedio;
            }
        }
        
        //DATOS DE ALUMNOS
        const manuel = new Alumnos ("Manuel", 6);
        const florencia = new Alumnos ("Florencia", 8);
        const ezequiel = new Alumnos ("Ezequiel", 8);
        const natalia = new Alumnos ("Natalia", 7);
        const joaquin = new Alumnos ("Joaquin",9);
        const milena = new Alumnos ("Milena", 8);
        const nacho = new Alumnos ("Nacho", 6);

        const arrayAlumnos = [manuel, florencia, ezequiel, natalia, joaquin, milena, nacho];

        //BUSCAR MEJOR PROMEDIO

        const mejorPromedio = arrayAlumnos.find (alumno => alumno.promedio > 8 );
        console.log(mejorPromedio);
        
        //HAY PROMEDIOS MENOR A 6? ALUMNOS DESAPROBADOS

        const hayAlumnosDesaprobados = arrayAlumnos.some(alumnos => alumnos.promedio < 6);
        console.log(hayAlumnosDesaprobados);

        break;
}