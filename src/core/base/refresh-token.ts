export function RefreshToken() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function(...args: any[]) {
      return (original.call(this, ...args)).catch((e: any) => {
        window.history.pushState(undefined, '', '/login');
        return e;
      });
    };

    return descriptor;
  };
}