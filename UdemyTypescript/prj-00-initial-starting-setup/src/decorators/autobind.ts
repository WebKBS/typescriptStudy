namespace App {
  // autobind decorator
  export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };

    return adjDescriptor;
    //tsconfig json에서 experimentalDecorators 를 활성화 해야함.
  }
}
