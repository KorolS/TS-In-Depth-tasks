export function sealed(param: string) {
    return function (constructor: Function): void {
        console.log(`Sealing the constructor ${param}`);
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log("Creating new instance");
        console.log(`Param ${target.name}`);
        this.age = 30;
    }
    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.printLibrarian = function () {
        console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`)
    }

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function (target: Function | Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        console.log(`writable`)
        descriptor.writable = isWritable;
        return descriptor;
    }

}

export function timeout(time: number) {
    return function (target: Function | Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const method = descriptor.value;
        descriptor.value = function (...params: any[]) {
            if (window.confirm("Continue?")) {
                setTimeout(() => {
                    method.apply(this, ...params)
                }, time)
            }
        }
        return descriptor
    }
}

export function logParameter(target: any, methodName: string, index: number) {
    const key = `${methodName}_decor_params_indexes`;
    if (Array.isArray(target[key])) {
        target[key].push(index)
    }
    else {
        target[key] = [index];
    }
}


export function logMethod(target: Function | Object, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const method = descriptor.value;
    descriptor.value = function (...params: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const indexes = target[key];
        if (Array.isArray(indexes)) {
            params.forEach((p, index) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${p} `)
                }
            })
        }
        return method.apply(this, params);
    }
    return descriptor
}
