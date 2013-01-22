//Object creation and calling.
//Inheritance by making a vehicle and then choosing if its a car or truck.
<script>
function Vehicle(hasEngine, hasWheels) {
    this.hasEngine = hasEngine || false;
    this.hasWheels = hasWheels || false;
}

function car(make,model,year,color)
{
this.make=make;
this.model=model;
this.year=year;
this.color=color;
}

car.prototype = new Vehicle(true, true);
acura=new car("Acura","CL",1997,"Crimson");

car.prototype.displaySpecs = function () {
    document.write(this.make + ", " + this.model + ", " + this.year+ ", " + this.color +", " + this.hasEngine + ", " + this.hasWheels);
}
document.write("Cars I own: <br>");
document.write("Make|Model|Year|Color|Has Engine| Has Wheels| <br>");
acura.displaySpecs();
</script>
