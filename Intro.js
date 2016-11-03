/* 
JavaScript: Functional Pattern in OOP
Trainer: Vitaliy Zhyrytskyy
CDP Ukraine, Kiev

Outline
	Class, Constructor, Field, Method
	Private/Public
	Inheritance
	Super method/ Super Class
	Sinleton
	Static field/method
	Abstract Class


Functional Pattern
	Class is a function, which explicitly returns object
	To create object - call function
	Fields - local variables
	Methods - nested functions (local and returned in an object)
	this is not used
	Inheritance 
		Call parent constructor = create an object
		Extend this object and return it


Benefits of functional pattern
	Private properties because of closure
	General simplicity:
		don't think about "this"
		don't think about "prototype"
		don't think about "new"
	There are a lot of local variables, so minification is very good
	

Drawbacks of functional pattern
	Instance uses more memory 
	Inheritance:
		No direct access to parent's methods
		You can override parent's methods after creating parent object
		"instanceof" is not used
	Some knocks:
		No common list of fields (local variables and parameters)
		It is hard to name the instance (because of a name of constructor)

