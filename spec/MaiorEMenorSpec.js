describe("MaiorEMenor",function(){

	
it("Deve entender numeros em ordem nao sequencial",function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,15,7,9]);

		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

it("Deve entender numeros em ordem crescente",function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([4,5,6,7,8,9]);

		expect(algoritmo.pegaMaior()).toEqual(9);
		expect(algoritmo.pegaMenor()).toEqual(4);
	});
it("Deve entender numeros em ordem decrescente",function(){
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([9,8,7,6,5,4]);

		expect(algoritmo.pegaMaior()).toEqual(9);
		expect(algoritmo.pegaMenor()).toEqual(4);
	});
});