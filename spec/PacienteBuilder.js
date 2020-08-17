function PacienteBuilder(){
	var nome = "Rafael";
	var idade = 23;
	var peso = 80;
	var altura = 1.73;

	var clazz = {

	constroi : function (){
	return Paciente(nome,idade,peso,altura);
	},

	comIdade : function(valor){
	idade = valor;
	return this;
	},

	comPeso : function(valor){
	peso = valor;
	return this;
	}


	};
	return clazz;

}