

let Kettle = function (power) {

    let status = false;
        power = power || 0;


    this.enable = function() {
        status = true;
    };
    this.disable = function() {
        status = false;
    };

    this.getStatus = function() {
        return status;
    };

    this.getPower = function() {
        return power
    };
 
    this.getInfo = function () 
    {
        if (window.confirm('Включить чайник?'))
        {
            alert('Чайник закипает');
        } 
        else 
        {
            alert('Чайник отключен');
            throw new Error(alert('Чайник выключен'));
        }
        this.power = prompt('Введите мощность');
        this.volume = prompt('Введите объем');
        this.water = prompt('Кол-во воды');
    }
    

    this.time = function () 
    {
        if (this.volume >= this.water)
        {
        this.result = (Number(this.water) * 4200 * 80) / (Number(this.power) * 0,6);

        alert('Время кипения - ' + this.result);
        }
        else alert('Объем воды превышает допустимый')
    }

};

let kettle = new Kettle(2000);
console.log(kettle);

let Teapot = function() {
    Kettle.apply(this, arguments);

    
    let status = false,
    waterAmount = 300;
        sT = null,
        self = this;
    
    let parentGetStatus = this.getStatus;
    this.getStatus = function() {
        parentGetStatus.call(this);
        if (status == true && parentGetStatus() == true)
            return true;
            return false;
    }

    let boiling = function() {
        sT = setTimeout(function() {
            alert("Вода закипела!");
            self.off();
        }, 5000);
    }

    this.on = function() {
        if (waterAmount > 0 && parentGetStatus() == true) {
            status = true;
            boiling();
        }
    }
    this.off = function() {
        status = false;
        clearTimeout(sT);
    }

    
};

let teapot = new Teapot();
console.log(teapot);

teapot.enable();
teapot.on();
console.log(teapot.getStatus());

// Дополнительное задание


const D = function() {
    this.create = function(name) {
        const elem = document.createElement(name);
        return elem;
    }

    this.attr = function(elem, name, value) {
        if (value) elem.setAttribute(name, value);

        return elem.getAttribute(name);
    }

    this.html = function(elem, value) {
        if (value) elem.innerHTML = value;
        return elem.innerHTML;
    }

    this.search = function(tag) {
       if(this.elem.querySelector(selector)) return this.elem.querySelector(selector);
       return document.querySelector(selector);
    }

    this.addClass = function(className) {
        return this.elem.classList.add(className);
    }
    this.removeClass = function(className) {
        return this.elem.classList.remove(className);
    }
    this.toggleClass = function(className) {
        return this.elem.classList.toggle(className);
    }
    this.hasClass = function(className) {
        return this.elem.classList.contains(className);
    }
    this.append = function(newElem, beforeElem) {
        if(!beforeElementTag) {
            this.element.appendChild(newElement);
        } else {
            const beforeElement = this.element.querySelector(beforeElementTag);
            this.element.insertBefore(newElement, beforeElement);
        }
        return this;
    }
    this.on = function(eventName, funcName) {
        this.elem.addEventListener(eventName, funcName);
        return this;
    }
  
};

const d = new D();

console.log(d);
const h2 = d.create('h2');
const p1 = d.create('p');
const div = d.create('div');

d.html(h2, 'My header');
d.html(p1, 'My paregraf');
d.html(div, 'My div');


d.attr(div, 'class', 'div');





console.log(h2);
console.log(p1);
console.log(div);

console.log(d.html(p1));
console.log(d.attr(div, 'class'));






