class Car{
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }

        info() {
            for (const key in this) {
                console.log(key, this[key]);
            }
        }

        IncreaseMaxSpeed(newSpeed) {
            if (newSpeed > 0) {
                this.maxSpeed = this.maxSpeed + newSpeed;
            }
        }

        changeYear(newValue) {
            this.yearOfManufacture = newValue;
        }

        addDriver(driverObj) {
            if (driverObj) {
                this.driver = driverObj;
            }
        }
}
let car = new Car('BMW', 'BMW', 2010, 250, 150);
car.drive();
car.info();
car.IncreaseMaxSpeed(100);
car.changeYear(2020);
car.addDriver({name: 'Ivan', age: 20});
car.info();

console.log(car);