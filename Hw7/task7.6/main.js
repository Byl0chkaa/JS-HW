function CreateCar(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity){
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;

    this.drive = function(){
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = function(){
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    this.IncreaseMaxSpeed = function(newSpeed){
        if(newSpeed > 0){
            this.maxSpeed = this.maxSpeed + newSpeed;
        }
    }

    this.changeYear = function(newValue){
        this.yearOfManufacture = newValue;
    }

    this.addDriver = function(driverObj){
        if(driverObj){
            this.driver = driverObj;
        }
    }
}

let car = new CreateCar('BMW', 'BMW', 2010, 250, 150);
car.drive();
car.info();
car.IncreaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver({name: 'Ivan', age: 20});
car.info();

console.log(car);