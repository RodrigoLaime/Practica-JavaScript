function alturaTrianguloIsosceles(ladoAtrianguloGrande, ladoBtrianguloGrande, ladoBasetrianguloGrande){
    if (ladoAtrianguloGrande != ladoBtrianguloGrande){
        conosle.error("Los lados a y b no son iguales");
    } else {
        const ladoBtrianguloPequeño = ladoBasetrianguloGrande / 2; /* divide el triangulo en 2 */
        const ladoBasetrianguloPequeño = ladoAtrianguloGrande;/* convierte en base el ladoA del triangulo grande */
/* aplicamos teorema de pitagora a2 = b2 + c2 */
        const ladoBcuadradoTrianguloPequeño =  ladoBtrianguloPequeño * ladoBtrianguloPequeño; /* ladoB al cuadrado */
        const ladoBasecuadradoTrianguloPequeño = ladoBasetrianguloPequeño * ladoBasetrianguloPequeño; /* ladoBase al cuadrado */
        const ladoAtrianguloPequeño = Math.sqrt(ladoBasecuadradoTrianguloPequeño - ladoBcuadradoTrianguloPequeño); /* raiz cuadrada de lado b - ladoBase */

        const alturaTrianguloGrande = ladoAtrianguloPequeño; /* hipotenusa */
        return alturaTrianguloGrande; 
    }
}