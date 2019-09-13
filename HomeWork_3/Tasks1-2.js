var Worker = function (name, age, sex) {

    this.name = name;
    this.age = age;
    this.sex = sex;

    this.getName = function () {
        return this.name;
    }

    this.getAge = function () {
        return this.age;
    }

    this.getSex = function () {
        return this.sex;
    }

    this.setName = function (newName) {
        if (newName.length < 30) {
            this.name = newName;
        } else {
            alert("This name is too long");
        }
    }

    this.setSex = function (newSex) {
        if (newSex == 'M' || newSex == 'F') {
            this.sex = newSex;
        } else {
            alert("There is only two genders!!! (M or F)")
        }
    }

    this.setAge = function (newAge) {
        if (newAge > 18 && newAge < 65) {
            this.age = newAge;
        } else {
            alert("Your age is not up to standards!");
        }
    }

    this.getAllInfo = function () {
        return '-Worker info-\nName: ' + this.name + '.\nAge: ' + this.age + ' years.\nGender: ' + this.sex;
    }
}


var FactoryWorker = function (name, age, sex, category) {
    Worker.apply(this, arguments);
    this.category = category;

    this.getCategory = function () {
        return this.category;
    }

    this.setCategory = function (newCategory) {
        if (newCategory < 100) {
            this.category = newCategory;
        }
    }

    this.getAllInfo = function () {
        return '-Factory worker info-\nName: ' + this.name + '.\nAge: ' 
    + this.age + ' years.\nGender: ' + this.sex + '\nCategory: ' +  this.category + ' category.'; 
    }
}


var EnterpriseWorker = function (name, age, sex, workerID) {
    Worker.apply(this, arguments);
    this.workerID = workerID;

    this.getWorkerID = function () {
        return this.workerID;
    }

    this.setWorkerID = function (newWorkerID) {
        this.workerID = newWorkerID;
    }

    this.getAllInfo = function () {
        return '-Enterprise worker info-\nName: ' + this.name + '.\nAge: ' 
    + this.age + ' years.\nGender: ' + this.sex + '\nID: ' +  this.workerID + '.'; 
    }

}

FactoryWorker.prototype = Object.create(Worker.prototype);
EnterpriseWorker.prototype = Object.create(Worker.prototype);
FactoryWorker.prototype.constructor = FactoryWorker;
EnterpriseWorker.prototype.constructor = EnterpriseWorker;

var worker = new Worker('Alehandro', 24, 'M');
var facWorker = new FactoryWorker("Miha", 32, 'M', 'High');
var entWorker = new EnterpriseWorker();
entWorker.setName('Iglesias');
entWorker.setAge(34);
entWorker.setSex('F');
entWorker.setWorkerID(1402);

console.log(worker.getAllInfo());
console.log(facWorker.getAllInfo());
console.log(entWorker.getAllInfo());