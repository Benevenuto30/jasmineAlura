describe("Paciente", function(){

	it("Deve calcular o imc", function(){
		var rafael = new Paciente("Rafael",23,80,1.74);
		var imc = rafael.imc();
		expect(imc).toEqual(80/(1.74*1.74));
	});
});