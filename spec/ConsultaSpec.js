describe("Consulta",function(){

	var rafael;

	beforeEach(function(){
		rafael = new PacienteBuilder().constroi();
	});
	
	it ("nao deve cobrar nada se for retorno", function(){
		
		var consulta = new Consulta(rafael,[], true,true);
		expect(consulta.preco()).toEqual(0);
});
	it ("deve cobrar 25 pelo procedimento gesso",function(){
	
		var consulta = new Consulta (rafael,["gesso"],false,false);
		expect(consulta.preco()).toEqual(32);
});
});